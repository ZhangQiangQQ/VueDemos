<template>
  <div class="personal">
    <div class="personal-left">
      <el-tabs v-model="activeName"  class="personal-tabs" v-if="showTabs">
        <el-tab-pane :label="`投递记录（${throwNum = this.page1.total}）`" name="first">
          <div style="width:630px" class="hover" v-for="(list,index) in submittedList" :key="index">
            <div class="tabs-first">
              <span>{{list.positionName}}</span>
              <span>{{list.salaryMin}}-{{list.salaryMax}}k</span>
            </div>
            <div class="tabs-second">
              <span>{{list.company.companyName}}</span>
              <span
                v-if="list.workAgeMax == null"
              >{{$CodeToTag.CodeToTag([list.workAddress.province,list.workAddress.county],citysal)[0]+$CodeToTag.CodeToTag([list.workAddress.province,list.workAddress.county],citysal)[1]}} | 10年以上 | {{list.degreeMin|level}}</span>
              <span
                v-else
              >{{$CodeToTag.CodeToTag([list.workAddress.province,list.workAddress.county],citysal)[0]+$CodeToTag.CodeToTag([list.workAddress.province,list.workAddress.county],citysal)[1]}} | {{list.workAgeMin}}-{{list.workAgeMax}}年 | {{list.degreeMin|level}}</span>
              <p>
                {{list.publishedTime|formatDate}}
                <el-tooltip
                  style="font-size:14px;color:#909090"
                  class="item"
                  effect="dark"
                  placement="top-end"
                >
                  <div slot="content">
                    {{list.publishedTime|formatDate}} 投递成功
                    <br />
                    {{list.publishedTime|formatDate}} 被查看
                  </div>
                  <span style="font-size:20px">被查看</span>
                </el-tooltip>
              </p>
            </div>
            <div class="tabs-line"></div>
          </div>
          <div class="tabs-pagination">
            <el-pagination
              @size-change="handleSizeChange1"
              @current-change="handleCurrentChange1"
              :current-page="page1.current"
              :page-sizes="page1.pageSizeOpts"
              :page-size="page1.pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="page1.total"
            ></el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="`我的收藏（${collectNum = this.page.total}）`" name="second">
          <div style="width:630px;" class="hover" v-for="(list,index) in favoriteList" :key="index">
            <div class="tabs-first">
              <span>{{list.positionName}}</span>
              <span>{{list.salaryMin}}-{{list.salaryMax}}k</span>
            </div>
            <div class="collect-second">
              <span class="collect-company">{{list.company.companyName}}</span>
              <span
                class="collect-city"
              >{{$CodeToTag.CodeToTag([list.workAddress.province,list.workAddress.county],citysal)[0]+$CodeToTag.CodeToTag([list.workAddress.province,list.workAddress.county],citysal)[1]}} | {{list.workAgeMin}}-{{list.workAgeMax}}年 | {{list.degreeMin|level}}</span>
              <span class="collect-button">
                <el-button class="button" type="primary" @click="iscancel(list.id)" size="mini">取消收藏</el-button>
              </span>
            </div>
            <div class="collect-line"></div>
          </div>
          <div class="collect-pagination">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="page.current"
              :page-sizes="page.pageSizeOpts"
              :page-size="page.pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="page.total"
            ></el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div style="font-size:15px;line-height:500px" v-if="isshowTabs">你还没有任何投递记录呦~~</div>
    </div>
    <div class="personal-right">
      <div class="right-nav">
        <span class="span-hover" @click="edit">编辑</span>
        <img @click="toPerson" :src="this.avatarUrl" style="border-radius:53px" />
        <span class="span-name">
          {{fullName}}
          <img :src="require('../assets/images/xingbie.png')" />
        </span>
        <div v-if="showInfor" class="infor">
          <span class="span-city">现居{{city}} | {{workAge}}年工作经验 | {{age}}岁</span>
          <span class="span-type">求职状态：{{jobSearchStatus}}</span>
        </div>
        <div v-if="showWarn" style="font-size:14px;padding:10px 0 10px 0">个人信息未填写完整，快快来补充吧</div>
      </div>
      <div class="right-footer">
        <div class="footer-nav">
          <span>推荐职位</span>
          <span @click="next">查看更多 》</span>
        </div>
        <div v-if='Tjposition' v-for="(list,index) in positionList.slice(0, 6)" :key="index" @click="nextjoblist(list.id)">
          <div class="footer-article">
            <span>{{list.positionName}}</span>
            <span>{{list.salaryMin}}-{{list.salaryMax}}k</span>
          </div>
          <div class="footer-foot">
            <span>{{list.company.companyName}}</span>

            <span>{{$CodeToTag.CodeToTag([list.workAddress.province,list.workAddress.county],citysal)[0]+$CodeToTag.CodeToTag([list.workAddress.province,list.workAddress.county],citysal)[1]}}</span>
          </div>
          <div class="footer-line"></div>
        </div>
        <div v-if='QSposition' style="font-size:13px;height:300px;margin:60px 0 0 0">缺少推荐职位~~</div>
      </div>
    </div>
  </div>
