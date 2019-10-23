<template>
  <div class="jobintension">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="职位类型" style="margin:0 0 0 20px">
                <el-input style="width:242px;height:36px" v-model="formInline.postType" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="工作城市" style="margin:0 10px 20px 0">
                <el-cascader style="width:242px;height:36px"
                    :options="options"
                    :show-all-levels="false"
                    v-model="formInline.city"
                    >
                </el-cascader>
            </el-form-item><br>
            <el-form-item label="企业行业" style="margin:0 0 0 20px">
                <el-select style="width:242px;height:36px" v-model="formInline.trade" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="薪资范围" style="margin:0 10px 20px 0">
                <el-select style="width:242px;height:36px" v-model="formInline.scope" placeholder="">
                <el-option label="" value="1千以下"></el-option>
                <el-option label="" value="1k-2k"></el-option>
                <el-option label="" value="2k-4k"></el-option>
                <el-option label="" value="4k-6k"></el-option>
                <el-option label="" value="6k-8k"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="求职状态" style="margin:0 0 0 20px">
                <el-select id="name" style="width:242px;height:36px" v-model="formInline.status" placeholder="" @change="JobType()">
                <el-option label="" value="离职-随时到岗"></el-option>
                <el-option label="" value="离职-延时到岗"></el-option>
                <el-option label="" value="在职-考虑机会"></el-option>
                <el-option label="" value="在职-暂不考虑"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="工作类型" style="margin:0 10px 20px 0">
                <el-select style="width:242px;height:36px" v-model="formInline.jobType" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item><br>
            <el-form-item label="到岗时间" class="block" v-if="datePicker" style="margin:0 0 0 20px">
                <el-date-picker
                style="width:242px;height:36px"
                v-model="formInline.reportTime"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="工作类型" style="visibility:hidden">
                <el-select style="width:242px;height:36px" placeholder="">
                <el-option label="" value=""></el-option>
                <el-option label="" value=""></el-option>
                </el-select>
            </el-form-item>
            <el-form-item style="float:right;margin:0 41px 20px 0">
            <el-button type="info"  plain style="margin:0 10px 0 0">取消</el-button>
            <el-button type="primary" @click="JobType">保存</el-button>
            </el-form-item>
          </el-form>
  </div>
</template>

<script>

export default {
  name: 'jobintension',
  
  data() {
    return {
         radio3: '上海',
         formInline: {
          postType: '',
          trade: '',
          scope:'',
          status:'',
          jobType:'',
          reportTime:'',
          datePicker:false,
        }
    }
  },
  methods:{
    JobType () {
      if(this.formInline.aaa == "离职-延时到岗"){
         this.datePicker = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped> 
  .el-form-item
    padding 0 0 0 30px
</style>