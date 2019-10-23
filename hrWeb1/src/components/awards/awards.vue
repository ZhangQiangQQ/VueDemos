<template>
  <div class="jobintension">
    <el-form :inline="true" :model="formInline" class="demo-form-inline" :rules="rules" ref="formInline">
      <el-form-item label="奖项名称" style="margin:0 0 0 20px" prop="prizeAward">
        <el-input style="width:242px;height:36px" v-model="formInline.prizeAward" placeholder></el-input>
      </el-form-item>
      <el-form-item label="获奖时间" prop="prizeTime">
        <el-date-picker
          style="width:242px;height:36px"
          v-model="formInline.prizeTime"
          type="month"
          :picker-options="pickerOptions"
          placeholder="选择月">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="获奖证书" style="margin-left:-110px">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          >
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="语种" style="visibility:hidden">
        <el-input style="width:242px;height:36px" placeholder></el-input>
      </el-form-item>
      <br />
      <el-form-item style="margin:0 0 20px 450px">
        <el-button @click="cancel"  style="margin:0 10px 0 0" plain>取消</el-button>
        <el-button @click="keep('formInline')" type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "awards",
  props: ["professionalDegree"],
  data() {
    return {
      imageUrl:'',
      file:'',
      perId:'',
      formInline: {
        prizeAward: "",
        prizeTime: ""
      },
       pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
       rules: {
          prizeAward: [
            { required: true, message: "请输入奖项名称", trigger: "blur" },
            { min: 0, max: 30, message: "长度在 0 到 30 个字符", trigger: "blur" }
            // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
          prizeTime: [
            { required: true, message: "请选择获奖时间", trigger: "blur" },
          ],
        }
    };
  },
  methods: {
     cancel() {
      this.$emit("awardsemit",false,true) 
    },
    //新增
    keep(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let til = this.formInline.prizeTime.getTime();
            this.$http.post(`/resume/${this.professionalDegree}/award`, {file:this.file,acquiredTime:til,award:this.formInline.prizeAward}).then(res => {
                if (res.data.code == 201) {
                  this.$emit("awardsemit",false,true)
                  this.perId = res.data.data.addedModule.id
                  this.$http.get(`/resume/${this.professionalDegree}/award/${this.perId}/cert/url`).then(res => {
                      if (res.data.code == 200) {
                      }
                    });
                    this.$emit("skillEmit", false, true)
                }
              });
        } else {
          return false;
        }
      });
     
    },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.file = res.data
      }
    //更新
    // keep() {
    //   this.$emit("skill", this.formInline.technicalName, this.formInline.level);
    //   this.$http
    //     .put(`/resume/${2}/award/${1}`, {
    //       beginTime: "",
    //       company: "",
    //       position: ""
    //     })
    //     .then(res => {
    //       if (res.data.code == 200) {
    //         console.log(res);
    //       }
    //     });
    // }
  },
  computed: {
      uploadUrl() {
        return `/consumertest/resume/${this.professionalDegree}/skill/cert`
      }
    },
};
</script>

<style lang="stylus" scoped> 
  .el-form-item
    padding 0 0 0 30px
  .el-button
    width 94px 
    height 34px
    vertical-align middle
    padding 0px 
  .keep:hover
    border-color #7d8dcd      
</style>
<style lang="stylus">
  .el-input__inner:hover
    border-color red 
</style>
<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-right:30px
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 130px;
    height: 130px;
    line-height: 130px;
    text-align: center;
  }
  .avatar {
    width: 130px;
    height: 130px;
    display: block;
  }
</style>