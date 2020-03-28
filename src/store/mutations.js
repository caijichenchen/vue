import {
    RECEIVE_ADRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutaions-types'

export default {
    [RECEIVE_ADRESS](state, { address }) { //获取当前位置信息
        state.address = address
    },
    [RECEIVE_CATEGORYS](state, { categorys }) { //分类信息
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state, { shops }) { //商品信息
        state.shops = shops
    }
}