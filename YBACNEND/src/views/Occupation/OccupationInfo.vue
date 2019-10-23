<template>
  <div class="occupation-info-container">
    <div class="left">
      <board title="职位看板">
        <ul>
          <li>
            <span>已上线</span>
            <span>{{ occupationBoardStatistics.onlineNum }}</span>
          </li>
          <li>
            <span>待上线</span>
            <span>{{ occupationBoardStatistics.editingNum }}</span>
          </li>
          <li>
            <span>审核中</span>
            <span>{{ occupationBoardStatistics.auditingNum }}</span>
          </li>
          <li>
            <span>审核未通过</span>
            <span>{{ occupationBoardStatistics.auditFailedNum }}</span>
          </li>
          <li>
            <span>已下线</span>
            <span>{{ occupationBoardStatistics.offlineNum }}</span>
          </li>
        </ul>
      </board>
      <board class="list" title="职位列表">
        <div class="filters">
          <el-form :inline="true" :model="filters" class="form">
            <div class="fields">
              <el-form-item label="招聘职位">
                <el-input
                  v-model="filters.keyword"
                  placeholder="请输入内容"
                ></el-input>
              </el-form-item>
              <el-button type="text" @click="showMoreFilters = true" v-if="!showMoreFilters">展开 ▼</el-button>
              <el-button type="text" @click="showMoreFilters = false" v-if="showMoreFilters">收起 ▲</el-button>
            </div>
            <div class="fields" v-if="showMoreFilters">
              <el-form-item label="工作地址">
                <district placeholder="请选择工作地址" @input="syncSelectedDistrict" />
              </el-form-item>
              <el-form-item label="负责 HR">
                <el-select
                  clearable
                  v-model="filters.managerUid"
                  filterable
                  remote
                  reserve-keyword
                  placeholder="请选择负责 HR"
                  :remote-method="querySearchHRAsync"
                  :loading="loading">
                  <el-option
                    v-for="item in candidatesHR"
                    :key="item.id"
                    :label="item.realName"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
              <!--
              <el-form-item label="上线时间">
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

              <el-form-item label="上线方式">
                <el-select v-model="value" placeholder="请选择">
                  <el-option value="1">手动</el-option>
                </el-select>
              </el-form-item>
              -->
            </div>
            <div class="fields" v-if="showMoreFilters">
              <!--
              <el-form-item label="下线时间">
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

              <el-form-item label="下线方式">
                <el-select v-model="value" placeholder="请选择">
                  <el-option value="1">手动</el-option>
                </el-select>
              </el-form-item>
              -->
            </div>
            <div class="operations">
              <el-button @click="resetFilters">重置</el-button>
              <el-button type="primary main" @click="doSearch">查询</el-button>
            </div>
          </el-form>
        </div>
        <el-tabs v-model="activedTabName" type="card" @tab-click="handleToggloeTab">
          <div class="tab-operations">
            <el-checkbox v-model="filters.self">只看自己</el-checkbox>
          </div>
          <el-tab-pane label="已上线" name="ONLINE">
            <el-table
              :data="ONLINETableData">
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
                width="170"
                label="操作">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="gotoOccupationDetailUI(scope.row.id)">查看</el-button>
                  <el-button type="text" size="small" @click="getOccupationOffline(scope.row.id)">下线</el-button>
                  <el-button type="text" size="small" @click="refreshOccupation(scope.row.id)">刷新排名</el-button>
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
          </el-tab-pane>
          <el-tab-pane label="待上线" name="EDITING">
            <el-table
              :data="EDITINGTableData">
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
                  <el-button type="text" size="small" @click="gotoOccupationDetailUI(scope.row.id)">查看</el-button>
                  <el-button type="text" size="small" @click="getOccupationOnline(scope.row.id)">上线</el-button>
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
          </el-tab-pane>
          <el-tab-pane label="审核中" name="CHECKING">
            <el-table
              :data="CHECKINGTableData">
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
                width="80"
                label="操作">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="gotoOccupationDetailUI(scope.row.id)">查看</el-button>
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
          </el-tab-pane>
          <el-tab-pane label="审核未通过" name="INVALID">
            <el-table
              :data="INVALIDTableData">
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
                width="80"
                label="操作">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="gotoOccupationDetailUI(scope.row.id)">查看</el-button>
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
          </el-tab-pane>
          <el-tab-pane label="已下线" name="OFFLINE">
            <el-table
              :data="OFFLINETableData">
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
                  <el-button type="text" size="small" @click="gotoOccupationDetailUI(scope.row.id)">查看</el-button>
                  <el-button type="text" size="small" @click="getOccupationOnline(scope.row.id)">上线</el-button>
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
          </el-tab-pane>
        </el-tabs>
      </board>
    </div>
    <!--
    <div class="right">
      <board title="统计数据">
        <ul>
          <li>
            <span>今日浏览</span>
            <span>1</span>
          </li>
          <li>
            <span>今日投递</span>
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
import District from 'components/district.vue';
import TableEmptyPlaceholder from 'components/table-empty-placeholder.vue';
import dayjs from 'dayjs';
import { getOccupationBoardStatistics } from '@/apis/board';
import {
  getPositions,
  getPositionOnline,
  getPositionOffline,
  refreshPosition,
} from '@/apis/position';
import { getEnterpriseUsers } from '@/apis/account';

