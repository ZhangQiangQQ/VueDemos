<template>
  <div class="register-container">
    <div class="form">
      <p class="header">
        <span>企业用户注册</span>
        <el-button type="text">个人用户</el-button>
      </p>
      <el-form ref="form" :rules="rules" :model="form" label-width="80px">
        <el-form-item label="手机号" prop="phone">
          <el-input v-model.number="form.phone" placeholder="请输入登录手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <password-input v-model="form.password" />
        </el-form-item>
        <el-form-item label="验证码" prop="vcode">
          <captcha v-model="form.vcode" :phoneNumber="form.phone" />
        </el-form-item>
        <el-form-item prop="agree">
          <el-checkbox v-model="form.agree">我已同意<el-button type="text" @click="gotoUserPrivacyLicenseUI">《用户协议及隐私策略》</el-button></el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button class="full main" type="primary" @click="onSubmit" :disabled="!form.agree">立即注册</el-button>
        </el-form-item>
      </el-form>
      <p class="adjunctive">
        <el-button type="text" @click="gotoLoginUI">立即登录</el-button>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CustomizedFooter from 'components/customized-footer.vue';
import CustomizedNav from 'components/customized-nav.vue';
import Captcha from 'components/captcha.vue';
import PasswordInput from 'components/password-input.vue';
import { register } from '@/apis/account';
import { nonEmptyValidator } from '@/utils/validators';

@Component({
  components: {
    CustomizedFooter,
    CustomizedNav,
    Captcha,
    PasswordInput,
  },
})
export default class Register extends Vue {
  form = {
    phone: '',
    password: '',
    vcode: '',
    agree: false,
  };

  rules = {
    phone: [
      { validator: nonEmptyValidator, trigger: 'blur' },
      { type: 'number', message: '手机号必须为数字', trigger: 'blur' },
    ],
    password: [
      { validator: nonEmptyValidator, trigger: 'blur' },
    ],
    vcode: [
      { validator: nonEmptyValidator, trigger: 'blur' },
    ],
  };
  
  onSubmit() {
    const ref: any = this.$refs.form;
    ref.validate(async (valid: boolean) => {
      if (valid) {
        // submit;
        const res = await register({ ...this.form });
        this.$message({
          message: '账户注册成功，请登录！',
          type: 'success'
        });
        this.gotoLoginUI();
      }
      return false;
    });
  };

  gotoLoginUI() {
    this.$router.push({ path: 'login' });
  };

  gotoUserPrivacyLicenseUI() {
    window.open(this.$router.resolve({ name: 'user-license' }).href, '_blank');
  };
}
</script>

<style lang="stylus" scoped>
  .register-container
    flex 1
    display flex
    align-items center
    justify-content center
    .form
      padding 30px
      width 504px
      height 480px
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
.register-container
  .el-form-item__content
    text-align left
</style>
