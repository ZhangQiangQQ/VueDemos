<template>
  <div class="hello">
    <el-form :inline="true" :model="params" class="demo-form-inline">
      <el-form-item label="企业名称：">
        <el-input v-model="params.name" placeholder="审批人"></el-input>
      </el-form-item>
       <el-form-item label="企业ID：">
        <el-input v-model="params.auditId" placeholder="审批人"></el-input>
      </el-form-item>
      <!-- <el-form-item label="注册地">
        <el-select 
         :remote-method="getLocation"
          v-model="params.location" 
          remote 
          filterable 
          reserve-keyword 
          placeholder="注册地">
          <el-option
            v-for="item in locationOptions"
            :key="item.id"
            :label="item.value"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item> -->
       <el-form-item label="注册地：">
        <el-input v-model="params.location" placeholder="注册地"></el-input>
      </el-form-item>
      <el-form-item label="统一社会信用代码：">
        <el-input v-model="params.code" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="light" @click="onSubmit(0)">重置</el-button>
        <el-button type="primary" @click="onSubmit(1)">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="tabs" >
      <el-radio-group  v-model="tabStatus" style="margin-bottom: 30px;">
        <el-radio-button style="border:none; box-shadow:none;" @click.native.prevent="changeTab(0)" label="0">初审通过</el-radio-button>
        <el-radio-button style="border:none; box-shadow:none;" @click.native.prevent="changeTab(1)" label="1">初审未通过</el-radio-button>
        <el-radio-button style="border:none; box-shadow:none;" @click.native.prevent="changeTab(2)" label="2">终审通过</el-radio-button>
        <el-radio-button style="border:none; box-shadow:none;" @click.native.prevent="changeTab(3)" label="3">终审未通过</el-radio-button>
      </el-radio-group>
    </div>
    <div>
       <el-table
    :data="corpUserList"
    :header-cell-style="{background:'#eef1f6',color:'#606266'}">
    style="width: 100%">
    <el-table-column
      prop="auditId"
      label="企业ID"
      width="200">
    </el-table-column>
    <el-table-column
      prop="name"
      label="企业名称"
      width="300">
    </el-table-column>
    <el-table-column
      prop="location"
      label="注册地"
      width="300">
    </el-table-column>
    <el-table-column
      prop="industry"
      label="所属行业"
      width="200">
    </el-table-column>
    <el-table-column
      prop="code"
      label="统一社会信用代码"
      width="300">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="operation(scope.$index, corpUserList,0)"
          type="text"
          size="small">
          查看
        </el-button>
          <el-button
          @click.native.prevent="operation(scope.$index, corpUserList,1)"
          type="text"
          size="small">
          通过
        </el-button>
          <el-button
          type="text"
          @click.native.prevent="operation(scope.$index, corpUserList,2)"
          size="small">
          不通过
        </el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40,50]"
      :page-size="10"
      layout="total, prev, pager, next, sizes,jumper"
      :total="400">
    </el-pagination>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions,mapMutations } = createNamespacedHelpers('corpUserManagement')
export default {
  name: 'corpUserManagement',
  props: {
    msg: String
  },
  computed:{
    ...mapState([
      'locationOptions',
      'corpUserList'
    ])
  },
  data(){
    return{
      currentPage:1,
      tabStatus:0,
      // corpUserList: [],
      params:{
        name:'',
        auditId:'',
        location:'',
        code:'',
        total:0,
        size:10,
        index:0
      }
    }
  },
  methods:{
    ...mapActions(['search','getCity']),
    ...mapMutations(['setValue']),
    operation(index,data,type){
      let chosenData = data[index]
        if(type===0){
          this.$router.push(
            {
              path: '/home/approvalDetail', 
              query:{
                auditId: chosenData.auditId,
                status:this.tabStatus
                }
            });
        }
    },
    changeTab(e){
      this.tabStatus = e
      this.onSubmit(1)
    },
    // 查询
    onSubmit(type){
      if(type===0){
        this.params.name = ''
        this.params.auditId = ''
        this.params.location = ''
        this.params.code = ''
      }else{
        this.params.status = this.tabStatus
        this.search(this.params)
      }
    },
    handleSizeChange(index){
      this.params.size = index
      // console.log(index)
      this.onSubmit(1)
    },
    handleCurrentChange(index){
      this.params.index = index
      // console.log(index)
      this.onSubmit(1)
    },
    getLocation(query){
      // console.log(query)
      this.getCity(query)
    }

  },
  created(){
    this.onSubmit(1)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabs{
  position: relative;
}
.sub-title{
  position: absolute;
  right: 15px;
  top: 10px;
  z-index: 200;
}
.pagination{
  text-align: right;
}
.table-head{
  background: #fafafa;
}
</style>