</template>

<script>
import {submitted,brief,city,favorite,isfavorite,searched} from "apis/account";
export default {
  name: "personal",
  components: {},
  data() {
    return {
      page: {
        total: 0,
        pageSize: 5,
        current: 1,
        pageSizeOpts: [5, 10, 20]
      },
      page1: {
        total: 0,
        pageSize: 5,
        current: 1,
        pageSizeOpts: [5, 10, 20]
      },
      Tjposition:false,
      QSposition:true,
      avatarUrl: "",
      throwNum: "",
      collectNum: 4,
      activeName: "first",
      showInfor: true,
      showWarn: true,
      showWarnone: false,
      showTabs: true,
      isshowTabs: false,
      submittedList: [],
      favoriteList: [],
      positionList: [],
      fullName: "",
      city: "",
      citysal: [],
      workAge: "",
      age: "",
      state: "",
      workState: "",
      jobSearchStatus: "",
      county: "",
      degreeMin: "",
      industry: "",
      isGraduate: "",
      jobType: "",
      keyword: "",
      pageNum: 0,
      pageSize: 10,
      province: "",
      publishedInterval: "",
      salaryMax: "",
      salaryMin: "",
      size: "",
      workAgeMax: "",
      workAgeMin: ""
    };
  },
  methods: {
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      },
    handleSizeChange1(val) {
        console.log(`每页 ${val} 条`);
      },
    handleCurrentChange1(val) {
      console.log(`当前页: ${val}`);
      },  
    next() {
      this.$router.push({ path: "/joblist" });
    },
    nextjoblist(id) {
      this.$router.push({ path: "/station",query:{
            id: id
          }});
    },
    toPerson() {
      this.$router.push({ path: "/inforchange" });
    },
    //编辑个人信息
    edit() {
      // datacenterBus.$emit("myFun",false)   //$emit这个方法会触发一个事件
      this.$router.push({ path: "/resume" });
    },
    //获取投递过的岗位
    submitt() {
      submitted().then(res => {
        if (res.data.code == 200) {
          this.submittedList = res.data.data.list;
          this.page1.total = res.data.data.total;
        }
      });
    },
    //获取简历简讯
    brief() {
      brief().then(res => {
        if (res.data.code === 200) {
          if (res.data.data.base === null) {
            this.showWarn = true;
          } else {
            this.showWarn = false;
          }
          this.avatarUrl = res.data.data.avatarUrl;
          this.fullName = res.data.data.base.fullName;
          var til = this.$CodeToTag.CodeToTag(
            [res.data.data.base.province, res.data.data.base.county],
            this.citysal
          );
          this.city = til[0] + til[1];
          this.workAge = res.data.data.base.workAge;
          this.age = res.data.data.base.age;
          this.jobSearchStatus = res.data.data.target.jobSearchStatus;
          if (res.data.data.target.jobSearchStatus === 1) {
            this.jobSearchStatus = "离职-延时到岗";
          } else if (res.data.data.target.jobSearchStatus === 0) {
            this.jobSearchStatus = "离职-随时到岗";
          } else if (res.data.data.target.jobSearchStatus === 2) {
            this.jobSearchStatus = "在职-考虑机会";
          } else if (res.data.data.target.jobSearchStatus === 3) {
            this.jobSearchStatus = "在职-暂不到岗";
          }
          if (res.data.data.target.jobType === 1) {
            this.state = "实习";
          } else if (res.data.data.target.jobType === 2) {
            this.state = "全职";
          } else if (res.data.data.target.jobType === 3) {
            this.state = "兼职";
          }
        }
      });
    },
    //获取收藏的岗位
    favorite() {
      favorite().then(res => {
        if (res.data.code === 200) {
          this.favoriteList = res.data.data.list;
          this.page.total = res.data.data.total;
        }
      });
    },
    //取消对岗位的收藏
    iscancel(c) {
      isfavorite(c).then(res => {
        if (res.data.code === 200) {
          this.favorite();
        }
      });
    },
    //城市
    citise() {
      city().then(res => {
        if (res.data.code === 200) {
          this.citysal = res.data.data;
        }
      });
    },
    //获取推荐岗位
    searched() {
      let params = {
        county: "",
        degreeMin: "",
        industry: "",
        isGraduate: "",
        jobType: "",
        keyword: "",
        pageNum: 0,
        pageSize: 10,
        province: "",
        publishedInterval: "",
        salaryMax: "",
        salaryMin: "",
        size: "",
        workAgeMax: "",
        workAgeMin: ""
      };
      searched(params).then(res => {
        if (res.data.code === 200) {
          this.positionList = res.data.data.list;
          if (res.data.data.total === 0) {
            this.Tjposition = false
            this.QSposition = true
          } else {
            this.Tjposition = true
            this.QSposition = false
          }
        }
      });
    }
  },
  created() {
    this.citise();
    this.submitt();
    this.favorite();
    this.brief();
    this.searched();
  },
  filters: {
    level(level) {
      const map = ["初中及以下", "职中", "大专", "本科", "硕士", "博士"];
      return map[level];
    },
    industry(industry) {
      if (industry == 1) {
        const map = [
          "",
          "酒店/餐饮",
          "旅游/度假",
          "医疗/护理/美容/保健/卫生服务"
        ];
        return map[industry];
      }
      if (industry == 2) {
        const map = [
          "",
          "计算机软件",
          "网络游戏",
          "IT服务(系统/数据/维护)",
          "计算机硬件",
          "互联网/电子商务",
          "电子技术/半导体/集成电路",
          "通信、电信运营/增值服务",
          "通信/电信/网络设备"
        ];
        return map[industry];
      }
      if (industry == 3) {
        const map = [
          "",
          "保险",
          "银行",
          "信托/担保/拍卖/典当",
          "基金/证券/期货/投资"
        ];
        return map[industry];
      }
      if (industry == 4) {
        const map = [
          "",
          "零售/批发",
          "贸易/进出口",
          "快速消费品（食品/饮料/烟酒/日化）",
          "耐用消耗品",
          "租赁服务"
        ];
        return map[industry];
      }
      if (industry == 5) {
        const map = [
          "",
          "文体教育|工艺美术",
          "教育/培训/院校",
          "礼品/玩具/工艺美术/收藏品/奢侈品"
        ];
        return map[industry];
      }
      if (industry == 6) {
        const map = [
          "",
          "办公用品及设备",
          "航空/航天研究与制造",
          "医疗设备/器械",
          "加工制造（原料加工/模具）",
          "医药/生物工程",
          "大型设备/机电设备/重工业",
          "印刷/包装/造纸",
          "汽车/摩托车",
          "仪器仪表及工业自动化"
        ];
        return map[industry];
      }
      if (industry == 7) {
        const map = [
          "",
          "房地产/建筑/建材/工程",
          "物业管理/商业中心",
          "家居/室内设计/装饰装潢"
        ];
        return map[industry];
      }
      if (industry == 8) {
        const map = [
          "",
          "专业服务/咨询(财会/法律/人力资源等)",
          "广告/会展/公关",
          "中介服务",
          "外包服务",
          "检验/检测/认证"
        ];
        return map[industry];
      }
      if (industry == 9) {
        const map = ["", "娱乐/体育/休闲", "媒体/出版/影视/文化传媒"];
        return map[industry];
      }
      if (industry == 10) {
        const map = ["", "跨领域经营", "农/林/牧/渔", "其他"];
        return map[industry];
      }
      if (industry == 11) {
        const map = ["", "交通/运输", "物流/仓储"];
        return map[industry];
      }
      if (industry == 12) {
        const map = [
          "",
          "环保",
          "石油/石化/化工",
          "能源/矿产/采掘/冶炼",
          "电气/电力/水利"
        ];
        return map[industry];
      }
      if (industry == 13) {
        const map = ["", "学术/科研", "政府/公共事业/非盈利机构"];
        return map[industry];
      }
    }
  }
};
</script>

