<template>
  <div class="deliver">
    <div class="deliver-nav">
      <div class="deliver-nav-first">
        <span>
          <i class="el-icon-circle-check"></i>
        </span>
        <span>简历投递成功</span>
      </div>
      <div class="deliver-nav-second">
        <span @click="next()">继续查看该岗位</span>
        <span @click="nextOne()">我的投递记录</span>
      </div>
    </div>
    <div class="deliver-foot">
      <div class="deliver-foot-nav">
        <div class="deliver-foot-nav-first">
          <span>相似职位</span>
          <span @click="more">查看更多》</span>
        </div>
      </div>
      <div class="deliver-foot-foot" v-for="(list,index) in hotpositionList" :key="index" @click="nextjoblist(list.id)">
        <div style="margin:10px 0 0 0">
          <div class="company-post">
            <span>{{list.positionName}}</span>
            <span>{{list.salaryMin}}-{{list.salaryMax}}k</span>
          </div>
          <div class="company-address">
            <span>{{list.positionName}}</span>
            <span>{{$CodeToTag.CodeToTag([list.workAddress.province,list.workAddress.county],city)[0]+$CodeToTag.CodeToTag([list.workAddress.province,list.workAddress.county],city)[1]}}</span>
          </div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "deliver",
  props: ["fromData"],
  data() {
    return {
      hotpositionList: [],
      city:[]
    };
  },
  methods: {
    nextjoblist(id) {
      this.$router.push({ path: "/station",query:{
            id: id
          }});
    },
    next() {
      this.$emit("backEmit", false, true);
    },
    nextOne() {
      this.$router.push({ path: "/personal" });
    },
    more() {
      this.$router.push({ path: "/joblist" });
    },
    //岗位列表
    positionCompany() {
      this.$http.get(`/company/${this.fromData}/position`).then(res => {
        if (res.data.code == 200) {
          this.hotpositionList = res.data.data.list;
        }
      });
    },
     //城市
    citise() {
      this.$http.get("/constant/district").then(res => {
        if (res.data.code == 200) {
          this.city = res.data.data;
        }
      });
    },
  },
  created() {
    this.positionCompany();
    this.citise()
  }
};
</script>

<style lang="stylus" scoped> 
  .deliver
    display flex
    flex-direction row
    .deliver-nav
      margin 10% 0 0 20%
      .deliver-nav-first span:nth-child(1)
        font-size 40px
        color #7ed321
      .deliver-nav-first span:nth-child(2)
        font-size 30px
        padding  0 0 0 20px
        color #4e5b7f
      .deliver-nav-second
        margin 36px 0 0 30px 
        display flex
        flex-direction column 
      .deliver-nav-second span
        font-size 17px
        padding  0 0 0 20px
        color #6782cc
      .deliver-nav-second span:nth-child(2)
        margin 10px 0 0 0 
    .deliver-foot
      width 20%
      height 470px
      background-color white
      margin 2% 0 0 20%
      .deliver-foot-nav
        .deliver-foot-nav-first
          display flex
          flex-direction row
          font-size 14px
          margin 4% 0 0 0
          color #111d4b
          font-weight bold
          justify-content space-between
        .deliver-foot-nav-first span:nth-child(1)
          margin 0 0 0 6% 
        .deliver-foot-nav-first span:nth-child(2)
          margin 0 3% 0 0 
      .deliver-foot-foot 
        display flex
        flex-direction column
        margin 4% 0 0 0
        .company-post 
          display flex
          flex-direction row
          justify-content space-between
          font-size 14px
          color #455379
          padding 2% 0 0 0
        .company-post span:nth-child(1)
          margin 0 0 0 6% 
        .company-post span:nth-child(2)
          margin 0 6% 0 0
        .company-address
          display flex
          flex-direction row
          justify-content space-between
          font-size 12px
          color #909090
          padding 4% 0 0 0
        .company-address span:nth-child(1)
          margin 0 0 0 6% 
        .company-address span:nth-child(2)
          margin 0 6% 0 0
        .line
          width 90%
          border 0.5px  solid #eeeeee
          margin 2% 0 0 5%           
</style>