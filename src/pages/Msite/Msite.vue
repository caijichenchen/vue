<template>
  <div>首页
    <p @click="goTest">测试</p>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {

    }
  },
  mounted(){

  },
  methods:{
    goTest(){
      let newpage = this.$router.resolve({ 
            name: 'profile',
            query:{
                objectType:1,
                infoId:id
            }   
      })  
      window.open(newpage.href, '_blank');
    }
  },
  computed:{

  },
  components:{

  },
}
</script>

<style scoped>
</style>
