<template>
  <div class="joblist">
    <div class="joblist-search">
        <el-select  v-model="value"  style="width:77px;height:44px;color:#455379;font-size:14px;">
          <el-option label="" value="上海"></el-option>
        </el-select>
        <span style="font-size:20px">|</span>
        <el-select   slot="prepend"  v-model="company" style="width:77px;height:44px;color:#455379;font-size:14px">
          <el-option label="" value="公司"></el-option>
        </el-select>
        <span style="font-size:20px">|</span>
        <el-input style="width:600px;" placeholder="请输入内容"></el-input>
        <el-button class="search-button" type="primary"  icon="el-icon-search">搜索</el-button>
    </div>
    <div class="joblist-article">
        <div class="article" style="margin-top:-2px">
            <el-radio-group size="small">
            <span style="margin-left:-48px" class="article-title">行政区：</span>
            <el-radio-button class="article-content" label="">黄埔区</el-radio-button>
            <el-radio-button class="article-content" label="">徐汇区</el-radio-button>
            <el-radio-button class="article-content" label="">长宁区</el-radio-button>
            <el-radio-button class="article-content" label="">浦东新区</el-radio-button>
            <el-radio-button class="article-content" label="">奉贤区</el-radio-button>
            </el-radio-group>
        </div>
        <div class="article" style="margin-top:-42px">
            <el-radio-group size="small">
            <span style="margin-left:-50px" class="article-title">工作经验：</span>
            <el-radio-button class="article-content" label="">经验不限</el-radio-button>
            <el-radio-button class="article-content" label="">应届生</el-radio-button>
            <el-radio-button class="article-content" label="">1-3年</el-radio-button>
            <el-radio-button class="article-content" label="">3-5年</el-radio-button>
            <el-radio-button class="article-content" label="">10年以上</el-radio-button>
            </el-radio-group>
        </div>
        <div class="article" style="margin-top:-42px">
            <el-radio-group size="small">
            <span style="margin-left:-50px" class="article-title">学历要求：</span>
            <el-radio-button class="article-content" label="">学历不限</el-radio-button>
            <el-radio-button class="article-content" label="">本科</el-radio-button>
            <el-radio-button class="article-content" label="">硕士</el-radio-button>
            <el-radio-button class="article-content" label="">博士</el-radio-button>
            <el-radio-button class="article-content" label="">大专</el-radio-button>
            <el-radio-button class="article-content" label="">中技</el-radio-button>
            <el-radio-button class="article-content" label="">中专</el-radio-button>
            </el-radio-group>
        </div>
        <div class="article" style="margin-top:-42px">
            <el-radio-group size="small">
            <span style="margin-left:-50px" class="article-title">月薪范围：</span>
            <el-radio-button class="article-content" label="">3k以下</el-radio-button>
            <el-radio-button class="article-content" label="">3k-5k</el-radio-button>
            <el-radio-button class="article-content" label="">5k-10k</el-radio-button>
            <el-radio-button class="article-content" label="">10k-15k</el-radio-button>
            <el-radio-button class="article-content" label="">15k-20k</el-radio-button>
            <el-radio-button class="article-content" label="">20k-30k</el-radio-button>
            <el-radio-button class="article-content" label="">30k-50k</el-radio-button>
            <el-radio-button class="article-content" label="">50k以上</el-radio-button>
            </el-radio-group>
        </div>
        <div class="article" style="margin-top:-42px">
            <el-radio-group size="small">
            <span style="margin-left:-50px" class="article-title">工作类型：</span>
            <el-radio-button class="article-content" label="">全职</el-radio-button>
            <el-radio-button class="article-content" label="">兼职</el-radio-button>
            <el-radio-button class="article-content" label="">实习</el-radio-button>
            <el-radio-button class="article-content" label="">校园</el-radio-button>
            </el-radio-group>
        </div>
        <div class="article" style="margin-top:-42px">
            <el-radio-group size="small">
            <span style="margin-left:-50px" class="article-title">公司行业：</span>
            <el-radio-button class="article-content" label="">行业</el-radio-button>
            <el-radio-button class="article-content" label="">行业</el-radio-button>
            <el-radio-button class="article-content" label="">行业</el-radio-button>
            <el-radio-button class="article-content" label="">行业</el-radio-button>
            </el-radio-group>
        </div>
        <div class="article" style="margin-top:-42px">
            <el-radio-group size="small">
            <span style="margin-left:-50px" class="article-title">公司规模：</span>
            <el-radio-button  class="article-content" label="">少于50人</el-radio-button>
            <el-radio-button class="article-content" label="">50-150人</el-radio-button>
            <el-radio-button class="article-content" label="">150-500人</el-radio-button>
            <el-radio-button class="article-content" label="">500-1千人</el-radio-button>
            <el-radio-button class="article-content" label="">1千-5千人</el-radio-button>
            <el-radio-button class="article-content" label="">5千-1万人</el-radio-button>
            <el-radio-button class="article-content" label="">1万人以上</el-radio-button>
            </el-radio-group>
        </div>
        <div class="article" style="margin-top:-42px">
            <el-radio-group size="small">
            <span style="margin-left:-50px" class="article-title">发布时间：</span>
            <el-radio-button class="article-content" label="">一天以内</el-radio-button>
            <el-radio-button class="article-content" label="">三天以内</el-radio-button>
            <el-radio-button class="article-content" label="">五天以内</el-radio-button>
            <el-radio-button class="article-content" label="">七天以内</el-radio-button>
             <el-radio-button class="article-content" label="">十五天以内</el-radio-button>
            </el-radio-group>
        </div>
        <div class="article-button">
            <el-button type="primary" style="margin:0 0 16px 564px;width:105px;height:35px;line-height:35px;line-height:3px;color:white;font-size:12px">清除筛选条件</el-button>
            <el-button type="primary" style="margin:0 0 16px 30px;width:105px;height:35px;line-height:3px;color:white;font-size:12px">立即筛选</el-button>
        </div>
    </div>
    <div class="joblist-content">
      <div class="content">
        <div class="content-img">
            <img :src="require('../assets/images/11.png')"/>
        </div>
        <div class="content-infor">
            <span>迪卡侬</span>
            <span>上海 | 150-500 | 移动互联网/交通出行</span>
        </div>
        <div class="content-button">
            <span>
                <el-button @click.native="position"  class="button" type="primary">进入企业主页</el-button>
            </span>
        </div>
        <div class="content-job">
            <span>在招职位<br>12个</span>
        </div>
      </div>
      <div class="content-line"></div>
      <div class="content">
        <div class="content-img">
            <img :src="require('../assets/images/11.png')"/>
        </div>
        <div class="content-infor">
            <span>迪卡侬</span>
            <span>上海 | 150-500 | 移动互联网/交通出行</span>
        </div>
        <div class="content-button">
            <span>
                <el-button class="button" type="primary">进入企业主页</el-button>
            </span>
        </div>
        <div class="content-job">
            <span>在招职位<br>12个</span>
        </div>
      </div>
      <div class="content-line"></div>
      <div class="content">
        <div class="content-img">
            <img :src="require('../assets/images/11.png')"/>
        </div>
        <div class="content-infor">
            <span>迪卡侬</span>
            <span>上海 | 150-500 | 移动互联网/交通出行</span>
        </div>
        <div class="content-button">
            <span>
                <el-button class="button" type="primary">进入企业主页</el-button>
            </span>
        </div>
        <div class="content-job">
            <span>在招职位<br>12个</span>
        </div>
      </div>
      <div class="content-line"></div>
      <div class="content">
        <div class="content-img">
            <img :src="require('../assets/images/11.png')"/>
        </div>
        <div class="content-infor">
            <span>迪卡侬</span>
            <span>上海 | 150-500 | 移动互联网/交通出行</span>
        </div>
        <div class="content-button">
            <span>
                <el-button class="button" type="primary">进入企业主页</el-button>
            </span>
        </div>
        <div class="content-job">
            <span>在招职位<br>12个</span>
        </div>
      </div>
      <div class="content-line"></div> 
      <div class="content">
        <div class="content-img">
            <img :src="require('../assets/images/11.png')"/>
        </div>
        <div class="content-infor">
            <span>迪卡侬</span>
            <span>上海 | 150-500 | 移动互联网/交通出行</span>
        </div>
        <div class="content-button">
            <span>
                <el-button class="button" type="primary">进入企业主页</el-button>
            </span>
        </div>
        <div class="content-job">
            <span>在招职位<br>12个</span>
        </div>
      </div>
      <div class="content-line"></div>  
    </div>
    <div class="joblist-footer">
        <div class="footer-first">
            <span>产品经理</span>
            <span>5-10k</span>
            <span>迪卡侬</span>
        </div>
        <div class="footer-second">
            <span>上海 徐汇区 | 1-3年 | 本科</span>
            <span>今天 15:30</span>
            <span>电子商务，文化娱乐 | 150-500人</span>
        </div>
        <div class="footer-line"></div>
        <div class="footer-first" style="margin-top:-20px">
            <span>产品经理</span>
            <span>5-10k</span>
            <span>迪卡侬</span>
        </div>
        <div class="footer-second">
            <span>上海 徐汇区 | 1-3年 | 本科</span>
            <span>今天 15:30</span>
            <span>电子商务，文化娱乐 | 150-500人</span>
        </div>
        <div class="footer-line"></div>
        <div class="footer-first" style="margin-top:-20px">
            <span>产品经理</span>
            <span>5-10k</span>
            <span>迪卡侬</span>
        </div>
        <div class="footer-second">
            <span>上海 徐汇区 | 1-3年 | 本科</span>
            <span>今天 15:30</span>
            <span>电子商务，文化娱乐 | 150-500人</span>
        </div>
        <div class="footer-line"></div>
        <div class="footer-first" style="margin-top:-20px">
            <span>产品经理</span>
            <span>5-10k</span>
            <span>迪卡侬</span>
        </div>
        <div class="footer-second">
            <span>上海 徐汇区 | 1-3年 | 本科</span>
            <span>今天 15:30</span>
            <span>电子商务，文化娱乐 | 150-500人</span>
        </div>
        <div class="footer-line"></div>
        <div class="footer-first" style="margin-top:-20px">
            <span>产品经理</span>
            <span>5-10k</span>
            <span>迪卡侬</span>
        </div>
        <div class="footer-second">
            <span>上海 徐汇区 | 1-3年 | 本科</span>
            <span>今天 15:30</span>
            <span>电子商务，文化娱乐 | 150-500人</span>
        </div>
        <div class="footer-line"></div>
        <div class="footer-first" style="margin-top:-20px">
            <span>产品经理</span>
            <span>5-10k</span>
            <span>迪卡侬</span>
        </div>
        <div class="footer-second">
            <span>上海 徐汇区 | 1-3年 | 本科</span>
            <span>今天 15:30</span>
            <span>电子商务，文化娱乐 | 150-500人</span>
        </div>
        <div class="footer-line"></div>
        <div class="footer-pagination">
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
    </div>
    <el-dialog
        class="dialog"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
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
            <el-cascader
                :options="options"
                :show-all-levels="false"
                @change="handleItemChange"
                style="height:36px"
                >
            </el-cascader>
        </div>
        <div style="height:220px"></div>
    </el-dialog>
  </div>
