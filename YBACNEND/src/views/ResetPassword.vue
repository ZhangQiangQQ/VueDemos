<template>
  <div class="resetpwd-container">
    <div class="form">
      <p class="header">
        <span>重置密码</span>
      </p>
      <el-form ref="form" :rules="rules" :model="form" label-width="80px">
        <el-form-item label="手机号" prop="phone">
          <el-input v-model.number="form.phone" placeholder="请输入登录手机号"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="vcode">
          <captcha v-model="form.vcode" :phoneNumber="form.phone" />
        </el-form-item>
        <el-form-item label="新密码" prop="password">
          <password-input v-model="form.password" :placeholder="'请输入新密码（6-24位数字和字母）'" />
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <password-input v-model="form.confirmPassword" :placeholder="'请再次输入新密码'" />
        </el-form-item>
        <el-form-item>
          <el-button class="full main" type="primary" @click="onSubmit">重置密码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CustomizedFooter from 'components/customized-footer.vue';
import CustomizedNav from 'components/customized-nav.vue';
import Captcha from 'components/captcha.vue';
import PasswordInput from 'components/password-input.vue';
import { resetPassword } from '@/apis/account';
import { nonEmptyValidator } from '@/utils/validators';

@Component({
  components: {
    CustomizedFooter,
    CustomizedNav,
    Captcha,
    PasswordInput,
  },
})
export default class ResetPassword extends Vue {
  form = {
    phone: '',
    password: '',
    confirmPassword: '',
    vcode: '',
    agree: true
  };

  passwordDbConfirmValidator = (rule: any, value: any, callback: any) => {
    if (value !== this.form.password) {
      callback(new Error('两次密码输入不一致'));
    } else {
      callback();
    }
  }

  rules = {
    phone: [
      { validator: nonEmptyValidator, trigger: 'blur' },
      { type: 'number', message: '手机号必须为数字', trigger: 'blur' },
    ],
    password: [
      { validator: nonEmptyValidator, trigger: 'blur' },
    ],
    confirmPassword: [
      { validator: nonEmptyValidator, trigger: 'blur' },
      { validator: this.passwordDbConfirmValidator, trigger: 'blur' },
    ],
    vcode: [
      { validator: nonEmptyValidator, trigger: 'blur' },
    ],
  };

  gotoLoginUI() {
    this.$router.push({ path: '/login' });
  };

  onSubmit() {
    const ref: any = this.$refs.form;
    ref.validate(async (valid: boolean) => {
      if (valid) {
        // submit;
        await resetPassword({
          phone: this.form.phone,
          agree: this.form.agree,
          password: this.form.password,
          vcode: this.form.vcode,
        });
        this.$message({
          message: '密码重置成功，请重新登录！',
          type: 'success'
        });
        this.gotoLoginUI();
      }
    });
  }
}
</script>

<style lang="stylus" scoped>
  .resetpwd-container
    flex 1
    display flex
    align-items center
    justify-content center
    .form
      padding 30px
      width 504px
      height 430px
      background-color white
      border-radius 5px
      box-sizing border-box
      transform translate(0, -70px)
      button.full
        width 100%
      p
        display flex
        flex-direction row
        margin-bottom 20px
        &.header
          justify-content space-between
        &.adjunctive
          justify-content space-around
          margin-left 80px
        span
          font-size 20px
</style>

<style lang="stylus">
  .resetpwd-container
    .el-form-item__content
      text-align left
</style>
