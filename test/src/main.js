// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$http=axios
//全局引入mint-ui
import mint from 'mint-ui'
Vue.use(mint)
import 'mint-ui/lib/style.css'
import reset from './assets/css/icon.css'
import description from './components/description.vue'
import icon from './components/icon.vue'
import title from './components/title.vue'
import star from './components/star.vue'
Vue.component(description.name,description)
Vue.component(icon.name,icon)
Vue.component(title.name,title)
Vue.component(star.name,star)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
