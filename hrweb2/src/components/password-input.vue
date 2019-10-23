<template>
  <div class="passwordInput">
    <el-input class="input" :type="type" v-model="input" :placeholder="placeholder"></el-input>
    <span v-if="input" @mousedown="toggleTType" @mouseup="togglePType">
      <img :src="require('../assets/images/eye.png')" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'passwordInput',
  props: {
    placeholder: {
      type: String,
      default: '请输入登录密码（6-24位数字和字母）'
    }
  },
  data() {
    return {
      type: 'password',
      input: '',
    }
  },
  methods: {
    toggleTType() {
      this.type = 'text';
    },
    togglePType() {
      this.type = 'password';
    }
  },
  watch: {
    input() {
      this.$emit('input', this.input);
    }
  }
}
</script>

<style lang="stylus" scoped>
.passwordInput
  .input
    position relative
  span
    position absolute
    right 5px
    cursor pointer
    img
      vertical-align middle
</style>
