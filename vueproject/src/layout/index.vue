<template>
    <el-container class="main-container">
      <Sidebar></Sidebar>
      <el-container>
        <el-header class="main-header">
          <Navbar></Navbar>
        </el-header>
        <el-main class="main-center"><AppMain></AppMain></el-main>
      </el-container>
    </el-container>
</template>
<script>
import { Navbar, Sidebar ,AppMain } from './components'

export default {
  components:{
    Navbar,
    Sidebar,
    AppMain
  },
   data() {
      return {

      }
   },
   created(){
   },
   computed: { //计算属性
      asideClass: function() { 
        return this.collapsed ? "main-aside-collapsed" : "main-aside";
      }
    },
   methods:{
   },
}
</script>
<style lang="scss" scoped>
 .main-container {
  width: auto;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
 
  .main-aside-collapsed {
    width: auto;
    height: 100%;
    background-color: #ffffff;
    margin: 0px;
  }
 
  .main-aside {
    width: 300px !important;
    height: 100%;
    background-color: #b5caec;
    margin: 0px;
  }
 
  .main-header,
  .main-center {
    padding: 0px;
    border-left: 2px solid #f4d1d1;
  }
</style>
