<template>
  <div class="personal">
    <div class="personal-left">
      <el-tabs v-model="activeName" @tab-click="handleClick" class="personal-tabs" v-if="showTabs">
        <el-tab-pane :label="`投递记录（${throwNum}）`" name="first">
            <div class="tabs-first">
                <span>产品经理助理</span>
                <span>5-10k</span>
            </div>
            <div class="tabs-second">
                <span>迪卡侬</span>
                <span>上海 徐汇区 | 1-3年 | 本科</span>
                <span>今天 15:30
                    <el-tooltip style="padding-left:19px;font-size:14px;color:#909090" class="item" effect="dark" placement="top-end">
                       <div slot="content">多行信息<br/>第二行信息</div>
                       <span>被查看</span>
                    </el-tooltip>
                </span>
            </div>
            <div class="tabs-line"></div>

            <div class="tabs-first">
                <span>产品经理助理</span>
                <span>5-10k</span>
            </div>
            <div class="tabs-second">
                <span>迪卡侬</span>
                <span>上海 徐汇区 | 1-3年 | 本科</span>
                <span>今天 15:30
                    <el-tooltip style="padding-left:19px;font-size:14px;color:#909090" class="item" effect="dark" placement="top-end">
                       <div slot="content">多行信息<br/>第二行信息</div>
                       <span>被查看</span>
                    </el-tooltip>
                </span>
            </div>
            <div class="tabs-line"></div>

            <div class="tabs-first">
                <span>产品经理助理</span>
                <span>5-10k</span>
            </div>
            <div class="tabs-second">
                <span>迪卡侬</span>
                <span>上海 徐汇区 | 1-3年 | 本科</span>
                <span>今天 15:30<span class="time"> 被查看 </span></span>
            </div>
            <div class="tabs-line"></div>

            <div class="tabs-first">
                <span>产品经理助理</span>
                <span>5-10k</span>
            </div>
            <div class="tabs-second">
                <span>迪卡侬</span>
                <span>上海 徐汇区 | 1-3年 | 本科</span>
                <span>今天 15:30<span class="time"> 被查看 </span></span>
            </div>
            <div class="tabs-line"></div>
            <div class="tabs-first">
                <span>产品经理助理</span>
                <span>5-10k</span>
            </div>
            <div class="tabs-second">
                <span>迪卡侬</span>
                <span>上海 徐汇区 | 1-3年 | 本科</span>
                <span>今天 15:30<span class="time"> 被查看 </span></span>
            </div>
            <div class="tabs-line"></div>
            <div class="tabs-first">
                <span>产品经理助理</span>
                <span>5-10k</span>
            </div>
            <div class="tabs-second">
                <span>迪卡侬</span>
                <span>上海 徐汇区 | 1-3年 | 本科</span>
                <span>今天 15:30<span class="time"> 被查看 </span></span>
            </div>
            <div class="tabs-line"></div>
            <div class="tabs-first">
                <span>产品经理助理</span>
                <span>5-10k</span>
            </div>
            <div class="tabs-second">
                <span>迪卡侬</span>
                <span>上海 徐汇区 | 1-3年 | 本科</span>
                <span>今天 15:30<span class="time"> 被查看 </span></span>
            </div>
            <div class="tabs-line"></div>
            <div class="tabs-pagination">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                </el-pagination>
            </div>
        </el-tab-pane>
        <el-tab-pane style="margin:0 20px 0 0" :label="`我的收藏（${collectNum}）`" name="second">
            <div class="tabs-first">
                <span>产品经理助理</span>
                <span>5-10k</span>
            </div>
            <div class="collect-second">
                <span class="collect-company">迪卡侬</span>
                <span class="collect-city">上海 徐汇区 | 1-3年 | 本科</span>
                <span class="collect-button"><el-button class="button"  type="primary" size="mini">超小按钮</el-button></span>
            </div>
            <div class="collect-line"></div>

            <div class="tabs-first">
                <span>产品经理助理</span>
                <span>5-10k</span>
            </div>
            <div class="collect-second">
                <span class="collect-company">迪卡侬</span>
                <span class="collect-city">上海 徐汇区 | 1-3年 | 本科</span>
                <span class="collect-button"><el-button class="button" type="primary" size="mini">超小按钮</el-button></span>
            </div>
            <div class="collect-line"></div>
            <div class="tabs-first">
                <span>产品经理助理</span>
                <span>5-10k</span>
            </div>
            <div class="collect-second">
                <span class="collect-company">迪卡侬</span>
                <span class="collect-city">上海 徐汇区 | 1-3年 | 本科</span>
                <span class="collect-button"><el-button class="button" type="primary" size="mini">超小按钮</el-button></span>
            </div>
            <div class="collect-line"></div>
            <div class="tabs-first">
                <span>产品经理助理</span>
                <span>5-10k</span>
            </div>
            <div class="collect-second">
                <span class="collect-company">迪卡侬</span>
                <span class="collect-city">上海 徐汇区 | 1-3年 | 本科</span>
                <span class="collect-button"><el-button class="button" type="primary" size="mini">超小按钮</el-button></span>
            </div>
            <div class="collect-line"></div>

            <div class="tabs-first">
                <span>产品经理助理</span>
                <span>5-10k</span>
            </div>
            <div class="collect-second">
                <span class="collect-company">迪卡侬</span>
                <span class="collect-city">上海 徐汇区 | 1-3年 | 本科</span>
                <span class="collect-button"><el-button class="button" type="primary" size="mini">超小按钮</el-button></span>
            </div>
            <div class="collect-line"></div>
            <div class="tabs-first">
                <span>产品经理助理</span>
                <span>5-10k</span>
            </div>
            <div class="collect-second">
                <span class="collect-company">迪卡侬</span>
                <span class="collect-city">上海 徐汇区 | 1-3年 | 本科</span>
                <span class="collect-button"><el-button class="button" type="primary" size="mini">超小按钮</el-button></span>
            </div>
            <div class="collect-line"></div>
            <div class="tabs-first">
                <span>产品经理助理</span>
                <span>5-10k</span>
            </div>
            <div class="collect-second">
                <span class="collect-company">迪卡侬</span>
                <span class="collect-city">上海 徐汇区 | 1-3年 | 本科</span>
                <span class="collect-button"><el-button class="button" type="primary" size="mini">超小按钮</el-button></span>
            </div>
            <div class="collect-line"></div>
            <div class="collect-pagination">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                </el-pagination>
            </div>
        </el-tab-pane>
      </el-tabs>
      <div style="font-size:15px;line-height:500px" v-if="isshowTabs">你还没有任何投递记录呦~~</div>
    </div>
    <div class="personal-right">
        <div class="right-nav">
            <span>编辑</span>
            <img  @click="toPerson"  :src="require('../assets/images/tou.png')"/>
            <span class="span-name">李康<img :src="require('../assets/images/xing.png')"/></span>
            <div v-if="showInfor" class="infor">
                <span class="span-city">现居上海 | 2年工作经验 | 23岁</span>
                <span class="span-type">求职状态|离职-随时到岗</span>
            </div> 
            <div v-if="showWarn" style="font-size:14px;padding:10px 0 10px 0">个人信息未填写完整，快快来补充吧</div>
        </div>
        <div class="right-footer">
            <div class="footer-nav">
                <span>推荐职位</span>
                <span>查看更多 》</span>
            </div>
            <div class="footer-article">
                <span>产品经理助理</span>
                <span>5-10k</span>
            </div>
            <div class="footer-foot">
                <span>迪卡侬公司</span>
                <span>上海长宁区</span>
            </div>
            <div class="footer-line"></div>
            <div class="footer-article">
                <span>产品经理助理</span>
                <span>5-10k</span>
            </div>
            <div class="footer-foot">
                <span>迪卡侬公司</span>
                <span>上海长宁区</span>
            </div>
            <div class="footer-line"></div>
            <div class="footer-article">
                <span>产品经理助理</span>
                <span>5-10k</span>
            </div>
            <div class="footer-foot">
                <span>迪卡侬公司</span>
                <span>上海长宁区</span>
            </div>
            <div class="footer-line"></div>
            <div class="footer-article">
                <span>产品经理助理</span>
                <span>5-10k</span>
            </div>
            <div class="footer-foot">
                <span>迪卡侬公司</span>
                <span>上海长宁区</span>
            </div>
            <div class="footer-line"></div>
            <div class="footer-article">
                <span>产品经理助理</span>
                <span>5-10k</span>
            </div>
            <div class="footer-foot">
                <span>迪卡侬公司</span>
                <span>上海长宁区</span>
            </div>
            <div class="footer-line"></div>
        </div>
        
    </div>
  </div>
