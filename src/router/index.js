import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '*',
    name: '404',
    component: () =>
        import('@/components/404'),
},
{
    path: '/',
    name: 'Home',
    type: '/',
    redirect: '/',
    component: () =>
        import('@/views/Home.vue'),
    children: [{
        path: '/',
        meta: {
            title: '雪后燕瑶池,人间第一枝',
        },
        components: {
            default: () =>
                import('@/views/index/index.vue'),

            top: () =>
                import('@/components/nav/header'),
        },
    }]
},
{
    path: '/notes',
    name: 'notes',
    type: '/notes',
    redirect: '/notes',
    component: () =>
        import('@/views/Home.vue'),
    children: [{
        path: '/notes',
        meta: {
            title: '雪后燕瑶池,人间第一枝',
        },
        components: {
            default: () =>
                import('@/views/notes/index.vue'),

            top: () =>
                import('@/components/nav/header'),
        },
    }]
},
{
    path: '/resume',
    name: 'resume',
    type: '/resume',
    redirect: '/resume',
    component: () =>
        import('@/views/Home.vue'),
    children: [{
        path: '/resume',
        meta: {
            title: '雪后燕瑶池,人间第一枝',
        },
        components: {
            default: () =>
                import('@/views/resume/index.vue'),

            top: () =>
                import('@/components/nav/header'),
        },
    }]
},
{
    path: '/detail',
    name: 'detail',
    type: '/detail',
    redirect: '/detail',
    component: () =>
        import('@/views/Home.vue'),
    children: [{
        path: '/detail',
        meta: {
            title: '文章内容',
        },
        components: {
            default: () =>
                import('@/views/notes/detail.vue'),

            top: () =>
                import('@/components/nav/header'),
        },
    }]
},
{
    path: '/essays',
    name: 'essays',
    type: '/essays',
    redirect: '/essays',
    component: () =>
        import('@/views/Home.vue'),
    children: [{
        path: '/essays',
        meta: {
            title: '雪后燕瑶池,人间第一枝',
        },
        components: {
            default: () =>
                import('@/views/essays/index.vue'),

            top: () =>
                import('@/components/nav/header'),
        },
    }]
},
{
    path: '/guestbook',
    name: 'guestbook',
    type: '/guestbook',
    redirect: '/guestbook',
    component: () =>
        import('@/views/Home.vue'),
    children: [{
        path: '/guestbook',
        meta: {
            title: '雪后燕瑶池,人间第一枝',
        },
        components: {
            default: () =>
                import('@/views/guestbook/index.vue'),

            top: () =>
                import('@/components/nav/header'),
        },
    }]
},
{
    path: '/editor',
    name: 'editor',
    type: '/editor',
    redirect: '/editor',
    component: () =>
        import('@/views/Home.vue'),
    children: [{
        path: '/editor',
        meta: {
            title: '雪后燕瑶池,人间第一枝',
        },
        components: {
            default: () =>
                import('@/views/editor/index.vue'),

            top: () =>
                import('@/components/nav/header'),
        },
    }]
},
]

const router = new VueRouter({
    routes
})

router.afterEach(() => {
    window.scrollTo(0, 0)
})
export default router