import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
