<template>
  <div class="footer">
    <div class="appendix" v-if="!showSimple">
      <div class="group">
        <span>使用与帮助</span>
        <ul>
          <li>占位字符</li>
          <li>占位字符</li>
          <li>占位字符</li>
          <li>占位字符</li>
        </ul>
      </div>
      <div class="group">
        <span>联系方式</span>
        <ul>
          <li>占位字符</li>
          <li>占位字符</li>
          <li>占位字符</li>
          <li>占位字符</li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <p>©2019 银领人才网 | 沪ICP备xxxxxxx号-1</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customized-footer',
  props: {
    showSimple: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
  .footer
    background-color #f0f0f0
    .appendix
      display flex
      width 1280px
      margin auto
      padding 70px 0px 20px
      padding 70px 0px 20px
      padding 30px 150px 20px
      flex-direction row
      align-items center
      div.group
        color #455379
        margin-right 140px
        span
          font-size 20px
          font-weight 500
        ul
          list-style-type none
          padding 0
          text-align left
          li
            margin 10px 0
            font-size 16px
    .copyright
      font-size 12px
      color #999
      padding 10px 0
</style>
