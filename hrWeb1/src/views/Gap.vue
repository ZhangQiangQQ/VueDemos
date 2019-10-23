<template>
  <div class="gap">
    <div class="gap-left">
      <img :src="require('../assets/images/tu.png')" />
      <span>你还没有在线简历信息呦，编辑在线简历，可以大大提升投递成功率</span>
      <el-button style="width:204px;height:43px" @click="next" type="primary">立即创建简历</el-button>
    </div>
    <!-- <div class="gap-right">
          <div class="right-nav">
              <span>在线简历</span>
              <span>暂未创建</span>
              <el-button style="width:108px;height:34px" @click="next" type="primary">立即创建</el-button>
          </div>
          <div class="right-footer">
              <span>附件简历</span>
              <p>支持格式包括： 支持DOC，DOCX,PDF,JPG,PNG格式<br>文件,大小不超过2M</p>
              <el-button style="width:108px;height:34px"  @click="upload" type="primary">立即上传</el-button>
          </div>
    </div>-->
  </div>
</template>

<script>
import { brief } from "apis/account";
export default {
  name: "gap",

  data() {
    return {};
  },
  methods: {
    next() {
      this.$http.post("/resume").then(res => {
        if (res.data.code == 200) {
        }
      });
      this.$router.push({ path: "/resume" });
    },
    upload() {
      this.$http.post("/resume/file").then(res => {
        if (res.data.code == 200) {
        }
      });
    }
  },
  created() {
    brief()
      .then(res => {
        if (res.data.code == 200) {
          if (res.data.data.defaultResumeId == 0) {
            this.$router.push({ path: "/gap" });
          } else {
            this.$router.push({ path: "/resume" });
          }
        }
      })
      .catch(error => {});
  }
};
</script>

<style lang="stylus" scoped>
  .gap
    width 990px
    margin 90px auto 0
    display flex
    flex-direction row
    .gap-left
      width 990px
      height 563px
      background white
      display flex
      flex-direction column
    .gap-left img 
      margin 57px 0 0 424px
      width 143px
    .gap-left span
      font-size 16px
      color #61687c
      margin 24px 0 0 0
    .gap-left .el-button
      margin 40px 0 0 393px
    .gap-right
      width 220px
      height 268px 
      margin 0 0 0 10px 
      .right-nav
        width 220px 
        height 120px 
        background white
        display flex
        flex-direction column
        text-align left
      .right-nav span:nth-child(1) 
        color #111d4b
        margin 20px 0 0 31px 
        font-size 14px
      .right-nav span:nth-child(2) 
        color #909090
        font-size 12px
        margin 0 0 0 31px 
      .right-nav .el-button 
        margin 14px 0 0 56px      
      .right-footer
        width 220px 
        height 152px   
        margin 10px 0 0 0
        background white
        display flex
        flex-direction column
        text-align left
       .right-footer span 
        color #111d4b
        margin 20px 0 0 31px 
        font-size 14px
      .right-footer p 
        color #909090
        font-size 12px
        margin 0 0 0 31px 
      .right-footer .el-button 
        margin 14px 0 0 56px       
</style>

