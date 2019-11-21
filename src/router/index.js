import Vue from 'vue'
import VueRouter from 'vue-router'
import Calendar from '@/components/MainContent.vue'
import Products from '@/components/ProductComponent.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Calendar },
    { path: '/products', component: Products },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router