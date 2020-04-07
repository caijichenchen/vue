import {
    RECEIVE_ADRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART
} from './mutaions-types'

import {
    reqAddress,
    reqFoodCategorys,
    reqShops,
    reqShopRatings,
    reqShopGoods,
    reqShopInfo,
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
    },
    //异步获取商家信息
    async getShopInfo({commit}){
      const result = await reqShopInfo()
      if (result.code === 0) {
        const info = result.data
        commit(RECEIVE_INFO, {info})
      }
    },
    //异步获取商家评论
    async getShopRatings({commit},callback){
      const result = await reqShopRatings()
      if(result.code===0){
        const ratings = result.data
        commit(RECEIVE_RATINGS,{ratings})
        callback && callback()
      }
    },
    //异步获取商家商品信息
    async getShopGoods({commit},callback){
      const result = await reqShopGoods()
      if(result.code === 0){
        const goods = result.data
        commit(RECEIVE_GOODS,{goods})
        //获取数据成功更改了,执行回调通知组件
        callback && callback()
      }
    },

    // 同步更新food中的count值
    updateFoodCount({commit}, {isAdd, food}) {
      if (isAdd) {
        commit(INCREMENT_FOOD_COUNT, {food})
      } else {
        commit(DECREMENT_FOOD_COUNT, {food})
      }
    },
    clearCart({commit}){
      commit(CLEAR_CART)
    }
}
