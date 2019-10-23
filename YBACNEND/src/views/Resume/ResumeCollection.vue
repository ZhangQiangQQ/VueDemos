<template>
  <div class="resume-collection">
    <board class="board" :title="`收藏夹（${selectedResumeCount}）`">
      <el-table
        @selection-change="handleSelectionChange"
        :data="onlineTableData">
        <table-empty-placeholder slot="empty"/>
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="date"
          label="头像">
        </el-table-column>
        <el-table-column
          prop="name"
          label="求职意向">
        </el-table-column>
        <el-table-column
          prop="address"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="address"
          label="位置">
        </el-table-column>
        <el-table-column
          prop="address"
          label="消耗银币">
        </el-table-column>
        <el-table-column
          label="操作">
          <template>
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">删除</el-button>
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
      <div class="operation" v-if="selectedResumeCount > 0">
        <p>已选择 <span class="keyword">{{ selectedResumeCount }}</span> 份简历 合计：<span class="keyword">{{ collectionPay }}</span> 平台币</p>
        <el-button type="primary main" class="pay-btn">立即支付</el-button>
      </div>
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
export default class ResumeCollection extends Vue {
  collectionPay: number = 10;

  onlineTableData: any = [];

  activedTabName: string = 'online';

  data: any = [];

  selectedResumeCount: number = 0;

  onSearch() {}

  mounted() {
  }

  handleSelectionChange() {}
}
</script>

<style lang="stylus" scoped>
  .resume-collection
    display flex
    margin-top 30px
    .board
      width 100%
      padding-bottom 30px
      .operation
        margin-top 58px
        .pay-btn
          width 200px
        p
          padding 0
          margin 15px 0
          font-size 18px
          color #666
          span.keyword
            color #17376e
            font-weight bold
      .pagination
        margin-top 15px
        text-align right
</style>
