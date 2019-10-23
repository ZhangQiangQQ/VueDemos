<template>
  <div class="resumes">
      <div class="content">
          <div class="personalinformation" v-if="personalinformation">
              <div class="personalinformation-img"><img :src="require('../assets/images/11.png')"/></div>
              <div class="img-add" @click="isshowpersonalinformation"><img :src="require('../assets/images/add.png')"/><span class="add">添加个人信息</span></div>
          </div>
          <div class="showdemo" v-if="showdemo"><Basic-Info/></div>
          <div><Personalinformation-From/></div>
          <div class="content-line"></div>
          <div ref="jobintension" class="main-content" >
              <div class="main-content-first"><img :src="require('../assets/images/44.png')"/><span>求职意向</span> </div>
              <div class="main-content-second" @click="jobintension" v-if="showadd"><img :src="require('../assets/images/add.png')"/> <span>添加</span></div>
          </div>
          <ul v-if="showjobintension"  style="margin-left:-15px;margin:-5px 0 10px 0">
              <li v-for="(list,index) in listjobintension" :key="index"  class="ul-a">
              <span class="actions-span">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/1.png')"/><span style="margin-right:3px">编辑</span> 
              </span>  
              <div>
                  <from style="borde:1px solid red" :from-data="list" :index="index"></from><br><br>
              </div>
              </li>
          </ul>
          <div class="showJob" v-if="showJob"><job-intension /></div>
          <div class="content-line"></div>
          <div ref="educational" class="main-content" >
              <div class="main-content-first"><img :src="require('../assets/images/55.png')"/><span>教育经历</span> </div>
              <div class="main-content-second" @click="education"><img :src="require('../assets/images/add.png')"/> <span>添加</span></div>
          </div>
          <ul v-if="showeducational"  style="margin-left:-15px;margin:5px 0 10px 0">
              <li v-for="(list,index) in listeducational" :key="index" class="ul-a">
              <span class="actions-span">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/10.png')"/><span @click="showdialog()" style="margin-right:20px">删除</span> 
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/1.png')"/><span style="margin-right:3px">编辑</span> 
              </span>
                  <educationexperience-From :from-data="list" :index="index"></educationexperience-From><br>
              </li>
          </ul>
          <div class="showeducation" v-if="showeducation"><Education-Experience /></div>
          <div class="content-line"></div>
          <div ref="work" class="main-content" >
              <div class="main-content-first"><img :src="require('../assets/images/33.png')"/><span>工作经历</span> </div>
              <div class="main-content-second" @click="work"><img :src="require('../assets/images/add.png')"/> <span>添加</span></div>
          </div>
          <ul v-if="showworkperience"  style="margin-left:-15px;margin:5px 0 10px 0">
              <li v-for="(list,index) in listwork" :key="index" >
              <!-- <span class="actions-span">
                  <i class="el-icon-edit-outline"></i> 删除
                  <i class="el-icon-edit-outline"></i> 编辑
              </span> -->
                  <work-from :from-data="list" :index="index"></work-from><br>
              </li>
          </ul>
          <div v-if="showwork"><work-experience /></div>
          <div class="content-line"></div>
          <div ref="work" class="main-content" >
              <div class="main-content-first"><img :src="require('../assets/images/66.png')"/><span>项目经历</span> </div>
              <div class="main-content-second" @click="project"><img :src="require('../assets/images/add.png')"/> <span>添加</span></div>
          </div>
          <ul v-if="showprogectperience"  style="margin-left:-15px;margin:5px 0 10px 0">
              <li v-for="(list,index) in listprogectperience" :key="index" >
              <!-- <span class="actions-span">
                  <i class="el-icon-edit-outline"></i> 删除
                  <i class="el-icon-edit-outline"></i> 编辑
              </span> -->
                  <progect-from :from-data="list" :index="index"></progect-from><br>
              </li>
          </ul>
          <div v-if="showproject"><project-experience /></div>
          <div class="content-line"></div>
          <div ref="work" class="main-content" >
              <div class="main-content-first"><img :src="require('../assets/images/77.png')"/><span>培训经历</span> </div>
              <div class="main-content-second" @click="training"><img :src="require('../assets/images/add.png')"/> <span>添加</span></div>
          </div>
          <ul v-if="showtrain"  style="margin-left:-15px;margin:5px 0 10px 0">
              <li v-for="(list,index) in listtrain" :key="index" >
              <!-- <span class="actions-span">
                  <i class="el-icon-edit-outline"></i> 删除
                  <i class="el-icon-edit-outline"></i> 编辑
              </span> -->
                  <training-from :from-data="list" :index="index"></training-from><br>
              </li>
          </ul>
          <div v-if="showtraining"><training-experience /></div>
          <div class="content-line"></div>
          <div ref="work" class="main-content" >
              <div class="main-content-first"><img :src="require('../assets/images/66.png')"/><span>语言能力</span> </div>
              <div class="main-content-second" @click="language"><img :src="require('../assets/images/add.png')"/> <span>添加</span></div>
          </div>
          <ul v-if="showlanguages"  style="margin-left:-15px;margin:5px 0 10px 0">
              <li v-for="(list,index) in listlanguages" :key="index">
                  <!-- <span class="actions-span">
                      <i class="el-icon-edit-outline"></i> 删除
                      <i class="el-icon-edit-outline"></i> 编辑
                  </span> -->
                  <language-from :from-data="list" :index="index"></language-from><br>
              </li>
          </ul>
          <div v-if="showlanguage"><language-experience /></div>
          <div class="content-line"></div>
          <div ref="work" class="main-content" >
              <div class="main-content-first"><img :src="require('../assets/images/88.png')"/><span>职称等级</span> </div>
              <div class="main-content-second" @click="professional()"><img :src="require('../assets/images/add.png')"/> <span>添加</span></div>
          </div>
          <div v-if="showprofessional"><professional-experience /></div>
          <div class="content-line"></div>
          <div ref="work" class="main-content" >
              <div class="main-content-first"><img :src="require('../assets/images/99.png')"/><span>专业技能</span> </div>
              <div class="main-content-second" @click="personal_skill()"><img :src="require('../assets/images/add.png')"/> <span>添加</span></div>
          </div>
          <ul v-if="showpersonalskills" style="margin-left:-15px;margin:5px 0 10px 0">
              <li  v-for="(list,index) in listpersonalskill" :key="index" >
                  <!-- <span class="actions-span">
                      <i class="el-icon-edit-outline"></i> 删除
                      <i class="el-icon-edit-outline"></i> 编辑
                  </span> -->
                  <personalskill-from :from-data="list" :index="index"></personalskill-from>
              </li>
          </ul>
          <div v-if="showpersonalskill"><personal-skill /></div>
          <div class="content-line"></div>
          <div ref="work" class="main-content" >
              <div class="main-content-first"><img :src="require('../assets/images/0.png')"/><span>荣誉奖项</span> </div>
              <div class="main-content-second" @click="awards"><img :src="require('../assets/images/add.png')"/> <span>添加</span></div>
          </div>
          <ul v-if="showaward" style="margin-left:-15px;margin:5px 0 10px 0">
              <li v-for="(list,index) in listaward" :key="index"  >
                  <!-- <span class="actions-span">
                      <i class="el-icon-edit-outline"></i> 删除
                      <i class="el-icon-edit-outline"></i> 编辑
                  </span> -->
                  <awards-from :from-data="list" :index="index"></awards-from><br>
              </li>
          </ul>
          <div v-if="showawards"><Aw-Ards /></div>
          <div class="content-line"></div>
          <div ref="work" class="main-content" >
              <div class="main-content-first"><img :src="require('../assets/images/1.png')"/><span>自我评价</span> </div>
              <div class="main-content-second" @click="selfappraisal"><img :src="require('../assets/images/add.png')"/> <span>添加</span></div>
          </div>
          <ul v-if="showpersonappraisal"  style="margin-left:-15px;margin:5px 0 10px 0">
              <li v-for="(list,index) in listpersonappraisal" :key="index" >
                  <!-- <span class="actions-span">
                      <i class="el-icon-edit-outline"></i> 删除
                      <i class="el-icon-edit-outline"></i> 编辑
                  </span> -->
                  <selfappraisal-from :from-data="list" :index="index"></selfappraisal-from><br>
              </li>
          </ul>
          <div v-if="showselfappraisal"><self-appraisal /></div>
      </div>  
      <div class="aside">
          <div class="aside-nav">
              <div class="aside-nav-first">在线简历</div>
              <div class="aside-nav-second"><span>完整度</span><span><el-progress :percentage="10" class="progess" style="width:111px;padding:0 0 0 7px;height:9px"></el-progress></span></div>
              <div class="aside-nav-third">最后更新：2019-02-03 18:30</div>
          </div>
          <div class="aside-tabulation">
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef()"><img :src="require('../assets/images/2.png')"/><span class="tabulation-language">基本信息</span> </a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('jobintension')"><img :src="require('../assets/images/44.png')"/> <span class="tabulation-language">求职意向</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('educational')"><img :src="require('../assets/images/55.png')"/><span class="tabulation-language">教育经历</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('work')"><img :src="require('../assets/images/33.png')"/> <span class="tabulation-language">工作经历</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('progect')"><img :src="require('../assets/images/66.png')"/> <span class="tabulation-language">项目经历</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('training')"><img :src="require('../assets/images/77.png')"/><span class="tabulation-language">培训经历</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('language')"><img :src="require('../assets/images/66.png')"/><span class="tabulation-language">语言能力</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('professional')"><img :src="require('../assets/images/88.png')"/> <span class="tabulation-language">职称等级</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('personal_skill')"><img :src="require('../assets/images/99.png')"/><span class="tabulation-language">专业技能</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('awards')"><img :src="require('../assets/images/0.png')"/> <span class="tabulation-language">荣誉奖项</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('self-appraisal')"><img :src="require('../assets/images/1.png')"/> <span class="tabulation-language">自我介绍</span></a></div>
              <div class="aside-line"></div>
          </div>
          <div class="aside-foot">
              <div class="aside-foot-first">附件简历</div>
              <div class="aside-foot-second"><span>支持格式包括： 支持DOC，DOCX,PDF,JPG,PNG格式<br>文件,大小不超过2M</span></div>
              <div class="aside-foot-third">
                  <el-button type="primary" size="medium" round>立即上传</el-button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    // import PersonalinformationFrom from 'components/personalinformation_from.vue'
    import BasicInfo from 'components/BasicInfo.vue';
    import JobIntension from 'components/Jobintension.vue';
    import EducationExperience from 'components/education.vue';
    import WorkExperience from 'components/work.vue';
    import ProjectExperience from 'components/project.vue';
    import TrainingExperience from 'components/training.vue';
    import LanguageExperience from 'components/language.vue';
    import ProfessionalExperience from 'components/professional.vue';
    import PersonalSkill from 'components/personal_skill.vue';
    import AwArds from 'components/awards.vue';
    import SelfAppraisal from 'components/self-appraisal.vue';

    import PersonalinformationFrom from 'components/personalinformation_from.vue'
    import From from 'components/jobintension_from.vue'
    import EducationexperienceFrom from 'components/education_from.vue'
    import WorkFrom from 'components/work_from.vue'
    import ProgectFrom from 'components/progect_from.vue'
    import TrainingFrom from 'components/training_from.vue'
    import LanguageFrom from 'components/language_from.vue'
    import PersonalskillFrom from 'components/personal_skill_from.vue'
    import AwardsFrom from 'components/awards_from.vue'
    import SelfappraisalFrom from 'components/selfappraisal_from.vue'
    export default {
        name: 'Resumes',
        components: {
        // PersonalinformationFrom,
         BasicInfo,
         JobIntension,
         EducationExperience,
         WorkExperience,
         ProjectExperience,
         TrainingExperience,
         LanguageExperience,
         ProfessionalExperience,
         PersonalSkill,
         AwArds,
         SelfAppraisal,
         PersonalinformationFrom,
         From,
         EducationexperienceFrom,
         WorkFrom,
         ProgectFrom,
         TrainingFrom,
         LanguageFrom,
         PersonalskillFrom,
         AwardsFrom,
         SelfappraisalFrom
        },
        data() {
            return {
                personalinformation:false,
                showdemo:false,
                showJob:false,
                showadd:true,
                showeducation:false,
                showwork:false,
                showproject:false,
                showtraining:false,
                showlanguage:false,
                showprofessional:false,
                showpersonalskill:false,
                showawards:false,
                showselfappraisal:false,

                showjobintension:true,
                showeducational:true,
                showworkperience:true,
                showprogectperience:true,
                showtrain:true,
                showlanguages:true,
                showpersonalskills:true,
                showaward:true,
                showpersonappraisal:true,
                listjobintension: [{
                    postType:"产品经理",
                    city:"上海/北京",
                    trade:"互联网金融/公关",
                    scope:"5k~10k",
                    status:"随时到岗",
                    jobType:"实习"
                }],
                 listeducational: [{
                    educationName:"华东理工大学",
                    educationTime:"2018/12",
                    educationDegree:"工业设计 | 硕士"
                }],
                listwork: [{
                    jobDescription: '公司名称',
                    companyName: '2018/12',
                    post: '工业设计 | 硕士',
                    jobTime: '22电动车v发射点发射点犯得上犯得上发射点',
                }],
                listprogectperience: [{
                    itemName: '项目名称',
                    companyName: '2018/12',
                    schoolTime: '担任角色',
                    duty: '个人职责',
                    project: '项目介绍',
                }],
                listtrain: [{
                    trainCourse: '培训课程',
                    trainTime: '培训机构',
                }],
                listlanguages: [{
                    languages:"英语",
                    listenAbility:"听说能力良好",
                    readAbility:"读写能力良好",
                }],
                listpersonalskill: [{
                   technicalName: '2',
                   level: '2'
                    
                },],
                listaward: [{
                    prizeName:"xxxx比赛三等奖",
                    prizeTime:"2018/12",
                }],
                listpersonappraisal: [{
                    personalDescription:"年轻有为",
                }],
            }
        },
        methods: {
          testRef(ref) {
                if(ref){
                    const y=this.$refs[ref].offsetTop-20
                    this.$refs.scroll.scrollTo({y}, 300);
                }else {
                    this.$refs.scroll.scrollTo({y: 0}, 300);
                }
            },
          isshowpersonalinformation() {
            this.personalinformation = false
            this.showdemo = true
          },
          jobintension() {
                this.showadd = false;
                this.showJob = true;
                this.showjobintension = false
            },
          education() {
              this.showeducation = true;
              this.showeducational= false
          },
          work() {
              this.showwork = true;
              this.showworkperience = false
          },
          project() {
              this.showproject = true;
              this.showprogectperience = false
          },
          training() {
              this.showtraining = true;
              this.showtrain = false
          },
          language() {
              this.showlanguage = true;
              this.showlanguages= false
          },
          professional() {
              this.showprofessional = true;
          },
          personal_skill() {
              this.showpersonalskill = true;
              this.showpersonalskills = false
          },
          awards() {
              this.showawards = true;
              this.showaward = false
          },
          selfappraisal() {
              this.showselfappraisal = true;
              this.showpersonappraisal = false
          },
    }
    }

