<template>
  <div class="enterprise-info-container">
    <div class="body">
      <div class="head">
        <p>企业信息完整度</p>
        <el-progress :text-inside="true" :stroke-width="15" :percentage="companyInfo.completedPercent"></el-progress>
      </div>
      <div class="form">
        <p class="header">
          <span class="title">基本信息</span>
          <el-button class="edit-btn main" @click="editEnterpriseInfo" v-if="!enterpriseInfoEditMode">编辑</el-button>
        </p>
        <div class="display" v-if="!enterpriseInfoEditMode">
          <ul>
            <li>
              <span>企业名称：</span>
              <span>{{ companyInfo.fullName }}</span>
            </li>
            <li>
              <span>企业简称：</span>
              <span>{{ companyInfo.shortName }}</span>
            </li>
            <li>
              <span>企业规模：</span>
              <span>{{ companySizeOptions[companyInfo.size] }}</span>
            </li>
            <li>
              <span>企业性质：</span>
              <span>{{ findLabel(options.companyNature, companyInfo.nature) }}</span>
            </li>
            <li>
              <span>所属行业：</span>
              <span>{{ inspectLabel(industryTypes, companyInfo.industry) }}</span>
            </li>
            <li>
              <span>企业地点：</span>
              <span>{{ inspectLabel(districts, [companyInfo.address.province, companyInfo.address.county]) }}</span>
            </li>
            <li>
              <span>企业介绍：</span>
              <span>{{ companyInfo.description }}</span>
            </li>
            <li>
              <span>企业 LOGO：</span>
              <span>
                <img class="logo" :src="companyInfo.logoUrl" v-if="companyInfo.logoUrl"/>
              </span>
            </li>
          </ul>
        </div>
        <el-form class="form-container" ref="companyInfoForm" :rules="companyInfoFormRules" :model="companyInfo" label-width="140px" v-else>
          <el-form-item label="企业名称">
            <span>{{ companyInfo.fullName }}</span>
          </el-form-item>
          <el-form-item label="企业简称" prop="shortName">
            <el-input v-model="companyInfo.shortName" placeholder="请输入企业简称"></el-input>
          </el-form-item>
          <el-form-item label="企业规模" prop="size">
            <el-select v-model="companyInfo.size" placeholder="请选择">
              <el-option :value="index" :label="item" v-for="(item, index) in companySizeOptions" :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="企业性质" prop="nature">
            <el-select v-model="companyInfo.nature" placeholder="请选择企业性质">
              <el-option :value="item.code" :label="item.tag" v-for="(item) in options.companyNature" :key="item.code"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所属行业" prop="industry">
            <el-cascader
              :options="industryTypes"
              v-model="companyInfo.industry"
              placeholder="请选择所属行业">
            </el-cascader>
          </el-form-item>
          <el-form-item label="企业地址" prop="address.province">
            <district class="inline-top-item" placeholder="请选择企业地址" :value="[companyInfo.address.province, companyInfo.address.county]" @input="syncSelectedDistrict" />
            <br>
            <el-input type="textarea" :rows="4" v-model="companyInfo.address.detail" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="具体地点">
            <el-input
              style="margin-right: 10px;"
              placeholder="请输入公司所在经度"
              v-model="companyInfo.address.latitude">
            </el-input>
            <el-input
              placeholder="请输入公司所在纬度"
              v-model="companyInfo.address.longitude">
            </el-input>
          </el-form-item>
          <el-form-item label="企业介绍" prop="description">
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入内容"
              v-model="companyInfo.description">
            </el-input>
          </el-form-item>
          <el-form-item label="企业 LOGO" prop="file">
            <el-upload
              class="upload"
              :action="uploadCompanyLogo"
              :file-list="logoTempFile"
              :on-success="dealWithUploadLogo"
              :with-credentials="true"
              :limit="1"
              list-type="picture">
              <el-button size="small" type="primary">点击上传</el-button>
              <div class="el-upload__tip" slot="tip">支持图片格式：png、jpg、jpeg，最大不超过 3M。</div>
              <div class="el-upload__tip" slot="tip">为了尽快通过审核，请上传真实合法且清晰的执照图片。</div>
            </el-upload>
          </el-form-item>
          <div class="operations">
            <el-button type="primary" class="main" @click="onSubmitBasicInfo">保存</el-button>
            <el-button @click="clearAndReload">取消</el-button>
          </div>
        </el-form>
        <span class="line"></span>
        <p class="header">
          <span class="title">企业审核信息</span>
          <el-button class="edit-btn main" @click="editEnterpriseRegisterInfo" v-if="!enterpriseRegisterInfoEditMode">编辑</el-button>
        </p>
        <div class="display" v-if="!enterpriseRegisterInfoEditMode">
          <ul>
            <li>
              <span>企业名称：</span>
              <span>{{ companyInfo.audit.companyName }}</span>
            </li>
            <li>
              <span>企业注册地：</span>
              <span>{{ companyInfo.audit.registeredAddress }}</span>
            </li>
            <li>
              <span>统一社会信用代码：</span>
              <span>{{ companyInfo.audit.uniformSocialCreditCode }}</span>
            </li>
            <li>
              <span>企业类别：</span>
              <span>{{ inspectLabel(enterpriseTypes, companyInfo.audit.enterpriseForm) }}</span>
            </li>
            <li>
              <span>证件原件照片：</span>
              <span><img :src="companyInfo.audit.licenseUrl.accessUrl" /></span>
            </li>
          </ul>
        </div>
        <el-form class="form-container" ref="form" :rules="auditInfoFormRules" :model="companyInfo.audit" label-width="140px" v-else>
          <el-form-item label="企业名称" prop="companyName">
            <el-input v-model="companyInfo.audit.companyName" placeholder="企业名称"></el-input>
          </el-form-item>
          <el-form-item label="企业注册地" prop="registeredAddress">
            <el-input v-model="companyInfo.audit.registeredAddress" placeholder="请输入企业注册地（省份、城市）"></el-input>
          </el-form-item>
          <el-form-item label="统一社会信用代码" prop="uniformSocialCreditCode">
            <el-input maxlength="18" v-model="companyInfo.audit.uniformSocialCreditCode" placeholder="请输入与企业证件材料一致的代码"></el-input>
          </el-form-item>
          <el-form-item label="企业类别" prop="enterpriseForm">
            <el-cascader
              :options="enterpriseTypes"
              v-model="companyInfo.audit.enterpriseForm"
              placeholder="请选择企业类型">
            </el-cascader>
          </el-form-item>
          <el-form-item label="上传证件原件照片" prop="file">
            <el-upload
              class="upload"
              :action="uploadCompanyFile"
              :file-list="auditTempFile"
              :on-success="dealWithUploadLicense"
              :with-credentials="true"
              :limit="1"
              list-type="picture">
              <el-button size="small" type="primary">点击上传</el-button>
              <div class="el-upload__tip" slot="tip">支持图片格式：png、jpg、jpeg、gif，最大不超过 3M。</div>
              <div class="el-upload__tip" slot="tip">提示：确保企业名称与提交审核公司一致；如为复印件、黑白扫描件，需加盖企业公章；不可使用屏幕截图或翻拍照片提交审核；上传图片不可有与银领人才网无关的标注或水印；不可使用电子版营业执照提交审核；所上传证照照片，信息需清晰完整；</div>
              <div class="el-upload__tip warning" slot="tip">企业营业执照仅用审核，不会向第三方透露，请放心上传！</div>
            </el-upload>
          </el-form-item>
          <div class="operations">
            <el-button type="primary" class="main" @click="onSubmitAuditInfo">保存</el-button>
            <el-button @click="clearAndReload">取消</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Captcha from 'components/captcha.vue';
