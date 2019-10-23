<template>
  <div class="occupation-detail">
    <div class="body">
      <div class="form">
        <el-form ref="form" label-width="80px">
          <el-form-item label="职位 ID">
            <span class="value">{{ form.id }}</span>
          </el-form-item>
          <el-form-item label="职位名称">
            <span class="value">{{ form.positionName }}</span>
            <span class="tag">{{ statusMapper[form.state] }}</span>
          </el-form-item>
          <el-form-item label="工作性质">
             <span class="value">{{ form.jobType }}</span>
          </el-form-item>
          <el-form-item label="职位分类">
             <span class="value">{{ form.positionCatalog }}</span>
          </el-form-item>
          <el-form-item label="月薪范围">
           <span class="value">{{ form.salaryMin }}-{{ form.salaryMax }}K</span>
          </el-form-item>
          <el-form-item label="最低学历">
            <span class="value">{{ form.degreeMin }}</span>
          </el-form-item>
          <el-form-item label="工作年限">
            <span class="value" v-if="form.workAgeMax">{{ form.workAgeMin }}-{{ form.workAgeMax }}年</span>
            <span class="value" v-else>{{ form.workAgeMin }}年</span>
          </el-form-item>
          <el-form-item label="工作地址">
            <span class="value">{{ form.positionName }}</span>
          </el-form-item>
          <el-form-item label="职位描述">
            <span class="value">{{ form.description }}</span>
          </el-form-item>
          <el-form-item label="任职要求">
            <span class="value">{{ form.requirement }}</span>
          </el-form-item>
          <div class="line"></div>
          <el-form-item label="负责 HR">
            <span class="value">{{ form.managerName }}</span>
          </el-form-item>
           <el-form-item label="投递邮箱">
             <span class="value">{{ form.addedEmails.join(' | ') }}</span>
          </el-form-item>
          <el-form-item class="operations">
            <el-button @click="onReturnOccupationInfo">返回</el-button>
            <el-button type="primary" class="main" @click="gotoOccupationEditUI()" v-if="![1, 4].includes(form.state)">编辑</el-button>
            <!-- <el-button type="primary" class="main" @click="onSubmit">上线</el-button> -->
          </el-form-item>
        </el-form>
      </div>
      <!--
      <board title="统计数据">
        <ul>
          <li>
            <span>当日浏览</span>
            <span>1</span>
          </li>
          <li>
            <span>今日浏览</span>
            <span>1</span>
          </li>
        </ul>
        <div class="chart" ref="chart"></div>
      </board>
      -->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Board from 'components/board.vue';
import { getPositionDetail } from '@/apis/position';
import { getAccountInfoById } from '@/apis/account';

@Component({
  components: {
    Board,
  },
})
export default class OccuptaionDetail extends Vue {
  statusMapper = ['已下线', '已上线', '待上线', '编辑中', '审核中', '审核失败'];

  form: any = {
    addedEmails: [
      {
        value: '',
        key: '',
      },
    ],
    state: 1,
    addressId: '',
    degreeMin: '',
    description: '',
    isGraduate: true,
    jobType: '',
    managerUid: '',
    positionCatalog: '',
    positionName: '',
    published: true,
    requirement: '',
    salaryMax: '',
    salaryMin: '',
    template: false,
    workAddress: {
      county: 0,
      detail: '',
      latitude: 0,
      longitude: 0,
      province: 0,
    },
    workAgeMax: 0,
    workAgeMin: 0,
  };

  occupationId: number = 0;

  gotoOccupationEditUI() {
    this.$router.push({ path: `/occupation/${this.occupationId}/edit` });
  }

  onReturnOccupationInfo() {
    this.$router.push({ name: 'occupation-info' });
  }

  async created() {
    this.occupationId = Number(this.$route.params.id);
    if (this.occupationId) {
      const res = (await getPositionDetail(this.occupationId)).data;
      console.log(res)
      this.form = {
        ...res,
        managerName: (await getAccountInfoById(res.managerUid)).data.realName,
      };
    }
  }
}
</script>

<style lang="stylus" scoped>
  .occupation-detail
    display flex
    flex-direction column
    .body
      display flex
      justify-content center
      flex-direction column
      flex 1
      position relative
      background-color white
      .board
        position absolute
        right 20px
        top 70px
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
      .form
        margin-top 20px
        padding 10px
        width 720px
        .line
          height 1px
          background-color #eee
          margin 30px 0
</style>

<style lang="stylus">
  .occupation-detail
    .el-form-item__content
      text-align left
      .value
        margin-left 40px
      .tag
        margin-left 15px
    .operations
      .el-form-item__content
        text-align center
</style>
