<template>
  <div class="container">
    <img :src="require('@/assets/images/empty.png')" />
    <p>暂无数据</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class TableEmptyPlaceholder extends Vue {}
</script>

<style lang="stylus" scoped>
.container
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin 50px 0
  p
    margin 0
</style>
