<template>
  <div class="account-basic">
    <el-dialog center title="更换手机号" width="40%"
      :visible.sync="dialogChangeTelVisible"
      :close-on-click-modal="false">
      <el-form ref="formChangePhone" :model="changePhoneForm" :rules="rules" label-width="70px">
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="changePhoneForm.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="vcode">
          <captcha v-model="changePhoneForm.vcode" :phoneNumber="changePhoneForm.phone" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogChangeTelVisible = false">取消</el-button>
        <el-button type="primary main" @click="doChangePhone">确定</el-button>
      </div>
    </el-dialog>

    <el-dialog center title="更换绑定邮箱" width="40%"
      :visible.sync="dialogChangeMailVisible"
      :close-on-click-modal="false">
      <el-form ref="formChangeMail" :model="changeEmailForm" :rules="rules" label-width="80px">
        <el-form-item label="邮箱账号" prop="email">
          <el-input v-model="changeEmailForm.email" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogChangeMailVisible = false">取消</el-button>
        <el-button type="primary main" @click="doChangeEmail">确定</el-button>
      </div>
    </el-dialog>

     <el-dialog center title="更换头像" width="30%"
      :visible.sync="dialogChangeAvatarVisible"
      :close-on-click-modal="false">
       <el-upload
        class="avatar-uploader"
        :action="updateAvatar"
        :on-success="handleAvatarSuccess"
        :with-credentials="true"
        :limit="1"
        list-type="picture">
        <el-button>选择文件</el-button>
       </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogChangeAvatarVisible = false">取消</el-button>
      </div>
    </el-dialog>

    <board class="body" title="基本信息">
      <div class="content">
        <div class="avatar">
          <img :src="staticInfo.avatarUrl || require('@/assets/images/default-avatar.jpg')" />
          <el-button type="text" @click="dialogChangeAvatarVisible = true">更换头像</el-button>
        </div>
        <div class="form">
          <el-form :rules="rules" label-width="80px">
            <el-form-item label="姓名">
              {{ staticInfo.realName }}
            </el-form-item>
            <el-form-item label="角色">
              {{ staticInfo.role }}
            </el-form-item>
            <el-form-item label="手机号">
              {{ staticInfo.phone }}
              <el-button type="text" @click="dialogChangeTelVisible = true">更换绑定手机号</el-button>
            </el-form-item>
            <el-form-item label="邮箱">
              {{ staticInfo.email }}
              <el-button type="text" @click="dialogChangeMailVisible = true">更换绑定邮箱</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </board>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapState } from 'vuex';
import Board from 'components/board.vue';
import Captcha from 'components/captcha.vue';
import { RootState } from '@/store/root-states';
import {
  updatePhone,
  updateEmail,
  updateAvatar,
  getAccountInfo,
} from '@/apis/account';

@Component({
  components: {
    Board,
    Captcha,
  },
  computed: mapState({
    userInfo(state: RootState) {
      return state.userInfo;
    },
  }),
})
export default class AccountBasic extends Vue {
  changeEmailForm: object = {
    emailChangeBody: '',
  };

  changePhoneForm: object = {
    phone: '',
    vcode: '',
  };

  updateAvatar: string = updateAvatar;

  dialogChangeTelVisible: boolean = false;

  dialogChangeMailVisible: boolean = false;

  dialogChangeAvatarVisible: boolean = false;

  staticInfo: object = {}

  rules: object = {
    phone: [
      { required: true, message: '请输入新手机号', trigger: 'blur' },
    ],
    email: [
      { required: true, message: '请输入新邮箱', trigger: 'blur' },
    ],
    vcode: [
      { required: true, message: '请输入验证码', trigger: 'blur' },
    ],
  };

  async doChangePhone() {
    const ref: any = this.$refs.formChangePhone;
    ref.validate(async (valid: boolean) => {
      if (valid) {
        await updatePhone(this.changePhoneForm);
        this.$message.success('手机号更换成功！');
        this.changePhoneForm = {
          phoneChangeBody: '',
          vcode: '',
        };
        this.dialogChangeMailVisible = false;
        this.initAndRefreshInfo();
      }
    });
  }

  async doChangeEmail() {
    const ref: any = this.$refs.formChangeMail;
    ref.validate(async (valid: boolean) => {
      if (valid) {
        await updateEmail(this.changeEmailForm);
        this.$message.success('邮箱更换成功！');
        this.changePhoneForm = {
          phoneChangeBody: '',
        };
        this.dialogChangeMailVisible = false;
        this.initAndRefreshInfo();
      }
    });
  }

  async initAndRefreshInfo() {
    const res = (await getAccountInfo()).data;
    this.staticInfo = res;
  }

  handleAvatarSuccess() {
    this.$message.success('头像更换成功！');
  }

  created() {
    this.initAndRefreshInfo();
  }
}
</script>

<style lang="stylus" scoped>
  .account-basic
    display flex
    flex-direction column
    margin-top 30px
    .avatar-uploader
      text-align center
      .avatar-uploader-icon
        border: 1px dashed #d9d9d9;
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
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
      .content
        display flex
        .avatar
          display flex
          flex-direction column
          padding 20px
          img
            border-radius 50%
            width 100px
      .form
        padding 20px
        width 520px
        button.full
          width 100%
</style>

<style lang="stylus">
  .account-basic
    .el-form-item__content
      text-align left
</style>
