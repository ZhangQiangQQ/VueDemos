<template>
  <!-- <div>
<div>
<customized-nav />
  </div>-->
  <div style="width:1000px;background:#FFFFFF;border:1px solid #FFFFFF;margin:90px auto 0">
    <div class="home">
      <el-dialog class="dialog" :visible.sync="dialogVisible" style="width:1150px;margin-left:15%">
        <div class="dialog-title">
          <span>热门城市</span>
        </div>
        <div class="dialog-city-first">
          <span>北京</span>
          <span>天津</span>
          <span>大连</span>
          <span>上海</span>
          <span>南京</span>
          <span>苏州</span>
        </div>
        <div class="dialog-city-second">
          <span>杭州</span>
          <span>武汉</span>
          <span>广州</span>
          <span>深圳</span>
          <span>重庆</span>
          <span>成都</span>
        </div>
        <div class="dialog-province">
          <span>按省份选择</span>
        </div>
        <div class="dialog-cascader">
          <el-tooltip class="item" effect="light" placement="bottom-start">
            <el-input placeholder="请选择省份" suffix-icon="el-icon-arrow-down" v-model="provinceButton"></el-input>
            <div style="width:510px" slot="content">
              <span
                class="spanCity"
                @click="citys(item,index)"
                style="float:left;padding:10px 0 10px 10px"
                v-for="(item,index) in city"
                :key="index"
              >{{item.tag}}</span>
            </div>
          </el-tooltip>
          <el-tooltip class="item" effect="light" placement="bottom-end">
            <el-input
              placeholder="请选择城市"
              suffix-icon="el-icon-arrow-down"
              v-model="cityButton"
              style="margin:0 0 0 100px"
            ></el-input>
            <div style="width:510px" slot="content">
              <span
                class="spanCity"
                @click="citiss(item)"
                style="float:left;padding:10px 0 10px 10px"
                v-for="(item,index) in citis"
                :key="index"
              >{{item.tag}}</span>
            </div>
          </el-tooltip>
        </div>
        <div style="height:220px"></div>
      </el-dialog>
      <div class="joblist-search">
        <el-input
          v-model="provinceButton"
          @focus="next"
          suffix-icon="el-icon-arrow-down"
          style="width:77px;height:44px;font-size:14px;"
        ></el-input>
        <span class="joblist-after"></span>
        <el-select
          slot="prepend"
          v-model="company"
          style="width:77px;height:44px;font-size:14px"
          :label-in-value="true"
        >
          <el-option
            v-for="(item,index) in perList"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <span class="joblist-after"></span>
        <el-input v-model="searchContent" style="width:477px;" placeholder="请输入内容"></el-input>
        <el-button
          class="search-button"
          style="border-radius:0 2px 2px 0;"
          type="primary"
          @click="search"
          icon="el-icon-search"
        >搜索</el-button>
      </div>
      <div style="text-align:left;margin:4px 0 0 11%">
        <span style="font-size:12px;color:#617dcb">热门搜索：</span>
        <span style="font-size:12px;color:#7d8dcd">
          <a
            href="#"
            style="padding:0 0 0 5px;text-decoration:none"
            v-for="(item,index) in keywordList"
            :key="index"
          >{{item.content}}</a>
        </span>
      </div>
      <div class="carousel">
        <el-carousel :interval="5000">
          <el-carousel-item v-for="(item,index) in carouselImgs" :key="index">
            <img style="width:1000px" :src="item" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div style="text-align:left;color:#455379;font-size:14px;margin:10px 0 0 11%">热门企业</div>
      <div class="company">
        <vue-seamless-scroll :data="imgList" :class-option="optionLeft" class="seamless-warp2">
          <img v-for="(item,index) in imgList" :src="item.idView" :key="index" class="banner_img" />
        </vue-seamless-scroll>
      </div>
      <div class="tabs">
        <el-tabs v-model="activeName">
          <el-tab-pane label="为你推荐" name="first" v-if="recommend">
            <div class="demo">
              <div class="desc" v-for="(list,index) in listRecommend" :key="index">
                <div class="desc-first" @click="descOne(list.id)">
                  <span>{{list.positionName}}</span>
                  <span>{{list.salaryMin}}-{{list.salaryMax}}k</span>
                </div>

                <div
                  @click="descOne(list.id)"
                  class="desc-second"
                  v-if="list.workAgeMax == null"
                >{{$CodeToTag.CodeToTag([parseInt(parseInt(list.positionCatalog/100)*100/10000)*10000,parseInt(list.positionCatalog/100)*100,list.positionCatalog],positionCatalogList)[2]}} | 10年以上 | {{list.degreeMin|level}}</div>
                <div
                  class="desc-second"
                  v-else
                >{{$CodeToTag.CodeToTag([parseInt(parseInt(list.positionCatalog/100)*100/10000)*10000,parseInt(list.positionCatalog/100)*100,list.positionCatalog],positionCatalogList)[2]}} | {{list.workAgeMin}}-{{list.workAgeMax}}年 | {{list.degreeMin|level}}</div>
                <div class="line"></div>
                <div class="desc-third" @click="desc(list.company.id)">
                  <img
                    style="width:50px;margin:10px 0 0 5px"
                    :src="require('../assets/images/company1.jpg')"
                  />
                  <div class="third-content">
                    <span>{{list.company.companyName}}</span>
                    <span>{{list.company.size}}人 | {{list.company.industry-parseInt(list.company.industry/100)*100|industry}}</span>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="热门职位" name="second">
            <div class="demo" v-for="(list,index) in hotpositionList" :key="index">
              <div class="desc">
                <div class="desc-first">
                  <span>{{list.positionName}}</span>
                  <span>{{list.salaryMax}}-{{list.salaryMin}}k</span>
                </div>
                <div
                  class="desc-second"
                >{{list.positionCatalog}} | {{list.workAgeMax}}-{{list.workAgeMin}}年 | {{list.degreeMin}}</div>
                <div class="line"></div>
                <div class="desc-third">
                  <img
                    style="width:50px;margin:10px 0 0 5px"
                    :src="require('../assets/images/company1.jpg')"
                  />
                  <div class="third-content">
                    <span>迪卡侬</span>
                    <span>50-100人 | 电子商务，文化...</span>
                  </div>
                </div>
              </div>
              <div class="desc">
                <div class="desc-first">
                  <span>产品经理</span>
                  <span>4-5k</span>
                </div>
                <div class="desc-second">上海 徐汇区 | 1-3年 | 本科</div>
                <div class="line"></div>
                <div class="desc-third">
                  <img
                    style="width:50px;margin:10px 0 0 5px"
                    :src="require('../assets/images/company1.jpg')"
                  />
                  <div class="third-content">
                    <span>迪卡侬</span>
                    <span>50-100人 | 电子商务，文化...</span>
                  </div>
                </div>
              </div>
              <div class="desc">
                <div class="desc-first">
                  <span>产品经理</span>
                  <span>4-5k</span>
                </div>
                <div class="desc-second">上海 徐汇区 | 1-3年 | 本科</div>
                <div class="line"></div>
                <div class="desc-third">
                  <img
                    style="width:50px;margin:10px 0 0 5px"
                    :src="require('../assets/images/company1.jpg')"
                  />
                  <div class="third-content">
                    <span>迪卡侬</span>
                    <span>50-100人 | 电子商务，文化...</span>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="最新职位" name="third">
            <div class="demo">
              <div class="desc" v-for="(list,index) in newpositionList" :key="index">
                <div class="desc-first" @click="descOne(list.id)">
                  <span>{{list.positionName}}</span>
                  <span>{{list.salaryMin}}-{{list.salaryMax}}k</span>
                </div>
                <div
                  @click="descOne(list.id)"
                  class="desc-second"
                  v-if="list.workAgeMax == null"
                >{{$CodeToTag.CodeToTag([parseInt(parseInt(list.positionCatalog/100)*100/10000)*10000,parseInt(list.positionCatalog/100)*100,list.positionCatalog],positionCatalogList)[2]}} | 10年以上 | {{list.degreeMin|level}}</div>
                <div
                  class="desc-second"
                  v-else
                >{{$CodeToTag.CodeToTag([parseInt(parseInt(list.positionCatalog/100)*100/10000)*10000,parseInt(list.positionCatalog/100)*100,list.positionCatalog],positionCatalogList)[2]}} | {{list.workAgeMin}}-{{list.workAgeMax}}年 | {{list.degreeMin|level}}</div>
                <div class="line"></div>
                <div class="desc-third" @click="desc(list.company.id)">
                  <img
                    style="width:50px;margin:10px 0 0 5px"
                    :src="require('../assets/images/company1.jpg')"
                  />
                  <div class="third-content">
                    <span>{{list.company.companyName}}</span>
                    <span>{{list.company.size}}人 | {{list.company.industry-parseInt(list.company.industry/100)*100|industry}}</span>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="button">
        <el-button plain @click="search" style="width:210px;height:43px;font-size:14px">查看更多</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  carousel,
  recommendation,
  newposition,
  hotcompany,
  hotposition,
  hotkeyword,
  industry,
  allpositionCatalog,
  homeSearch,
  city
} from "apis/account";
import CustomizedNav from "components/customized-nav.vue";
export default {
  name: "home",
  components: {
    CustomizedNav
  },
  data() {
    return {
      positiId: "",
      positionCatalogList: [],
      provinceButton: "上海",
      cityButton: "",
      searchContent: "",
      animate: false,
      listRecommend: [],
      city: [],
      citis: [],
      recommend: true,
      activeName: "first",
      value: "上海",
      company: "职位",
      dialogVisible: false,
      perList: [
        {
          value: "111",
          label: "职位"
        },
        {
          value: "222",
          label: "公司"
        }
      ],
      carouselImgs: [
        require("../assets/images/qq.png"),
        require("../assets/images/dd.png"),
        require("../assets/images/yy.png")
      ],
      //热门企业
      imgList: [
        { id: 1, idView: require("../assets/images/company1.jpg") },
        { id: 3, idView: require("../assets/images/company4.png") },
        { id: 6, idView: require("../assets/images/company1.jpg") },
        { id: 1, idView: require("../assets/images/company1.jpg") },
        { id: 3, idView: require("../assets/images/company4.png") },
        { id: 6, idView: require("../assets/images/company1.jpg") },
        { id: 1, idView: require("../assets/images/company1.jpg") },
        { id: 3, idView: require("../assets/images/company4.png") },
        { id: 6, idView: require("../assets/images/company1.jpg") }
      ],
      keywordList: [
        { content: "前端" },
        { content: "java" },
        { content: "python" }
      ],
      hotpositionList: [],
      newpositionList: []
    };
  },
  computed: {
    optionLeft() {
      return {
        direction: 2,
        limitMoveNum: 4
      };
    }
  },
  methods: {
    next() {
      this.dialogVisible = true;
    },
    close() {
      this.dialogVisible = false;
    },
    // handleClick(e) {
    //   if (e.index == 1) {
    //   }
    //   this.$http.get("/home/recommended/position").then(res => {
    //     console.log("22222222222");
    //     console.log(res.data);
    //   });
    // },
    //轮播图
    carousel() {
      carousel()
        .then(res => {
          if (res.data.code == 200) {
          } else {
          }
        })
        .catch(error => {});
    },
    //tabs--推荐
    recommendation() {
      recommendation()
        .then(res => {
          if (res.data.code == 200) {
            this.listRecommend = res.data.data;
          } else {
          }
        })
        .catch(error => {});
    },
    //tabs--最新
    new() {
      newposition()
        .then(res => {
          if (res.data.code == 200) {
            this.newpositionList = res.data.data;
          } else {
          }
        })
        .catch(error => {});
    },
    //热门企业
    hotcompany() {
      hotcompany()
        .then(res => {
          if (res.data.code == 200) {
          } else {
          }
        })
        .catch(error => {});
    },
    //热门词
    hotkeyword() {
      this.$http
        .get("/popular/keyword")
        .then(res => {
          if (res.data.code == 200) {
          } else {
          }
        })
        .catch(error => {});
    },
    //热门职位
    hotposition() {
      this.$http.get("/popular/position").then(res => {
        if (res.data.code == 200) {
          //
          // console.log(res)
        }
      });
    },
    // 行业
    industry() {
      industry()
        .then(res => {
          if (res.data.code == 200) {
          } else {
          }
        })
        .catch(error => {});
    },
    //获取所有职位类型
    allpositionCatalog() {
      this.$http.get("/constant/positionCatalog").then(res => {
        if (res.data.code == 200) {
          this.positionCatalogList = res.data.data;
        }
      });
    },
    handleOpenMenu() {},
    handleChangeLocation() {},
    doLogin() {
      this.showLoginModal = false;
      this.isLogin = true;
    },
    search() {
      let params = {
        county: this.citycode,
        keyword: this.searchContent,
        pageNum: 0,
        pageSize: 10,
        province: this.provincecode
      };
      homeSearch(params).then(res => {
        if (res.data.code == 200) {
          this.$store.state.lsit = res.data.data;
          this.$router.push({
            path: "/joblist",
            query: {
              thisId: "123"
            }
          });
        }
      });
    },
    desc(id) {
      this.$router.push({
        path: "/position",
        query: {
          id: id
        }
      });
    },
    descOne(id) {
      this.$router.push({
        path: "/station",
        query: {
          id: id
        }
      });
    },
    //城市
    citise() {
      city().then(res => {
        if (res.data.code == 200) {
          this.city = res.data.data;
        }
      });
    },
    citys(item, index) {
      this.provinceButton = item.tag;
      this.provincecode = item.code;
      this.curr = index;
      this.citis = this.city[this.curr].children;
      this.sliceArr = item.children.slice(0, 5);
    },
    citiss(item) {
      this.cityButton = item.tag;
      this.citycode = item.code;
      this.sliceArr.forEach(function(value) {
        if (value.tag == item.tag) {
          console.log(item);
        }
      });
    },
    doLogot() {
      this.isLogin = false;
    },
    doRegister() {},
    doResetPwd() {},
    redirectToSearchResult() {
      this.$router.push({ path: "/search" });
    }
  },
  created() {
    this.allpositionCatalog();
    this.industry();
    this.carousel();
    this.hotcompany();
    this.hotkeyword();
    this.hotposition();
    this.new();
    this.citise();
    this.recommendation();
    if (this.recommend == false) {
      this.activeName = "second";
    } else {
      this.activeName = "first";
    }
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
  },
  // mounted() {
  //   this.companyScrolling();
  // }
};
</script>


