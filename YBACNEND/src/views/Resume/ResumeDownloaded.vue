<template>
  <div class="resume-downloaded">
    <board class="board" title="已下载简历">
      <div class="filters">
        <el-form :inline="true" :model="filters" class="form">
          <div class="fields">
            <el-form-item label="求职意向">
              <el-autocomplete
                v-model="filters.occupationName"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入内容"
                @select="handleSelect"
              ></el-autocomplete>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="checked">投递本公司</el-checkbox>
            </el-form-item>
          </div>
          <div class="fields">
            <el-form-item label="姓名">
              <el-autocomplete
                v-model="filters.occupationName"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入内容"
                @select="handleSelect"
              ></el-autocomplete>
            </el-form-item>
            <el-form-item label="手机号">
              <el-autocomplete
                v-model="filters.occupationName"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入内容"
                @select="handleSelect"
              ></el-autocomplete>
            </el-form-item>
            <el-form-item label="性别">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">男</el-option>
                <el-option value="2">女</el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="operations">
            <el-button @click="onSearch">重置</el-button>
            <el-button type="primary main" @click="onSearch">查询</el-button>
          </div>
        </el-form>
      </div>
      <el-tabs v-model="activedTabName" type="card" @tab-click="handleClick">
        <div class="tab-operations">
          <el-button type="text" class="underline mini">批量导出简历</el-button>
        </div>
        <el-tab-pane label="未处理" name="online">
          <el-table
            @selection-change="handleExportResumes"
            :data="onlineTableData">
            <table-empty-placeholder slot="empty"/>
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              prop="date"
              width="80"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="name"
              width="50"
              label="性别">
            </el-table-column>
            <el-table-column
              prop="address"
              width="80"
              label="年龄">
            </el-table-column>
            <el-table-column
              prop="address"
              label="工作年限">
            </el-table-column>
            <el-table-column
              prop="address"
              width="120"
              label="海外工作经历">
            </el-table-column>
            <el-table-column
              prop="address"
              label="现居地">
            </el-table-column>
            <el-table-column
              prop="address"
              label="学历">
            </el-table-column>
            <el-table-column
              prop="address"
              label="毕业院校">
            </el-table-column>
            <el-table-column
              prop="address"
              label="求职意向">
            </el-table-column>
            <el-table-column
              prop="address"
              label="操作时间">
            </el-table-column>
            <el-table-column
              label="操作">
              <template>
                <el-button type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            class="pagination"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="已邀请" name="pending">待上线</el-tab-pane>
        <el-tab-pane label="接受邀请" name="checking">角色管理</el-tab-pane>
        <el-tab-pane label="录用" name="invalid">定时任务补偿</el-tab-pane>
        <el-tab-pane label="不合格" name="offline">定时任务补偿</el-tab-pane>
        <el-tab-pane label="未接受邀请" name="offline">定时任务补偿</el-tab-pane>
      </el-tabs>
    </board>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Board from 'components/board.vue';
import TableEmptyPlaceholder from 'components/table-empty-placeholder.vue';

@Component({
  components: {
    Board,
    TableEmptyPlaceholder,
  },
})
export default class ResumeDownloaded extends Vue {
  filters: object = {
    occupationName: '',
  };

  onlineTableData: any = [];

  activedTabName: string = 'online';

  data: any = [];

  onSearch() {}

  mounted() {
  }

  handleExportResumes() {}
}
</script>

<style lang="stylus" scoped>
  .resume-downloaded
    display flex
    margin-top 30px
    .board
      width 100%
      padding-bottom 30px
      .filters .form
        display flex
        flex-direction column
        margin 5px 10px 20px
        .fields
          text-align left
        .operations
          text-align right
      .tab-operations
        display flex
        justify-content space-between
        align-items center
        position absolute
        top -55px
        right 0
        margin 0 10px
        z-index 1
      .pagination
        margin-top 15px
        text-align right
</style>
<style lang="stylus">
  .resume-downloaded
    .el-tabs__content
      overflow initial
</style>
