import axios from 'axios'

const state = {
  myData: [],
  loading: false,
  cache: {},
  totalPage: 0
}

const mutations = {
    SET_DATA(state, data) {
        state.myData = data
    },
    LOADING(state, data) {
        state.loading = data
    },
    ADD_TO_CACHE(state, { key, data }) {
        const cacheDuration = 5 * 60 * 1000; // 5 minutes in milliseconds
        state.cache[key] = {
          data,
          expiry: Date.now() + cacheDuration,
        };
        // Set a timeout to remove the cached data after 5 minutes
        setTimeout(() => {
          delete state.cache[key];
        }, cacheDuration);
    },
}

const actions = {
    async fetchData({ commit, state }, payload) {
        commit('LOADING', true)
        const query = typeof payload.q === 'string'? payload.q.toLowerCase() : payload.q.toString();
        const cachedData = state.cache[query];
        if (cachedData && cachedData.expiry > Date.now()) {
            commit('SET_DATA', cachedData.data);
            commit('LOADING', false);
            return;
        }

        await axios
        .get('https://api.github.com/search/repositories', {
            params: payload
        })
        .then((res) => {
            if (res.data.items.length) {
                commit('SET_DATA', res.data.items)
                commit('ADD_TO_CACHE', { key: query, data: res.data.items })
            }
            console.log(state.myData)
        })
        .catch((error) => {
            if (error.response.status === 400) {
                console.log('error')
            }
        })
        .finally(() => commit('LOADING', false))
    },
}

const getters = {
  fetchedData: (state) => (state.myData.length > 0 ? [...new Set(state.myData)] : []),
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
