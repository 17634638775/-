import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import 'lib-flexible/flexible';
import {
  Lazyload
} from 'vant';

Vue.use(Lazyload);
Vue.prototype.$axios = axios
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')