<style lang="stylus">
  .personal
    display flex
    flex-direction row
    margin 90px auto 0
    width 1000px
    .hover:hover
      background  #f7f7f7
    .personal-left
      width 700px
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
        color #1d366e
        font-weight 550
        padding 0 25px
        width 120px
      .collect-second
        display flex
        flex-direction row
        justify-content space-between
        margin 10px 0 15px 0
      .collect-line
        width 630px
        margin 8px 0 0 0
        border 0.5px solid #f0f0f0
      .collect-pagination
        margin 30px 0 0 0
        padding 0 0 20px 0
      .collect-company
        font-size 16px
        margin 0 0 0 10px
        width 100px
        text-align left
      .collect-city
        margin 2px 205px 1px 0
        font-size 14px
      .collect-button
        margin -5px 10px 0 0
        font-size 12px
        .button
          background-color #617dcb
          border 1px solid #617dcb
          margin -6px 0 0 0
        .button:focus
          background-color #d8d8d8
          border 1px solid #d8d8d8
      .tabs-first
        display flex
        flex-direction row
        font-family PingFangSC-Regular
        font-size 15px
        margin 16px 0 0 0
        text-align left
      .tabs-first span:nth-child(1)
        color #1d366e
        margin 10px 0 0 10px
        width 180px
      .tabs-first span:nth-child(2)
        color #617dcb
        margin 10px 0 0 0
        width 120px
      .tabs-second
        display flex
        flex-direction row
        justify-content space-between
        text-align left
        margin 10px 0 0 0
      .tabs-second span:nth-child(1)
        font-size 16px

        margin 0 0 0 10px
        width 150px
      .tabs-second span:nth-child(2)
        margin 2px 0 7px 0
        width 300px
        font-size 14px
      .tabs-second p
        margin  0 10px 0 0
        font-size 14px
        text-align right
        width 160px
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
        color #1d366e
    .personal-right
      width 290px
      margin 0 0 0 10px
      .right-nav
        display flex
        flex-direction column
        background white
        .span-hover
          font-family PingFangSC-Regular
          color #909090
          font-size 13px
          margin 23px 0 0 230px
          opacity 0
        &:hover
          .span-hover
              opacity 1
        .span-name
          font-family PingFangSC-Regular
          color #455379
          font-size 14px
          margin 10px 0 0 10px
          text-align center
        .span-name img
          width 15px
          height 15px
          margin 0 0 0 5px
          border-radius 7px
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
      .right-nav img
        font-family PingFangSC-Regular
        color #909090
        width 110px
        height 110px
        margin 0 0 0 90px
      .right-footer
        background white
        margin 10px 0 0 0
        .footer-nav
          display flex
          flex-direction row
          justify-content space-between
          padding 24px 0 0 0
        .footer-nav span:nth-child(1)
          font-family PingFangSC-Semibold
          color #1d366e
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
          color #1d366e
          font-size 14px
          margin 0 0 0 20px
        .footer-article span:nth-child(2)
          font-family PingFangSC-Semibold
          color #617dcb
          font-size 15px
          margin 0 24px 0 0
        .footer-foot
          display flex
          flex-direction row
          justify-content space-between
          margin 5px 0 5px 0
        .footer-foot span:nth-child(1)
          font-family PingFangSC-Semibold
          font-size 12px
          margin 0 0 0 20px
        .footer-foot span:nth-child(2)
          font-family PingFangSC-Semibold
          font-size 12px
          margin 0 24px 0 0
        .footer-line
          width 240px
          border 0.5px solid #f0f0f0
          margin 6px 0 0 24px
</style>
