import { createRouter, createWebHistory } from "vue-router";

const Home = () =>
    import ('../../src/views/home/Home.vue')
const Categroy = () =>
    import ('../../src/views/categroy/Categroy.vue')
const Cart = () =>
    import ('../../src/views/cart/Cart.vue')

const Profile = () =>
    import ('../../src/views/profile/Profile.vue')

const routes = [{
        path: '/',
        redirect: '/home' //redirect 重定向
    },

    {
        path: '/home',
        component: Home
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/categroy',
        component: Categroy
    },
    {
        path: '/profile',
        component: Profile
    }
]

const routerHistory = createWebHistory()

const routers = createRouter({
    history: routerHistory,
    routes,

})

export default routers