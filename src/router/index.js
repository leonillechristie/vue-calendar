import Vue from 'vue'
import VueRouter from 'vue-router'
import Calendar from '@/components/MainContent.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Calendar },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router