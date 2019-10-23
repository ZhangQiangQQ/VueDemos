<template>
  <div class="enterprise-info-update-container">
    <div class="form">
      <el-form ref="form" :rules="rules" :model="form" label-width="140px">
        <p class="header">
          <span>企业资质审核</span>
        </p>
        <el-form-item label="企业名称" prop="companyName">
          <el-input v-model="form.companyName" placeholder="请输入与企业证件材料一致的全称"></el-input>
        </el-form-item>
        <el-form-item label="企业注册地" prop="registeredAddress">
          <el-input v-model="form.registeredAddress" placeholder="请输入企业注册地（省份、城市）"></el-input>
        </el-form-item>
        <el-form-item label="统一社会信用代码" prop="uniformSocialCreditCode">
          <el-input maxlength="18" v-model="form.uniformSocialCreditCode" placeholder="请输入与企业证件材料一致的代码"></el-input>
        </el-form-item>
        <el-form-item label="企业类别" prop="enterpriseForm">
          <el-cascader
            :options="enterpriseTypes"
            v-model="form.enterpriseForm"
            placeholder="请选择企业类型">
          </el-cascader>
        </el-form-item>
        <el-form-item label="上传证件原件照片" prop="file">
          <el-upload
            class="upload"
            :action="uploadCompanyFile"
            :file-list="tempFile"
            :on-success="dealWithUploadLicense"
            :with-credentials="true"
            list-type="picture">
            <i class="el-icon-upload"></i>
            <div class="el-upload__tip" slot="tip">支持图片格式：png、jpg、jpeg、gif，最大不超过 3M。</div>
            <div class="el-upload__tip" slot="tip">提示：确保企业名称与提交审核公司一致；如为复印件、黑白扫描件，需加盖企业公章；不可使用屏幕截图或翻拍照片提交审核；上传图片不可有与银领人才网无关的标注或水印；不可使用电子版营业执照提交审核；所上传证照照片，信息需清晰完整；</div>
            <div class="el-upload__tip warning" slot="tip">企业营业执照仅用审核，不会向第三方透露，请放心上传！</div>
          </el-upload>
        </el-form-item>
        <span class="line"></span>
        <p class="header">
          <span>联系人信息</span>
        </p>
        <el-form-item label="姓名" prop="realName">
          <el-input v-model="form.realName" placeholder="请输入真实姓名，信息仅用于招聘"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input maxlength="11" v-model="form.phone" placeholder="请输入联系人电话"></el-input>
        </el-form-item>
        <el-form-item label="联系邮箱" prop="email">
          <el-input v-model="form.email" placeholder="请输入联系人邮箱"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="full main" type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapState } from 'vuex';
import CustomizedFooter from 'components/customized-footer.vue';
import CustomizedNav from 'components/customized-nav.vue';
import Captcha from 'components/captcha.vue';
import PasswordInput from 'components/password-input.vue';
import { getAllEnterpriseTypes } from '@/apis/constants';
import { uploadCompanyFile, registerCompany } from '@/apis/company';
import { cascaderFormatter } from '@/utils/transformer';
import { RootState } from '@/store/root-states';

@Component({
  components: {
    CustomizedFooter,
    CustomizedNav,
    Captcha,
    PasswordInput,
  },
  computed: mapState({
    enterpriseTypes(state: RootState) {
      return cascaderFormatter(state.constants.enterpriseForm);
    },
  }),
})
export default class EnterpriseInfoUpdate extends Vue {
  uploadCompanyFile: string = uploadCompanyFile;

  tempFile: any[] = [];

  form: any = {
    companyName: '',
    serialNuuniformSocialCreditCodember: '',
    registeredAddress: '',
    realName: '',
    occupation: '',
    phone: '',
    email: '',
    file: {},
  };

  rules: object = {
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
    realName: [
      { required: true, message: '请输入联系人姓名', trigger: 'blur' },
    ],
    phone: [
      { required: true, message: '请输入联系人电话', trigger: 'blur' },
      { len: 11, message: '手机号为11位数字', trigger: 'blur' },
    ],
    email: [
      { required: true, message: '请输入联系人邮箱', trigger: 'blur' },
    ],
    file: [
      { required: true, message: '请上传证件原件照片', trigger: 'blur' },
    ],
  };

  onSubmit() {
    const ref: any = this.$refs.form;
    ref.validate(async (valid: boolean) => {
      if (valid) {
        // submit;
        const {
          companyName,
          enterpriseForm,
          file,
          registeredAddress,
          uniformSocialCreditCode,
          email,
          realName,
        } = this.form;
        const res = await registerCompany({
          audit: {
            companyName,
            enterpriseForm: enterpriseForm[enterpriseForm.length - 1],
            file,
            registeredAddress,
            uniformSocialCreditCode,
          },
          contact: {
            email,
            realName,
          },
        });
        // redirect;
        this.$router.push('/enterprise/info');
      }
    });
  }

  dealWithUploadLicense(response: any, file: any, fileList: any) {
    this.form = {
      ...this.form,
      file: response.data,
    };
  }
}
</script>

<style lang="stylus" scoped>
  .enterprise-info-update-container
    flex 1
    display flex
    align-items center
    justify-content center
    margin-bottom 10px
    background-color white
    .form
      padding 20px
      width 520px
      .line
        width 100%
        height 1px
        display inline-block
        background lightgrey
        margin 10px 0
      button.full
        width 100%
        margin-top 50px
      p
        display flex
        flex-direction row
        margin-bottom 20px
        &.header
          justify-content space-between
          margin-left 5px
          font-weight bold
        span
          font-size 20px
</style>

<style lang="stylus">
  .enterprise-info-update-container
    .el-form-item__content
      text-align left
      .el-input, .el-select, .el-cascader
        width 280px
    .el-icon-upload
      font-size 25px
    .el-upload__tip
      margin 10px 0
      line-height 1.6
      &.warning
        color #faad14
</style>
