<template>
  <div id="app">
    <router-view/>
    <footerTabBar />
  </div>
</template>

<script>
import footerTabBar from './components/footerTabBar/footerTabBar.vue'
export default {
  name: 'App',
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
