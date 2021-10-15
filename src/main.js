import Vue from 'vue'
import App from './App.vue'
import { xinButton } from 'xinx'
Vue.use(xinButton)
// Vue.use(xinInput)
console.log('xin: ', xinButton);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
