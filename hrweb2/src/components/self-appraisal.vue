<template>
  <div class="jobintension">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="工作描述" style="margin-left:-10px" >
                <el-input type="textarea" v-model="personalDescription" style="width:583px" placeholder="资料完善程度高，被选中的几率越大呦" ></el-input>
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
  name: 'self-appraisal',
  data() {
    return {
         formInline: {
          personalDescription: '',
        }
    }
  }
}
</script>

<style lang="stylus" scoped> 
  .el-form-item
    padding 0 0 0 60px
</style>