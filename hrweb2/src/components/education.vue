<template>
  <div class="education">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="学校名称" style="margin:0 0 0 20px">
                <el-input style="width:242px;height:36px" v-model="formInline.schoolName" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="在校时间" class="block">
                <el-date-picker
                style="width:242px;height:36px"
                v-model="formInline.schoolTime"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="专业" style="margin:0 0 0 77px">
                <el-input style="width:242px;height:36px" v-model="formInline.major" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="是否统招" style="width:340px;">
                <el-radio style="margin:0 230px 0 0;" v-model="formInline.isgeneral" label="1">是</el-radio>
                <el-radio style="margin:0 0 0 -150px;"  v-model="formInline.general" label="2">否</el-radio>
            </el-form-item>
            <el-form-item label="学历" style="margin:0 0 0 20px">
                <el-select style="width:242px;height:36px" v-model="formInline.qualifications" placeholder="">
                <el-option label="" value="初中及以下"></el-option>
                <el-option label="" value="大专/职中"></el-option>
                <el-option label="" value="高中"></el-option>
                <el-option label="" value="大专"></el-option>
                <el-option label="" value="本科"></el-option>
                <el-option label="" value="硕士"></el-option>
                <el-option label="" value="博士"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="学历" style="visibility:hidden">
                <el-select style="width:242px;height:36px" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <br>
            <el-form-item style="margin:0 0 20px 500px"> 
            <el-button type="info" plain style="margin:0 10px 0 0">取消</el-button>
            <el-button type="primary">保存</el-button>
            </el-form-item>
          </el-form>
  </div>
</template>

<script>

export default {
  name: 'education',
  data() {
    return {
         formInline: {
          schoolName: '',
          schoolTime: '',
          major: '',
          isgeneral: '',
          general: '',
          qualifications: ''
        }
    }
  }
}
</script>

<style lang="stylus" scoped> 
  .el-form-item
    padding 0 0 0 30px
</style>