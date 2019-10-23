<template>
  <div class="station">
    <div v-if="deliverOne">
      <deliver :from-data="this.companyId" @backEmit='backEmit(arguments)'></deliver>
    </div>
    <div class="station-nav" v-if="stationNav">
      <div class="station-nav-name">
        <span>{{positionIdList.positionName}}</span>
        <span>{{positionIdList.salaryMin}}-{{positionIdList.salaryMax}}k</span>
      </div>
      <div class="station-nav-content">
        <div class="content-nav" style='width:400px'>
          
      <span>{{$CodeToTag.CodeToTag([positionIdList.workAddress.province,positionIdList.workAddress.county],citysal)[0]+' ' +' '+$CodeToTag.CodeToTag([positionIdList.workAddress.province,positionIdList.workAddress.county],citysal)[1]}} | {{positionIdList.workAgeMin}}-{{positionIdList.workAgeMax}}年 | {{positionIdList.isGraduate}} | {{positionIdList.jobType}}</span>
        </div>
        <div class="content-article">
          <span>发布时间：{{positionIdList.publishedTime | formatDate}}</span>
        </div>
        <div style="margin:0 0 0 325px" v-if="al">
          <span v-if="almsg">
            <el-button
              id="deliver"
              style="width:140px;height:40px;margin:0 20px 0 0"
              type="primary"
              @click="showdeliver"
            >投递简历</el-button>
          </span>
          <span v-if="msg">
            <el-button
              type="primary"
              icon="el-icon-check"
              style="width:140px;height:40px;margin:0 20px 0 0;background:#617dbc;border:0px solid red"
            >已投递</el-button>
          </span> 
        </div>
        <div v-if="all">
          <span v-if="isshowCollect">
            <el-button style="width:140px;height:40px" @click="iscollect()" plain>收藏</el-button>
          </span>
          <span v-if="showCollect">
            <el-button
              type="primary"
              icon="el-icon-star-off"
              style="width:140px;height:40px;background:#617dbc;border:0px solid red"
            >已收藏</el-button>
          </span>
        </div>
        <div style="margin:0 0 0 330px" v-if="showDeliver">
          <span style="margin:0 20px 0 0">
            <el-button
              style="width:280px;height:40px;background:#9b9b9b;border:1px solid #9b9b9b"
              type="primary"
            >已失效</el-button>
          </span>
        </div>
      </div>
      <el-dialog :visible.sync="dialogVisible" width="30%" >
        <span style="font-size:16px;color:#455379">简历中要至少要填写"基本信息"和"校园经历",否则无法投递呦</span>
        <span slot="footer" class="dialog-footer">
          <el-button
            style="width:94px;height:34px"
            @click="dialogVisible = false"
            class="cancel"
          >取 消</el-button>
          <el-button
            type="primary"
            style="margin-right:160px;width:94px;height:34px;"
            @click="dialogVisible = false"
          >完善简历</el-button>
        </span>
      </el-dialog>
      <el-dialog :visible.sync="dialogVisibleOne" width="30%" >
        <span style="font-size:34px;color:#52c41a;">
          <i class="el-icon-circle-check"></i>
        </span>
        <br />
        <span style="font-size:16px;color:#455379;">投递成功，静候佳音吧~~~</span>
        <span slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            @click="isdeliver()"
            style="margin:0 40% 5px 0;width:94px;height:34px"
          >好的</el-button>
        </span>
      </el-dialog>
    </div>
    <div class="station-foot" v-if="stationFoot">
      <div class="station-foot-content">
        <p>职位描述</p>
        <p>
          {{positionIdList.description}}
        </p>
        <p>招聘要求</p>
        <p>
          {{positionIdList.requirement}}
        </p>
        <div class="station-foot-foot">
          <div class="station-foot-foot-one">工作地点:</div>
          <div class="station-foot-foot-two">
            <span>{{$CodeToTag.CodeToTag([positionIdList.workAddress.province,positionIdList.workAddress.county],citysal)[0]+' ' +' '+$CodeToTag.CodeToTag([positionIdList.workAddress.province,positionIdList.workAddress.county],citysal)[1]}} {{positionIdList.workAddress.detail}}</span>
            <span>查看地图</span>
          </div>
          <baidu-map
            class="bm-view"
            :center="center"
            :zoom="zoom"
            @ready="handler"
            ak="LGSF5bLoRGYzsOBrr20kXazopMHxLgL1"
          ></baidu-map>
        </div>
      </div>
      <div class="station-foot-aside">
        <div class="station-foot-aside-nav">
          <div class="station-foot-aside-nav-img">
            <img style="width:100px;height:100px" :src="url" />
          </div>
          <div class="station-foot-aside-nav-article">
            <div class="company-name">
              <span>{{companyIdList.companyName}}</span>
            </div>
            <div class="company-type">
              <span>
                <i class="el-icon-menu"></i> {{companyIdList.industry-parseInt(companyIdList.industry/100)*100|industry}}
              </span>
            </div>
            <div class="company-status">
              <span>
                <i class="el-icon-s-data"></i> {{companyIdList.nature|level}}
              </span>
            </div>
            <div class="company-num">
              <span>
                <i class="el-icon-coordinate"></i> {{companyIdList.size}}人
              </span>
            </div>
          </div>
        </div>
        <div class="station-foot-aside-footer">
          <div class="footer-nav">
            <span>相似职位</span>
            <span @click="more">查看更多 》</span>
          </div>
          <div class="aside-footer" v-for="(list,index) in hotpositionList.slice(0,6)" :key="index" @click="nextjoblist(list.id)">
            <div class="company-post">
              <span>{{list.positionName}}</span>
              <span>{{list.salaryMin}}-{{list.salaryMax}}k</span>
            </div>
            <div class="company-address">
              <span>{{companyName}}</span>
              
              <span>{{$CodeToTag.CodeToTag([list.workAddress.province,list.workAddress.county],citysal)[0]+$CodeToTag.CodeToTag([list.workAddress.province,list.workAddress.county],citysal)[1]}}</span>
            </div>
            <div class="line"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>    

