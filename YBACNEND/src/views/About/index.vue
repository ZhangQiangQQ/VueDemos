<template>
  <div class="about">
    <el-container class="occupation">
      <el-aside width="177px">
        <el-menu
          @select="toggleActivedMenu"
          :router="true"
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
          <el-breadcrumb-item>您的位置：关于我们</el-breadcrumb-item>
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
  icon?: string,
  path: string,
  label: string
};

const subRoutes: routeType[] = [{
  icon: '&#xe61c;',
  path: '/about/intro',
  label: '公司介绍',
}, {
  icon: '&#xe61b;',
  path: '/about/contact',
  label: '联系我们',
}];

@Component({
  components: {
    CustomizedFooter,
    CustomizedNav,
  },
})
export default class Contact extends Vue {
  currentRoute: string = '';

  activedMenu: string = '/about/intro';

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
  .about
    display flex
    flex 1
    .el-container
      flex 1
      aside
        background-color white
        margin-right 20px
        ul
          text-align left
      main
        background-color white
        padding 30px 40px
</style>

<style lang="stylus">
  .about
    li.el-menu-item.is-active
      border-left solid 3px #1f368d
      background-color #D6E6FF
    .el-menu
      border none
</style>
