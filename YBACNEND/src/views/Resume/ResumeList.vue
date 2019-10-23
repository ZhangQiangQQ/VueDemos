<template>
  <div class="occupation-info-container">
    <div class="left">
      <board class="list" :title="positionDetail.positionName" :desc="positionDetail.description">
        <div class="filters">
          <el-form :inline="true" :model="filters" class="form">
            <div class="fields">
              <el-form-item label="求职状态">
                <el-select v-model="filters.jobSearchStatus" placeholder="请选择求职状态">
                  <el-option :value="item.code" v-for="(item) in options.jobSearchStatus" :key="item.code" :label="item.tag"></el-option>
                </el-select>
              </el-form-item>
              <el-button type="text" @click="showMoreFilters = true" v-if="!showMoreFilters">展开 ▼</el-button>
              <el-button type="text" @click="showMoreFilters = false" v-if="showMoreFilters">收起 ▲</el-button>
            </div>
            <div class="fields" v-if="showMoreFilters">
              <el-form-item label="地区">
                <district placeholder="请选择地区" @input="syncSelectedDistrict" />
              </el-form-item>
              <el-form-item label="处理状态">
                <el-select v-model="filters.processedState" placeholder="请选择处理状态">
                  <el-option :value="item.code" v-for="(item) in options.resumeProcessedState" :key="item.code" :label="item.tag"></el-option>
                </el-select>
              </el-form-item>
              <!--
              <el-form-item label="简历完整度">
                <el-select v-model="value" placeholder="请选择简历完整度">
                  <el-option value="1">手动</el-option>
                </el-select>
              </el-form-item>
              -->
              <el-form-item label="投递时间">
                 <el-date-picker
                  v-model="selectedTimeRange"
                  @change="syncTimeRange"
                  type="datetimerange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </el-form-item>
            </div>
            <div class="operations">
              <el-form-item>
                <el-button @click="resetFilters">重置</el-button>
                <el-button type="primary main" @click="doSearch">查询</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <el-tabs v-model="activedTabName" type="card" @tab-click="handleToggleTab">
          <!--
          <div class="tab-operations">
            <el-button type="text" class="underline mini">批量导出简历</el-button>
          </div>
          -->
          <el-tab-pane label="待处理" name="PENDING">
            <el-table
              :data="PENDINGTableData">
              <table-empty-placeholder slot="empty"/>
              <!--
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              -->
              <el-table-column
                prop="fullName"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="workAge"
                label="工作年限">
              </el-table-column>
              <el-table-column
                label="求职状态">
                <template slot-scope="scope">
                  <span>{{ findLabel(options.jobSearchStatus, scope.row.jobSearchStatus) }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="所在地区">
                <template slot-scope="scope">
                  <span>{{ inspectLabel(districts, [scope.row.province, scope.row.county]) }}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="completedPercent"
                label="简历完整度">
              </el-table-column>
              <el-table-column
                prop="submittedTime"
                label="投递时间">
              </el-table-column>
              <el-table-column
                width="165"
                label="操作">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="redirectToResumeDetail(scope.row.id)">查看</el-button>
                  <el-button type="text" size="small" @click="confirmInterviewAction(scope.row.id)">通知面试/笔试</el-button>
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
          <el-tab-pane label="处理中" name="PROCESSING">
            <el-table
              :data="PROCESSINGTableData">
              <table-empty-placeholder slot="empty"/>
              <!--
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              -->
              <el-table-column
                prop="fullName"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="workAge"
                label="工作年限">
              </el-table-column>
              <el-table-column
                label="求职状态">
                <template slot-scope="scope">
                  <span>{{ findLabel(options.jobSearchStatus, scope.row.jobSearchStatus) }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="所在地区">
                <template slot-scope="scope">
                  <span>{{ inspectLabel(districts, [scope.row.province, scope.row.county]) }}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="completedPercent"
                label="简历完整度">
              </el-table-column>
              <el-table-column
                prop="submittedTime"
                label="投递时间">
              </el-table-column>
              <el-table-column
                width="155"
                label="操作">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="redirectToResumeDetail(scope.row.id)">查看</el-button>
                  <el-button type="text" size="small" @click="confirmUnfitAction(scope.row.id)">不合格</el-button>
                  <el-button type="text" size="small" @click="confirmOfferAction(scope.row.id)">录用</el-button>
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
          <el-tab-pane label="录用" name="OFFER">
            <el-table
              :data="OFFERTableData">
              <table-empty-placeholder slot="empty"/>
              <!--
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              -->
              <el-table-column
                prop="fullName"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="workAge"
                label="工作年限">
              </el-table-column>
              <el-table-column
                label="求职状态">
                <template slot-scope="scope">
                  <span>{{ findLabel(options.jobSearchStatus, scope.row.jobSearchStatus) }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="所在地区">
                <template slot-scope="scope">
                  <span>{{ inspectLabel(districts, [scope.row.province, scope.row.county]) }}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="completedPercent"
                label="简历完整度">
              </el-table-column>
              <el-table-column
                prop="submittedTime"
                label="投递时间">
              </el-table-column>
              <el-table-column
                width="140"
                label="操作">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="redirectToResumeDetail(scope.row.id)">查看</el-button>
                  <el-button type="text" size="small" @click="confirmEmployAction(scope.row.id)">确认入职</el-button>
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
          <el-tab-pane label="不合格" name="INVALID">
            <el-table
              :data="INVALIDTableData">
              <table-empty-placeholder slot="empty"/>
              <!--
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              -->
              <el-table-column
                prop="fullName"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="workAge"
                label="工作年限">
              </el-table-column>
              <el-table-column
                label="求职状态">
                <template slot-scope="scope">
                  <span>{{ findLabel(options.jobSearchStatus, scope.row.jobSearchStatus) }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="所在地区">
                <template slot-scope="scope">
                  <span>{{ inspectLabel(districts, [scope.row.province, scope.row.county]) }}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="completedPercent"
                label="简历完整度">
              </el-table-column>
              <el-table-column
                prop="submittedTime"
                label="投递时间">
              </el-table-column>
              <el-table-column
                width="70"
                label="操作">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="redirectToResumeDetail(scope.row.id)">查看</el-button>
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
          <el-tab-pane label="已入职" name="JOINED">
            <el-table
              :data="JOINEDTableData">
              <table-empty-placeholder slot="empty"/>
              <!--
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              -->
              <el-table-column
                prop="fullName"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="workAge"
                label="工作年限">
              </el-table-column>
              <el-table-column
                label="求职状态">
                <template slot-scope="scope">
                  <span>{{ findLabel(options.jobSearchStatus, scope.row.jobSearchStatus) }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="所在地区">
                <template slot-scope="scope">
                  <span>{{ inspectLabel(districts, [scope.row.province, scope.row.county]) }}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="completedPercent"
                label="简历完整度">
              </el-table-column>
              <el-table-column
                prop="submittedTime"
                label="投递时间">
              </el-table-column>
              <el-table-column
                width="70"
                label="操作">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="redirectToResumeDetail(scope.row.id)">查看</el-button>
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
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Board from 'components/board.vue';
import District from 'components/district.vue';
import TableEmptyPlaceholder from 'components/table-empty-placeholder.vue';
import dayjs from 'dayjs';
import { mapState } from 'vuex';
import { 
  getResumes, 
  confirmInterview, 
  confirmUnfit, 
  confirmOffer, 
  confirmEmploy,
} from '@/apis/resume';
import { getPositionDetail } from '@/apis/position';
import { RootState } from '@/store/root-states';
import { findLabel, inspectLabel } from '@/utils/transformer';

const resumeStatus = ['PENDING', 'PROCESSING', 'OFFER', 'INVALID', 'JOINED'];
const DEFAULT_INDEX = 0;

@Component({
  components: {
    Board,
    District,
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

  occupationId: string = '';

  selectedTimeRange: any = [];

  filters = {
    occupationName: '',
    jobSearchStatus: '',
    processedState: '',
    submittedTimeMax: '',
    submittedTimeMin: '',
    province: '',
    county: '',
  };

  total: number = 0;

  paginations: object = {
    pageSize: 10,
    pageNum: 1,
  }

  async confirmInterviewAction(positionId: number) {
    await confirmInterview(this.occupationId, positionId);
    this.$message.success('通知面试/笔试成功！');
    this.doSearch();
  }

  async confirmUnfitAction(positionId: number) {
    await confirmUnfit(this.occupationId, positionId);
    this.$message.success('设置简历不合格成功！');
    this.doSearch();
  }

  async confirmOfferAction(positionId: number) {
    await confirmOffer(this.occupationId, positionId);
    this.$message.success('设置录用成功成功！');
    this.doSearch();
  }

  async confirmEmployAction(positionId: number) {
    await confirmEmploy(this.occupationId, positionId);
    this.$message.success('设置已入职成功！');
    this.doSearch();
  }

  pickerOptions: object = {
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

  PENDINGTableData: any = [];

  PROCESSINGTableData: any = [];

  OFFERTableData: any = [];

  INVALIDTableData: any = [];

  JOINEDTableData: any = [];

  showMoreFilters: boolean = false;

  activedTabName: string = 'PENDING';

  positionDetail: any = {
    positionName: '',
    description: '',
  }

  redirectToResumeDetail(id: number) {
    this.$router.push({ path: `/resume/${id}` });
  }

  syncTimeRange(value: any) {
    const [min, max] = value;
    this.filters.submittedTimeMax = String(+dayjs(max));
    this.filters.submittedTimeMin = String(+dayjs(min));
  }

  syncSelectedDistrict(value: any[]) {
    this.filters.province = value[DEFAULT_INDEX];
    this.filters.county = value[DEFAULT_INDEX + 1];
  }

  handleToggleTab(tabName: any) {
    this.filters.processedState = String(resumeStatus.indexOf(tabName.name));
    this.doSearch();
  }

  resetFilters() {
    this.filters = {
      occupationName: '',
      jobSearchStatus: '',
      processedState: '',
      submittedTimeMax: '',
      submittedTimeMin: '',
      province: '',
      county: '',
    };
  }

  gotoOccupationDetailUI(id: number) {
    this.$router.push({ path: `/occupation/${id}` });
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
    const res = (await getResumes(this.occupationId, payload)).data;
    (this as any)[`${this.activedTabName}TableData`] = res.list.map((i: any) => ({
      ...i,
      submittedTime: dayjs(i.submittedTime).format('YYYY-MM-DD'),
    }));
    this.total = res.total;
  }

  async created() {
    this.occupationId = this.$route.params.id;
    this.positionDetail = (await getPositionDetail(this.occupationId)).data;
    this.doSearch();
  }
}
</script>

<style lang="stylus" scoped>
  .occupation-info-container
    display flex
    margin-top 30px
    .left
      flex 5
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
          position absolute
          top -56px
          right 0
          z-index 1
      .pagination
        margin 20px 20px 0 0
        text-align right
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
          width 150px
</style>
