<template>
  <div id="app">
    <router-view/>
    <footerTabBar v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import footerTabBar from './components/footerTabBar/footerTabBar.vue'
import {reqFoodCategorys} from './api/index.js'
export default {
  name: 'App',
  mounted(){
    reqFoodCategorys().then(res=>{
      // console.log(res)
    })
  },
  components:{
    footerTabBar
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
