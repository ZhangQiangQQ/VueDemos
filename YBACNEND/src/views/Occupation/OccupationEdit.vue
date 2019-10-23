<template>
  <div class="occupation-add">
    <div class="body">
      <h1>编辑职位</h1>
      <div class="form">
        <el-form ref="form" :rules="rules" :model="form" label-width="90px">
          <el-form-item label="职位 ID" >
            <span>{{ occupationId }}</span>
          </el-form-item>
          <el-form-item label="职位名称" prop="positionName">
            <el-input v-model="form.positionName" placeholder="请输入职位名称"></el-input>
          </el-form-item>
          <el-form-item label="工作性质" prop="jobType">
            <el-select v-model="form.jobType" placeholder="请选择工作性质">
              <el-option :value="item.code" v-for="(item) in options.jobType" :key="item.code" :label="item.tag"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="职位分类" prop="positionCatalog">
            <el-cascader
              :options="positionCatalogs"
              v-model="form.positionCatalog"
              placeholder="请选择职位分类">
            </el-cascader>
          </el-form-item>
          <el-form-item label="月薪范围" prop="salaryRange">
            <el-select v-model="form.salaryRange" placeholder="请选择月薪范围" @change="syncSelectedSalary">
              <el-option :value="item.code" v-for="(item) in options.salaryRange" :key="item.code" :label="item.tag"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="最低学历" prop="degreeMin">
            <el-select v-model="form.degreeMin" placeholder="请选择最低学历">
              <el-option :value="item.code" v-for="(item) in options.eduDegree" :key="item.code" :label="item.tag"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="工作年限" prop="workAgeRange">
            <el-select v-model="form.workAgeRange" placeholder="请选择工作年限" @change="syncWorkingAge">
              <el-option :value="item.code" v-for="(item) in options.workAgeRange" :key="item.code" :label="item.tag"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="工作地址" prop="workAddress.province">
            <district class="inline-top-item" placeholder="请选择工作地址" :value="form.mainArea" @input="syncSelectedDistrict" />
            <br>
            <el-input type="textarea" :rows="4" v-model="form.workAddress.detail" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="职位描述" prop="description">
            <el-input type="textarea" :rows="4" v-model="form.description" placeholder="请输入职位描述"></el-input>
          </el-form-item>
          <el-form-item label="任职要求" prop="requirement">
            <el-input type="textarea" :rows="4" v-model="form.requirement" placeholder="请输入任职要求"></el-input>
          </el-form-item>
          <!--
          <el-form-item label="技能标签" prop="comment">
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">添加</el-button>
          </el-form-item>
          -->
          <div class="line"></div>
          <el-form-item label="负责 HR" prop="managerUid">
            <el-select
              v-model="form.managerUid"
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
          <el-form-item
            v-for="(email, index) in form.addedEmails"
            :label="index === 0 ? '投递邮箱' : ''"
            :key="email.key"
            :prop="'addedEmails.' + index + '.value'"
            :rules="{
              required: true, message: '投递邮箱不能为空', trigger: 'blur'
            }"
          >
            <el-input v-model="email.value" style="margin-right: 10px;" placeholder="请输入投递邮箱"></el-input>
            <el-button @click.prevent="addEmail()" v-if="index === form.addedEmails.length - 1">添加</el-button>
            <el-button @click.prevent="removeEmail(email)" v-if="form.addedEmails.length !== 1">删除</el-button>
          </el-form-item>
          <!--
          <el-form-item label="上线时间" prop="comment">
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="下线时间" prop="comment">
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
           <el-form-item label="上线时长" prop="comment">
            <span>30天</span>
          </el-form-item>
           -->
          <el-form-item class="operations">
            <!-- <el-button @click="onSubmit">取消</el-button> -->
            <el-button type="primary" class="main" @click="onSubmit(false)">提交</el-button>
            <el-button type="primary" class="main" @click="onSubmit(true)">上线</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import District from 'components/district.vue';
import { mapState } from 'vuex';
import citiesConstant from '@/views/constants/cities';
import {
  getPositionDetail,
  updatePosition,
} from '@/apis/position';
import { RootState } from '@/store/root-states';
import { cascaderFormatter } from '@/utils/transformer';
import { getEnterpriseUsers, getAccountInfoById } from '@/apis/account';

const DEFAULT_INDEX = 0;

const findCode = (collection: any, min: number, max: number) => {
  if (collection) {
    const temp = collection.filter((item: any) => item.min === min && item.max === max)[DEFAULT_INDEX];
    return temp ? temp.code : null;
  }
  return null;
};

@Component({
  components: {
    District,
  },
  computed: mapState({
    options(state: RootState) {
      return state.constants.options;
    },
    positionCatalogs(state: RootState) {
      return cascaderFormatter(state.constants.positionCatalogs);
    },
  }),
})
export default class OccuptaionEdit extends Vue {
  loading: boolean = false;

  candidatesHR: any[] = [];

  occupationId: number = null;

