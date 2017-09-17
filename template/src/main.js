import Vue from 'vue'
import router from './router'
{{#vueHead}}
import VueHead from 'vue-head'
{{/vueHead}}
import { VueExtendLayout, layout } from 'vue-extend-layout'

Vue.config.productionTip = false
{{#vueHead}}
Vue.use(VueHead)
{{/vueHead}}
Vue.use(VueExtendLayout)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...layout
})
