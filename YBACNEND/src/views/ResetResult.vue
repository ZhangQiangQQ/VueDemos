<template>
  <div class="reset-result-container">
    <div class="form">
      <i class="el-icon-success"></i>
      <p>密码重置成功，请重新登录</p>
      <el-button class="btn main" type="primary" @click="gotoLoginUI">重新登录</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CustomizedFooter from 'components/customized-footer.vue';
import CustomizedNav from 'components/customized-nav.vue';

@Component({
  components: {
    CustomizedFooter,
    CustomizedNav,
  },
})
export default class ResetResult extends Vue {
  gotoLoginUI() {
    this.$router.push({ path: 'login' });
  };
}
</script>

<style lang="stylus" scoped>
  .reset-result-container
    flex 1
    display flex
    align-items center
    justify-content center
    .form
      padding 80px
      width 437px
      height 340px
      background-color white
      box-sizing border-box
      border-radius 3px
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      i
        color #7ED321
        font-size 60px
      p
        font-size 19px
      .btn
        width 270px

</style>
