<template>
  <div class="jobintension">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="职称等级">
                <el-input style="width:242px;height:36px" v-model="formInline.professional" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="语种" style="visibility:hidden;margin:0 5px 0 0" >
                <el-input style="width:242px;height:36px" v-model="formInline.languages" placeholder=""></el-input>
            </el-form-item><br>
            <el-form-item style="margin:0 0 20px 460px">
            <el-button type="info" plain style="margin:0 10px 0 0">取消</el-button>
            <el-button type="primary">保存</el-button>
            </el-form-item>
          </el-form>
  </div>
</template>

<script>
export default {
  name: 'professional',
  data() {
    return {
         formInline: {
          professional: '',
          languages: ''
        }
    }
  }
}
</script>

<style lang="stylus" scoped> 
  .el-form-item
    padding 0 0 0 60px
</style>