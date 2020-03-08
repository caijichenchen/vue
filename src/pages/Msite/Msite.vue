<template>
  <div class="msite">
    <header-top :title="'首页'">
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" to="/search">
        <span class="header_login_text" >
          登录|注册
        </span>
        <!-- <span class="header_login_text" v-else>
           <i class="iconfont icon-ren"></i>
        </span> -->
      </router-link>
    </header-top>
  </div>
</template>

<script type="text/javascript">
  import headerTop from '@/components/HeaderTop/HeaderTop.vue'
  import {reqFoodCategorys} from '@/api/index.js'
  // import Swiper from 'swiper'
  // import 'swiper/dist/css/swiper.min.css'
  export default {
    data() {
      return {
        categorys:[]
      }
    },
    mounted(){
      reqFoodCategorys().then(res=>{
        console.log(res)
        this.categorys = res.data
      })
      console.log(this.categorysArr)
    },
    computed:{
      categorysArr(){
        let arr = []
        let minArr = []
        this.categorys.forEach(item=>{
          if(minArr.length == 8){
            minArr = []
          }
          if(minArr.length == 0){
            arr.push(minArr)
          }
          minArr.push(item)
        })
        return arr
      }
    },
    components:{
      headerTop
    },
    watch:{
      categorysArr(val){
        console.log(val)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .miste-content-wrapper
      position fixed
      top: 45px
      bottom: 46px
      width: 100%
      .msite_nav
        bottom-border-1px(#e4e4e4)
        margin-top 15px
        height 200px
        background #fff
        .swiper-container
          width 100%
          height 100%
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              display flex
              justify-content center
              align-items flex-start
              flex-wrap wrap
              .link_to_food
                width 25%
                .food_container
                  display block
                  width 100%
                  text-align center
                  padding-bottom 10px
                  font-size 0
                  img
                    display inline-block
                    width 50px
                    height 50px
                span
                  display block
                  width 100%
                  text-align center
                  font-size 13px
                  color #666
          .swiper-pagination
            >span.swiper-pagination-bullet-active
              background #02a774
      .msite_shop_list
        top-border-1px(#e4e4e4)
        margin-top 10px
        background #fff
        .shop_header
          padding 10px 10px 0
          .shop_icon
            margin-left 5px
            color #999
          .shop_header_title
            color #999
            font-size 14px
            line-height 20px
</style>
