import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* element UI */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';


import VuePreview from 'vue-preview';

import mavonEditor from 'mavon-editor'

import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)

/* base css */
import '@/assets/css/index.css';

import '@/assets/css/effects.css';


import dayjs from 'dayjs'
Vue.prototype.dayjs = dayjs;

Vue.use(ElementUI);

Vue.use(VuePreview);


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')