</script>

<style lang="stylus" scoped>
  .resumes
    width 990px
    margin 140px 220px 0 220px
    display flex
    flex-direction row
    .content
      width 770px
      background #FFFFFF
      margin 0 10px 0 0
      .personalinformation
        width 770px
        display flex
        flex-direction row
        font-size 14px
        .img-add img
          width 12px
          margin 111px 0 0 467px
        .img-add span
          margin 0 0 0 10px
          font-size 14px
          font-family PingFangSC-Regular
          color #111D4B 100% 
          font-weight bold 
      .personalinformation div:nth-child(1) img
        width 80px 
        height 80px
        margin 32px 0 0 42px
      .personalinformation div:nth-child(2) 
        margin 0 75px 15px 0
      .content-line
        width 682px
        border 0.5px solid #D8D8D8
        margin 0 44px 0 44px
      ul li
        list-style none      
      .ul-a
        .actions-span
          float right
          margin 0 20px 0 0
          font-size 15px
          color #111D4B
          font-weight bold
          opacity 0
        &:hover
          background #f7f7f7
          width 679px
          .actions-span
              opacity 1   
      .main-content
        display flex
        flex-direction row
        justify-content space-between
        .main-content-first
          font-weight bold
          line-height 50px
          margin 0 0 0 52px 
        .main-content-first span
          font-size 18px
          font-family PingFangSC-Regular
          color #111D4B 100%
          margin 0 0 0 10px
        .main-content-first img
          height  16px
          vertical-align middle
          margin 0 0 4px 0
        .main-content-second
          font-weight bold
          line-height 50px
          margin 0 74px 0 0
        .main-content-second span
          font-family PingFangSC-Regular
          color #111D4B
          font-size 14px
          margin 0 0 0 10px
        .main-content-second img
          height  12px
          vertical-align middle
          margin  0 0 2px 10px  
    .aside
      width 220px
      background #FFFFFF
      position fixed
      margin-left 790px
      .aside-nav
        display flex
        flex-direction column
        text-align left 
        margin 21px 0 0 0
        .aside-nav-first
          font-family PingFangSC-Regular
          color #111D4B 100%
          font-size 14px
          font-weight bold
          margin 0 0 0 32px
        .aside-nav-second
          display flex
          flex-direction row
          font-family PingFangSC-Regular
          color #455379 100%
          font-size 12px
          margin 10px 0 0 32px
        .aside-nav-third
          font-family PingFangSC-Regular
          color #455379 100%
          font-size 12px
          margin 10px 0 0 32px
      .aside-tabulation
        display flex
        flex-direction column
        margin 25px 0 0 0
        .aside-line
          width 160px
          border 0.5px solid #D8D8D8
          margin 0 27px 0 32px
        .tabulation
          line-height 42px
          margin  0 0 0 44px
          font-size 13px
          text-align left  
          .tabulation-language
            margin  0 0 0 10px
            font-family PingFangSC-Regular
            color #455379 100%
            font-size 14px
        .tabulation img
          height 16px
          vertical-align middle
          margin 0 0 4px 0 
      .aside-foot
        margin 10px 0 0 30px
        text-align left
        font-size 14px
        .aside-foot-first
          font-family PingFangSC-Regular
          color #1F368D 100%
          font-size 14px
          text-align left
          margin 11px 0 0 0
        .aside-foot-second
          font-famil PingFangSC-Regular
          color #909090 100%
          font-size 12px
          text-align left
        .aside-foot-third
          margin 15px 31px 92px 20px   

            
</style>
<style>

</style>