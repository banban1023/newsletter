import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/home'
import SuccessPage from '@/views/success'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: HomePage },
    { path: '/success', component: SuccessPage }
  ]
})

export default router
