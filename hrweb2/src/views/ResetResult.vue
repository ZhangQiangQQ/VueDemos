<template>
  <div class="reset-result-container">
    <customized-nav class="nav" :ctlHideMenus="true" />
    <div class="body">
      <div class="form">
        <i class="el-icon-success"></i>
        <p>密码重置成功，请重新登录</p>
        <el-button class="btn" type="primary" @click="gotoLoginUI">重新登录</el-button>
      </div>
    </div>
    <customized-footer :showSimple="true" />
  </div>
</template>

<script>
import CustomizedFooter from 'components/customized-footer.vue';
import CustomizedNav from 'components/customized-nav.vue';

export default {
  name: 'reset-result',
  components: {
    CustomizedFooter,
    CustomizedNav,
  },
  data() {
    return {
     
    }
  },
  methods: {
    gotoLoginUI() {
      this.$router.push({ path: 'login' });
    },
  }
}
</script>

<style lang="stylus" scoped>
  .reset-result-container
    height 100%
    display flex
    flex-direction column
    .nav
      position relative
    .body
      display flex
      align-items center
      justify-content center
      flex 1
      position relative
      background url('../assets/images/background.jpg')
      background-size cover
      .form
        padding 40px
        width 470px
        height 260px
        background-color white
        border-radius 3px
        display flex
        flex-direction column
        justify-content space-around
        align-items center
        i
          color #7ED321
          font-size 60px
        p
          font-size 16px
        .btn
          width 270px
        
</style>
