<template>
  <div class="occupation">
    <el-container class="el-container">
      <el-aside width="177px">
        <el-menu
          :router="true"
          @select="toggleActivedMenu"
          :default-active="activedMenu"
          class="el-menu">
          <template v-for="(route, index) in subRoutes">
            <template v-if="route.isMenu">
              <el-menu-item :index="route.path" :key="index" v-if="!route.children">
                <span class="icon" v-html="route.icon" v-if="route.icon"></span>
                <i class="el-icon-menu" v-else></i>
                <span slot="title">{{ route.label }}</span>
              </el-menu-item>
              <el-submenu :index="route.label" :key="index" v-else>
                <template slot="title">
                  <span class="icon" v-html="route.icon" v-if="route.icon"></span>
                  <i class="el-icon-menu" v-else></i>
                  <span>{{ route.label }}</span>
                </template>
                <el-menu-item-group>
                  <template v-for="(route, index) in route.children">
                    <el-menu-item :index="`${route.path}`" :key="index">{{ route.label }}</el-menu-item>
                  </template>
                </el-menu-item-group>
              </el-submenu>
            </template>
          </template>
          </el-menu>
      </el-aside>
      <el-main>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>您的位置：简历管理</el-breadcrumb-item>
          <template v-for="(route, index) in subRoutes">
            <el-breadcrumb-item :key="index" :to="{ path: route.path }" v-if="currentRoute.includes(route.path)">{{ route.label }}</el-breadcrumb-item>
            <template v-for="(subRoute, subIndex) in route.children">
              <el-breadcrumb-item :key="index + subIndex" :to="{ path: subRoute.path }" v-if="currentRoute === subRoute.path">{{ subRoute.label }}</el-breadcrumb-item>
            </template>
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

declare type routeTypeAdvanced = {
  path?: any,
  label: string,
  icon?: string,
  isMenu?: boolean,
  children?: {
    path: string,
    label: string,
    icon?: string,
  }[],
};

const subRoutes: routeTypeAdvanced[] = [{
  path: '/resume/info',
  label: '简历总览',
  icon: '&#xe61d;',
  isMenu: true,
}, /* {
  path: '/resume/enterprise',
  label: '企业人才库',
  icon: '&#xe61e;',
  isMenu: true
}, {
  label: '平台人才库',
  icon: '&#xe609;',
  path: '/resume/platform',
  isMenu: true,
  children: [{
    path: '/resume/platform',
    label: '人才列表',
  }, {
    path: '/resume/platform/collection',
    label: '收藏夹',
  }, {
    path: '/resume/platform/downloaded',
    label: '已下载简历',
  }]
}, {
  path: '/resume/blacklist',
  label: '黑名单',
  icon: '&#xe604;',
  isMenu: true
}, */];

@Component({
  components: {
    CustomizedFooter,
    CustomizedNav,
  },
})
export default class Enterprise extends Vue {
  currentRoute: string = '';

  activedMenu: string = '/resume/info';

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
  .occupation
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
        width 1083px
</style>

<style lang="stylus">
  .occupation
    li.el-menu-item.is-active
      border-left solid 3px #1f368d
      background-color #D6E6FF
    .el-menu
      border none
</style>
