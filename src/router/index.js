import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '*',
        name: '404',
        component: () =>
            import ('@/components/404'),
    },
    {
        path: '/',
        name: 'Home',
        redirect: '/',
        component: () =>
            import ('@/views/Home.vue'),
        children: [{
            path: '/',
            meta: {
                title: '雪后燕瑶池,人间第一枝',
            },
            components: {
                default: () =>
                    import ('@/views/index/index.vue'),

                top: () =>
                    import ('@/components/nav/header'),
            },
        }]
    },
]

const router = new VueRouter({
    routes
})

export default router