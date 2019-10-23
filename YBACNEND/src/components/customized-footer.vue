<template>
  <div class="footer">
    <template v-if="!showSimple">
      <div class="appendix">
        <div>
          <span class="title">银领人才网</span>
          <div class="content">
            <p>银领人才网是上海银领网络科技有限公司旗下的致力于“银领人才”（现代高技能人才）招聘的专业网站。在 5G 时代到来之际，银领人才网依托互联网 PC 端+移动端以及人工智能和大数据打造全新的 5G 时代专业招聘网站，为“既动手又动脑”的银领人才求职提供多维度、精准化的招聘服务，为中国智能制造，制造业强国提供高技能人才的支撑！让银领人才真正实现“一技在手、工作我有！</p>
          </div>
        </div>
        <div>
          <span class="title">联系方式</span>
          <div class="content">
            <ul>
              <li>邮编：200436</li>
              <li>联系电话：021-56057115</li>
              <li>邮箱：Nicole.yin@aliyun.com</li>
              <li>地址：上海市静安区江场西路299弄15号1428室</li>
            </ul>
          </div>
        </div>
        <div>
          <span class="title">使用与帮助</span>
          <div class="content">
            <ul>
              <li>企业介绍</li>
              <li>投诉建议</li>
              <li>用户协议</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyright full">
        <p>Copyright © 2019 (银领人才网) All Right Reserved | 沪ICP备xxxxxxx号-1</p>
      </div>
    </template>
    <div class="copyright" v-else>
      <p>Copyright © 2019 (银领人才网) All Right Reserved | 沪ICP备xxxxxxx号-1</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  props: {
    showSimple: {
      type: Boolean,
      default: false,
    },
  },
})
export default class CustomizedFooter extends Vue {}
</script>

<style lang="stylus" scoped>
  .footer
    width 100%
    background-color #16376e
    .appendix
      display flex
      width 1280px
      margin auto
      color white
      padding 40px 0
      flex-direction row
      justify-content space-between
      div
        margin-right 30px
        text-align left
        span.title
          font-size 16px
          font-weight 500
        .content
          opacity .5
          font-size 14px
          p
            max-width 350px
          ul
            list-style-type none
            padding 0
            text-align left
            li
              margin 10px 0
    .copyright
      font-size 14px
      color #999
      padding 10px 0
      margin auto
      background-color #f0f0f0
      p
        margin 10px 0
      &.full
        background-color #16376e
        color white
        opacity .5
</style>
