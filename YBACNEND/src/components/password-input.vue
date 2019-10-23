<template>
  <div class="passwordInput">
    <el-input :prefix-icon="showPrefix ? 'el-icon-goods' : ''" class="input" :type="type" v-model="input" :placeholder="placeholder"></el-input>
    <span v-if="input" @mousedown="toggleTType" @mouseup="togglePType">
      <img :src="require('../assets/images/eye.png')" />
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
@Component({
  props: {
    placeholder: {
      type: String,
      default: '请输入登录密码（6-24位数字和字母）',
    },
    showPrefix: {
      type: Boolean,
      default: true,
    },
  },
})
export default class PasswordInput extends Vue {
  type: string = 'password';

  input: string = '';

  toggleTType() {
    this.type = 'text';
  };

  togglePType() {
    this.type = 'password';
  };

  @Watch('input', { immediate: true, deep: true })
  function(val: string, oldVal: string) {
    this.$emit('input', this.input);
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
