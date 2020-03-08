import { RECEIVE_ADRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS } from './mutaions-types.js'
export default {
    [RECEIVE_ADRESS](state, { adress }) {
        state.adress = adress
    },
    [RECEIVE_CATEGORYS](state, { categorys }) {
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state, { shops }) {
        state.shops = shops
    }
}