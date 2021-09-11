import Vue from 'vue'
import VueRouter from 'vue-router'
import Pages1 from './components/pages1.vue'
import Pages2 from './components/Pages2.vue'
import Pages3 from './components/Pages3.vue'
import Pages4 from './components/Pages4.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Pages1,
    },
    {
        path: '/pages2',
        component: Pages2,

    },
    {
        path: '/pages3',
        component: Pages3,

    },
    {
        path: '/pages4',
        component: Pages4,

    },

]

const router = new VueRouter({
    routes,
    // mode: "history",
})

export default router
