<template>
  <div class="deliver">
    <div class="deliver-nav">
      <div class="deliver-nav-first">
        <span>
          <i class="el-icon-circle-check"></i>
        </span>
        <span>简历投递成功</span>
      </div>
      <div class="deliver-nav-second">
        <span>
          继续查看该岗位
          <br />
          <br />我的投递记录
        </span>
      </div>
    </div>
    <div class="deliver-foot">
      <div class="deliver-foot-nav">
        <div class="deliver-foot-nav-first">
          <span>相似职位</span>
          <span>查看更多》</span>
        </div>
      </div>
      <div class="deliver-foot-foot">
        <div class="company-post">
        <span>产品经理</span>
        <span>4-5k</span>
        </div>
        <div class="company-address">
          <span>上海YY公司</span>
          <span>长宁区</span>
        </div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'deliver',
  data() {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped> 
  .deliver
    display flex
    flex-direction row
    .deliver-nav
      margin 10% 0 0 20%
      .deliver-nav-first span:nth-child(1)
        font-size 40px
        color green
      .deliver-nav-first span:nth-child(2)
        font-size 30px
        padding  0 0 0 20px
        color #4e5b7f
      .deliver-nav-second
        margin 13% 0 0 0  
      .deliver-nav-second span
        font-size 17px
        padding  60px 0 0 20px
        color #6782cc
    .deliver-foot
      width 20%
      background-color white
      margin 2% 0 0 20%
      .deliver-foot-nav
        .deliver-foot-nav-first
          display flex
          flex-direction row
          font-size 13px
          margin 4% 0 0 0
          color black
          font-weight bold
          justify-content space-between
        .deliver-foot-nav-first span:nth-child(1)
          margin 0 0 0 6% 
        .deliver-foot-nav-first span:nth-child(2)
          margin 0 3% 0 0 
      .deliver-foot-foot 
        display flex
        flex-direction column
        margin 7% 0 0 0
        .company-post 
          display flex
          flex-direction row
          justify-content space-between
          font-size 14px
          color #455379
          padding 2% 0 0 0
        .company-post span:nth-child(1)
          margin 0 0 0 6% 
        .company-post span:nth-child(2)
          margin 0 6% 0 0
        .company-address
          display flex
          flex-direction row
          justify-content space-between
          font-size 10px
          color #cbcbcb
          padding 4% 0 0 0
        .company-address span:nth-child(1)
          margin 0 0 0 6% 
        .company-address span:nth-child(2)
          margin 0 6% 0 0
        .line
          width 90%
          border 0.5px  solid #e5e5e5
          margin 2% 0 0 5%           
</style>