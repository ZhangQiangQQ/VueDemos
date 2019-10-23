<template>
  <div class="enterprise-user">
    <el-dialog width="450px" center title="新增用户" :visible.sync="addUserDialogVisible">
      <el-form ref="create-user" :model="addUserForm" :rules="addUserRules" label-width="70px">
        <el-form-item label="姓名" prop="realName">
          <el-input v-model="addUserForm.realName" auto-complete="off" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <password-input v-model="addUserForm.password" :showPrefix="false" :placeholder="'请输入密码'" />
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="addUserForm.phone" auto-complete="off" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-radio v-model="addUserForm.role" label="ROLE_USER">管理员</el-radio>
          <el-radio v-model="addUserForm.role" label="ROLE_ADMIN">普通用户</el-radio>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addUserDialogVisible = false">取消</el-button>
        <el-button type="primary main" @click="doConfirmAddUser">确定</el-button>
      </div>
    </el-dialog>
    <el-dialog width="450px" center title="编辑用户" :visible.sync="editUserDialogVisible">
      <el-form ref="edit-user" :model="editUserForm" label-width="60px">
        <el-form-item label="姓名">
          <el-input v-model="editUserForm.realName" auto-complete="off" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <password-input v-model="editUserForm.password" :showPrefix="false" :placeholder="'请输入密码'" />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="editUserForm.phone" auto-complete="off" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-radio v-model="editUserForm.role" label="ROLE_USER">管理员</el-radio>
          <el-radio v-model="editUserForm.role" label="ROLE_ADMIN">普通用户</el-radio>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editUserDialogVisible = false">取消</el-button>
        <el-button type="primary main" @click="doConfirmEditUser">确定</el-button>
      </div>
    </el-dialog>
    <board class="board" title="用户列表">
      <div class="filters">
        <el-form :inline="true" :model="filters" class="form" label-width="120px">
          <div class="fields">
            <el-form-item label="用户姓名/手机号">
              <el-input clearable v-model="filters.keyword" placeholder="请输入内容"></el-input>
            </el-form-item>
          </div>
          <div class="operations">
            <el-button @click="addUserDialogVisible = true">新增</el-button>
            <el-button type="primary main" @click="doSearch">查询</el-button>
          </div>
        </el-form>
      </div>
      <el-table
        :data="userTableData">
        <table-empty-placeholder slot="empty"/>
        <el-table-column
          prop="realName"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号">
        </el-table-column>
        <el-table-column
          prop="role"
          label="角色">
        </el-table-column>
        <el-table-column
          prop="address"
          label="注册时间">
          <template slot-scope="scope">
            <span>{{ scope.row.createdTime }}</span>
          </template>
        </el-table-column>
        <el-table-column
          width="100"
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="editUser(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="deleteUser(scope.row.id)">删除</el-button>
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
        :total="total">
      </el-pagination>
    </board>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Board from 'components/board.vue';
import TableEmptyPlaceholder from 'components/table-empty-placeholder.vue';
import PasswordInput from 'components/password-input.vue';
import dayjs from 'dayjs';
import {
  getEnterpriseUsers,
  createEnterpriseUser,
  updateEnterpriseUser,
  deleteEnterpriseUser,
} from '@/apis/account';

@Component({
  components: {
    Board,
    TableEmptyPlaceholder,
    PasswordInput,
  },
})
export default class EnterpriseUser extends Vue {
  total: number = 0;

  paginations: object = {
    pageSize: 10,
    pageNum: 1,
  }

  filters: object = {
    keyword: '',
  };

  addUserForm: object = {
    realName: '',
    password: '',
    phone: '',
    role: 'ROLE_ADMIN',
  };

  editUserForm: any = {
    id: '',
    realName: '',
    password: '',
    phone: '',
    role: 'ROLE_ADMIN',
  };

  addUserRules: object = {
    realName: [
      { required: true, message: '请输入职位名称', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
    ],
    phone: [
      { required: true, message: '请输入手机号', trigger: 'blur' },
      { len: 11, message: '手机号必须为11位', trigger: 'blur' },
    ],
    role: [
      { required: true, message: '请选择角色', trigger: 'blur' },
    ],
  };

  addUserDialogVisible: boolean = false;

  editUserDialogVisible: boolean = false;

  userTableData: any = [];

  async doConfirmAddUser() {
    const ref: any = this.$refs['create-user'];
    ref.validate(async (valid: boolean) => {
      if (valid) {
        // submit;
        await createEnterpriseUser({ ...this.addUserForm });
        this.$message({
          message: '用户创建成功！',
          type: 'success',
        });
        this.addUserDialogVisible = false;

        // reset;
        this.addUserForm = {
          realName: '',
          password: '',
          phone: '',
          role: 'ROLE_ADMIN',
        };

        // re-search;
        this.doSearch();
      }
    });
  }

  async doConfirmEditUser() {
    const { id, ...params } = this.editUserForm;
    await updateEnterpriseUser(id, params);
    this.$message({
      message: '用户信息修改成功！',
      type: 'success',
    });
    this.editUserDialogVisible = false;

    // re-search;
    this.doSearch();
  }

  editUser(userInfo: any) {
    this.editUserForm = userInfo;
    this.editUserDialogVisible = true;
  }

  async deleteUser(id: number) {
    this.$confirm('确认删除该用户？')
      .then(async (e) => {
        await deleteEnterpriseUser(id);
        this.$message({
          message: '用户删除成功！',
          type: 'success',
        });
        // re-search;
        this.doSearch();
      }).catch((e) => {});
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
    const res = (await getEnterpriseUsers(payload)).data;
    this.userTableData = res.list.map((i: any) => ({
      ...i,
      createdTime: dayjs(i.createdTime).format('YYYY-MM-DD'),
    }));
    this.total = res.total;
  }

  created() {
    this.doSearch();
  }
}
</script>

<style lang="stylus" scoped>
  .enterprise-user
    display flex
    margin-top 30px
    .board
      width 100%
      padding-bottom 30px
      .filters .form
        margin 5px 10px 20px
        display flex
        justify-content space-between
        .operations
          text-align right
      .pagination
        margin-top 15px
        text-align right

</style>
