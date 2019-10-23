<template>
  <div class="jobintension">
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
      :rules="rules"
      ref="formInline"
    >
      <el-form-item label="培训课程" style="margin:0 0 0 15px" prop="trainCourse">
        <el-input style="width:242px;height:36px" v-model="formInline.trainCourse" placeholder></el-input>
      </el-form-item>
      <el-form-item label="培训机构" prop="trainCourse">
        <el-input style="width:242px;height:36px" v-model="formInline.trainCours" placeholder></el-input>
      </el-form-item>
      <el-form-item label="培训时间" class="block" style="margin:0 27px 0 0" prop="trainTime">
        <el-date-picker
          style="width:242px;height:36px"
          v-model="formInline.trainTime"
          type="daterange"
          :picker-options="pickerOptions"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="学历" style="visibility:hidden;margin-left:-15px">
        <el-select style="width:242px;height:36px" placeholder>
          <el-option label value="shanghai"></el-option>
          <el-option label value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item style="margin:0 0 20px 450px">
        <el-button @click="cancel" plain style="margin:0 10px 0 0">取消</el-button>
        <el-button @click="keep('formInline')" type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "training",
  props: ["trainDegree"],
  data() {
    return {
      formInline: {
        trainCourse: "",
        trainCours: "",
        trainTime: ""
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      trainTime: [],
      rules: {
        trainCourse: [
          { required: true, message: "请输入培训课程", trigger: "blur" },
          { min: 0, max: 50, message: "长度在 0 到 50 个字符", trigger: "blur" }
          // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
        ],
        trainCours: [
          { required: true, message: "请输入培训机构", trigger: "blur" },
          { min: 0, max: 50, message: "长度在 0 到 50 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    cancel() {
      this.$emit("trainEmit", false, true);
    },
    //新增
    keep(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let til = this.formInline.trainTime[0].getTime();
          let till = this.formInline.trainTime[1].getTime();
          let ti = this.$moment(till).format("YYYY-MM");
          let end = this.$moment(new Date().getTime()).format("YYYY-MM");
          if (ti === end) {
            var eduTime = null;
          } else {
            var eduTime = till;
          }
          this.$http
            .post(`/resume/${this.trainDegree}/training`, {
              beginTime: til,
              endTime: eduTime,
              institution: this.formInline.trainCours,
              lesson: this.formInline.trainCourse
            })
            .then(res => {
              if (res.data.code == 201) {
                console.log(res);
                this.$emit("trainEmit", false, true);
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
    //     this.$http.put(`/resume/${2}/training/${1}`,{beginTime:'',institution:'',lesson:''}).then(res => {
    //       if (res.data.code == 200) {
    //         console.log(res);
    //       }
    //     });
    // }
  }
};
</script>

<style lang="stylus" scoped>.el-form-item {
  padding: 0 0 0 30px;
}

.cancel:hover {
  background: #1d366e;
  color: white;
}

.el-button {
  width: 94px;
  height: 34px;
  vertical-align: middle;
  padding: 0px;
}
</style>