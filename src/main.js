import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { far } from '@fortawesome/free-regular-svg-icons'

dom.watch()
library.add(fas, fab, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
