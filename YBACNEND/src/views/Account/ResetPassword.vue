<template>
  <div class="account-reset-password">
    <board title="重置密码" class="body">
      <div class="form">
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
          <el-form-item label="手机号" prop="phone">
            <el-input v-model.number="form.phone" placeholder="请输入登录手机号"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="vcode">
            <captcha v-model="form.vcode" :disabled="!form.phone" :phoneNumber="form.phone" />
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
    </board>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
import Captcha from 'components/captcha.vue';
import PasswordInput from 'components/password-input.vue';
import Board from 'components/board.vue';
import { resetPassword } from '@/apis/account';
import { nonEmptyValidator } from '@/utils/validators';
import { LOGOUT } from '@/store/mutation-types';

@Component({
  components: {
    Board,
    Captcha,
    PasswordInput,
  },
})
export default class AccountResetPassword extends Vue {
  @Mutation(LOGOUT) logout: any;

  form = {
    phone: '',
    password: '',
    confirmPassword: '',
    vcode: '',
    agree: true,
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
          type: 'success',
        });

        this.logout();
      }
    });
  }
}
</script>

<style lang="stylus" scoped>
  .account-reset-password
    display flex
    flex-direction column
    margin-top 30px
    .nav
      position relative
      flex 0 0 70px
    .body
      display flex
      justify-content center
      flex-direction column
      flex 1
      position relative
      background-color white
      .form
        padding 20px
        width 520px
        button.full
          width 100%
</style>

<style lang="stylus">
  .account-reset-password
    .el-form-item__content
      text-align left
</style>
