<template>
  <div class="resume-platform">
    <board class="board" title="平台人才库" desc="暂不支持搜索及下载附件简历">
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
            <el-form-item label="简历完整度">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">50%</el-option>
                <el-option value="2">100%</el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="checked">投递本公司</el-checkbox>
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
            <el-form-item label="毕业院校">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">上海交大</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="现居地">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">18-25</el-option>
              </el-select>
            </el-form-item>
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
        <el-button type="text" class="underline mini">批量收藏</el-button>
        <el-button type="text" class="underline mini">批量下载简历</el-button>
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
          width="75"
          label="海外经历">
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
          label="毕业院校">
        </el-table-column>
        <el-table-column
          prop="address"
          label="求职意向">
        </el-table-column>
        <el-table-column
          prop="address"
          width="115"
          label="投递本公司">
        </el-table-column>
        <el-table-column
          prop="address"
          label="简历完整度">
        </el-table-column>
        <el-table-column
          class="operations"
          width="140"
          label="操作">
          <template>
            <el-button type="text" size="small" @click="inspectResumeDetail">查看</el-button>
            <el-button type="text" size="small">收藏</el-button>
            <el-button type="text" size="small">下载</el-button>
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
export default class ResumePlatform extends Vue {
  filters: object = {
    occupationName: '',
  };

  tableData: any = [{
    address: 'f饭',
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
  .resume-platform
    display flex
    margin-top 30px
    .board
      width 100%
      padding-bottom 30px
      .addition-bar
        text-align right
        margin 0 10px
      .filters .form
        margin 5px 10px 20px
        display flex
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
  .resume-platform
    .fields
      .el-form-item
        margin-right 20px
        .el-form-item__content
          width 130px
</style>
