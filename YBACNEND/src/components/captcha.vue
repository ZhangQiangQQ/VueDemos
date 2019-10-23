<template>
  <div class="captcha">
    <el-input class="input" type="captcha" v-model="captchaInput" placeholder="验证码"></el-input>
    <el-button class="btn" @click="getCaptcha" :disabled="frozen || disabled">{{ captchaStatusText }}</el-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { getCaptchaCode } from '@/apis/account';

const captchaLabel = '获取验证码';
const countNumber = 60;

@Component({
  props: {
    phoneNumber: {
      type: [String, Number],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
})
export default class Captcha extends Vue {
  frozen: boolean = false;

  counter: number = countNumber;

  captchaInput: string = '';

  captchaStatusText: string = captchaLabel;

  async getCaptcha() {
    this.frozen = true;
    // get captcha code;
    await getCaptchaCode({
      phone: Number(this.$props.phoneNumber),
    });

    const handler = setInterval(() => {
      this.captchaStatusText = `${captchaLabel}(${--this.counter}s)`;
      if (this.counter === 0) {
        clearInterval(handler);
        this.counter = countNumber;
        this.captchaStatusText = captchaLabel;
        this.frozen = false;
      }
    }, 1000);
  };

  @Watch('captchaInput', { immediate: true, deep: true })
  function(val: string, oldVal: string) {
    this.$emit('input', this.captchaInput);
  }
}
</script>

<style lang="stylus" scoped>
.captcha
  display flex
  .input
    flex 1
  .btn
    width 145px
    margin-left 10px
</style>
