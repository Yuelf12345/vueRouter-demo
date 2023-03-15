<template>
    <div class="navbar"> 
         <div class="right-menu">
            <el-dropdown class="avatar-container" trigger="click">
               <div class="avatar-wrapper">
                  <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
                  <i class="el-icon-caret-bottom" />
               </div>
               <el-dropdown-menu slot="dropdown" class="user-dropdown">
                  <router-link to="/">
                     <el-dropdown-item icon="el-icon-s-home">首页</el-dropdown-item>
                  </router-link>
                     <el-dropdown-item icon="el-icon-coffee">菜单一</el-dropdown-item>
                     <el-dropdown-item icon="el-icon-ice-tea">菜单二</el-dropdown-item>
                     <el-dropdown-item icon="el-icon-switch-button" @click.native="logout">退出</el-dropdown-item>
               </el-dropdown-menu>
            </el-dropdown>
         </div>
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
      'avatar'
    ])
   },
   mounted(){
    console.log(this.$store.state.user.avatar);
   },
   methods:{
      async logout() {
        await this.$store.dispatch('user/logout')
        this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      }
   },
}
</script>
<style lang="scss" scoped>
// 去router-link下划线
      a{
         text-decoration: none;
      }
      .router-link-active {
         text-decoration: none;
      }
   .navbar {
      height: 50px;
      overflow: hidden;
      position: relative;
      background: #fff;
      box-shadow: 0 1px 4px rgba(0,21,41,.08);


//   .hamburger-container {
//     line-height: 46px;
//     height: 100%;
//     float: left;
//     cursor: pointer;
//     transition: background .3s;
//     -webkit-tap-highlight-color:transparent;

//     &:hover {
//       background: rgba(0, 0, 0, .025)
//     }
//   }

//   .breadcrumb-container {
//     float: left;
//   }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
