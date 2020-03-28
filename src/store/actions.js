import {
    RECEIVE_ADRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutaions-types'

import {
    reqAddress,
    reqFoodCategorys,
    reqShops
} from '@/api'

export default {
    //异步获取位置信息
    async getAddress({ commit, state }) {
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
            //提交一个mutations
        if (result.code === 0) {
            const address = result.data
            commit(RECEIVE_ADRESS, { address })
        }
    },
    //异步获取商品分类信息
    async getCategorys({ commit, state }) {
        const result = await reqFoodCategorys()
        if (result.code === 0) {
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, { categorys })
        }
    },
    //异步获取商家列表信息
    async getShops({ commit, state }) {
        const result = await reqShops()
        if (result.code == 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS, { shops })
        }
    }
}