import PasswordInput from 'components/password-input.vue';
import District from 'components/district.vue';
import { mapState } from 'vuex';
import { RootState } from '@/store/root-states';
import {
  getCompanyInfo,
  uploadCompanyFile,
  uploadCompanyLogo,
  updateCompanyInfo,
  updateCompanyAuditInfo,
} from '@/apis/company';
import {
  cascaderFormatter,
  inspectLabel,
  findLabel,
  appendParent,
} from '@/utils/transformer';


const companySizeOptions = [
  '10 人以下', '10-100 人', '100-500 人', '500 人以上',
];
const DEFAULT_INDEX = 0;

@Component({
  components: {
    Captcha,
    PasswordInput,
    District,
  },
  computed: mapState({
    enterpriseTypes(state: RootState) {
      return cascaderFormatter(state.constants.enterpriseForm);
    },
    industryTypes(state: RootState) {
      return cascaderFormatter(state.constants.industryTypes);
    },
    options(state: RootState) {
      return state.constants.options;
    },
    districts(state: RootState) {
      return state.constants.districts;
    },
  }),
})
export default class EnterpriseInfo extends Vue {
  inspectLabel: any = inspectLabel;

  companySizeOptions: any = companySizeOptions;

  findLabel: any = findLabel;

  uploadCompanyLogo: string = uploadCompanyLogo;

