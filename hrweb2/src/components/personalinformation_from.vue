<template>
    <div class="personalinformation">
        <div class="information">
            <div><img style="width:95px" :src="require('../assets/images/89.png')"/></div>
            <div class="informationright">
                <div class="information-first">
                <span>李康</span>
                <span><img style="width:26px" :src="require('../assets/images/xing.png')"/></span>
                <span>离职-随时到岗</span>
                </div>
                <div class="information-second">
                  <span>现居上海</span>
                  <span>|</span>
                  <span>1-3年海外工作经验</span>
                  <span>23岁(1996/09/09)</span>
                </div>
                <div class="information-third">
                  <span><img style="width:8px;height:14px;" :src="require('../assets/images/copy.png')"/><span style="margin:0 0 0 13px">1222112233</span></span>
                  <span>|</span>
                  <span><img style="width:11px;height:8px;margin-left:25px" :src="require('../assets/images/00.png')"/><span style="margin:0 0 0 13px">2222222</span></span>
                  <span style="margin-left:25px">|</span>
                  <span style="margin-left:25px">政治面貌：党员</span>
                </div>
            </div>
           
        </div>
    </div>
</template>

<script>
    export default {
        name:'personalinformation_from',
        data() {
            return {
            };
        },
    }
</script>

<style lang="stylus" scoped>
  .personalinformation
    .information
      display flex
      flex-direction row
      background white
      .informationright
        display flex
        flex-direction column
        margin  0 0 10px 0
        .information-first span:nth-child(1)
          float left
          color #1f368d
          font-size 24px
          margin 0 0 0 -5px
        .information-first span:nth-child(2)
          float left
          margin 8px 0 0 5px
        .information-first span:nth-child(3)
          float left
          color #1f368d
          font-size 13px
          line-height 34px 
          margin 0 0 0 40px 
        .information-second span:nth-child(1)
          color #1f368d
          font-size 14px
          line-height 34px 
          margin 0 0 0 -20px
        .information-second span:nth-child(2)
          margin 0 0 0 25px 
        .information-second span:nth-child(3)
          margin 0 0 0 25px
        .information-second span:nth-child(4)
          margin 0 0 0 25px
        .information-third span:nth-child(1)
          color #1f368d
          font-size 14px
          line-height 34px 
          margin 0 0 0 20px
        .information-third span:nth-child(2)
          margin 0 0 0 50px            
    .information div:nth-child(1) 
      margin 31px 0 0 25px  
</style>