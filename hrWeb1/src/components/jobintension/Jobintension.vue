<template>
  <div class="jobintension">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="职位类型" style="margin:0 0 0 20px">
                <el-cascader style="width:242px;height:36px"
                    :options="positionCatalogList"
                    :props="propsTwo"
                    :show-all-levels="false"
                    v-model="formInline.postType[0].code"
                    >
                </el-cascader>
            </el-form-item>
            <el-form-item label="工作城市" style="margin:0 10px 20px 0">
                <el-cascader style="width:242px;height:36px"
                    :options="options"
                    :props="props"
                    :show-all-levels="true"
                    v-model="formInline.city"
                    >
                </el-cascader>
            </el-form-item><br>
            <el-form-item label="企业行业" style="margin:0 0 0 20px">
               <el-cascader style="width:242px;height:36px"
                    :options="industryList"
                    :props="propsOne"
                    :show-all-levels="false"
                    v-model="formInline.industry[0].code"
                    >
                </el-cascader>
            </el-form-item>
            <el-form-item label="薪资范围" style="margin:0 10px 20px 0">
                <el-select style="width:242px;height:36px" v-model="formInline.scope" placeholder="">
                <el-option v-for="(list,index) in monthPayList" :key="index" :label="list.tag" :value="list.code"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="求职状态" style="margin:0 0 0 20px">
                <el-select id="name" style="width:242px;height:36px" v-model="formInline.status" placeholder="" @change="Jobstate()">
                <el-option v-for="(list,index) in jobSearchStatus" :key="index" :label="list.tag" :value="list.code"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="工作类型" style="margin:0 10px 20px 0">
                <el-select style="width:242px;height:36px" v-model="formInline.jobType" placeholder="">
                <el-option v-for="(list,index) in workStateList" :key="index" :label="list.tag" :value="list.code"></el-option>
                </el-select>
            </el-form-item><br>
            <el-form-item label="到岗时间" class="block" v-if="datePicker" style="margin:0 330px 0 0">
                <el-date-picker
                style="width:242px;height:36px"
                :disabled="this.formInline.status === 1||this.formJobintension.status === '离职-延时到岗'?false:true"
                v-model="formInline.reportTime"
                type="date"
                :picker-options="pickerOptions"
                placeholder="请选择日期"
              >
                </el-date-picker>
            </el-form-item>
            
            <el-form-item style="margin:0 41px 20px 0">
            <el-button @click="cancel" style="margin:0 10px 0 490px" plain>取消</el-button>
            <el-button type="primary" @click="JobT">保存</el-button>
            </el-form-item>
          </el-form>
  </div>
</template>

<script>

export default {
  name: 'jobintension',
  props: ["JobintenDegree"],
  data() {
    return {
         options:[],
         monthPayList:[],
         workStateList:[],
         jobSearchStatus:[],
         industryList:[],
         positionCatalogList:[],
         salaryMin:'',
         salaryMax:'',
         pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
          }
        },
         props:{
              value: 'code',
              label:'tag',
              children: 'children'
          },
          propsOne:{
              value: 'code',
              label:'tag',
              children: 'children',
              emitPath:false
          },
          propsTwo:{
              value: 'code',
              label:'tag',
              children: 'children',
              emitPath:false
          },
         datePicker:false,
         formInline: {
          postType: [{
             code:''
           }],
          trade: '',
          scope:'',
          city:[],
          status:'',
          jobType:'',
          reportTime:'', 
          industry:[
            {
             code:''
           }
          ]
        }
    }
  },
  methods:{
    cancel() {
      this.$emit("jobintensionEmit",false,true) 
    },
    Jobstate () {
      if(this.formInline.status == 1){
         this.datePicker = true
      }else{
         this.datePicker = false
      }
      //编辑求职意向
      // this.$http.put(`/resume/${2}/target`,{county:'',industries:'',jobSearchStatus:'',jobType:'',province:'',salaryMin:''}).then(res => {
      //   if (res.data.code == 200) {
      //     console.log(res);
      //   }
      // });
    },
    JobT() {
      
      var len = this.formInline.industry.length
      var lenOne = this.formInline.postType.length
      // console.log(this.industryList);
      switch (this.formInline.scope){
          case 0:
            this.salaryMin = 0
            this.salaryMax = 1
            break;
          case 1:
            this.salaryMin = 1
            this.salaryMax = 2
            break;
          case 2:
            this.salaryMin = 2
            this.salaryMax = 4
            break;
          case 3:
            this.salaryMin = 4
            this.salaryMax = 6
            break;
          case 4:
            this.salaryMin = 6
            this.salaryMax = 8
            break; 
          case 5:
            this.salaryMin = 8
            this.salaryMax = 10
            break; 
          case 6:
            this.salaryMin = 10
            this.salaryMax = 15
            break; 
          case 7:
            this.salaryMin = 15
            this.salaryMax = 25
            break; 
          case 8:
            this.salaryMin = 25
            this.salaryMax = 35
            break;  
          case 9:
            this.salaryMin = 35
            this.salaryMax = null
            break;           
        }
       let til = new Date(this.formInline.reportTime).getTime();
      
       this.$http.put(`/resume/${this.JobintenDegree}/target`,{positionCatalogs:this.formInline.postType,arriveTime:til,county:this.formInline.city[1],industries:this.formInline.industry,jobSearchStatus:this.formInline.status,jobType:this.formInline.jobType,province:this.formInline.city[0],salaryMin:this.salaryMin,salaryMax:this.salaryMax}).then(res => {
        if (res.data.code == 200) {
          this.$emit("jobintensionEmit",false,true) 
          
        }
      });
    },
     //城市
      city() {
      this.$http.get('/constant/district')
      .then(res => {
          if (res.data.code == 200) {
            this.options = res.data.data
          }
        });
    },
    //获取所有企业行业
      allposition() {
        this.$http.get("/constant/industry").then(res => {
          if (res.data.code == 200) {
            this.industryList = res.data.data
          }
        });
      },
      //获取所有职位类型
      allpositionCatalog() {
        this.$http.get("/constant/positionCatalog").then(res => {
          if (res.data.code == 200) {
            this.positionCatalogList = res.data.data
          }
        });
      },
    //获取简单选项信息
      option() {
        this.$http.get("/option").then(res => {
          if (res.data.code == 200) {
            this.workStateList = res.data.data.jobType
            this.monthPayList = res.data.data.salaryRange
            this.jobSearchStatus = res.data.data.jobSearchStatus
          }
        });
      },
  },
  created() {
    this.city()
    this.option()
    this.allposition()
    this.allpositionCatalog()
  }
}
</script>

<style lang="stylus" scoped> 
  .el-form-item
    padding 0 0 0 30px
  .cancel:hover
     background #1d366e  
     color white
     border-color #1d366e
  .el-button
    width 94px 
    height 34px
    vertical-align middle
    padding 0px
  .keep:hover
    border-color #7d8dcd
</style>