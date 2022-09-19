import axios from '@/plugins/axios'
import {i18n} from '@/plugins/i18n'
import apexchart from '@/plugins/apexchart'
import googleMaps from '@/plugins/googleMaps'
import Toast from '@/plugins/toastification'
import router from './Routes'
import store from './store/index'
import VueAxios from "vue-axios";
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'


Vue.use(VueAxios,axios);
axios.defaults.baseURL='http://68.183.26.222:3070/'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  i18n,
  googleMaps,
  axios,
  apexchart,
  Toast,
  render: h => h(App), store
}).$mount('#app')
