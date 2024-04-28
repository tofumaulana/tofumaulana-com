import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import tailwindConfig from '../tailwind.config';

createApp(App).use(router).mount('#app');
