<template>
  <div class="resume-enterprise">
    <board class="board" title="企业人才库">
      <div class="filters">
        <el-form :inline="true" :model="filters" class="form">
          <div class="fields">
            <el-form-item label="关键词">
              <el-autocomplete
                v-model="filters.occupationName"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入内容"
                @select="handleSelect"
              ></el-autocomplete>
            </el-form-item>
          </div>
          <div class="fields">
            <el-form-item label="性别">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">男</el-option>
                <el-option value="2">女</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="年龄">
              <el-input class="mini" v-model="input"></el-input> <span>&nbsp;至&nbsp;</span>
              <el-input class="mini" v-model="input"></el-input>
            </el-form-item>
            <el-form-item label="学历">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">本科</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="现居地">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">18-25</el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="fields">
            <el-form-item label="工作年限">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">1-10</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="海外工作经历">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">有</el-option>
                <el-option value="1">无</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="公司名称">
              <el-autocomplete
                v-model="filters.occupationName"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入内容"
                @select="handleSelect"
              ></el-autocomplete>
              <el-checkbox v-model="checked">只看最近一份工作</el-checkbox>
            </el-form-item>
            <el-form-item label="职位名称">
              <el-autocomplete
                v-model="filters.occupationName"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入内容"
                @select="handleSelect"
              ></el-autocomplete>
              <el-checkbox v-model="checked">只看最近一份工作</el-checkbox>
            </el-form-item>
          </div>
          <div class="operations">
            <el-form-item>
              <el-button @click="onSearch">重置</el-button>
              <el-button type="primary main" @click="onSearch">查询</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="addition-bar">
        <el-button type="text" class="underline mini">批量导出简历</el-button>
      </div>
      <el-table
        @selection-change="handleExportResumes"
        :data="tableData">
        <table-empty-placeholder slot="empty"/>
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="date"
          width="50"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="name"
          width="48"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="address"
          width="48"
          label="年龄">
        </el-table-column>
        <el-table-column
          prop="address"
          width="75"
          label="工作年限">
        </el-table-column>
        <el-table-column
          prop="address"
          label="海外工作经历">
        </el-table-column>
        <el-table-column
          prop="address"
          width="75"
          label="现居地">
        </el-table-column>
        <el-table-column
          prop="address"
          width="60"
          label="学历">
        </el-table-column>
        <el-table-column
          prop="address"
          label="投递岗位">
        </el-table-column>
        <el-table-column
          prop="address"
          label="简历状态">
        </el-table-column>
        <el-table-column
          prop="address"
          width="115"
          label="投递时间">
        </el-table-column>
        <el-table-column
          class="operations"
          width="140"
          label="操作">
          <template>
            <el-button type="text" size="small" @click="inspectResumeDetail">查看</el-button>
            <el-button type="text" size="small">加入黑名单</el-button>
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
export default class ResumeEnterprise extends Vue {
  filters: object = {
    occupationName: '',
  };

  tableData: any = [{
    address: '1',
  }];

  activedTabName: string = 'online';

  data: any = [];

  onSearch() {}

  mounted() {
  }

  handleExportResumes() {}

  inspectResumeDetail() {
    this.$router.push({ path: '/resume/1' });
  }
}
</script>

<style lang="stylus" scoped>
  .resume-enterprise
    display flex
    margin-top 30px
    .board
      width 100%
      padding-bottom 30px
      .addition-bar
        text-align right
        margin 0 10px
      .filters .form
        display flex
        margin 5px 10px 20px
        flex-direction column
        .fields
          text-align left
        .operations
          text-align center
      .pagination
        margin-top 15px
        text-align right
</style>

<style lang="stylus">
  .resume-enterprise
    .fields
      .el-form-item
        margin-right 20px
        .el-form-item__content
          width 130px
</style>