</template>

<script>

export default {
  name: 'personal',
  components: {

  },
  data() {
    return {
        throwNum:23,
        collectNum:4,
        activeName:'first',
        showInfor:true,
        showWarn:false,
        showTabs:true,
        isshowTabs:false
    }
  },
  methods: {
      toPerson() { 
           this.$router.push({path:'/inforchange'})
      }
    },
}
</script>

<style lang="stylus"> 
  .personal
    display flex
    flex-direction row
    margin 90px 0 0 0
    width 1000px
    .personal-left
      width 700px
      height 725px
      background white
      .personal-tabs
        margin 16px 0 0 35px
      .el-tabs__nav-wrap:after
        height 0px 
      .el-tabs__item.is-active
        color #617DCB
      .el-tabs__active-bar
        background-color #617DCB  
      .el-tabs__item
        font-size 15px 
        font-family PingFangSC-Semibold
        color #1f368d
        font-weight 550
        padding 0 25px
        width 120px
      .collect-second
        display flex
        flex-direction row 
        justify-content space-between
        margin 10px 0 0 0
      .collect-line
        width 630px
        margin 8px 0 0 0
        border 0.5px solid #f0f0f0
      .collect-pagination
        margin 30px 0 0 20px
        padding 0 0 20px 0    
      .collect-company
        font-size 16px
      .collect-city
        margin 2px 225px 0 0
        font-size 14px 
      .collect-button
        margin -5px 30px 0 0
        font-size 12px
        .button
          background-color #617dcb
          border 1px solid #617dcb
        .button:focus
          background-color #d8d8d8
          border 1px solid #d8d8d8   
      .tabs-first
        display flex
        flex-direction row
        font-family PingFangSC-Regular
        font-size 15px
        margin 16px 0 0 0
      .tabs-first span:nth-child(1)
        color #1f368d
      .tabs-first span:nth-child(2)
        color #617dcb
        margin 0 0 0 60px
      .tabs-second
        display flex
        flex-direction row
        justify-content space-between
        margin 10px 0 0 0
      .tabs-second span:nth-child(1)
        color #1f368d
        font-size 16px  
      .tabs-second span:nth-child(2)
        margin 2px 180px 0 0
        color #1f368d
        font-size 14px
      .tabs-second span:nth-child(3)
        margin  0 41px 0 0
        font-size 14px
        color #909090
        .time
          font-size 14px
          margin 0 0 0 20px
          color #909090 
      .tabs-line
        width 630px
        margin 10px 0 0 0
        border 0.5px solid #f0f0f0
      .tabs-pagination
        margin 30px 0 0 0
        padding 0 0 20px 0
        color #1f368d  
    .personal-right
      width 290px
      margin 0 0 0 10px
      .right-nav
        display flex
        flex-direction column
        background white
        .span-name 
          font-family PingFangSC-Regular
          color #455379 
          font-size 14px
          margin 10px 0 0 10px
          text-align center
        .span-name img 
          width 20px
          height 15px
          margin 0 0 0 5px
        .infor
          display flex
          flex-direction column
          .span-city
            font-family PingFangSC-Regular
            color #455379 
            font-size 14px
            margin 10px 0 0 0
          .span-type
            font-family PingFangSC-Regular
            color #455379 
            font-size 14px 
            margin 10px 0 11px 0     
      .right-nav span:nth-child(1)
        font-family PingFangSC-Regular
        color #909090
        font-size 13px
        margin 23px 0 0 230px
      .right-nav img
        font-family PingFangSC-Regular
        color #909090
        width 110px
        height 110px
        margin 0 0 0 90px
      .right-footer
        background white
        margin 10px 0 0 0
        height 374px
        .footer-nav
          display flex
          flex-direction row
          justify-content space-between
          padding 24px 0 0 0
        .footer-nav span:nth-child(1)
          font-family PingFangSC-Semibold
          color #1f368d
          font-size 14px
          margin 0 0 0 20px 
        .footer-nav span:nth-child(2)
          font-family PingFangSC-Semibold
          color #617DCB
          font-size 12px 
          margin 0 15px 0 0
        .footer-article
          display flex
          flex-direction row
          justify-content space-between
          margin 15px 0 0 0
        .footer-article span:nth-child(1)
          font-family PingFangSC-Semibold
          color #1f368d
          font-size 15px
          margin 0 0 0 24px 
        .footer-article span:nth-child(2)
          font-family PingFangSC-Semibold
          color #1f368d
          font-size 15px 
          margin 0 26px 0 0
        .footer-foot
          display flex
          flex-direction row
          justify-content space-between
          margin 5px 0 5px 0
        .footer-foot span:nth-child(1)
          font-family PingFangSC-Semibold
          color #1f368d
          font-size 12px
          margin 0 0 0 24px 
        .footer-foot span:nth-child(2)
          font-family PingFangSC-Semibold
          color #1f368d
          font-size 12px 
          margin 0 26px 0 0
        .footer-line 
          width 240px 
          border 0.5px solid #f0f0f0
          margin 6px 0 0 24px      
</style>
