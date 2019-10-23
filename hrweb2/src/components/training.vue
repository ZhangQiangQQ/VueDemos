<template>
  <div class="jobintension">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="培训课程" style="margin:0 0 0 15px">
                <el-input style="width:242px;height:36px" v-model="formInline.trainCourse" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="培训课程">
                <el-input style="width:242px;height:36px" v-model="formInline.trainCourse" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="培训时间" class="block" style="margin:0 27px 0 0">
                <el-date-picker
                style="width:242px;height:36px"
                v-model="trainTime"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="学历" style="visibility:hidden;margin-left:-15px">
                <el-select style="width:242px;height:36px" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item style="margin:0 0 20px 500px">
            <el-button type="info" plain style="margin:0 10px 0 0">取消</el-button>
            <el-button type="primary">保存</el-button>
            </el-form-item>
          </el-form>
  </div>
</template>

<script>

export default {
  name: 'training',
  
  data() {
    return {
         formInline: {
          trainCourse: '',
          trainTime: '',
        }
    }
  }
}
</script>

<style lang="stylus" scoped> 
        .el-form-item
          padding 0 0 0 30px

</style>