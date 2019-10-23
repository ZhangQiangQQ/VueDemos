<template>
  <div class="contact-us-container">
    <div class="body">
      <h1>公司介绍</h1>
      <div class="content">
        <div class="block">
          <h4>公司简介</h4>
          <p>阿里巴巴网创立于1999年，总部设在中国上海，员工超过30000人，目前公司已在北京、广州、深圳、成都、杭州、南京、厦门、重庆、青岛、武汉、三亚、南通等95个境内城市，新加坡、首尔、香港等22个境外城市设立分支机构，在中国南通、苏格兰爱丁堡设立服务联络中心。2010年，携程旅行网战略投资台湾易游网和香港永安旅游，实现两岸三地的互通。2014年，投资途风旅行网，将触角延伸及北美洲。</p>
        </div>
        <div class="block">
          <h4>发展现状</h4>
          <p>我是文案，我是一段很长的文案。我是文案，我是一段很长的文案，我是文案，我是一段很长的文案。我是文案，我是一段很长的文案，我是文案，我是一段很长的文案。我是文案，我是一段很长的文案，我是文案，我是一段很长的文案。我是文案，我是一段很长的文案，我是文案，我是一段很长的文案。</p>
        </div>
        <div class="block">
          <h4>公司风采</h4>
          <p class="album">
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class ContactUs extends Vue {
  mounted() {
    // loading init info;
  }
}
</script>

<style lang="stylus" scoped>
  .contact-us-container
    display flex
    flex-direction column
    .nav
      position relative
      flex 0 0 70px
    .body
      flex 1
      text-align left
      position relative
      background-color white
      h1
        font-size 20px
        text-align left
        margin 30px 0px 10px
      .content
        padding 0 30px
        .block
          margin 20px 0
          .album
            display flex
            justify-content space-around
            align-items center
            img
              width 200px
</style>
