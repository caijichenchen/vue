import Vue from 'vue'
import {
  RECEIVE_ADRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
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
    },

    [RECEIVE_INFO](state, {info}) {
      state.info = info
    },

    [RECEIVE_RATINGS](state, {ratings}) {
      state.ratings = ratings
    },

    [RECEIVE_GOODS](state, {goods}) {
      state.goods = goods
    },

    [INCREMENT_FOOD_COUNT](state, {food}) {
      if(!food.count) { // 第一次增加
        // food.count = 1  // 新增属性(没有数据绑定)
        /*
        对象
        属性名
        属性值
         */
        Vue.set(food, 'count', 1) // 让新增的属性也有数据绑定
        // 将food添加到cartFoods中
        state.cartFoods.push(food)
      } else {
        food.count++
      }
    },
    [DECREMENT_FOOD_COUNT](state, {food}) {
      if(food.count) {// 只有有值才去减
        food.count--
        if(food.count===0) {
          // 将food从cartFoods中移除
          state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
        }
      }
    },
	[CLEAR_CART](state){
    state.cartFoods.forEach(x=>x.count = 0)
		state.cartFoods = []
	}
}
