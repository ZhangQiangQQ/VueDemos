<template>
  <div class="specialty">
    <div class="specialty-title">请填写你的基本信息:</div>
    <div class="specialty-form">
      <el-form
        :model="formInline"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-formInline"
        :inline="true"
      >
        <el-row :gutter="20">
          <el-col :span="13">
            <el-form-item label="姓名" prop="name" style="margin-left:-13px">
              <el-input style="width:168px;height:36px" v-model="formInline.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <img style="margin:-45px 0 0 0" :src="require('../assets/images/11.png')" />
          </el-col>
        </el-row>

        <el-form-item label="性别" prop="gender">
          <el-radio-group style="width:168px;height:36px" v-model="formInline.gender">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-radio-button label="男性"></el-radio-button>
              </el-col>
              <el-col :span="12">
                <el-radio-button label="女性"></el-radio-button>
              </el-col>
            </el-row>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="最高学历" prop="educationLevel" >
          <el-select style="width:168px;height:36px" v-model="formInline.educationLevel" placeholder="请选择学历">
            <el-option label value="初中"></el-option>
            <el-option label value="高中"></el-option>
            <el-option label value="中专"></el-option>
            <el-option label value="中技"></el-option>
            <el-option label value="高职"></el-option>
            <el-option label value="大专"></el-option>
            <el-option label value="本科"></el-option>
            <el-option label value="硕士"></el-option>
            <el-option label value="博士"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="生日" prop="birthday">
          <el-date-picker
            style="width:168px;height:36px"
            type="date"
            placeholder="选择日期"
            v-model="formInline.birthday"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="海外工作年限" prop="outWorkingSeniority">
          <el-select style="width:168px;height:36px" v-model="formInline.outWorkingSeniority" :disabled="formInline.workingSeniority === '无工作年限'||formInline.workingSeniority === ''?true:false" placeholder="请选择年限">
            <el-option label value="无工作年限"></el-option>
            <el-option label value="1-3年"></el-option>
            <el-option label value="3-5年"></el-option>
            <el-option label value="5-10年"></el-option>
            <el-option label value="手动输入"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工作年限" prop="workingSeniority">
          <el-select style="width:168px;height:36px" v-model="formInline.workingSeniority" placeholder="请选择年限">
            <el-option label value="无工作年限"></el-option>
            <el-option label value="1-3年"></el-option>
            <el-option label value="3-5年"></el-option>
            <el-option label value="5-10年"></el-option>
            <el-option label value="手动输入"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="政治面貌" prop="politicCountenance">
          <el-select style="width:168px;height:36px" v-model="formInline.politicCountenance" placeholder="请选择政治面貌">
            <el-option label value="群众"></el-option>
            <el-option label value="团员"></el-option>
            <el-option label value="民主党派"></el-option>
            <el-option label value="预备党员"></el-option>
            <el-option label value="中共党员"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input style="width:168px;height:36px" v-model="formInline.phone" placeholder="请填写手机号"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input style="width:168px;height:36px" v-model="formInline.email" placeholder="请填写邮箱"></el-input>
        </el-form-item>
        <el-form-item style="margin:50px 0 40px 280px">
          <el-button class="keep" @click="submitForm('ruleForm')" style="width:270px;height:43px" type="primary">下一步</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "specialty",
  data() {
    return {
      formInline: {
          name: "",
          gender: "",
          workingSeniority: '',
          educationLevel: "",
          birthday: "",
          email: "",
          phone: "",
          politicCountenance: "",
          outWorkingSeniority:''
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 0, max: 24, message: '长度在 0 到 24 个字符', trigger: 'blur' },
            { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
          gender: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          birthday: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          educationLevel: [
            { required: true, message: '请选择学历', trigger: 'change' }
          ],
          outWorkingSeniority: [
            { required: true, message: '请选择工作年限', trigger: 'change' }
          ],
          workingSeniority: [
            { required: true, message: '请选择工作年限', trigger: 'change' }
          ],
          politicCountenance: [
            { required: true, message: '请选择政治面貌', trigger: 'change' }
          ],
          phone: [
            { required: true, message: '请填写手机号', trigger: 'change' },
            { pattern:/^[1][3578][0-9]{9}$/,message: '请输入正确的手机号', trigger: ['change','blur'] },
          ],
          email: [
            { required: true, message: '请填写邮箱', trigger: 'change' },
            { pattern:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,message: '请输入正确的邮箱', trigger: ['change','blur'] },
          ],
        }
    };
    
    
  },
  methods: {
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
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    next() {
        this.$router.push({path:'/resume'})
        this.$http.post('/resume').then(res => {
        if (res.data.code == 200) {
          console.log(res) 
        }else {
        }
      });
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // this.$router.push({path:'/resume'})
          } else {
            this.$router.push({path:'/resume'})
            return false;
          }
        });
      },
  }
};
</script>

<style lang="stylus" scoped>
.specialty
  width 770px
  background white
  margin 90px auto 0 
  border 1px solid white 
  .specialty-title
    font-size 16px
    color #61687c
    text-align left  
    margin 56px 0 0 50px
  .specialty-form
    width 600px
    margin 50px 0 0 10px 
</style>