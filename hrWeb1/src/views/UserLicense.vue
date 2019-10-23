<template>
  <div class="user-license-container">
    <customized-nav class="nav" :ctlHideMenus="true" />
    <div class="body">
      <div class="form">
        <h3>《用户协议及隐私政策》</h3>
        <div class="content">
          <p>重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重</p>
          <p>重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重</p>
          <p>重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重</p>
          <p>重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重重中之重</p>
          
        </div>
        <el-button class="btn" type="primary" @click="close">关闭</el-button>
      </div>
    </div>
    <customized-footer :showSimple="true" />
  </div>
</template>

<script>
import CustomizedFooter from 'components/customized-footer.vue';
import CustomizedNav from 'components/customized-nav.vue';

export default {
  name: 'user-license',
  components: {
    CustomizedFooter,
    CustomizedNav,
  },
  data() {
    return {
     
    }
  },
  methods: {
    close() {
      window.close();
    },
  }
}
</script>

<style lang="stylus" scoped>
  .user-license-container
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
        width 680px
        height 660px
        background-color white
        border-radius 3px
        display flex
        flex-direction column
        justify-content space-between
        align-items center
        h3
          font-size 18px
        .content
          overflow-y scroll
          flex 1
          p
            text-indent 2em
            text-align left
            font-size 12px
        .btn
          width 270px
        
</style>