  uploadCompanyFile: string = uploadCompanyFile;

  auditTempFile: any[] = [];

  logoTempFile: any[] = [];

  companyInfo: any = {
    completedPercent: 0,
    description: '',
    fullName: '',
    industry: '',
    nature: '',
    shortName: '',
    size: '',
    addressId: '',
    logoUrl: '',
    address: {
      county: '',
      detail: '',
      latitude: '',
      longitude: '',
      province: '',
    },
    audit: {
      companyName: '',
      enterpriseForm: '',
      licenseUrl: {
        accessUrl: '',
      },
      registeredAddress: '',
      uniformSocialCreditCode: '',
    },
  }

  enterpriseInfoEditMode: boolean = false;

  enterpriseRegisterInfoEditMode: boolean = false;

  companyInfoFormRules: object = {
    size: [
      { required: true, message: '请选择企业规模', trigger: 'blur' },
    ],
    nature: [
      { required: true, message: '请选择企业性质', trigger: 'blur' },
    ],
    industry: [
      { required: true, message: '请选择所属行业', trigger: 'blur' },
    ],
    'address.province': [
      { required: true, message: '请选择企业地址', trigger: 'blur' },
    ],
    description: [
      { required: true, message: '请输入企业介绍', trigger: 'blur' },
    ],
  };

  auditInfoFormRules: object = {
    uniformSocialCreditCode: [
      { required: true, message: '请输入统一社会信用代码', trigger: 'blur' },
      { len: 18, message: '统一社会信用代码为18位数字', trigger: 'blur' },
    ],
    enterpriseForm: [
      { required: true, message: '请选择企业类别', trigger: 'blur' },
    ],
    companyName: [
      { required: true, message: '请输入企业名称', trigger: 'blur' },
    ],
    registeredAddress: [
      { required: true, message: '请输入企业注册地', trigger: 'blur' },
    ],
    file: [
      { required: true, message: '请上传证件原件照片', trigger: 'blur' },
    ],
  };

  editEnterpriseRegisterInfo() {
    if (this.enterpriseInfoEditMode) {
      this.$notify({
        title: '警告',
        message: '请先保存企业基本信息！',
        type: 'warning',
      });
    } else {
      this.enterpriseRegisterInfoEditMode = true;
    }
  }

  editEnterpriseInfo() {
    if (this.enterpriseRegisterInfoEditMode) {
      this.$notify({
        title: '警告',
        message: '请先保存企业审核信息！',
        type: 'warning',
      });
    } else {
      this.enterpriseInfoEditMode = true;
    }
  }

