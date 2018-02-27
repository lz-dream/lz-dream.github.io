// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.prototype.$ajax = axios;

Vue.use(iView);
Vue.use(VueRouter);
// Vue.use(VueResource);
Vue.use(VueAxios, axios);

import Home from './components/Home'
import HelloWorld from './components/HelloWorld'

const router = new VueRouter({
  routes: [
    {path: "/", component: Home},
    {path: "/helloworld", component: HelloWorld}
  ],
  mode: "history"
});
/* eslint-disable no-new */
new Vue({
  router,
  iView,
  el: '#app',
  components: {App},
  template: '<App/>'
})

