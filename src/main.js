// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './mock/mockServer.js'

import loading from './common/imgs/loading.gif'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
})
