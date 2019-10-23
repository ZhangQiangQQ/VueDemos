<template>
  <div class="container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item>您的位置：首页</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <div class="left">
        <board title="简历看板" :seeMoreAction="() => this.$router.push({ path: '/resume/info' })">
          <ul>
            <li>
              <span>本日新增</span>
              <span>{{ resumeBoardStatistics.incrementDaily }}</span>
            </li>
            <li>
              <span>待处理</span>
              <span><el-button type="text" @click="gotoResumeUI">{{ resumeBoardStatistics.toProcessNum }}</el-button></span>
            </li>
          </ul>
        </board>
        <board title="职位看板" :seeMoreAction="() => this.$router.push({ path: '/occupation/info' })">
          <ul>
            <li>
              <span>已上线</span>
              <span><el-button type="text" @click="gotoOccupationPanel('ONLINE')">{{ occupationBoardStatistics.onlineNum }}</el-button></span>
            </li>
            <li>
              <span>待上线</span>
              <span><el-button type="text" @click="gotoOccupationPanel('EDITING')">{{ occupationBoardStatistics.editingNum }}</el-button></span>
            </li>
            <li>
              <span>审核中</span>
              <span><el-button type="text" @click="gotoOccupationPanel('CHECKING')">{{ occupationBoardStatistics.auditingNum }}</el-button></span>
            </li>
            <li>
              <span>审核未通过</span>
              <span><el-button type="text" @click="gotoOccupationPanel('INVALID')">{{ occupationBoardStatistics.auditFailedNum }}</el-button></span>
            </li>
            <li>
              <span>已下线</span>
              <span><el-button type="text" @click="gotoOccupationPanel('OFFLINE')">{{ occupationBoardStatistics.offlineNum }}</el-button></span>
            </li>
          </ul>
        </board>
        <!--
        <board title="企业账单" :seeMoreAction="() => this.$router.push({ path: '/enterprise/bill' })">
        </board>
        -->
      </div>
      <div class="right">
        <!--
        <board title="系统通知" :seeMoreAction="gotoNotiUI">
          <div class="notification" @click="gotoNotiUI">
            <div class="noti-head">
              <span>标题</span>
              <span class="tag">未读</span>
            </div>
            <div class="noti-content">
              我是文案我是文案我是文案我是文案文案我是文案我是文案文...
              <span class="more">详情 &gt;</span>
            </div>
          </div>
          <div class="notification" @click="gotoNotiUI">
            <div class="noti-head">
              <span>标题</span>
              <span class="tag">未读</span>
            </div>
            <div class="noti-content">
              我是文案我是文案我是文案我是文案文案我是文案我是文案文...
              <span class="more">详情 &gt;</span>
            </div>
          </div>
        </board>-->
        <board title="企业摘要" :seeMoreAction="() => this.$router.push({ path: '/enterprise/info' })">
          <div class="enterprise">
            <div class="enter-head">
              <img :src="companyInfo.logoUrl" v-if="companyInfo.logoUrl"/>
              <div>
                <span>企业信息完整度</span>
                <el-progress :percentage="companyInfo.completedPercent"></el-progress>
              </div>
            </div>
            <div class="enter-content">
              <p>企业名称：{{ companyInfo.fullName }} <span class="tag">{{ companyInfo.state === 1 ? '审核中' : '已上线' }}</span></p>
              <p>企业简称：{{ companyInfo.shortName }}</p>
            </div>
          </div>
        </board>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Board from 'components/board.vue';
import { getResumeBoardStatistics, getOccupationBoardStatistics } from '@/apis/board';
import { getCompanyBriefInfo } from '@/apis/company';

@Component({
  components: {
    Board,
  },
})
export default class OccupationInfo extends Vue {
  resumeBoardStatistics: any = {
    incrementDaily: 0,
    toProcessNum: 0
  };
  
  occupationBoardStatistics: object = {
    auditFailedNum: 0,
    auditingNum: 0,
    editingNum: 0,
    offlineNum: 0,
    onlineNum: 0
  };

  companyInfo: object = {
    completedPercent: 0,
    fullName: '',
    shortName: '',
    state: 1,
    logoUrl: '',
  }

  gotoOccupationPanel(panelName: string = '') {
    this.$router.push({ path: `/occupation/info${panelName && ('?tab=' + panelName)}` });
  }

  gotoNotiUI() {
    this.$router.push({ path: `/notifications` });
  }

  gotoResumeUI() {
    this.$router.push({ path: `/resume/info` });
  }

  async created() {
    this.occupationBoardStatistics = (await getOccupationBoardStatistics()).data;
    this.resumeBoardStatistics = (await getResumeBoardStatistics()).data;
    this.companyInfo = (await getCompanyBriefInfo()).data;
  }
}
</script>

<style lang="stylus" scoped>
  .container
    display flex
    width 1280px
    min-height 600px
    box-sizing border-box
    background-color white
    padding 20px
    margin-bottom 20px
    flex-direction column
    .content
      margin-top 30px
      display flex
      .left
        flex 1
        margin-right 15px
        .list
          padding-bottom 30px
        .pagination
          margin-top 20px
        ul
          margin 0
          list-style none
          display flex
          justify-content space-around
          padding 0
          li
            flex 1
            display flex
            flex-direction column
            span:first-child
              line-height 27px
              color #666
              font-size 14px
            span:last-child
              line-height 33px
              font-size 24px !important
              color #17376e
      .right
        flex 0 0 240px
        .notification
          padding 10px
          cursor pointer
          &:first-child
            border-bottom solid 1px #eee
          .noti-head
            display flex
            font-size 16px
            justify-content space-between
            align-items center
          .noti-content
            color #666
            font-size 12px
            text-align left
            margin-top 7px
            .more
              color #ff7152
       .enterprise
        margin 10px
        .enter-head
          display flex
          align-items center
          justify-content center
          img
            width 50px
            height 50px
          div
            margin-left 10px
            text-align left
            font-size 12px 
            color #999
            flex 1
            span
              margin-left 10px
        .enter-content
          font-size 12px
          color #333
          text-align left
          margin-top 5px
</style>
