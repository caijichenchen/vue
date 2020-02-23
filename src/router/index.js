import Vue from 'vue'
import Router from 'vue-router'

import Proflie from '../pages/Profile/Profile.vue'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/msite'
        },
        {
            path: '/msite',
            name: 'Msite',
            component: Msite
        },
        {
            path: '/order',
            name: 'Order',
            component: Order
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        },
        {
            path: '/proflie',
            name: 'Proflie',
            component: Proflie
        },
    ]
})