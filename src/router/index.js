// Instead of using web.php router, using Vue router in order to create SPA(Single Page Application)
import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '@/views/dashboards/ProductComponent.vue'
import Calendar from '@/views/dashboards/CalendarComponent.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/products', component: Products },
    { path: '/', component: Calendar },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router