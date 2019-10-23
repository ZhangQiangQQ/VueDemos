<template>
    <div>
        <div class="corp-detail-wrap border-b1">
            <div class="corp-detail-head">企业资质审核</div>
            <div class="corp-detail-h1">
                <div class="fl">企业名称：</div>
                <div class="pl95">{{approvalDetail.name || ' &nbsp; '}}</div>
            </div>
            <div class="corp-detail-head">
                <div class="fl">企业注册地：</div>
                <div class="pl95">{{approvalDetail.location || ' &nbsp;'}}</div>
            </div>
            <div class="corp-detail-head">
                <div class="fl">统一社会信用代码：</div>
                <div class="pl95">{{approvalDetail.code || ' &nbsp;'}}</div>
            </div>
            <div>
                <div class="fl">企业类别：</div>
                <div class="pl95">{{approvalDetail.corpType || ' &nbsp;'}}</div>
            </div>
            <div>
            <div class="fl">证件原照片：</div>    
            <div class="pl95"> 
            <el-image 
                style="width: 100px; height: 100px"
                :src="approvalDetail.img[0] || ''" 
                :preview-src-list="approvalDetail.img">
            </el-image>
            </div></div>
        </div>
        <div class="corp-detail-wrap">
             <div>联系人信息</div>
            <div>
                <div  class="fl">姓名：</div>
                <div class="pl95">{{approvalDetail.contactName || ' &nbsp;'}}</div>
            </div>
            <div><div  class="fl">职位：</div><div class="pl95">{{approvalDetail.contactJob || ' &nbsp;'}}</div></div>
            <div><div  class="fl">邮箱：</div><div class="pl95">{{approvalDetail.contactEmail || ' &nbsp;'}}</div></div>
        </div>
        <div>
            <el-button class="cus-el-button" type="light" @click="onSubmit(-1)">返回</el-button>
            <!-- <el-button type="primary" @click="onSubmit(0)">不通过</el-button> -->
            <!-- 不通过 -->
            <el-popover
            placement="top"
            width="160"
            v-model="visible">
            <div>请选择不通过原因</div>
             <el-radio-group v-model="refuseReason">
                <el-radio  v-for="(item,index) in refuseReasonList" :key="index" :label="item">{{item}}</el-radio>
            </el-radio-group>
            <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                <el-button type="primary" size="mini"  @click="onSubmit(0),visible = false">确定</el-button>
            </div>
            <el-button class="cus-el-button" type="primary" slot="reference" >不通过</el-button>
            </el-popover>
            <!-- 通过 -->
            <el-button  class="cus-el-button" type="primary" @click="onSubmit(1)">通过</el-button>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions,mapMutations } = createNamespacedHelpers('approvalDetail')
export default {
  name: 'approvalDetail',
  props: {
    msg: String
  },
  computed:{
      refuseReason:{
          set:  function(value){
            //   console.log(value)
              this.$store.commit('approvalDetail/setValue',{
                  key:'refuseReason',
                  value:value
              })
          },
          get: function(){
              return this.$store.state.approvalDetail.refuseReason
          }
      },
    ...mapState([
        'approvalDetail',
        'refuseReasonList'
    ])
  },
  data(){
    return{
        visible:false,
        visible1:false,
        corpId:'',
    }
  },
  methods:{
    ...mapActions(['approve','refuse','getDeail']),
    ...mapMutations(['setValue']),
    onSubmit(type){
        if(type===-1) this.$router.go(-1);
        if(type===0){
            this.refuse({
              auditId:this.corpId
          });
        } 
        if(type===1){
           this.approve({
              auditId:this.corpId
          }); 
        } 
    }

  },
  created(){
      this.corpId = Number(this.$route.query.auditId)
      this.getDeail(this.corpId)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.corp-detail-wrap{
    line-height: 30px;
    padding-bottom: 20px;
    font-size: 16px;
}
.corp-detail-head{
    font-weight: bold;
    color: #333;
    font-size: 16px;
}
.corp-detail-h1{
    font-weight: bold;
    color: #333;
    font-size: 16px;
}
.fl{
    float: left;
}
.pl95{
    padding-left: 146px;
}
.cus-el-button{
    width: 100px;
    margin: 0 15px 0 15px;
}
.border-b1{
    border-bottom: 1px solid #cdcd;
}
</style>
