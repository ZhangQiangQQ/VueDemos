<template>
  <div class="jobintension">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" :rules="rules" ref="formInline">
            <el-form-item label="职称等级" prop="professional">
                <el-input style="width:242px;height:36px" v-model="formInline.professional" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="语种" style="visibility:hidden;margin:0 5px 0 0" >
                <el-input style="width:242px;height:36px" v-model="formInline.languages" placeholder=""></el-input>
            </el-form-item><br>
            <el-form-item style="margin:0 0 20px 420px">
            <el-button @click="cancel" plain style="margin:0 10px 0 0">取消</el-button>
            <el-button @click="keep('formInline')" type="primary">保存</el-button>
            </el-form-item>
          </el-form>
  </div>
</template>

<script>
export default {
  name: 'professional',
  props: ["professionalDegree"],
  data() {
    return {
         formInline: {
          professional: '',
          languages: ''
        },
        rules: {
          professional: [
            { required: true, message: "请输入职称等级", trigger: "blur" },
            { min: 0, max: 50, message: "长度在 0 到 50 个字符", trigger: "blur" }
          ]
      }
    }
  },
  methods :{
    cancel() {
      this.$emit("professionalEmit",false,true)
    },
    //新增
    keep(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http.post(`/resume/${this.professionalDegree}/qualification`,{qual:this.formInline.professional}).then(res => {
            if (res.data.code == 201) {
              this.$emit("professionalEmit",false,true)
            }
          });
        } else {
          return false;
        }
      });
      
    },
    //更新
  //   keep() {
  //     // this.$emit("skill",this.formInline.technicalName,this.formInline.level)
  //     this.$http.put(`/resume/${2}/qualification/${1}`,{qual:''}).then(res => {
  //       if (res.data.code == 200) {
  //         console.log(res);
  //       }
  //     });
  // },
  }
}
</script>

<style lang="stylus" scoped> 
  .el-form-item
    padding 0 0 0 60px
  .cancel:hover
    background #1d366e 
    color white
  .el-button
    width 94px 
    height 34px
    vertical-align middle
    padding 0px   
</style>