<template>
  <div class="contact-us-about">
    <div class="body">
      <h1>联系我们</h1>
      <div class="form">
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
          <el-form-item label="公司">
            {{ staticInfo.company }}
          </el-form-item>
          <el-form-item label="地址">
            {{ staticInfo.address }}
          </el-form-item>
          <el-form-item label="邮编">
            {{ staticInfo.postNumber }}
          </el-form-item>
          <el-form-item label="电话">
            {{ staticInfo.tel }}
          </el-form-item>
          <el-form-item label="邮箱">
            {{ staticInfo.email }}
          </el-form-item>
          <el-form-item label="在此留言" prop="comment">
            <el-input type="textarea" :rows="4" v-model="form.comment" placeholder="请输入留言内容"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="full main" @click="onSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class ContactUs extends Vue {
  form: object = {
    comment: '',
  };

  staticInfo: object = {
    company: '阿里巴巴',
    address: '中国杭州',
    postNumber: '123123',
    tel: '123123123123',
    email: 'ffff@alibaba-inc.com',
  }

  rules: object = {
    comment: [
      { required: true, message: '请输入留言内容', trigger: 'blur' },
    ],
  };

  onSubmit() {
    const ref: any = this.$refs.form;
    ref.validate((valid: boolean) => {
      if (valid) {
        // submit;
      }
      return false;
    });
  }

  mounted() {

  }
}
</script>

<style lang="stylus" scoped>
  .contact-us-about
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
      h1
        font-size 20px
        text-align left
        margin 30px 0px 10px
      .form
        padding 10px
        width 520px
        button.full
          width 100%
</style>

<style lang="stylus">
  .contact-us-about
    .el-form-item__content
      text-align left
</style>
