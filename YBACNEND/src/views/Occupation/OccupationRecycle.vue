<template>
  <div class="occupation-recycle-container">
    <board class="list" title="职位列表">
      <div class="filters">
        <el-form :inline="true" :model="filters" class="form">
          <div class="inputs">
            <el-form-item label="招聘职位">
              <el-input
                v-model="filters.keyword"
                placeholder="请输入职位名称"
              ></el-input>
            </el-form-item>
            <!--
            <el-form-item label="删除时间">
              <el-date-picker
                v-model="value7"
                type="datetimerange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions2">
              </el-date-picker>
            </el-form-item>
            -->
          </div>
          <div class="operations">
            <el-button @click="resetFilters">重置</el-button>
            <el-button type="primary main" @click="doSearch">查询</el-button>
          </div>
        </el-form>
      </div>
      <el-table
        :data="tableData">
        <table-empty-placeholder slot="empty"/>
        <el-table-column
          prop="positionName"
          label="职位名称">
        </el-table-column>
        <el-table-column
          label="职位性质">
          <template slot-scope="scope">
            <span>{{scope.row.jobType}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="地区">
          <template slot-scope="scope">
            <span>{{scope.row.county}}</span>
            <span>{{scope.row.province}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="managerName"
          label="负责 HR">
        </el-table-column>
        <el-table-column
          width="100"
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="recoverOccupation(scope.row.id)">还原</el-button>
            <el-button type="text" size="small" @click="deleteOccupation(scope.row.id)">永久删除</el-button>
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
        :page-size="paginations.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"/>
    </board>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Board from 'components/board.vue';
import TableEmptyPlaceholder from 'components/table-empty-placeholder.vue';
import dayjs from 'dayjs';
import {
  getTrashPositions,
  recoverTrashPosition,
  deleteTrashPositions,
} from '@/apis/position';

@Component({
  components: {
    Board,
    TableEmptyPlaceholder,
  },
})
export default class OccupationreCycle extends Vue {
  total: number = 0;

  paginations: object = {
    pageSize: 10,
    pageNum: 1,
  }

  activedTabName: string = 'ONLINE';

  filters: any = {
    keyword: '',
  };

  pickerOptions2: object = {
    shortcuts: [{
      text: '昨天',
      onClick(picker: any) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24);
        picker.$emit('pick', [start, end]);
      },
    }, {
      text: '今天',
      onClick(picker: any) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24);
        picker.$emit('pick', [start, end]);
      },
    }, {
      text: '最近一周',
      onClick(picker: any) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit('pick', [start, end]);
      },
    }, {
      text: '最近一个月',
      onClick(picker: any) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        picker.$emit('pick', [start, end]);
      },
    }],
  };

  tableData: any = [];

  resetFilters() {
    this.filters = {
      keyword: '',
    };
  }

  async recoverOccupation(id: number) {
    await recoverTrashPosition(id);
    this.$message.success('职位还原成功！');
    this.doSearch();
  }

  async deleteOccupation(id: number) {
    this.$confirm('确认彻底删除？')
      .then(async (e) => {
        await deleteTrashPositions(id);
        this.$message.success('职位删除成功！');
        this.doSearch();
      })
      .catch((e) => {});
  }

  handleSizeChange(pageSize: number) {
    this.doSearch({ pageSize });
  }

  handleCurrentChange(pageNum: number) {
    this.doSearch({ pageNum });
  }

  async doSearch(option = {}) {
    this.paginations = {
      ...this.paginations,
      ...option,
    };
    const payload: any = {
      ...this.paginations,
      ...this.filters,
    };
    const res = (await getTrashPositions(payload)).data;
    this.tableData = res.list.map((i: any) => ({
      ...i,
      createdTime: dayjs(i.createdTime).format('YYYY-MM-DD'),
    }));
    this.total = res.total;
  }

  async created() {
    this.doSearch();
  }
}
</script>

<style lang="stylus" scoped>
  .occupation-recycle-container
    display flex
    margin-top 30px
    .list
      text-align left
      padding-bottom 30px
      position relative
      width 100%
      .pagination
        margin-top 15px
        text-align right
      .filters .form
        margin 5px 10px 20px
        display flex
        justify-content space-between
</style>
<style lang="stylus">
  .occupation-recycle-container
    .el-form-item
      margin-right 20px
      .el-form-item__content
        text-align left
        .el-input, .el-select, .el-cascader
          width 150px
</style>
