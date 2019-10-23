<template>
  <div class="board">
    <div class="header">
      <div class="title">
        <span>{{ title }}</span>
        <span v-if="desc" class="desc">{{ desc }}</span>
      </div>
      <el-button type="text" v-if="seeMoreAction" @click="seeMoreAction">
        <span class="more">更多 &gt;</span>
      </el-button>
    </div>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component({
  props: {
    title: {
      type: String,
      default: '我的看板',
    },
    desc: {
      type: String,
      default: '',
    },
    seeMoreAction: {
      type: Function,
      default: null,
    },
  },
})
export default class Board extends Vue {
}
</script>

<style lang="stylus" scoped>
.board
  display flex
  border-radius 4px
  flex-direction column
  box-shadow 0px 2px 12px 0px rgba(0,0,0,0.06)
  margin 20px 0
  .header
    height 50px
    background-color #f1f7ff
    display flex
    justify-content space-between
    align-items center
    padding 0 20px
    color #17376e
    font-weight bold
    font-size 16px
    .more
      font-size 13px
    .title
      display flex
      .desc
        flex 1
        text-align left
        font-size 12px
        font-weight normal
        margin-left 20px
  .body
    padding 10px
  &:first-child
    margin-top 0
</style>
