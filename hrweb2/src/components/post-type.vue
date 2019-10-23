<template>
  <div class="postType">
    <span>职位类型：</span>
    <span>全部（10）</span>
    <span>市场（2）</span>
    <span>公关（1）</span>
    <span>销售（2）</span>
    <el-table :data="tableData" style="width: 90%;margin:0 0 0 80px">
      <el-table-column prop="date" label="" width="180"></el-table-column>
      <el-table-column prop="name" label="" width="180"></el-table-column>
      <el-table-column prop="address" label=""></el-table-column>
      <el-table-column prop="address" label=""></el-table-column>
    </el-table>
    <el-pagination
      style="margin:20px 0 20px 250px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>

<script>

export default {
  name: 'post-type',
  data() {
    return {
      currentPage4: 4,
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    }
  },
  methods:{
    handleSizeChange(val) {
        alert(`每页 ${val} 条`);
      },
    handleCurrentChange(val) {
      alert(`当前页: ${val}`);
    }
  }
}
</script>

<style lang="stylus" scoped> 
  .postType
  .postType span:nth-child(1)
    margin 10px 0 0 0 
    font-size 15px
    text-align left 
    padding 0 25px 0 0
  .postType span:nth-child(2)
    margin 10px 0 0 0 
    font-size 10px
    text-align left 
    padding 0 15px 0 0
    &:hover
      color #7990d3
  .postType span:nth-child(3)
    margin 10px 0 0 0 
    font-size 10px
    text-align left 
    padding 0 15px 0 0
    &:hover
      color #7990d3
  .postType span:nth-child(4)
    margin 10px 0 0 0 
    font-size 10px
    text-align left 
    padding 0 15px 0 0
    &:hover
      color #7990d3
  .postType span:nth-child(5)
    margin 10px 0 0 0 
    font-size 10px
    text-align left 
    padding 0 15px 0 0
    &:hover
      color #7990d3
</style>