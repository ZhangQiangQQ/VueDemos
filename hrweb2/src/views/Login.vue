<template>
  <div class="container">
    <customized-nav class="nav" :ctlHideMenus="true"/>
    <div class="body">
      <div class="form">
        <p class="header">
          <span>登录</span>
          <el-button type="text">企业用户</el-button>
        </p>
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
          <el-form-item label="手机号" prop="tel">
            <el-input v-model.number="form.tel" placeholder="请输入登录手机号"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <password-input v-model="form.password" />
          </el-form-item>
          <el-form-item>
            <el-button class="full" type="primary" @click="onSubmit">立即登录</el-button>
          </el-form-item>
        </el-form>
        <p class="adjunctive">
          <el-button type="text" @click="gotoRegisterUI">立即注册</el-button>
          <el-button type="text" @click="gotoResetPwdUI">忘记密码？</el-button>
        </p>
      </div>
    </div>
    <customized-footer :showSimple="true" />
  </div>
</template>

<script>
import CustomizedFooter from 'components/customized-footer.vue';
import CustomizedNav from 'components/customized-nav.vue';
import PasswordInput from 'components/password-input.vue';
import { signin } from 'apis/account';
import { mapMutations } from 'vuex';
import { DONE_LOGIN } from 'store/mutation-types';

export default {
  name: 'login',
  components: {
    CustomizedFooter,
    CustomizedNav,
    PasswordInput,
  },
  data() {
    return {
      form: {
        tel: '',
        password: ''
      },
      rules: {
        tel: [
          { required: true, message: '请输入登录手机号', trigger: 'blur' },
          { type: 'number', message: '手机号必须为数字值', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    ...mapMutations([
      DONE_LOGIN,
    ]),
    onSubmit() {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          // submit form;
          const res = await signin({ ...this.form });
          if (res.result) {
            this[DONE_LOGIN]();
          }
        } else {
          return false;
        }
      });
    },
    gotoRegisterUI() {
      this.$router.push({ path: 'register' });
    },
    gotoResetPwdUI() {
      this.$router.push({ path: 'reset-password' });
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    height 100%
    display flex
    flex-direction column
    .nav
      position relative
    .body
      flex 1
      position relative
      background url('../assets/images/background.jpg')
      background-size cover
      .form
        padding 40px
        width 350px
        height 300px
        background-color white
        border-radius 3px
        position absolute
        right 150px
        top 120px
        button.full
          width 100%
        p
          display flex
          flex-direction row
          margin-bottom 20px
          &.header
            justify-content space-between
            margin-left 5px
          &.adjunctive
            justify-content space-around
            margin-left 80px
          span
            font-size 20px 
</style>
