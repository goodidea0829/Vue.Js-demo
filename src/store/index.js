import { createStore } from 'vuex'
import video from './video'

export default function () {
  return createStore({
    modules: {
      video,
    },
  })
}
