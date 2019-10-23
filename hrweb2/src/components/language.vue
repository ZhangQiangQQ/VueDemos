<template>
  <div class="jobintension">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="语种" style="margin:0 0 0 20px">
                <el-input style="width:108px;height:36px" v-model="formInline.languages" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="听力能力">
                <el-select style="width:108px;height:36px" v-model="formInline.listenAbility" placeholder="">
                <el-option label="" value="一般"></el-option>
                <el-option label="" value="良好"></el-option>
                <el-option label="" value="熟练"></el-option>
                <el-option label="" value="精通"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="读写能力">
                <el-input style="width:108px;height:36px" v-model="formInline.readAbility" placeholder=""></el-input>
            </el-form-item><br>
            <el-form-item style="margin:0 0 20px 470px">
            <el-button type="info" plain style="margin:0 10px 0 0">取消</el-button>
            <el-button type="primary">保存</el-button>
            </el-form-item>
          </el-form>
  </div>
</template>

<script>

export default {
  name: 'language',
  data() {
    return {
         formInline: {
          languages: '',
          listenAbility: '',
          readAbility:''
        }
    }
  }
}
</script>

<style lang="stylus" scoped> 
  .el-form-item
    padding 0 0 0 54px
</style>