<script>
import Deliver from "components/Deliver.vue";
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import {
  showdeliver,
  companyDetail,
  positionlist,
  positionDetail,
  showdeli,
  showcoll,
  city,
  iscollect,
  brief
} from "apis/account";
import { error } from 'util';
export default {
  name: "station",
  components: {
    Deliver,
    BaiduMap
  },
  data() {
    return {
      companyId:'',
      positiId:'',
      companyName:'',
      hotpositionList:[],
      positionIdList:[],
      companyIdList:[],
      radio:3,
      dialogVisibleTwo:false,
      almsg:true,
      msg:false,
      center: { lng: 0, lat: 0 },
      zoom: 3,
      num: 1,
      deliverOne: false,
      stationNav: true,
      stationFoot: true,
      dialogVisibleOne: false,
      dialogVisible: false,
      // map:false,
      // mapList:false,
      showDeliver: false,
      isshowCollect: true,
      showCollect: false,
      isshow: true,
      url:'',
      citysal:[],
      resumesId:""
    };
  },
  methods: {
    //返回（$emit）
      backEmit(c) {
      this.dialogVisibleOne = c[0];
      this.stationNav = c[1];
      this.stationFoot = c[1];
      this.deliverOne = c[0];
      },
    //确认投递
    showdeliver() {
     showdeliver(this.positiId,this.resumesId).then(res => {
          if (res.data.code == 200) {
            this.almsg = false
            this.msg = true
            this.dialogVisibleTwo = false
            this.dialogVisibleOne = true
          }
        }).catch(error => {
          this.dialogVisibleTwo = false
          this.dialogVisibleOne = false
          this.$message({
              message:error.response.data.message,
              type: 'warning'
            });
      });
    },
    nextjoblist(id) {
      this.positiId = id
      this.positionId()
    },
    more() {
      this.$router.push({path:'/joblist'})
    },
    // 地图加载完毕事件
    handler() {
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
    },
    //获取公司详情
    comId() {
      companyDetail(this.companyId).then(res => {
        if (res.data.code == 200) {
          this.companyIdList = res.data.data;
        }else{

        }
      }).catch(error => {

      });
    },
    //岗位列表
      positionCompany() {
        positionlist(this.companyId).then(res => {
          if (res.data.code == 200) {
            this.hotpositionList = res.data.data.list
          }else{

          }
      }).catch(error =>{
        
      });
      },
    //获取岗位详情
      positionId() {
        positionDetail(this.positiId).then(res => {
          this.companyId = res.data.data.company.id
          this.companyName = res.data.data.company.companyName
          if (res.data.code == 200) {
            this.positionIdList = res.data.data
            this.url = res.data.data.company.logoUrl
            if(this.positionIdList.isGraduate == true) {
              this.positionIdList.isGraduate = '应届生'
            }else{
              this.positionIdList.isGraduate = '非应届生'
            }

            if(this.positionIdList.jobType == 0) {
              this.positionIdList.jobType = '全职'
            }else if(this.positionIdList.jobType == 1) {
              this.positionIdList.jobType = '兼职'
            }else{
              this.positionIdList.jobType = '实习'
            }
            if(res.data.data.isValid == false) {
              this.showDeliver = true
              this.isshowCollect = false
              this.showCollect = false
              this.msg = false
              this.almsg = false
            }else{
              this.showDeliver = false
              this.al = true
              this.all = true
              
            }
            this.positionCompany(),
            this.comId()
          }
        });
      },
    //判断简历是否投递
      showdeli() {
        showdeli(this.positiId).then(res => {
          if (res.data.code == 200) {
            if(res.data.data === true) {
              this.almsg = false
              this.msg = true
            }else{
              this.almsg = true
              this.msg = false
            }
          }
        }).catch(error => {

        });
      },
       //判断简历是否收藏
      showcoll() {
        showcoll(this.positiId).then(res => {
          if (res.data.code == 200) {
            if(res.data.data === false) {
              this.showCollect = false
              this.isshowCollect = true
            }else{
              this.showCollect = true
              this.isshowCollect = false
            }
          }
        });
      },
    //向岗位投递简历
    isclick() {
        this.dialogVisibleTwo = true
        
      // if(this.num == 1) {
      //     this.dialogVisible = true
      // }else{
      //     this.dialogVisibleOne = true
      // }
      // this.showDeliver = false,
      // this.showCollect = false,
      // this.map = true,
      // this.mapList = true
    },
    //城市
      citise() {
        city().then(res => {
          if (res.data.code == 200) {
            this.citysal = res.data.data;
          }else{

          }
        }).catch(error => {

        });
      },
    iscollect() {
        iscollect(this.positiId).then(res => {
          if (res.data.code == 200) {
            this.isshowCollect = false
            this.showCollect = true
          }else{
          }
        }).catch(error => {
          this.$message({
              message:error.response.data.message,
              type: 'warning'
            });
      });
    },
    //获取简历简讯
      brief () {
        brief().then(res => {
          if (res.data.code == 200) {
            this.resumesId = res.data.data.defaultResumeId
          }else{}
        }).catch(error => {
          
            });
      },
    isdeliver() {
      this.dialogVisibleOne = false;
      this.stationNav = false;
      this.stationFoot = false;
      this.deliverOne = true;
    }
  },
  created() {
    this.brief()
    this.citise()
    this.positiId = this.$route.query.id;
    this.positionId();
    this.showdeli();
    this.showcoll();
  },
   filters:{
    level(level){
      const map=["国有企业","外资企业","合资企业","民营企业",'事业单位']
      return map[level]
    },
    industry(industry){
      if(industry == 1) {
        const map=['',"酒店/餐饮","旅游/度假","医疗/护理/美容/保健/卫生服务"]
        return map[industry]
      }
      if(industry == 2) {
        const map=['',"计算机软件","网络游戏","IT服务(系统/数据/维护)","计算机硬件",'互联网/电子商务','电子技术/半导体/集成电路','通信、电信运营/增值服务','通信/电信/网络设备']
        return map[industry]
      }
      if(industry == 3) {
        const map=['',"保险","银行","信托/担保/拍卖/典当","基金/证券/期货/投资"]
        return map[industry]
      }
      if(industry == 4) {
        const map=['',"零售/批发","贸易/进出口","快速消费品（食品/饮料/烟酒/日化）","耐用消耗品",'租赁服务']
        return map[industry]
      }
      if(industry == 5) {
        const map=['',"文体教育|工艺美术","教育/培训/院校","礼品/玩具/工艺美术/收藏品/奢侈品"]
        return map[industry]
      }
      if(industry == 6) {
        const map=['',"办公用品及设备","航空/航天研究与制造","医疗设备/器械",'加工制造（原料加工/模具）','医药/生物工程','大型设备/机电设备/重工业','印刷/包装/造纸','汽车/摩托车','仪器仪表及工业自动化']
        return map[industry]
      }
      if(industry == 7) {
        const map=['',"房地产/建筑/建材/工程","物业管理/商业中心","家居/室内设计/装饰装潢"]
        return map[industry]
      }
      if(industry == 8) {
        const map=['',"专业服务/咨询(财会/法律/人力资源等)","广告/会展/公关","中介服务",'外包服务','检验/检测/认证']
        return map[industry]
      }
      if(industry == 9) {
        const map=['',"娱乐/体育/休闲","媒体/出版/影视/文化传媒"]
        return map[industry]
      }
      if(industry == 10) {
        const map=['',"跨领域经营","农/林/牧/渔",'其他']
        return map[industry]
      }
      if(industry == 11) {
        const map=['',"交通/运输",'物流/仓储']
        return map[industry]
      }
      if(industry == 12) {
        const map=['',"环保",'石油/石化/化工','能源/矿产/采掘/冶炼','电气/电力/水利']
        return map[industry]
      }
      if(industry == 13) {
        const map=['',"学术/科研",'政府/公共事业/非盈利机构']
        return map[industry]
      }
    }
  },
};
</script>

