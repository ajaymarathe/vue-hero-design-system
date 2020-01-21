import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import SlateBlue from './plugins/slateBlue';


Vue.use(SlateBlue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
