<template>
  <div class="jobintension">
    <el-form :inline="true" :model="formInline" class="demo-form-inline"  :rules="rules" ref="formInline">
      <el-form-item label="项目名称" style="margin:0 0 0 10px" prop="itemName">
        <el-input style="width:242px;height:36px" v-model="formInline.itemName" placeholder></el-input>
      </el-form-item>
      <el-form-item label="公司名称"  prop="companyName">
        <el-input style="width:242px;height:36px" v-model="formInline.companyName" placeholder></el-input>
      </el-form-item>
      <el-form-item label="项目时间" class="block" style="margin:0 30px 0 0" prop="schoolTime">
        <el-date-picker
          style="width:242px;height:36px"
          v-model="formInline.schoolTime"
          type="daterange"
          :picker-options="pickerOptions"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="学历" style="visibility:hidden;margin-left:-15px" >
        <el-select style="width:242px;height:36px" v-model="formInline.record" placeholder>
          <el-option label value="shanghai"></el-option>
          <el-option label value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="个人职责" style="margin-left:20px" prop="duty">
        <el-input type="textarea" v-model="formInline.duty" style="width:587px"></el-input>
      </el-form-item>
      <br />
      <el-form-item label="项目介绍" style="margin-left:20px" prop="project">
        <el-input type="textarea" v-model="formInline.project" style="width:587px"></el-input>
      </el-form-item>
      <br />
      <el-form-item style="margin:0 0 20px 450px">
        <el-button @click="cancel" plain style="margin:0 10px 0 0">取消</el-button>
        <el-button @click="keep('formInline')" type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "project",
  props: ["projectDegree"],
  data() {
    return {
      formInline: {
        itemName: "",
        companyName: "",
        schoolTime: [],
        record: "",
        duty: "",
        project: ""
      },
       pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      rules: {
        itemName: [
          { required: true, message: "请输入项目名称", trigger: "blur" },
          { min: 0, max: 50, message: "长度在 0 到 50 个字符", trigger: "blur" }
          // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
        ],
        companyName: [
          { min: 0, max: 50, message: "长度在 0 到 50 个字符", trigger: "blur" }
        ],
        schoolTime: [
          { required: true, message: "请选择项目时间", trigger: "blur" }
        ],
        // record: [{ required: true, message: "请选择学历", trigger: "blur" }],
        duty: [
          { required: true, message: "请填写个人职责", trigger: "change" },
          {
            min: 0,
            max: 800,
            message: "长度在 0 到 800 个字符",
            trigger: "blur"
          }
        ],
        project: [
          {
            min: 0,
            max: 800,
            message: "长度在 0 到 800 个字符",
            trigger: "blur"
          },
          { required: true, message: "请填写项目介绍", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    cancel() {
      this.$emit("progectEmit", false, true);
    },
    //新增
    keep(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            let til = this.formInline.schoolTime[0].getTime();
            let till = this.formInline.schoolTime[1].getTime();
            let ti = this.$moment(till).format("YYYY-MM")
            let end = this.$moment(new Date().getTime()).format("YYYY-MM")
           if(ti === end) {
              var eduTime = null
          }else{
              var eduTime  = till
            }
          this.$http
            .post(`/resume/${this.projectDegree}/project`,{ beginTime:til,endTime:eduTime,project:this.formInline.companyName,duty:this.formInline.duty,description:this.formInline.project })
            .then(res => {
              if (res.data.code == 201) {
                  this.$emit("progectEmit", false, true);
              }
            });
        } else {
          return false;
        }
      });
    }
    //更新
    //   keep() {
    //     // this.$emit("skill",this.formInline.technicalName,this.formInline.level)
    //     this.$http.put(`/resume/${2}/project/${1}`,{beginTime:'',project:''}).then(res => {
    //       if (res.data.code == 200) {
    //         console.log(res);
    //       }
    //     });
    // }
  }
};
</script>

<style lang="stylus" scoped> 
  .el-form-item
    padding 0 0 0 30px
  .cancel:hover
    background #1d366e  
    color white
  .el-button
    width 94px 
    height 34px
    vertical-align middle
    padding 0px   
</style>