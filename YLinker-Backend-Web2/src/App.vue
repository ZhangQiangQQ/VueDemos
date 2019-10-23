<template>
  <div id="app">
   <el-container class="container">
    <el-aside class="nav">
      <layOut></layOut>
    </el-aside>
    <el-main><router-view></router-view></el-main>
  </el-container>
  </div>
</template>

<script>

import layOut from './pages/layOut'
export default {
  name: 'app',
  components:{
    layOut
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.nav{
  width: auto !important;
  height: 100%;
}
.container{
  height: 100%;
}
</style>
