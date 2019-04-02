// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueMoment from 'vue-moment'
import VueMaterial from 'vue-material'
import store from './store'

Vue.use(VueMaterial);
Vue.use(VueResource);
Vue.use(VueMoment);
Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
