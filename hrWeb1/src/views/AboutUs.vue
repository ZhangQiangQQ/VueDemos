<template>
  <div class="inforchange">
      <el-dialog
          title=""
          :visible.sync="dialog"
          width="30%"
          >
          <div style="display:flex;flex-direction:row;margin-left:220px">
              <img style="height:18px;" :src="require('../assets/images/222.png')"/>
              <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">请先登录？</span>
          </div>
          <div slot="footer" class="dialog-footer" style="margin-top:-30px">
              <el-button type="primary"  style="margin:0 200px 0 0" @click="next">确 定</el-button>
          </div>
          <div style="height:30px"></div>
      </el-dialog>
      <div class="inforchange-left">
          <div class="left">
              <a  href="#" :class="{active:active===1}" class="password" @click="handleActive(1)">公司介绍</a>
              <span class="left-line"></span>
              <a href="#"  :class="{active:active===2}" class="phone" @click="handleActive(2)">联系我们</a>
          </div>
      </div>
      <div class="inforchange-right" v-if="active===1"> 
          <div>公司介绍</div>
          <div><p>文银领人才网是上海银领网络科技有限公司旗下的致力于“银领人才”（现代高技能人才）招聘的专业网站。在5G时代到来之际，银领人才网依托互联网PC端+移动端以及人工智能和大数据打造全新的5G时代专业招聘网站，为“既动手又动脑”的银领人才求职提供多维度、精准化的招聘服务，为中国智能制造，制造业强国提供高技能人才的支撑！让银领人才真正实现“一技在手、工作我有！”。
            </p></div>
          <div><img style='width:690px' src='../assets/images/zz.png'></div>
      </div>
      <div class="aboutus-right" v-if="active===2"> 
          <div style="font-size:18px">联系我们</div>
          <div class="aboutus-vontent">
            <span>公司：YinLinker人力资源有限公司</span>
            <span>地址：xxxxx</span>
            <span>邮编：12345</span>
            <span>电话：123123123</span>
            <span>邮箱：1122234@11.com</span>
          </div>
          <div>
            <el-input
              type="textarea"
              placeholder="如果你有任何意见或者建议，欢迎在此填写，非常感谢你对YinLinker的支持"
              v-model="textarea">
            </el-input></div>
          <div>
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
          <div>
            <el-button @click="next" style="width:178px;height:43px;margin-left:520px" type="primary">提交</el-button>
          </div>
      </div> 
  </div>
  
</template>

<script>


export default {
  name: 'aboutus',
  
  data() {
    return {
      active:'',
      textarea:'',
      dialog:false,
      id:this.$route.params.id
    }
  },
  methods: {
      next() {
          this.dialog = true,
          this.$router.push({ path: "/login" });
      },
      handleActive(index) {
        this.active = index
      },
      showinforchangeback() {
          this.inforchangeLeft = false,
          this.inforchangeBack = true
      }
  },
  created() {
    if(this.id == 'false'){
      this.active = 2
    }else{
      this.active = 1
    }
  }
}
</script>

<style lang="stylus" scoped>
  .inforchange
    width 1000px
    display flex
    flex-direction row
    margin 0 auto 0 
    .inforchange-left
      margin 90px 0 0 0
      .left
        width 180px
        height 122px
        background white
        display flex
        flex-direction column
        font-family PingFangSC-Semibold
        color #1d366e 
        font-size 16px
        font-weight 550
        .left-line
          width 180px
          border 0.5px solid #f0f0f0
          margin 8px 0 0 0
        .password
          margin 32px 0 0 0
          color #1d366e 
          text-decoration none
        .phone
          margin 8px 0 0 0
          color #1d366e 
          text-decoration none
        .active
          color #617dcb
    .inforchange-right
      background white
      margin 90px 0 0 36px
      height 725px
    .inforchange-right div:nth-child(1)
      margin 32px 49px 0 49px
      text-align left  
      font-size 18px
      color #617dcb  
    .inforchange-right div:nth-child(2)
      width 690px
      text-align left 
      font-size 13px
      color #61687c
      margin 0 49px 0 49px
    .inforchange-right div:nth-child(3)
      width 690px
      height 160px
      margin 35px 49px 0 49px
      
      font-size 13.5px
      color #61687c
      line-height 160px
    .aboutus-right
      background white
      margin 90px 0 0 36px
      height 725px
    .aboutus-right div:nth-child(1)
      margin 32px 49px 0 49px
      text-align left  
      color #617dcb  
    .aboutus-right div:nth-child(2)
      display flex
      flex-direction column
      width 690px
      text-align left 
      font-size 13px
      color #455379
      margin 20px 49px 0 49px
    .aboutus-vontent span
      padding 15px 0 0 0  
    .aboutus-right div:nth-child(3)
      width 690px
      color #61687c
    .aboutus-right div:nth-child(4)
      width 690px
      color #61687c   
      
</style>
<style lang="stylus">
  .el-input:hover  
    border-color #7d8dcd 
</style>