  form: any = {
    salaryRange: '',
    workAgeRange: '',
    addedEmails: [
      {
        value: '',
        key: '',
      },
    ],
    mainArea: [],
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

  citiesConstant: any = citiesConstant;

  dynamicTags: string[] = ['标签一', '标签二', '标签三'];

  inputVisible: boolean = false;

  inputValue: string = '';

  rules: object = {
    positionName: [
      { required: true, message: '请输入职位名称', trigger: 'blur' },
    ],
    jobType: [
      { required: true, message: '请选择工作性质', trigger: 'blur' },
    ],
    positionCatalog: [
      { required: true, message: '请选择职位分类', trigger: 'blur' },
    ],
    salaryRange: [
      { required: true, message: '请选择月薪范围', trigger: 'blur' },
    ],
    degreeMin: [
      { required: true, message: '请选择最低学历', trigger: 'blur' },
    ],
    workAgeRange: [
      { required: true, message: '请选择工作年限', trigger: 'blur' },
    ],
    'workAddress.province': [
      { required: true, message: '请选择工作地址', trigger: 'blur' },
    ],
    description: [
      { required: true, message: '请输入职位描述', trigger: 'blur' },
    ],
    requirement: [
      { required: true, message: '请输入任职要求', trigger: 'blur' },
    ],
    managerUid: [
      { required: true, message: '请选择负责 HR', trigger: 'blur' },
    ],
  };

  onSubmit(published: boolean = false) {
    const ref: any = this.$refs.form;
    ref.validate(async (valid: boolean) => {
      if (valid) {
        // submit;
        const { addedEmails, positionCatalog } = this.form;
        await updatePosition(this.occupationId, {
          ...this.form,
          addedEmails: addedEmails.map((i: any) => i.value),
          positionCatalog: positionCatalog[positionCatalog.length - 1],
          published,
          salaryRange: undefined,
          workAgeRange: undefined,
          mainArea: undefined,
        });
        this.$message.success('职位发布成功！');
        this.$router.push({ name: 'occupation-info' });
      }
    });
  }

  syncSelectedSalary(code : number) {
    const temp = (this as any).options.salaryRange.filter((i: any) => i.code === code)[DEFAULT_INDEX];
    this.form.salaryMin = temp.min;
    this.form.salaryMax = temp.max;
  }

  syncWorkingAge(code : number) {
    const temp = (this as any).options.workAgeRange.filter((i: any) => i.code === code)[DEFAULT_INDEX];
    this.form.workAgeMin = temp.min;
    this.form.workAgeMax = temp.max;
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

  handleClose(tag: string) {
    this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
  };

  syncSelectedDistrict(value: any[]) {
    this.form.workAddress.province = value[DEFAULT_INDEX];
    if (value.length > 1) {
      this.form.workAddress.county = value[DEFAULT_INDEX + 1];
    }
  }

  showInput() {
    this.inputVisible = true;
    this.$nextTick(() => {
      /*
      const ref: any = this.$refs.saveTagInput.$refs;
      ref.input.focus();
      */
    });
  };

  handleInputConfirm() {
    const { inputValue } = this;
    if (inputValue) {
      this.dynamicTags.push(inputValue);
    }
    this.inputVisible = false;
    this.inputValue = '';
  }

  removeEmail(item: any) {
    const index = this.form.addedEmails.indexOf(item);
    if (index !== -1) {
      this.form.addedEmails.splice(index, 1);
    }
  };

  addEmail() {
    this.form.addedEmails.push({
      value: '',
      key: Date.now(),
    });
  };

  @Watch('options', { immediate: true, deep: true })
  async function(val: string, oldVal: string) {
    this.form = {
      ...this.form,
      salaryRange: findCode((val as any).salaryRange, this.form.salaryMin, this.form.salaryMax),
      workAgeRange: findCode((val as any).workAgeRange, this.form.workAgeMin, this.form.workAgeMax),
    };
  }

  async created() {
    this.occupationId = Number(this.$route.params.id);
    if (this.occupationId) {
      const res = (await getPositionDetail(this.occupationId)).data;
      this.form = {
        ...this.form,
        ...res,
        positionCatalog: res.positionCatalog,
        mainArea: [res.workAddress.province, res.workAddress.county],
        addedEmails: res.addedEmails.map((i: any) => ({
          value: i,
          key: Date.now(),
        })),
        salaryRange: (this as any).options.salaryRange.filter((i: any) => i.min === res.salaryMin && i.max === res.salaryMax)[DEFAULT_INDEX].code,
      };
      this.candidatesHR = [{
        ...(await getAccountInfoById(res.managerUid)).data,
      }];
    }
  }
}
</script>

<style lang="stylus" scoped>
  .occupation-add
    display flex
    flex-direction column
    .nav
      position relative
      flex 0 0 70px
    .body
      display flex
      justify-content center
      flex-direction column
      flex 1
      position relative
      background-color white
      .inline-top-item
        margin-bottom 10px
      h1
        font-size 20px
        text-align left
        margin 30px 0px 10px
      .form
        padding 10px
        width 720px
        .el-tag + .el-tag
          margin-left 10px
        .button-new-tag
          margin-left 10px
          height 32px
          line-height 30px
          padding-top 0
          padding-bottom 0
        .input-new-tag
          width 90px
          margin-left 10px
          vertical-align bottom
        .line
          height 1px
          background-color #eee
          margin 30px 0
</style>

<style lang="stylus">
  .occupation-add
    .el-form-item__content
      text-align left
      .el-input, .el-select, .el-cascader
        width 240px
      .el-textarea
        width 500px
    .operations
      .el-form-item__content
        text-align center
</style>
