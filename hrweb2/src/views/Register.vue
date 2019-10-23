<template>
  <div class="register-container">
    <customized-nav class="nav" :ctlHideMenus="true" />
    <div class="body">
      <div class="form">
        <p class="header">
          <span>注册</span>
          <el-button type="text">企业用户</el-button>
        </p>
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
          <el-form-item label="手机号" prop="tel">
            <el-input v-model.number="form.tel" placeholder="请输入登录手机号"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <password-input v-model="form.password" />
          </el-form-item>
          <el-form-item label="验证码" prop="captcha">
            <captcha v-model="form.captcha" />
          </el-form-item>
          <el-form-item prop="checkLicense">
            <el-checkbox v-model="form.checkLicense">我已同意<el-button type="text" @click="gotoUserPrivacyLicenseUI">《用户协议及隐私策略》</el-button></el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button class="full" type="primary" @click="onSubmit" :disabled="!form.checkLicense">立即注册</el-button>
          </el-form-item>
        </el-form>
        <p class="adjunctive">
          <el-button type="text" @click="gotoLoginUI">立即登录</el-button>
        </p>
      </div>
    </div>
    <customized-footer :showSimple="true" />
  </div>
</template>

<script>
import CustomizedFooter from 'components/customized-footer.vue';
import CustomizedNav from 'components/customized-nav.vue';
import Captcha from 'components/captcha.vue';
import PasswordInput from 'components/password-input.vue';

export default {
  name: 'register',
  components: {
    CustomizedFooter,
    CustomizedNav,
    Captcha,
    PasswordInput,
  },
  data() {
    return {
      form: {
        tel: '',
        password: '',
        captcha: '',
        checkLicense: false,  
      },
      rules: {
        tel: [
          { required: true, message: '请输入登录手机号', trigger: 'blur' },
          { type: 'number', message: '手机号必须为数字值', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
        ],
        captcha: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          // submit;
        } else {
          return false;
        }
      });
    },
    getCaptcha() {
        
    },
    gotoLoginUI() {
      this.$router.push({ path: 'login' });
    },
    gotoUserPrivacyLicenseUI() {
      window.open(this.$router.resolve({ name: 'user-license' }).href, '_blank');
    }
  }
}
</script>

<style lang="stylus" scoped>
  .register-container
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
        width 380px
        height 400px
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

<style lang="stylus">
.register-container
  .el-form-item__content 
    text-align left
</style>