<style lang="stylus">
  .el-button.is-plain:hover 
    border-color #7d8dcd
    color #7d8dcd
    background white
  .station
    margin 80px 0 0 0
    display flex
    flex-direction column
    .station-nav
      margin 3% 0 0 0
      display flex
      flex-direction column
      .station-nav-name
        display flex
        flex-direction row
      .station-nav-name span
        padding 0 0 0 2%
      .station-nav-name span:nth-child(1)
        font-size 32px
        color #1d366e
        font-weight bold
      .station-nav-name span:nth-child(2)
        font-size 28px
        color #617dcb
        font-weight bold
        line-height 45px
        padding  0 0 0 5%
      .station-nav-content
        display flex
        flex-direction row
        
        font-size 15px
        line-height 60px
        .content-nav
          color #455379
          font-size 14px
          margin 0 0 0 10px
          text-align left
        .content-article 
          color #9b9b9b
          font-size 14px
          margin 0 0 0 200px
          width 200px
      .cancel:hover
        background #1d366e  
        color white
        border-color #1d366e   
    .station-foot
      display flex
      flex-direction row
      margin 1% 0 0 0
      .station-foot-content
        display flex
        flex-direction column
        width 75%
        text-align left 
        background-color white
      .station-foot-content p:nth-child(1)  
        font-size 16px
        color #617dcb
        margin 17px 0 0 42px
      .station-foot-content p:nth-child(2)
        font-size 14px
        color #61687c
        margin 10px 0 10px 42px 
        width 500px
        white-space pre-line
      .station-foot-content p:nth-child(3)  
        font-size 16px
        color #617dcb
        margin 17px 0 0 42px
      .station-foot-content p:nth-child(4)
        font-size 14px
        color #61687c
        margin 10px 0 -20px 42px 
        width 500px
        white-space pre-line  
      .station-foot-aside
        width 24%
        background-color white
        margin 0 0 0 1% 
      .station-foot-aside-nav
        display flex
        flex-direction row
        .station-foot-aside-nav-img
          margin 6% 0 0 6%
        .station-foot-aside-nav-article
          margin 6% 0 0 6%
          text-align left
          .company-name
            font-size 25px
            font-weight bold
            color #1d366e
          .company-type
            padding  4% 0 0 0
            font-size 13px
            color #636f8d
          .company-status
            padding  4% 0 0 0
            font-size 13px
            color #636f8d
          .company-num
            padding  4% 0 0 0
            font-size 13px
            color #636f8d
      .station-foot-aside-footer
        display flex
        flex-direction column
        margin 0 0 0 0
        .footer-nav
          display flex
          flex-direction row
          justify-content space-between
          padding 24px 0 0 0
        .footer-nav span:nth-child(1)
          font-family PingFangSC-Semibold
          color #1d366e
          font-size 14px
          margin 0 0 0 6% 
        .footer-nav span:nth-child(2)
          font-family PingFangSC-Semibold
          color #617DCB
          font-size 12px 
          margin 0 4% 0 0
        .aside-footer
          margin 7px 0 0 0  
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
      .station-foot-content span
        margin 0 0 0 2%
        color #6a7184
        font-size 14px
        padding 1% 0 0 0 
      .station-foot-foot
        display flex
        flex-direction column
        margin 5% 0 0 0
        .station-foot-foot-one
          margin 0 0 0 40px
          font-size 14px
          color #1d366e 
        .station-foot-foot-two
          display flex
          flex-direction row
          justify-content space-between
          font-size 14px
          color #61687c
          margin 0 0 0 20px
        .bm-view
          margin 10px 0 20px 42px
          width 880px
          height 70px
        .anchorBL
          display none   
        .station-foot-foot-two span:nth-child(1)
          font-size 13px
          font-weight bold  
        .station-foot-foot-two span:nth-child(2)
          margin 0 38px 0 0
          font-size 13.5px
          font-weight bold
          color #6ec5d2
        .station-foot-foot-three
          margin 0 0 0 2%                     
</style>
