<template>
    <div> 
        <img src="@/assets/404_images/404.png" alt="">
        当前角色可访问路由：{{ menuData }}
    </div>
</template>
<script>

import { mapGetters } from 'vuex'

export default {
   data() {
      return {
      }
   },
   created(){
   },
   computed:{
    ...mapGetters([
      'menuData'
    ])
   },
   methods:{
   },
}
</script>
<style lang="scss" scoped>
 
</style>
