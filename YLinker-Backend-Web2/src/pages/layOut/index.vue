<template>
  <div class="layOut">
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group> -->
    <!-- <i @click="isCollapse ? true : false" class="el-icon-s-fold"> </i> -->

<el-menu background-color="#00152A" 
      text-color="#fff" default-active="2-2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">数据概览</span>
    </template>
  </el-submenu>
  <el-submenu index="2">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">用户管理</span>
    </template>
  <el-menu-item-group>
    <router-link class="route-rest" to="/home/CUserManagement">
        <el-menu-item index="2-1">
          C端用户管理
          </el-menu-item>
        </router-link>
         <router-link class="route-rest" to="/home/corpUserManagement">
        <el-menu-item index="2-2">
         企业用户管理
        </el-menu-item>
        </router-link>
        <router-link class="route-rest" to="/home/jobManagement">
        <el-menu-item index="2-3">
          岗位管理
          </el-menu-item>
          </router-link>
    </el-menu-item-group>
  </el-submenu>
</el-menu>
  </div>
</template>

<script>
export default {
  name: 'layOut',
  props: {
    msg: String
  },
      data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .layOut{
    height: 100%;
  }
  .layOut ul{
    height: 100%;
  }
  .el-menu-item.is-active {
   background-color: #1890ff !important;
   color: #fff !important;
}
.route-rest{
  color: #fff;
}
</style>
