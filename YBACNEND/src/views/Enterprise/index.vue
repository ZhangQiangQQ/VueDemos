<template>
  <div class="enterprise">
    <el-container class="el-container">
      <el-aside width="177px">
        <el-menu
          :router="true"
          @select="toggleActivedMenu"
          :default-active="activedMenu"
          class="el-menu">
          <el-menu-item :index="route.path" v-for="(route, index) in subRoutes" :key="index">
            <span class="icon" v-html="route.icon" v-if="route.icon"></span>
            <i class="el-icon-menu" v-else></i>
            <span slot="title">{{ route.label }}</span>
          </el-menu-item>
          </el-menu>
      </el-aside>
      <el-main>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>您的位置：企业中心</el-breadcrumb-item>
          <template v-for="(route, index) in subRoutes">
            <el-breadcrumb-item :key="index" :to="{ path: route.path }" v-if="currentRoute === route.path">{{ route.label }}</el-breadcrumb-item>
          </template>
        </el-breadcrumb>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CustomizedFooter from 'components/customized-footer.vue';
import CustomizedNav from 'components/customized-nav.vue';

declare type routeType = {
  path: string,
  label: string,
  icon?: string,
};

const subRoutes: routeType[] = [{
  path: '/enterprise/info',
  label: '信息管理',
  icon: '&#xe60a;',
}, {
  path: '/enterprise/user',
  label: '用户管理',
  icon: '&#xe612;',
}, /* {
  path: '/enterprise/bill',
  label: '企业账单',
  icon: '&#xe60b;',
} */];

@Component({
  components: {
    CustomizedFooter,
    CustomizedNav,
  },
})
export default class Enterprise extends Vue {
  currentRoute: string = '';

  activedMenu: string = '/enterprise/info';

  subRoutes = subRoutes;

  syncRoute(source: string) {
    this.currentRoute = source;
    this.activedMenu = this.currentRoute;
  }

  mounted() {
    // init state;
    this.syncRoute(this.$route.path);
  }

  updated() {
    // update state;
    this.syncRoute(this.$route.path);
  }

  toggleActivedMenu(e: string) {
    this.syncRoute(e);
  }
}
</script>

<style lang="stylus" scoped>
  .enterprise
    display flex
    flex 1
    .el-container
      flex 1
      aside
        overflow hidden
        background-color white
        margin-right 20px
        ul
          text-align left
      main
        background-color white
</style>

<style lang="stylus">
  .enterprise
    li.el-menu-item.is-active
      border-left solid 3px #1f368d
      background-color #d6e6ff
    .el-menu
      border none
</style>
