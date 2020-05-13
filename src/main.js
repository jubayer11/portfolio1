import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import SvgFiller from 'vue-svg-filler'

Vue.component('svg-filler', SvgFiller)

window.EventBus = new Vue();

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
