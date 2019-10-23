<template>
  <div class="from">
    <div class="fromfirst">
      <div class="fromfirst-one">
        职位类型：
        
        <span>{{$CodeToTag.CodeToTag([parseInt(parseInt(fromData.target.positionCatalogs[0].code/100)*100/10000)*10000,parseInt(fromData.target.positionCatalogs[0].code/100)*100,fromData.target.positionCatalogs[0].code],positionList)[2]}}</span>
      </div>
      <div class="fromfirst-one">
        企业行业：
        <span>{{fromData.target.industries[0].code-parseInt(fromData.target.industries[0].code/100)*100|industry}}</span>
      </div>
      <div class="fromfirst-one">
        求职状态：
        <span>{{fromData.target.jobSearchStatus|jobSearchStatus}}</span>
      </div>
    </div>
    <div class="fromsecond">
      <div class="fromfirst-two">
        工作城市：
        <span>{{$CodeToTag.CodeToTag([fromData.target.province,fromData.target.county],citysal)[0]+$CodeToTag.CodeToTag([fromData.target.province,fromData.target.county],citysal)[1]}}</span>
      </div>
      <div class="fromfirst-two">
        薪资范围：
        <span>{{fromData.target.salaryMin}}K-{{fromData.target.salaryMax}}K</span>
      </div>
      <div class="fromfirst-two">
        工作类型：
        <span>{{fromData.target.jobType|jobType}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "from",
  props: ["fromData"],
  data() {
    return {
      // ruleForm: {
      //    postType:"",
      //    city:"",
      //    trade:"",
      //    scope:"",
      //    status:"",
      //    jobType:""
      // },
      citysal: [],
      positionList:[]
    };
  },
  created() {
    //如果后台有个人之前填的数据，需要先把数据格式化后复制给子组件，可以进行修改操作
    console.log(this.fromData,'13123123123123123123')
    this.ruleForm = Object.assign({}, this.fromData);
    this.citise();
    this.positionCatalog()
  },
  methods: {
    onSubmit() {
      //如果每次保存都要存后台，就在这里写发送时间，如果需要整体保存，就在父组件整体操作
      const flag = {
        index: this.index,
        data: this.ruleForm
      };
      this.$emit("setFromList", flag);
    },
    //城市
    citise() {
      this.$http.get("/constant/district").then(res => {
        if (res.data.code == 200) {
          this.citysal = res.data.data;
        }
      });
    },
    //获取所有职位类型
    positionCatalog() {
      this.$http.get("/constant/positionCatalog").then(res => {
        if (res.data.code == 200) {
          this.positionList = res.data.data
        }
      });
    },
  },
  filters: {
    level(level) {
      const map = ["初中及以下", "职中", "大专", "本科", "硕士", "博士"];
      return map[level];
    },
     jobSearchStatus(jobSearchStatus) {
      const map = ["离职-随时到岗", "离职-延时到岗", "在职考虑机会", "在职暂不考虑"];
      return map[jobSearchStatus];
    },
     jobType(jobType) {
      const map = ["全职", "兼职", "实习"];
      return map[jobType];
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

<style lang="stylus" scoped>
  .from
    display flex
    flex-direction row
    font-size 15px
    color #61687c
    text-align left
    margin 10px 0 -20px 0
    .fromfirst 
      margin 0 0 0 50px
      .fromfirst-one
        margin 10px 0 0 0 
    .fromsecond 
      margin 0 0 0 150px
      .fromfirst-two
        margin 10px 0 0 0     
</style>