  onSubmitAuditInfo() {
    const ref: any = this.$refs.form;
    ref.validate(async (valid: boolean) => {
      if (valid) {
        // submit;
        const payload = {
          companyName: this.companyInfo.audit.companyName,
          enterpriseForm: this.companyInfo.audit.enterpriseForm[this.companyInfo.audit.enterpriseForm.length - 1],
          file: this.companyInfo.audit.file,
          registeredAddress: this.companyInfo.audit.registeredAddress,
          uniformSocialCreditCode: this.companyInfo.audit.uniformSocialCreditCode,
        };
        await updateCompanyAuditInfo(payload);
        this.editSuccessfulAndreload();
      }
      return false;
    });
  }

  onSubmitBasicInfo() {
    const ref: any = this.$refs.companyInfoForm;
    ref.validate(async (valid: boolean) => {
      if (valid) {
        // submit;
        const payload = {
          address: this.companyInfo.address,
          addressId: this.companyInfo.addressId,
          description: this.companyInfo.description,
          industry: this.companyInfo.industry[this.companyInfo.industry.length - 1],
          nature: this.companyInfo.nature,
          shortName: this.companyInfo.shortName,
          size: this.companyInfo.size,
        };
        await updateCompanyInfo(payload);
        this.editSuccessfulAndreload();
      }
    });
  }

  syncSelectedDistrict(value: any[]) {
    this.companyInfo.address.province = value[DEFAULT_INDEX];
    if (value.length > 1) {
      this.companyInfo.address.county = value[DEFAULT_INDEX + 1];
    }
  }

  dealWithUploadLicense(response: any, file: any, fileList: any) {
    this.companyInfo.audit = {
      ...this.companyInfo.audit,
      file: response.data,
    };
  }

  dealWithUploadLogo(response: any, file: any, fileList: any) {

  }

  editSuccessfulAndreload() {
    this.$message({
      message: '信息修改成功！',
      type: 'success',
    });
    this.clearAndReload();
  }

  clearAndReload() {
    this.enterpriseInfoEditMode = false;
    this.enterpriseRegisterInfoEditMode = false;
    this.init();
  }

  async init() {
    const res = (await getCompanyInfo()).data;
    // workaround;
    delete res.address.id;
    this.companyInfo = {
      ...this.companyInfo,
      ...res,
      industry: appendParent(res.industry),
      audit: {
        ...this.companyInfo.audit,
        ...res.audit,
        enterpriseForm: res.audit ? appendParent(res.audit.enterpriseForm) : '',
      },
    };
  }

  created() {
    this.init();
  }
}
</script>

<style lang="stylus" scoped>
  .enterprise-info-container
    display flex
    flex-direction column
    margin-top 30px
    .nav
      position relative
      flex 0 0 70px
    .body
      display flex
      width 100%
      justify-content center
      flex-direction column
      flex 1
      position relative
      background-color white
      margin auto
      .inline-top-item
        margin-bottom 10px
      .head
        width 240px
        text-align left
        font-size 14px
        margin 20px 0 20px 15px
      .form
        padding 10px
        .form-container
          .operations
            text-align right
        .display
          ul
            list-style none
            text-align left
            font-size 14px
            padding 0
            li
              margin 40px 0
              display flex
              span:first-child
                flex 0 0 130px
                text-align right
              img
                max-height 100px
        .line
          width 100%
          height 1px
          display inline-block
          background lightgrey
          margin 20px 0
        button.full
          width 100%
        p
          display flex
          flex-direction row
          margin-bottom 20px
          &.header
            justify-content space-between
            margin 10px 0 30px 5px
            font-weight bold
            .title
              display inline-block
              vertical-align middle
              margin-right 3px
              line-height 38px
          span
            font-size 22px
</style>

<style lang="stylus">
  .enterprise-info-container
    .el-form-item__content
      text-align left
      .el-input, .el-select, .el-cascader
        width 240px
      .el-textarea
        width 500px
    .el-upload__tip
      min-width 600px
      font-size 14px
      color #999
      margin 10px 0
      line-height 1.4
      &.alert
        color #faad14
</style>
