import { createApp } from 'vue';
import App from './App.vue';
import createStore from './store';
import 'bulma/css/bulma.css';

const store = createStore();

const app = createApp(App);
app.use(store);
app.mount('#app');