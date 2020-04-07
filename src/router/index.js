import Vue from 'vue'
import Router from 'vue-router'

import Profile from '../pages/Profile/Profile.vue'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Login from '../pages/Login/Login.vue'

import Shop from '../pages/Shops/Shops.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/msite'
        },
        {
            path: '/msite',
            name: 'Msite',
            component: Msite,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/order',
            name: 'Order',
            component: Order,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/search',
            name: 'Search',
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/shop',
            component: Shop,
            children: (pre => [{
                    name: `${pre}Ratings`,
                    path: 'ratings',
                    component: () =>import ('@/pages/Shops/ShopRatings/ShopRatings')
                },
                {
                    name: `${pre}Goods`,
                    path: 'goods',
                    component: () =>import ('@/pages/Shops/ShopGoods/ShopGoods')
                },
                {
                    name: `${pre}Info`,
                    path: 'info',
                    component: () =>import ('@/pages/Shops/ShopInfo/ShopInfo')
                },
                {
                    path: '',
                    redirect: 'goods'
                }
            ])('Shops')
        }
    ]
})
