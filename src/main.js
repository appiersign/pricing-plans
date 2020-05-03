import Vue from 'vue'
import App from './App.vue'
import { makeServer } from "./api/server"
import VueRouter from "vue-router";
import Pricing from "./pages/Pricing";
import Subscribe from "./pages/Subscribe";


Vue.config.productionTip = false

Vue.use(VueRouter);

if (process.env.NODE_ENV === "development") {
  makeServer()
}

const routes = [
  { path: '/', component: Pricing },
  { path: '/subscribe', component: Subscribe }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
