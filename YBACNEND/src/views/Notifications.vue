<template>
  <div class="noti-container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item>您的位置：消息中心</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <board title="消息中心">
        <el-tabs v-model="tabActived" type="card">
        <el-tab-pane label="未读消息" name="unread">
          <el-table
            :data="onlineTableData">
            <el-table-column
              prop="date"
              label="消息标题">
              <template slot-scope="scope">
                <el-collapse v-model="activeNames" @change="handleChange">
                  <el-collapse-item title="一致性 Consistency" name="1">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                  </el-collapse-item>
                </el-collapse>
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              width="170"
              label="接收时间">
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
        <el-tab-pane label="已读消息" name="read">
          <el-table
            :data="onlineTableData">
            <el-table-column
              prop="date"
              label="消息标题">
              <template slot-scope="scope">
                <el-collapse v-model="activeNames" @change="handleChange">
                  <el-collapse-item title="一致性 Consistency" name="1">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                  </el-collapse-item>
                </el-collapse>
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              width="170"
              label="接收时间">
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
      </el-tabs>
      </board>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Board from 'components/board.vue';
import G2 from '@antv/g2';

@Component({
  components: {
    Board,
  },
})
export default class Notifications extends Vue {
  filters: object = {
    occupationName: ''
  };

  tabActived: string = 'unread';

  onlineTableData: any = [{
    date: '1',
    name: '1'
  }]

  activedTabName: string = 'online';

  data: any = [];

  querySearchAsync() {}

  onSearch() {}

  mounted() {
    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 }
    ]; 

    const div: any = this.$refs['chart'];
    const chart = new G2.Chart({
      container: div,
      width: 230, 
      height: 150,
      padding: {
        top: 15,
        right: 10,
        bottom: 35,
        left: 35,
      }
    });

    chart.source(data);
    chart.line().position('genre*sold');
    chart.point().position('genre*sold').size(4).shape('circle').style({
      stroke: '#fff',
      lineWidth: 1
    });
    chart.render();
  }
}
</script>

<style lang="stylus" scoped>
  .noti-container
    display flex
    margin-top 0
    width 1280px
    background-color white
    padding 20px
    margin-bottom 20px
    flex-direction column
    .content
      margin-top 30px
      .board
        margin 0 118px
        .pagination
          margin 20px 0 40px
          text-align right 
</style>

<style lang="stylus">
.noti-container
  .el-collapse
    border none
</style>

