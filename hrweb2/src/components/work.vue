<template>
  <div class="jobintension">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="岗位" style="margin:0 0 0 40px">
                <el-input style="width:242px;height:36px" v-model="formInline.post" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="职位名称">
                <el-input style="width:242px;height:36px" v-model="formInline.postName" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="行业" style="margin:0 0 0 40px">
                <el-select style="width:242px;height:36px" v-model="formInline.trade" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="所在部门">
                <el-input style="width:242px;height:36px" v-model="formInline.branch" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="税前月薪" style="margin:0 0 0 -16px">
                <el-input style="width:242px;height:36px" v-model="formInline.monthPay" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="学历" style="visibility:hidden">
                <el-select style="width:242px;height:36px" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="工作描述" style="margin-left:10px" >
                <el-input type="textarea" v-model="formInline.jobDescription"  style="width:583px" ></el-input>
            </el-form-item><br>
            <el-form-item style="margin:0 0 20px 500px">
            <el-button type="info" plain style="margin:0 10px 0 0">取消</el-button>
            <el-button type="primary">保存</el-button>
            </el-form-item>
          </el-form>
  </div>
</template>

<script>

export default {
  name: 'work',
  
  data() {
    return {
         formInline: {
          jobDescription: '',
          monthPay: '',
          branch: '',
          trade: '',
          postName: '',
          post: '',
        }
    }
  }
}
</script>

<style lang="stylus" scoped> 
  .el-form-item
    padding 0 0 0 30px
</style>