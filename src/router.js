import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home"
import About from "@/views/About"
import Error from "@/views/Error"
import CoinDetail from "@/views/CoinDetail"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home Page - The Exchange"
      }
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        title: "About - The Exchange"
      }
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail,
      meta: {
        title: "Details - The Exchange"
      }
    },
    {
      path: "*",
      name: "Error",
      component: Error,
      meta: {
        title: "Error - The Exchange"
      }
    }
  ]
})
