<template>
  <div class="inforchange">
      <div class="inforchange-left"  v-if="inforchangeLeft">
          <div class="left">
              <a  href="#" class="password" @click="rightpassword()">修改密码</a>
              <span class="left-line"></span>
              <a href="#" class="phone" @click="rightphone()">换绑手机</a>
          </div>
      </div>
      <div class="inforchange-right" v-if="rightPassword"> 
          <div style="margin:29px 213px 0 0">
              <span style="margin-right:33px;font-size:16px;font-weight:600;color:#1f368d">手机号</span><span style="font-size:14px;color:#1f368d">15513779331</span>
          </div>
          <div style="margin:25px 41px 0 0">
              <span style="margin-right:26px;font-size:16px;font-weight:600;color:#1f368d">验证码</span>
              <span style="margin-right:12px"><el-input style="width:129px;height:43px" placeholder="请输入验证码"  clearable></el-input></span>
              <span ><el-button style="width:129px;height:43px" type="primary" plain>获取验证码</el-button></span>
          </div>
          <div style="margin:25px 41px 0 0">
              <span style="margin-right:26px;font-size:16px;font-weight:600;color:#1f368d">新密码</span>
              <span><el-input style="width:270px;height:43px" placeholder="请输入新密码（6-24位数字和字母）" suffix-icon="el-icon-view"></el-input></span>
          </div>
          <div style="margin:25px 55px 0 0">
              <span style="margin-right:26px;font-size:16px;font-weight:600;color:#1f368d">确认密码</span>
              <span><el-input style="width:270px;height:43px" placeholder="请确认输入新密码" suffix-icon="el-icon-view"></el-input></span>
          </div>
          <div style="margin:29px 0 20px 40px">
               <el-button style="width:270px;height:43px" type="primary">重置密码</el-button>
          </div>
      </div>
      <div class="inforchange-right" v-if="rightPhone"> 
          <div style="margin:29px 213px 0 0">
              <span style="margin-right:33px;font-size:16px;font-weight:600">手机号</span><span style="font-size:14px">15513779331</span>
          </div>
          <div style="margin:25px 89px 0 0">
              <span style="margin-right:26px;font-size:16px;font-weight:600">当前登陆密码</span>
              <span><el-input style="width:270px;height:43px" placeholder="请输入当前登录密码" suffix-icon="el-icon-view"></el-input></span>
          </div>
          <div style="margin:25px 55px 0 0">
              <span style="margin-right:26px;font-size:16px;font-weight:600">新手机号</span>
              <span><el-input style="width:270px;height:43px" placeholder="请确认新手机号" suffix-icon="el-icon-view"></el-input></span>
          </div>
          <div style="margin:25px 41px 0 0">
              <span style="margin-right:26px;font-size:16px;font-weight:600">验证码</span>
              <span style="margin-right:12px"><el-input style="width:129px;height:43px" placeholder="请输入验证码"  clearable></el-input></span>
              <span ><el-button style="width:129px;height:43px" type="primary" plain>获取验证码</el-button></span>
          </div>
          <div style="margin:29px 0 20px 40px">
               <el-button @click="showinforchangeback" style="width:270px;height:43px" type="primary">重置密码</el-button>
          </div>
      </div> 
      <div class="inforchangeback" v-if="inforchangeBack">
          <span><i class="el-icon-success"></i></span>
          <span>换绑成功，请用新手机号重新登陆</span>
          <span><el-button class="button" type="primary">重新登陆</el-button></span>
      </div> 
  </div>
  
</template>

<script>


export default {
  name: 'inforchange',
  
  data() {
    return {
      rightPassword:true,
      rightPhone:false,
      inforchangeLeft:true,
      inforchangeBack:false,
    }
  },
  methods: {
      rightpassword() {
          this.rightPassword = true,
          this.rightPhone = false
      },
      rightphone() {
          this.rightPhone = true,
          this.rightPassword = false
      },
      showinforchangeback() {
          this.rightPhone = false,
          this.inforchangeLeft = false,
          this.rightPassword = false,
          this.inforchangeBack = true
      }
  }
}
</script>

<style lang="stylus" scoped>
  .inforchange
    display flex
    flex-direction row
    .inforchange-left
      margin 90px 0 0 0
      .left
        width 180px
        height 122px
        background white
        display flex
        flex-direction column
        font-family PingFangSC-Semibold
        color #1f368d 
        font-size 16px
        font-weight 550
        .left-line
          width 180px
          border 0.5px solid #f0f0f0
          margin 8px 0 0 0
        .password
          margin 32px 0 0 0
          color #1f368d 
          text-decoration none
        .password:focus
          color #617dcb
        .phone
          margin 8px 0 0 0
          color #1f368d 
          text-decoration none
        .phone:focus
          color #617dcb  
    .inforchange-right
      width 784px   
      margin 90px 0 0 36px
      background white
      color #1f368d
    .inforchangeback
      width 656px
      height 360px
      margin 90px 348px 0 436px
      display flex
      flex-direction column
      .button
        margin 25px 0 0 0 
        width 270px
        height 43px   
    .inforchangeback span:nth-child(1)
      margin 61px 0 0 0
      font-size 37px
      color green
    .inforchangeback span:nth-child(2)
      margin 25px 0 0 0 
      font-family PingFangSC-Regular
      color #1f368d   
      font-size 14px 
</style>
<style lang="stylus">
  .el-button:active
    background #617dcb
  .el-button:hover
    background #7d8dcd
  .el-input:hover  
    border-color #7d8dcd 
</style>
