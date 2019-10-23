<template>
  <div class="basicinfo">
    <div class="basicinfo-first">
      <div class="basicinfo-left">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="basicinfo-right" style="margin:53px 20px 0 0">
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
          label-width="110px"
          ref="formInline"
          :rules="personalrules"
        >
          <el-form-item label="姓名" style="margin:0 40px 0 0" prop="name">
            <el-input style="width:168px;height:36px" v-model="formInline.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="求职状态" prop="jobHunting">
            <el-select style="width:168px;height:36px" v-model="formInline.jobHunting" placeholder>
              <el-option label value="积极找工作"></el-option>
              <el-option label value="随便看看"></el-option>
              <el-option label value="暂时不换工作"></el-option>
            </el-select>
          </el-form-item>
          <br />
          <el-form-item label="性别" style="margin:0 40px 0 0" prop="gender">
            <el-radio-group v-model="formInline.gender">
              <el-radio-button label="0">女性</el-radio-button>
              <el-radio-button label="1">男性</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="工作年限" style="margin-left:30px" prop="workingSeniority">
            <el-date-picker
              style="width:168px;height:36px"
              type="year"
              :picker-options="pickerOptions"
              placeholder="选择日期"
              v-model="formInline.workingSeniority"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="是否应届" style="margin:0 40px 0 0" prop="isGraduate">
            <el-radio-group v-model="formInline.isGraduate">
              <el-radio-button label="0">是</el-radio-button>
              <el-radio-button label="1">否</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="海外工作年限" style="margin-left:60px" prop="overseasAge">
            <el-select style="width:168px;height:36px" v-model="formInline.overseasAge" placeholder>
              <el-option label="1年" value="1"></el-option>
              <el-option label="2年" value="2"></el-option>
              <el-option label="3年" value="3"></el-option>
              <el-option label="4年" value="4"></el-option>
              <el-option label="5年" value="5"></el-option>
              <el-option label="6年" value="6"></el-option>
              <el-option label="7年" value="7"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所在城市" style="margin:0 40px 0 0" prop="city">
            <el-cascader
              :options="options"
              style="width:168px;height:36px"
              v-model="formInline.city"
              :props="props"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="最高学历" prop="educationLevel">
            <el-select
              style="width:168px;height:36px"
              v-model="formInline.educationLevel"
              placeholder
            >
              <el-option label="初中及以下" value="0"></el-option>
              <el-option label="职中" value="1"></el-option>
              <el-option label="高中" value="2"></el-option>
              <el-option label="大专" value="3"></el-option>
              <el-option label="本科" value="4"></el-option>
              <el-option label="硕士" value="5"></el-option>
              <el-option label="博士" value="6"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="生日" style="margin:0 10px 0 0" prop="birthday">
            <el-date-picker
              style="width:168px;height:36px"
              type="date"
              :picker-options="pickerOptionsOne"
              placeholder="选择日期"
              v-model="formInline.birthday"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="邮箱" style="margin-left:30px" prop="email">
            <el-input v-model="formInline.email" style="width:168px;height:36px" placeholder></el-input>
          </el-form-item>
          <el-form-item label="手机" style="margin:0 40px 0 0" prop="phone">
            <el-input v-model="formInline.phone" style="width:168px;height:36px" placeholder></el-input>
          </el-form-item>
          <el-form-item label="政治面貌" prop="politicCountenance">
            <el-select
              style="width:168px;height:36px"
              v-model="formInline.politicCountenance"
              placeholder
            >
              <el-option label="群众" value="0"></el-option>
              <el-option label="团员" value="1"></el-option>
              <el-option label="民主党派" value="2"></el-option>
              <el-option label="预备党员" value="3"></el-option>
              <el-option label="中共党员" value="4"></el-option>
            </el-select>
          </el-form-item>
          <br />
          <el-form-item style="float:right;margin:0 100px 20px 0">
            <el-button @click="cancel()" style="margin:0 10px 0 0" plain>取消</el-button>
            <el-button type="primary" @click="keep('formInline')">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "basicinfo",
  props: ["fromData"],
  data() {
    return {
      formInline: {
        name: "",
        jobHunting: "",
        gender: "",
        workingSeniority: "",
        city: "",
        educationLevel: "",
        birthday: "",
        email: "",
        phone: "",
        politicCountenance: "",
        overseasAge: "",
        isGraduate: ""
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      pickerOptionsOne: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      imageUrl: "",
      file: "",
      options: [],
      props: {
        value: "code",
        label: "tag",
        children: "children"
      },
      personalrules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          {
            min: 0,
            max: 24,
            message: "长度在 0 到 24 个字符",
            trigger: "blur"
          },
          {
            pattern: /^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/,
            message: "姓名仅支持中文汉字与英文字母",
            trigger: "blur"
          }
        ],
        jobHunting: [
          { required: true, message: "请选择求职状态", trigger: "blur" }
        ],
        city: [{ required: true, message: "请选择城市", trigger: "blur" }],
        gender: [{ required: true, message: "请选择性别", trigger: "blur" }],
        isGraduate: [
          { required: true, message: "请选择是否应届", trigger: "change" }
        ],
        birthday: [
          { required: true, message: "请选择日期", trigger: "change" }
        ],
        overseasAge: [
          { required: true, message: "请选择海外工作时间", trigger: "change" }
        ],
        educationLevel: [
          { required: true, message: "请选择学历", trigger: "change" }
        ],
        workingSeniority: [
          { required: true, message: "请选择工作年限", trigger: "change" }
        ],
        politicCountenance: [
          { required: true, message: "请选择政治面貌", trigger: "change" }
        ],
        phone: [
          { required: true, message: "请填写手机号", trigger: "change" },
          {
            pattern: /^[1][3578][0-9]{9}$/,
            message: "请输入正确的手机号",
            trigger: ["change", "blur"]
          }
        ],
        email: [
          { required: true, message: "请填写邮箱", trigger: "change" },
          {
            pattern: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            message: "请输入正确的邮箱",
            trigger: ["change", "blur"]
          }
        ]
      }
    };
  },
  methods: {
    keep(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.formInline.politicCountenance == "群众") {
            this.formInline.politicCountenance = 0;
          } else if (this.formInline.politicCountenance == "团员") {
            this.formInline.politicCountenance = 1;
          } else if (this.formInline.politicCountenance == "民主党派") {
            this.formInline.politicCountenance = 1;
          } else if (this.formInline.politicCountenance == "预备党员") {
            this.formInline.politicCountenance = 3;
          } else if (this.formInline.politicCountenance == "中共党员") {
            this.formInline.politicCountenance = 4;
          }

          if (this.formInline.isGraduate == 0) {
            this.formInline.isGraduate = true;
          } else if (this.formInline.isGraduate == 1) {
            this.formInline.isGraduate = false;
          }
          this.$http
            .put(`/resume/${this.fromData}/base`, {
              file: this.file,
              overseasAge: Number(this.formInline.overseasAge),
              workYear: this.formInline.workingSeniority.getTime(),
              politicalStatus: Number(this.formInline.politicCountenance),
              birthday: this.formInline.birthday.getTime(),
              county: this.formInline.city[1],
              fullName: this.formInline.name,
              sex: this.formInline.gender,
              province: this.formInline.city[0],
              degree: Number(this.formInline.educationLevel),
              email: this.formInline.email,
              phone: this.formInline.phone,
              isGraduate: this.formInline.isGraduate
            })
            .then(res => {
              if (res.data.code == 200) {
                this.$emit("BasicEmit", false, true);
              }
            });
        }
      });
    },
    city() {
      this.$http.get("/constant/district").then(res => {
        if (res.data.code == 200) {
          this.options = res.data.data;
        }
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.file = res.data;
      // this.$http.get(`/resume/${this.professionalDegree}/skill/${24}/cert/url`).then(res => {
      //   if (res.data.code == 200) {
      //     this.file = res.data.data
      //   }
      // });
    },
    cancel() {
      const h = this.$createElement;
      this.$msgbox({
        message: h(
          "div",
          {
            style: "height:200px"
          },
          [
            h(
              "p",
              {
                style: "font-size:20px;line-height:200px"
              },
              "当前编辑内容未完成，是否继续操作？ "
            ),
            h(
              "p",
              {
                style: "font-size:14px;margin-top:-80px"
              },
              "退出编辑后，更新的内容不会自动保存 "
            )
          ]
        ),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "操作成功!"
          });
          this.$emit("BasicEmit", false, true);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作"
          });
        });
    }
  },
  created() {
    this.city();
  },
  computed: {
    uploadUrl() {
      return `/consumertest/resume/${this.fromData}/base/avatar`;
    }
  }
};
</script>

<style lang="stylus" scoped>
.basicinfo
  width 770px
  .basicinfo-first 
    width 800px
    display flex
    flex-direction row
    .basicinfo-left 
      .avatar-uploader 
        width 80px
        height 80px
        margin 32px 0 0 42px
    .cancel:hover
      background #1d366e   
      color white
      border-color #1d366e
    .keep:hover
      border-color #7d8dcd 
            
</style>
<style lang="stylus">
  .el-cascader__label:hover
    border-color blue
  .avatar-uploader .el-upload
    border 1px dashed #d9d9d9
    border-radius 39px
    cursor pointer
    position relative
    overflow hidden
  .avatar-uploader .el-upload:hover
    border-color #409EFF
  .avatar-uploader-icon
    font-size 28px
    color #8c939d
    width 78px
    height 78px
    line-height 78px
    text-align center
  .avatar
    width 78px
    height 78px
    display block
    
</style>