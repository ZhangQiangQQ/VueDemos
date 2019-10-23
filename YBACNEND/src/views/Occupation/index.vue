<template>
  <div class="occupation">
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
          <el-breadcrumb-item>您的位置：职位管理</el-breadcrumb-item>
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
  path: '/occupation/info',
  label: '职位总览',
  icon: '&#xe61f;',
}, {
  path: '/occupation/add',
  label: '新增职位',
  icon: '&#xe611;',
}, /* {
  path: '/occupation/draft',
  label: '草稿箱',
  icon: '&#xe620;'
}, */ {
  path: '/occupation/recycle',
  label: '回收站',
  icon: '&#xe621;',
}];

@Component({
  components: {
    CustomizedFooter,
    CustomizedNav,
  },
})
export default class Enterprise extends Vue {
  currentRoute: string = '';

  activedMenu: string = '/occupation/info';

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
        height 100%

</style>

<style lang="stylus">
  .occupation
    li.el-menu-item.is-active
      border-left solid 3px #1f368d
      background-color #D6E6FF
    .el-menu
      border none
</style>
