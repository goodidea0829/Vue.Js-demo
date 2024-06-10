<template>
  <div class="main mb-5">
    <h1>GitHub Repositories</h1>
    <div class="column is-three-quarters is-flex is-justify-content-space-center my-5 mx-auto">
      <div class="field is-grouped has-text-danger-light is-align-items-center is-two-fifths my-5 mx-auto">
        <p class="control is-expanded">
          <input class="input has-background-white has-text-black" type="text" placeholder="Input Query" v-model="loadQuery" @keyup.enter="loadRepos(loadQuery)">
        </p>
        <p class="control">
          <button class="button is-info" @click="loadRepos(loadQuery)">Load Repos</button>
        </p>
      </div>
      <div class="column is-two-fifths field is-grouped is-flex is-align-items-center is-justify-content-center has-text-danger-light my-5 mx-auto">
        <p class="control is-expanded">
          <input class="input has-background-white has-text-black" type="text" placeholder="Find a repository" v-model="searchQuery" @keyup.enter="filter(searchQuery)">
        </p>
        <p class="control">
          <button class="button is-primary" @click="filter(searchQuery)">
            Search
          </button>
        </p>
      </div>
    </div>
    <QuestionField
      v-for="(question, index) in paginatedItems"
      :key="question.id"
      :title="question.name"
      :info="question"
      :index="index + (currentPage - 1) * itemsPerPage"
    />
    <div class="column is-three-quarters hero is-medium is-flex is-justify-content-space-center m-auto " v-if="filteredData.length === 0" style=" border: 1px dashed">
      <p class="is-size-5">No data</p>
    </div>
    <div class="column is-three-quarters is-flex is-align-items-center is-justify-content-center my-5 mx-auto">
      <div class="is-flex is-align-items-center is-justify-content-center">
        <label for="itemsPerPage">Items Per Page:</label>
        <input class="input has-background-white has-text-black my-0 mx-4 per-page" type="number" id="itemsPerPage" v-model="itemsPerPageInput" @change="changeItemsPerPage" />
      </div>
      <button class="button is-link is-rounded mr-3" @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span class="mr-3">Page {{ currentPage }} of {{ totalPages ? totalPages : 0 }}</span>
      <button class="button is-link is-rounded" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import QuestionField from "../components/QuestionField";
import "../components/questions.css";

export default {
  data() {
    return {
      searchQuery: '',
      loadQuery: 'python',
      fetchedData: [], // Your fetched data array
      filteredData: [],
      currentPage: 1,
      itemsPerPage: 10,
      itemsPerPageInput: 10
    };
  },

  computed: {
    ...mapGetters('video', ['fetchedData']),
    ...mapState('video', ['myData']),
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredData.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredData.length / this.itemsPerPage);
    }
  },
  components: {
    QuestionField,
  },
  methods: {
    ...mapActions('video', ['fetchData']),
    async loadRepos(param) {
      if (!param) {
        param = 'python'
      }
      const payload = {
        q: param
      }
      await this.fetchData(payload);
      this.filteredData = this.myData
    },
    filter(search_value) {
      const query = typeof search_value === 'string' ? search_value.toLowerCase() : search_value;
      const temp =  this.myData.filter(question => {
        return Object.values(question).some(value => {
          if (typeof value === 'string' || typeof value === 'number') {
            if (typeof value === 'string')
              return value.toLowerCase().includes(query);
            else if (typeof value === 'number')
              return value.toString().includes(query);
          }
          return false;
        });
      });
      this.filteredData = temp
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    changeItemsPerPage() {
      this.itemsPerPage = this.itemsPerPageInput;
      this.currentPage = 1;
    }
  }
};
</script>

<style scoped>
.input::placeholder {
  color: black;
  opacity: 0.6;
}
.per-page {
  width: 80px;
}
</style>