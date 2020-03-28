<template>
  <div id="app">
    <router-view/>
    <footerTabBar v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import footerTabBar from './components/footerTabBar/footerTabBar.vue'
export default {
  name: 'App',
  components:{
    footerTabBar
  },
  mounted(){
    this.getAddress()
  },
  methods:{
    ...mapActions(['getAddress'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
