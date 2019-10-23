<template>
  <div class="captcha">
    <el-input class="input" type="captcha" v-model="captchaInput" placeholder="验证码"></el-input>
    <el-button class="btn" @click="getCaptcha" :disabled="frozen">{{ captchaStatusText }}</el-button>
  </div>
</template>

<script>
const captchaLabel = '获取验证码';
const countNumber = 60;

export default {
  name: 'captcha',
  data() {
    return {
      frozen: false,
      counter: countNumber,
      captchaInput: '',
      captchaStatusText: captchaLabel,
    }
  },
  methods: {
    getCaptcha() {
      this.frozen = true;
      const handler = setInterval(() => {
        this.captchaStatusText = `${captchaLabel}(${--this.counter}s)`;
        if (this.counter === 0) {
          clearInterval(handler);
          this.counter = countNumber;
          this.captchaStatusText = captchaLabel;
          this.frozen = false;
        }
      }, 1000);
    }
  },
  watch: {
    captchaInput() {
      this.$emit('input', this.captchaInput);
    }
  }
}
</script>

<style lang="stylus" scoped>
.captcha
  .input
    width 110px
  .btn
    margin-left 10px
</style>
