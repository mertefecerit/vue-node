import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import appHeader from './components/shared/app-header.vue';
import router from './router/index';
import store from './store';

const app = createApp(App);
app.component('app-header',appHeader);
app.use(router);
app.use(store);
app.mount('#app');