</template>
<script>

export default {
  name: 'joblist',
  components: {
  },
  data() {
    return {
      value:'上海',
      company:'职位',
      dialogVisible:false,
      options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
      };
  },
  methods: {
      close() {
          this.dialogVisible = false
      },
      position() {
         this.$router.push({path:'/position'})
      },
      handleItemChange() {
           setTimeout(() => {
            this.close()
        }, 500);
      },
  }
}
</script>

<style lang="stylus">
  .joblist
    width 880px
    margin 90px 0 0 0 
    .joblist-search
      width 880px
      height 44px
      background white
      .el-icon-search:before
        color white
        font-size 17px 
      .el-input__inner
         border 0px solid red
      .search-button
         width 110px
         height 44px
         font-size 12px
         color white
    .joblist-article
      width 880px
      background white
      border 1px solid white
      margin 11px 0 0 0
      .article
        .article-content
        .article-content-first
          font-family PingFangSC-Regular
          color red 
          font-size 12px
          margin 0 0 0 20px
        .article-title
          font-family PingFangSC-Regular
          font-size 14px
        .el-radio-button__inner
          border 0px solid #617dcb
        .el-radio-button__orig-radio:checked+.el-radio-button__inner
          background-color #617dcb
          box-shadow -1px 0 0 0 #617dcb
          border-radius 0 0 0 0
          color white
        .el-radio-button--small .el-radio-button__inner
          padding 4px 6px 
          line-height 15px
          font-size 12px 
          color #1f368d 
    .joblist-article div:nth-child(1)
      margin 45px 0 0 51px
      text-align left
    .joblist-article div:nth-child(8)
      margin 6px 0 25px 39px
      text-align left  
    .joblist-article div
      margin 6px 0 0 39px
      text-align left
    .joblist-content
      width 880px
      margin 10px 0 0 0
      background white
      display flex
      flex-direction column
      .content-line
        width 810px
        border 0.5px solid #f0f0f0
        margin 10px 0 0 38px
      .content  
        .content-img img
          width 60px
          height 60px
          float left
          margin 10px 0 0 39px
        .content-infor 
          display flex
          flex-direction column 
          float left
          color  #1F368D
        .content-infor span:nth-child(1)
          text-align left
          font-family PingFangSC-Regular
          font-size 24px
          margin 10px 0 8px 8px
        .content-infor span:nth-child(2)
          text-align left
          font-family PingFangSC-Regular
          color #455379 100% 
          font-size 12px
          margin 0 0 8px 8px
        .content-job
          float right
          margin 20px 15px 0 0
        .content-job span
          font-family PingFangSC-Regular
          color #455379
          font-size 14px  
        .content-button
          float right
          margin 20px 36px 0 0
    .joblist-footer
      width 880px
      margin 10px 0 0 0
      background white
      .footer-first
        display flex
        flex-direction row
        justify-content space-between
      .footer-first span:nth-child(1)
        margin 36px 0 0 38px
        font-family PingFangSC-Regular
        color #1f368d
        font-size 16px
      .footer-first span:nth-child(2)
        margin 36px 425px 0 0
        font-family PingFangSC-Regular
        color #6EC5D2 
        font-size 16px
      .footer-first span:nth-child(3)
        margin 36px 196px 0 0 
        font-family PingFangSC-Regular
        color #1f368d
        font-size 16px 
        font-weight 550
      .footer-second
        display flex
        flex-direction row
        justify-content space-between
      .footer-second span:nth-child(1)
        margin 9px 0 0 38px
        font-family PingFangSC-Regular
        color #1f368d 
        font-size 14px
      .footer-second span:nth-child(2)
        margin 9px 215px 0 0
        font-family PingFangSC-Regular
        color #909090 
        font-size 14px  
      .footer-second span:nth-child(3)
        margin 9px 35px 0 0 
        font-family PingFangSC-Regular
        color #1f368d
        font-size 14px
      .footer-line
        width 810px
        border 0.5px solid #f0f0f0
        margin 10px 0 0 38px
      .footer-pagination
        margin 30px 0 0 0
        padding 0 0 20px 0
        color #1f368d
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
        color #1f368d
        float left
        margin -10px 0 0 0
      .dialog-city-first span
        padding 0 40px 0 0  
      .dialog-city-second
        font-size 14px
        font-family PingFangSC-Regular
        color #1f368d
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
        float left
        margin 50px 0 0 -73px
</style>
<style lang="stylus">
  .el-icon-arrow-up:before
    color #617dcb
  .el-button:active
    background #617dcb
  .el-button:hover
    background #7d8dcd
  .el-input:hover  
    border-color #7d8dcd 
</style>
