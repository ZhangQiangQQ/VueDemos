<template>
  <div class="resume-info-container">
    <div class="left">
      <board title="简历看板">
        <ul>
          <li>
            <span>本日新增</span>
            <span>{{ resumeBoardStatistics.incrementDaily }}</span>
          </li>
          <li>
            <span>待处理</span>
            <span>{{ resumeBoardStatistics.toProcessNum }}</span>
          </li>
        </ul>
      </board>
      <board class="list" title="职位列表">
        <div class="filters">
          <el-form :inline="true" :model="filters" class="form">
            <div class="fields">
              <el-form-item label="职位名称">
                <el-input
                  v-model="filters.keyword"
                  placeholder="请输入职位名称"
                ></el-input>
              </el-form-item>
            </div>
            <div class="operations">
              <el-button @click="resetFilters">重置</el-button>
              <el-button type="primary main" @click="doSearch">查询</el-button>
            </div>
          </el-form>
        </div>
        <div class="tab-operations">
          <el-checkbox v-model="filters.self">只看自己</el-checkbox>
        </div>
        <el-tabs v-model="activedTabName" type="card" @tab-click="handleToggloeTab">
          <el-tab-pane label="已上线职位" name="ONLINE">
            <el-table
              :data="ONLINETableData">
              <table-empty-placeholder slot="empty"/>
              <el-table-column
                prop="positionName"
                label="职位名称">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="gotoResumeListUI(scope.row.id)">{{scope.row.positionName}}</el-button>
                </template>
              </el-table-column>
              <el-table-column
                label="职位性质">
                <template slot-scope="scope">
                  <span>{{ findLabel(options.jobType, scope.row.jobType) }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="地区">
                <template slot-scope="scope">
                  <span>{{ inspectLabel(districts, [scope.row.province, scope.row.county]) }}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="managerName"
                label="负责 HR">
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
          </el-tab-pane>
          <el-tab-pane label="已下线职位" name="OFFLINE">
            <el-table
              :data="OFFLINETableData">
              <table-empty-placeholder slot="empty"/>
              <el-table-column
                prop="positionName"
                label="职位名称">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="gotoResumeListUI(scope.row.id)">{{scope.row.positionName}}</el-button>
                </template>
              </el-table-column>
              <el-table-column
                label="职位性质">
                <template slot-scope="scope">
                  <span>{{ findLabel(options.jobType, scope.row.jobType) }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="地区">
                <template slot-scope="scope">
                  <span>{{ inspectLabel(districts, [scope.row.province, scope.row.county]) }}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="managerName"
                label="负责 HR">
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
          </el-tab-pane>
        </el-tabs>
      </board>
    </div>
    <!--
    <div class="right">
      <board title="统计数据">
        <ul>
          <li>
            <span>简历处理率</span>
            <span>1</span>
          </li>
          <li>
            <span>过去7天投递</span>
            <span>1</span>
          </li>
        </ul>
        <div class="chart" ref="chart"></div>
      </board>
    </div>
    -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Board from 'components/board.vue';
import TableEmptyPlaceholder from 'components/table-empty-placeholder.vue';
import dayjs from 'dayjs';
import { mapState } from 'vuex';
import { getPositions } from '@/apis/position';
import { getResumeBoardStatistics } from '@/apis/board';
import { RootState } from '@/store/root-states';
import { findLabel, inspectLabel } from '@/utils/transformer';

const occupationTypes = ['OFFLINE', 'ONLINE', 'PENDING', 'EDITING', 'CHECKING', 'INVALID'];

@Component({
  components: {
    Board,
    TableEmptyPlaceholder,
  },
  computed: mapState({
    options(state: RootState) {
      return state.constants.options;
    },
    districts(state: RootState) {
      return state.constants.districts;
    },
  }),
})
export default class OccupationInfo extends Vue {
  findLabel: any = findLabel;

  inspectLabel: any = inspectLabel;

  resumeBoardStatistics: any = {
    incrementDaily: 0,
    toProcessNum: 0,
  };

  total: number = 0;

  paginations: object = {
    pageSize: 10,
    pageNum: 1,
  }

  activedTabName: string = 'ONLINE';

  filters: any = {
    keyword: '',
    self: false,
    state: 1,
  };

  onlineTableData: any = [
    {
      id: 1,
      date: '后端开发',
      name: 1,
      address: 1,
    },
  ];

  OFFLINETableData: any = [];

  CHECKINGTableData: any = [];

  ONLINETableData: any = [];

  PENDINGTableData: any = [];

  EDITINGTableData: any = [];

  INVALIDTableData: any = [];

  data: any = [];

  handleToggloeTab(tabName: any) {
    this.filters.state = occupationTypes.indexOf(tabName.name);
    this.doSearch();
  }

  resetFilters() {
    this.filters = {
      keyword: '',
      self: false,
      state: 1,
    };
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
    const res = (await getPositions(payload)).data;
    (this as any)[`${this.activedTabName}TableData`] = res.list.map((i: any) => ({
      ...i,
      createdTime: dayjs(i.createdTime).format('YYYY-MM-DD'),
    }));
    this.total = res.total;
  }

  gotoResumeListUI(id: number) {
    this.$router.push({ path: `/resume/list/${id}` });
  }

  async created() {
    this.resumeBoardStatistics = (await getResumeBoardStatistics()).data;
    this.doSearch();
  }
}
</script>

<style lang="stylus" scoped>
  .resume-info-container
    display flex
    margin-top 30px
    .left
      flex 1
      margin-right 15px
      .list
        padding-bottom 30px
        position relative
        .tab-operations
          position absolute
          top 155px
          left 250px
      .filters .form
        display flex
        justify-content space-between
        margin 5px 10px 20px
      .pagination
        margin-top 20px
      ul
        margin 0
        list-style none
        display flex
        justify-content space-around
        padding 0
        li
          flex 1
          display flex
          flex-direction column
          span:first-child
            line-height 27px
            color #666
            font-size 14px
          span:last-child
            line-height 33px
            font-size 24px
            color #17376e
    .right
      width 240px
      ul
        margin 5px 0
        list-style none
        display flex
        justify-content space-around
        padding 0
        li
          flex 1
          display flex
          flex-direction column
          span:first-child
            color #666
            font-size 12px
          span:last-child
            font-size 14px
            color #17376e
</style>
