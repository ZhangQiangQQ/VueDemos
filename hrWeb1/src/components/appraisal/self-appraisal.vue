<template>
  <div class="jobintension">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="工作描述" style="margin-left:-10px;" >
                <el-input type="textarea" v-model="personalDescription" style="width:583px;height:500px" placeholder="资料完善程度高，被选中的几率越大呦" ></el-input>
            </el-form-item><br>
            <el-form-item style="margin:0 0 20px 420px">
                <el-button @click="cancel" plain style="margin:0 10px 0 0">取消</el-button>
                <el-button @click="keep" type="primary">保存</el-button>
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
  },
  methods: {
    cancel() {
      this.$emit("selfappraisalemit",false,true)
    },
    keep () {
      this.$emit("selfappraisalemit",false,true)
      this.$http.put(`/resume/${2}/evaluation`,{content:''}).then(res => {
        if (res.data.code == 200) {
          console.log(res);
        }
      });
    }
  }
}
</script>

<style lang="stylus" scoped> 
  .el-form-item
    padding 0 0 0 60px
  .cancel:hover
    background #1d366e  
    color white
  .el-button
    width 94px 
    height 34px
    vertical-align middle
    padding 0px  
  .element.style
    height 200px  
</style>