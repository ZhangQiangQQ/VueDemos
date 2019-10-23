<template>
  <div class="jobintension">
    <el-form :inline="true" :model="formInline" class="demo-form-inline" :rules="rules" ref="formInline">
      <el-form-item label="技能名称" style="margin:0 0 0 20px" prop="technicalName">
        <el-input style="width:242px;height:36px" v-model="formInline.technicalName" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="掌握程度" prop="level">
        <el-select style="width:242px;height:36px" v-model="formInline.level" placeholder="">
          <el-option label="一般" value="0"></el-option>
          <el-option label="良好" value="1"></el-option>
          <el-option label="熟练" value="2"></el-option>
          <el-option label="精通" value="3"></el-option>
        </el-select>
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
        <el-input style="width:242px;height:36px" placeholder=""></el-input>
      </el-form-item>
      <br>
      <el-form-item style="margin:0 0 20px 450px">
        <el-button @click="cancel" plain style="margin:0 10px 0 0">取消</el-button>
        <el-button @click="keep('formInline')" type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    name: 'personal_skill',
    props: ["professionalDegree"],
    data() {
      return {
        perId:'',
        file:'',
        imageUrl: '',
        formInline: {
          technicalName: '',
          level: ''
        },
        rules: {
          technicalName: [
            {required: true, message: "请输入技能名称", trigger: "blur"},
            {min: 0, max: 50, message: "长度在 0 到 50 个字符", trigger: "blur"}
            // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
          level: [
            {required: true, message: "请选择掌握程度", trigger: "blur"},
          ],
        }
      }
    },
    computed: {
      uploadUrl() {
        return `/consumertest/resume/${this.professionalDegree}/skill/cert`
      }
    },
    methods: {
      cancel() {
        this.$emit("skillEmit", false, true)
      },
      //新增
      keep(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.$http.post(`/resume/${this.professionalDegree}/skill`, {
              skill: this.formInline.technicalName,
              level: this.formInline.level,
              file:this.file
            }).then(res => {
              if (res.data.code == 201) {
                this.perId = res.data.data.addedModule.id
                this.$http.get(`/resume/${this.professionalDegree}/skill/${this.perId}/cert/url`).then(res => {
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
        // this.$http.get(`/resume/${this.professionalDegree}/skill/${24}/cert/url`).then(res => {
        //   if (res.data.code == 200) {
        //     this.file = res.data.data
        //   }
        // });
      },
      //更新
      // keep() {
      //   this.$emit("skill",this.formInline.technicalName,this.formInline.level)
      //   this.$http.put(`/resume/${2}/skill/${1}`,{skill:this.formInline.technicalName,level:this.formInline.level}).then(res => {
      //     if (res.data.code == 200) {
      //       console.log(res);
      //     }
      //   });
      // },
    }
  }
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
