<template>
  <div class="resetpwd-container">
    <customized-nav class="nav" :ctlHideMenus="true" />
    <div class="body">
      <div class="form">
        <p class="header">
          <span>重置密码</span>
        </p>
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
          <el-form-item label="手机号" prop="tel">
            <el-input v-model.number="form.tel" placeholder="请输入登录手机号"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="captcha">
            <captcha v-model="form.captcha" />
          </el-form-item>
          <el-form-item label="新密码" prop="password">
            <password-input v-model="form.password" :placeholder="'请输入新密码（6-24位数字和字母）'" />
          </el-form-item>
          <el-form-item label="确认密码" prop="confirm-password">
            <password-input v-model="form.confirmPassword"  :placeholder="'请再次输入新密码'" />
          </el-form-item>
          <el-form-item>
            <el-button class="full" type="primary" @click="onSubmit">重置密码</el-button>
          </el-form-item>
        </el-form>
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
  name: 'resetpwd',
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
        confirmPassword: '',
        captcha: '',
      },
      rules: {
        tel: [
          { required: true, message: '请输入登录手机号', trigger: 'blur' },
          { type: 'number', message: '手机号必须为数字值', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入新登录密码', trigger: 'blur' },
        ],
        'confirm-password': [
          { required: true, message: '请再次输入新登录密码', trigger: 'blur' },
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
  }
}
</script>

<style lang="stylus" scoped>
  .resetpwd-container
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
        width 380px
        height 400px
        background-color white
        border-radius 3px
        button.full
          width 100%
        p
          display flex
          flex-direction row
          margin-bottom 20px
          &.header
            justify-content space-between
            margin-left 5px
          span
            font-size 20px 
</style>

<style lang="stylus">
  .resetpwd-container
    .el-form-item__content 
      text-align left
</style>
