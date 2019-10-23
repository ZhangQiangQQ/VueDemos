<template>
  <div class="education">
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
      :rules="rules"
      ref="formInline"
      label-width="80px"
    >
      <el-form-item label="学校名称" style="margin:0 0 0 10px" prop="schoolName">
        <el-input style="width:202px;height:36px" v-model="formInline.schoolName" placeholder></el-input>
      </el-form-item>
      <el-form-item label="在校时间" class="block" prop="schoolTime">
        <el-date-picker
          style="width:280px;height:36px"
          v-model="formInline.schoolTime"
          type="daterange"
          :picker-options="pickerOptions"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="专业" style="margin:0 0 0 0" prop="major">
        <el-input style="width:202px;height:36px" v-model="formInline.major" placeholder></el-input>
      </el-form-item>
      <el-form-item label="学历" style="margin:0 80px 0 0" prop="qualifications">
        <el-select style="width:202px;height:36px" v-model="formInline.qualifications" placeholder>
          <el-option label="初中及以下" value="0"></el-option>
          <el-option label="职中" value="1"></el-option>
          <el-option label="高中" value="2"></el-option>
          <el-option label="大专" value="3"></el-option>
          <el-option label="本科" value="4"></el-option>
          <el-option label="硕士" value="5"></el-option>
          <el-option label="博士" value="6"></el-option>
        </el-select>
      </el-form-item>
      <br />
      <el-form-item label="是否统招" style="width:355px;margin:10px 0 0 0" prop="general">
        <el-radio-group v-model="formInline.general">
          <el-radio style="margin:0 30px 0 0;" label="1">是</el-radio>
          <el-radio style="margin:0 120px 0 0;" label="2">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="学历" style="visibility:hidden">
        <el-select style="width:242px;height:36px" placeholder>
          <el-option label value="shanghai"></el-option>
          <el-option label value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <br />
      <el-form-item style="margin:0 0 20px 450px">
        <el-button @click="cancel" style="margin:0 10px 0 0" plain>取消</el-button>
        <el-button @click="keep('formInline')" type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "education",
  props: ["educationDegree"],
  data() {
    return {
      formInline: {
        schoolName: "",
        schoolTime: [],
        major: "",
        general: "",
        qualifications: ""
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      rules: {
        schoolName: [
          { required: true, message: "请输入学校名称", trigger: "blur" }
          // { min: 0, max: 24, message: '长度在 0 到 24 个字符', trigger: 'blur' },
          // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
        ],
        schoolTime: [
          { required: true, message: "请选择在校时间", trigger: "blur" }
        ],
        major: [
          {
            required: true,
            message: "请填写专业",
            trigger: "change"
          },
          { min: 0, max: 36, message: "长度在 0 到 36 个字符", trigger: "blur" }
        ],
        general: [{ required: true, message: "请选择性别", trigger: "change" }],
        qualifications: [
          { required: true, message: "请选择学历", trigger: "change" }
        ]
      }
      //设置当前日期之后不能选中
      // endDateOpt: {
      //   disabledDate(time) {
      //     return time.getTime() > Date.now();
      //     return time.getTime() < this.startDate;
      //   }
      // }
    };
  },
  methods: {
    cancel() {
      this.$emit("sendiptVal", false, true);
    },
    //新增
    keep(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let til = this.formInline.schoolTime[0].getTime();
          let till = this.formInline.schoolTime[1].getTime();
          let ti = this.$moment(till).format("YYYY-MM");
          let end = this.$moment(new Date().getTime()).format("YYYY-MM");
          if (ti === end) {
            var eduTime = null;
          } else {
            var eduTime = till;
          }
          if (this.formInline.general == 0) {
            this.formInline.general = true;
          } else if (this.formInline.general == 1) {
            this.formInline.general = false;
          }
          // this.formEducation.educationTime = [this.$moment(till).format("YYYY-MM"),end]
          this.$http
            .post(`/resume/${this.educationDegree}/education`, {
              beginTime: til,
              endTime: eduTime,
              degree: this.formInline.qualifications,
              major: this.formInline.major,
              school: this.formInline.schoolName,
              isUnified: this.formInline.general
            })
            .then(res => {
              if (res.data.code == 201) {
                console.log(res);
                this.$emit("sendiptVal", false, true);
              }
            });
        } else {
          return false;
        }
      });
    }
    //更新
    // keep() {
    //   this.$emit("skill", this.formInline.technicalName, this.formInline.level);
    //   this.$http
    //     .put(`/resume/${2}/education/${1}`,{beginTime: "",degree: "",major: "",school:''})
    //     .then(res => {
    //       if (res.data.code == 200) {
    //         console.log(res);
    //       }
    //     });
    // }
  },
  created() {
    // this.formInline.major = this.educationDegree;
  }
};
</script>

<style lang="stylus" scoped>.el-form-item {
  padding: 0 0 0 30px;
}

.cancel:hover {
  background: #1d366e;
  color: white;
  border-color: #1d366e;
}

.el-button {
  width: 94px;
  height: 34px;
  vertical-align: middle;
  padding: 0px;
}

.keep:hover {
  border-color: #7d8dcd;
}
</style>