const occupationTypes = ['OFFLINE', 'ONLINE', 'PENDING', 'EDITING', 'CHECKING', 'INVALID'];

@Component({
  components: {
    Board,
    District,
    TableEmptyPlaceholder,
  },
})
export default class OccupationInfo extends Vue {
  loading: boolean = false;

  candidatesHR: any[] = [];

  occupationBoardStatistics: object = {
    auditFailedNum: 0,
    auditingNum: 0,
    editingNum: 0,
    offlineNum: 0,
    onlineNum: 0,
  };

  total: number = 0;

  paginations: object = {
    pageSize: 10,
    pageNum: 1,
  }

  activedTabName: string = 'ONLINE';

  filters: any = {
    keyword: '',
    managerUid: '',
    province: '',
    self: false,
    state: 1,
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

  showMoreFilters: boolean = false;

  OFFLINETableData: any = [];

  CHECKINGTableData: any = [];

  ONLINETableData: any = [];

  PENDINGTableData: any = [];

  EDITINGTableData: any = [];

  INVALIDTableData: any = [];

  async getOccupationOnline(id: number) {
    await getPositionOnline(id);
    this.$message.success('职位上线成功！');
    this.doSearch();
  }

  async getOccupationOffline(id: number) {
    await getPositionOffline(id);
    this.$message.success('职位下线成功！');
    this.doSearch();
  }

  async refreshOccupation(id: number) {
    await refreshPosition(id);
    this.$message.success('职位刷新成功！');
    this.doSearch();
  }

  handleToggloeTab(tabName: any) {
    this.filters.state = occupationTypes.indexOf(tabName.name);
    this.doSearch();
  }

  resetFilters() {
    this.filters = {
      keyword: '',
      managerUid: '',
      province: '',
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

  async querySearchHRAsync(keyword: string, cb: any) {
    this.loading = true;
    this.candidatesHR = (await getEnterpriseUsers({
      pageSize: 10,
      pageNum: 1,
      keyword,
    })).data.list;
    this.loading = false;
  }

  gotoOccupationDetailUI(id: number) {
    this.$router.push({ path: `/occupation/${id}` });
  }

  syncSelectedDistrict(value: any[]) {
    this.filters.province = value[value.length - 1];
    console.log(value);
  }

  async created() {
    this.activedTabName = this.$route.query.tab as string || 'ONLINE';
    this.occupationBoardStatistics = (await getOccupationBoardStatistics()).data;
    this.doSearch();
  }
}
</script>

<style lang="stylus" scoped>
  .occupation-info-container
    display flex
    margin-top 30px
    .left
      flex 1
      margin-right 15px
      .list
        padding-bottom 30px
        position relative
        .filters .form
          margin 5px 10px 20px
          display flex
          flex-direction column
          .fields
            text-align left
          .operations
            text-align right
        .tab-operations
          display flex
          justify-content space-between
          align-items center
          width 300px
          position absolute
          top -47px
          left 460px
          z-index 1
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
<style lang="stylus">
  .occupation-info-container
    .el-tabs__content
      overflow initial
    .el-form-item
      margin-right 20px
      .el-form-item__content
        text-align left
        .el-input, .el-select, .el-cascader
          width 170px
</style>
