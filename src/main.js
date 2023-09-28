import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueGtm from '@gtm-support/vue-gtm';

const app = createApp(App);

app.use(VueGtm, {
   id: 'GTM-WBR3L4QD' ,
    vueRouter: router,
});

createApp(App).use(store).use(router).mount('#app')
