<template>
  <div class="jobintension">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="奖项名称" style="margin:0 0 0 20px">
                <el-input style="width:242px;height:36px" v-model="formInline.prizeAward" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="获奖时间">
                <el-select style="width:242px;height:36px" v-model="formInline.prizeTime" placeholder="">
                <el-option label="" value=""></el-option>
                <el-option label="" value=""></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="获奖证书" style="margin-left:-90px">
                <el-upload
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-upload"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="语种" style="visibility:hidden">
                <el-input style="width:242px;height:36px" placeholder=""></el-input>
            </el-form-item><br>
            <el-form-item style="margin:0 0 20px 490px">
            <el-button type="info" plain style="margin:0 10px 0 0">取消</el-button>
            <el-button type="primary">保存</el-button>
            </el-form-item>
          </el-form>
  </div>
</template>

<script>

export default {
  name: 'awards',
  data() {
    return {
         formInline: {
          prizeAward: '',
          prizeTime: ''
        }
    }
  }
}
</script>

<style lang="stylus" scoped> 
  .el-form-item
    padding 0 0 0 30px
</style>