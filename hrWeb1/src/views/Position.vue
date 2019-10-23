<template>
  <div class="position">
    <div class="positon-nav">
      <div class="block">
        <img style="width:100px;height:100px" :src="url" />
      </div>
      <div class="aside">
        <div class="aside-nav" @click="isclick()">{{this.companyIdList.companyName}}</div>
        <div class="aside-footer">
          <span>
            <i class="el-icon-menu"></i>
          </span>
          <span>{{this.companyIdList.industry-parseInt(this.companyIdList.industry/100)*100|industry}}</span>
          <span>
            <i class="el-icon-s-data"></i>
          </span>
          <span>{{this.companyIdList.nature|level}}</span>
          <span>
            <i class="el-icon-coordinate"></i>
          </span>
          <span>{{this.companyIdList.size}} 人</span>
        </div>
      </div>
    </div>
    <div class="positon-content">
      <div class="tab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="企业信息" name="first">
            <div class="information" v-if="information">
              <p class="company">公司介绍:</p>
              <p class="company-content">
                {{this.companyIdList.description}}
                <!-- 技术驱动的产品型人力资源服务公司
                <br />
                <br />公司近300名员工，70%的领域专家、产品经理、开发工程师。
                <br />
                <br />上海、无锡、深圳、北京均设有研发中心，倡导以技术推动人力资源管理变革。
                <br />
                <br />累计融资额最高的劳动力综合管理公司
                <br />
                <br />全美顶级基金DCM、光速、启明创投联袂注资，融资总额超3亿元，市值超10亿人民币。拥有线下
                <br />人力灵活用工服务，全面推动连锁服务行业人力管理新篇章！
                <br />
                <br />累计服务企业和员工最多的HRSaaS公司
                <br />
                <br />服务了数千家各领域头部企业，服务企业总数超过15万家，覆盖员工超过300万.
                <br />
                <br />涵盖了餐饮服务、零售连锁、安保物业、生产制造等数十个行业。-->
              </p>
              <div class="positon-footer">
                <div class="address">
                  <p class="company-address">公司地址:</p>
                </div>
                <div class="map-address">
                  <span
                    class="map-address-span"
                  >{{$CodeToTag.CodeToTag([this.companyIdList.address.province,this.companyIdList.address.county],citysal)[0]+$CodeToTag.CodeToTag([this.companyIdList.address.province,this.companyIdList.address.county],citysal)[1]}}{{this.companyIdList.address.detail}}</span>
                  <span class="map-address-map">查看地图</span>
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
          </el-tab-pane>
          <el-tab-pane label="在招职位" name="second">
            <div class="postType">
              <div style="text-align:left" class="list">
                <span
                  class="postType-span"
                  style="margin:10px 0 0 0;font-size:13px;padding:0 25px 0 0;color:#455379"
                >职位类型：</span>
                <!-- <span
                  class="posttype-span"
                >全部（{{this.positionCatalogList}}）</span> -->
                <span
                  class="posttype-span"
                >销售|客服|市场（{{this.positionCatalogList.total}}）</span>
                <!-- <span
                  class="posttype-span"
                >销售主管（{{this.positionCatalogList}}）</span> -->
                
              </div>
              <div v-for="(list,index) in tableData" :key="index" @click="next(list.id)">
                <div class="position-tab">
                  <div style="font-size:15px;margin:0 0 0 15px;width:200px;text-align:left">{{list.positionName}}</div>
                  <div v-if='list.workAgeMax == null' style="margin:0 0 0 0;width:300px;text-align:left;">{{$CodeToTag.CodeToTag([list.workAddress.province,list.workAddress.county],citysal)[0]+$CodeToTag.CodeToTag([list.workAddress.province,list.workAddress.county],citysal)[1]}} | 10年以上 | {{list.degreeMin|position}}</div>
                  <div v-else style="margin:0 0 0 0;width:300px;text-align:left;">{{$CodeToTag.CodeToTag([list.workAddress.province,list.workAddress.county],citysal)[0]+$CodeToTag.CodeToTag([list.workAddress.province,list.workAddress.county],citysal)[1]}} | {{list.workAgeMin}}-{{list.workAgeMax}}年 | {{list.degreeMin|position}}</div>
                  <div style="margin:0 0 0 0;width:100px;text-align:left;">{{list.salaryMin}}-{{list.salaryMax}}k</div>
                  <div style="margin:0 0 0 0">{{list.publishedTime | formatDate}}</div>
                </div>
                <div class="line-tab"></div>
              </div>
              <div class="footer-pagination" style="margin:15px 0 15px 0">
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
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import {
  companyDetail,
  positionlist,
  positionCatalog,
  city,
  allpositionCatalog
} from "apis/account";
import { error } from 'util';
export default {
  name: "position",
  components: {
    BaiduMap
  },
  data() {
    return {
      page: {
                total: 0,
                pageSize: 10,
                current: 1,
                pageSizeOpts: [10,20,30]
            },
      companId:'',
      citysal:[],
      time:'',
      companyIdList:{},
      center: { lng: 0.2, lat: 0.1 },
      zoom: 3,
      table: false,
      information: true,
      activeName: "first",
      posiCatalogList:[],
      url:
        "https://yinlinkrc-test.oss-cn-shanghai.aliyuncs.com/logo/company/2019-08-31/e747bdbb1f774fdd9da33eb92b4d447a.png",
      tableData: [],
      positionCatalog:'',
      positionCatalogList:{}
    };
  },
  methods: {
    // 地图加载完毕事件
    handler() {
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
    },
    isclick() {
      this.table = true;
      this.information = false;
    },
    //获取公司详情
    companyId() {
      companyDetail(this.companId).then(res => {
        if (res.data.code == 200) {
          this.companyIdList = res.data.data;
        }else{
        }
      }).catch(error => {
      });
    },
    //获取岗位列表
    handleClick(e) {
      if (e.index == 1) {
        let params = {
          pageNum:this.page.current-1,pageSize:this.page.pageSize,positionCatalog:this.positionCatalog
        }
      positionlist(this.companId,params).then(res => {
          if (res.data.code == 200) {
            this.tableData = res.data.data.list;
            this.page.total = res.data.data.total
          }
      }).catch(error => {
        
      });
      }
    },
    //岗位分类
    positionCatalog() {
      positionCatalog(this.companId).then(res => {
        if (res.data.code == 200) {
          this.positionCatalogList = res.data.data;
          this.positionCatalog = res.data.data.list[0].positionCatalog;
        }else{}
      }).catch(error => {

      });
    },
    handleSizeChange(val) {
      this.page.pageSize = val
      this.page.current = 1
      let params = {
        pageNum:this.page.current-1,
        pageSize:this.page.pageSize
      }
      positionlist(this.companId,params).then(res => {
          if (res.data.code == 200) {
            this.tableData = res.data.data.list;
            this.page.total = res.data.data.total
            var time = this.tableData[0].publishedTime
            this.changeTime(time)
          }
      });
    },
    handleCurrentChange(val) {
      this.page.current = val
       let params = {
        pageNum:this.page.current-1,
        pageSize:this.page.pageSize
      }
      positionlist(this.companId,params).then(res => {
          if (res.data.code == 200) {
            this.tableData = res.data.data.list;
            this.page.total = res.data.data.total
            var time = this.tableData[0].publishedTime
            this.changeTime(time)
          }
      });
    },
    next(id) {
      this.$router.push({ path: "/station",query:{
            id: id
          }});
    },
    changeTime(time) {
      var commonTime = "";
      if (time) {
        var unixTimestamp = new Date(time * 1);
        commonTime = unixTimestamp.toLocaleString();
        this.time = commonTime
      }
      return commonTime;
      
      
    },
    //城市
      citise() {
        city().then(res => {
          if (res.data.code == 200) {
            this.citysal = res.data.data;
          }
        });
      },
      //获取所有职位类型
      allpositionCatalog() {
        allpositionCatalog().then(res => {
          if (res.data.code == 200) {
            this.posiCatalogList = res.data.data
          }else{}
        }).catch(error => {

        });
      },
  },
   
  created() {
    this.allpositionCatalog()
    this.companId = this.$route.query.id
    this.citise() 
    this.companyId();
    this.positionCatalog();
  },
  filters:{
    position(position) {
      const map = ["初中及以下", "职中", "大专", "本科", "硕士", "博士"];
      return map[position];
    },
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
  .el-tabs__item
    color #1d366e
  .el-tabs__item.is-active
    color #617DCB 
  .el-tabs__active-bar
    background-color #617DCB    
  .position 
    display flex
    flex-direction column
    margin 100px auto 0 
    width 1000px
    background-color white
    .positon-nav 
      display flex
      flex-direction row
      .block
        margin 30px 0 0 30px
      .aside
        .aside-nav
          text-align left 
          font-size 30px
          color #1d366e
          font-weight bold
          padding 0 0 0 10px 
          margin 35px 0 0 0  
        .aside-footer
          margin 20px 0 0 0   
        .aside-footer span
          padding 0 0 0 10px 
    .positon-content 
      .tab 
        margin 20px 0 0 25px
        .el-tabs__item
          font-size 14px
          font-weight 800
        .position-tab
          display flex
          flex-direction row 
          margin 15px 0 0 90px
          font-size 14px 
        .line-tab 
          width 800px
          border 0.5px solid #e5e5e5
          margin 15px 0 0 90px 
        .postType span
          font-size 13px 
          color #455379
        .postType span:hover
          color #617dcb 
        .el-tabs__nav-wrap:after 
          background-color white
          z-index 1
        .company
          text-align left
          font-size 14px
          color #1d366e
          margin 5px 0 0 0
          font-weight bold
        .company-content
          text-align left
          font-size 14px 
          color #b2b6c0 
          margin 20px 0 0 0
        .positon-footer
          .address
            .company-address
              text-align left
              font-size 14px
              color #1d366e
              font-weight bold 
          .map-address
            display flex
            flex-direction row
            justify-content space-between
            .map-address-span
              font-size 14px
              color #6a7183
              font-weight bold
            .map-address-map
              font-size 14px
              color #bbdf4f
              margin 10px 355px 0 0
          .bm-view
            margin 10px 0 20px 0
            width 620px
            height 70px
          .anchorBL
            display none  
</style>
