<template>
  <div>
    <el-aside width="collapse">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button @click="isC" :label="false" v-show="isCollapse"><i
            class="el-icon-s-unfold"></i></el-radio-button>
        <el-radio-button @click="isC" :label="true" v-show="!isCollapse"><i class="el-icon-s-fold"></i></el-radio-button>
      </el-radio-group>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse" router>
        <SideBarItem v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-aside>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import SideBarItem from './SideBarItem.vue'

export default {
  components: { SideBarItem },
  data() {
    return {
      isCollapse: false,
    };
  },
  mounted() {
    console.log('4.展示路由信息,动态渲染菜单' + this.$store.getters.menuData);
  },
  computed: {
    //获取需要展示的路由
    routes() {
      return this.$store.getters.menuData
    }
  },
  methods: {
    isC() {
      this.isCollapse = !this.isCollapse
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