<style lang="stylus">
  .home
    .dialog
      display flex
      flex-direction column
      .el-icon-close:before
        font-size 24px
      .dialog-title span
        font-size 14.5px
        font-family PingFangSC-Regular
        color #959595
        float left
        margin -40px 0 0 0
      .dialog-city-first
        font-size 14px
        font-family PingFangSC-Regular
        color #1d366e
        float left
        margin -10px 0 0 0
      .dialog-city-first span
        padding 0 40px 0 0  
      .dialog-city-second
        font-size 14px
        font-family PingFangSC-Regular
        color #1d366e
        text-align left 
        margin 25px 0 0 0
      .dialog-city-second span
        padding 0 40px 0 0
      .dialog-province span
        font-size 14.5px
        font-family PingFangSC-Regular
        color #909090
        float left
        margin 18px 0 0 0
      .dialog-cascader
        display flex
        flex-direction row
        float left
        margin 50px 0 0 -73px
    .joblist-search
      width 802px
      height 44px
      background white
      margin 20px 0 0 10%
      border 0.75px solid rgba(229,229,229,1);
      .joblist-after                  
        border 0.5px solid #dbdbdb
      .el-icon-search:before
        color white
        font-size 17px 
      .el-input__inner
        border 0px solid red
      .search-button
        width 167px
        height 44px
        font-size 12px
        color white
      .search-button:hover
        border-color #7d8dcd 
    .carousel
      margin 3px 0 0 0
      width 1000px
    .company
      border: solid 1px #eee
      margin: 10px auto
      overflow hidden
      width 800px
    .company img
      height 100px
      padding 0 15px 0 0 
    .tabs
      width 800px
      margin 0 0 0 9%
      .el-tabs
        margin 0 0 0 7px 
        .demo
          display flex
          flex-direction row
          flex-wrap  wrap
          .desc:hover
            background #f7f7f7
            box-shadow 1px 1px 10px 0px rgba(84,111,212,0.50)
          .desc
            width 258px
            height 143px
            text-align left
            margin 3px 3px 0 0 
            background #FFFFFF
            border 0.75px solid rgba(229,229,229,1);
            .desc-first
              display flex
              flex-direction row
              justify-content space-between
            .desc-first span:nth-child(1)
              margin 15px 0 0 5px
              color #61687c
              font-size 14px
            .desc-first span:nth-child(2)
              margin 15px 15px 0 0
              color #ff7a1a
              font-size 14px
            .desc-second
              text-align left 
              margin 5px 0 0 5px
              font-size 12px
              color #61687c
            .line
              width 250px
              border 0.5px solid #f5F5F5
              margin 10px 0 0 5px
            .desc-third 
              display flex
              flex-direction row
              .third-content
                display flex
                flex-direction column
                margin 0 0 0 10px
              .third-content span:nth-child(1)
                margin 10px 0 0 0
                color #4a90e2
              .third-content span:nth-child(2)
                margin 10px 0 0 0
                color #909090
                font-size 12px
    .button
      margin 34px 0 20px 0             
</style>

<style lang="stylus">
 .el-tabs__nav-wrap:after
   background-color #f0f0f0
  a  
    color #1d366e
  a:active
    color #617dcb
  a:hover
    color #7d8dcd  
  .seamless-warp2 
    overflow hidden
    width 1500px
    border 0px solid red
  .banner_img
    height 100px 
    width 100px     
    margin 3px 0 0 0  
  .el-tabs__nav-wrap:after
    background-color #ffffff;  
    
</style>