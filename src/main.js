import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* element UI */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

/* base css */
import '@/assets/css/index.css';

import '@/assets/css/effects.css';



import VuePreview from 'vue-preview';

Vue.use(ElementUI);

Vue.use(VuePreview);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')