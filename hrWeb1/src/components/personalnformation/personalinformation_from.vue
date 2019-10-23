<template>
  <div class="personalinformation">
    <div class="information">
      <div>
        <img
          style="width:95px;height:95px;border-radius:47px"
          :src='this.avatarUrl'
        />
      </div>
      <div class="informationright">
        <div class="information-first">
          <span>{{fromData.fullName}}</span>
          <span>
            <img style="width:26px" :src="require('../../assets/images/xing.png')" />
          </span>
          <span>{{fromData.age}}岁({{fromData.birthday | formatDateOne}})</span>
        </div>
        <div class="information-second">
          <span>现居{{$CodeToTag.CodeToTag([fromData.province,fromData.county],citysal)[0]+$CodeToTag.CodeToTag([fromData.province,fromData.county],citysal)[1]}}</span>
          <span>|</span>
          <span>{{fromData.overseasAge}}年海外工作经验</span>
        </div>
        <div class="information-third">
          <span>
            <img
              style="width:8px;height:14px;margin:0 0 0 10px"
              :src="require('../../assets/images/copy.png')"
            />
            <span style="margin:0 0 0 13px">{{fromData.phone}}</span>
          </span>
          <span>|</span>
          <span>
            <img
              style="width:11px;height:8px;margin-left:15px"
              :src="require('../../assets/images/00.png')"
            />
            <span style="margin:0 0 0 13px">{{fromData.email}}</span>
          </span>
          <span style="margin-left:15px">|</span>
          <span style="margin-left:15px">政治面貌：{{fromData.politicalStatus}}</span>
        </div>
      </div>
      <!-- <div style="margin:35px 0 0 0;">
              <span class="actions-span">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span @click="editsinformation" style="margin-right:3px">编辑</span> 
              </span>
      </div>-->
    </div>
  </div>
</template>
<script>
import Moment from "moment";
export default {
  name: "personalinformation_from",
  props: ["fromData"],

  data() {
    return {
     avatarUrl:'',
     citysal:[]
    };
  },
  filters: {
    level(level) {
      const map = ["群众", "团员", "民主党派", "预备党员", "中共党员"];
      return map[level];
    }
  },
  methods: {
    brief() {
      this.$http
        .get("/resume/brief")
        .then(res => {
          if (res.data.code == 200) {
            this.avatarUrl = res.data.data.avatarUrl;
          }
        })
        .catch(error => {
        });
    },
     //城市
      citise() {
        this.$http.get("/constant/district").then(res => {
          if (res.data.code == 200) {
            this.citysal = res.data.data;
          }
        });
      },
  },
  created() {
    this.citise()
    this.brief()
  }
};
</script>
<style lang="stylus" scoped>
  .personalinformation
    .information
      display flex
      flex-direction row
      background white
      .informationright
        display flex
        flex-direction column
        margin  0 0 10px 0
        width 525px
        text-align left
        .information-first span:nth-child(1)
          float left
          color #1d366e
          font-size 24px
          font-weight bold
          margin 0 0 0 -5px
        .information-first span:nth-child(2)
          float left
          margin 8px 0 0 5px
        .information-first span:nth-child(3)
          float left
          color #61687c
          font-size 13px
          line-height 34px 
          margin 0 0 0 40px 
        .information-second span:nth-child(1)
          color #61687c
          font-size 14px
          line-height 34px 
          margin 0 0 0 20px
        .information-second span:nth-child(2)
          margin 0 0 0 25px 
        .information-second span:nth-child(3)
          margin 0 0 0 25px
        .information-second span:nth-child(4)
          margin 0 0 0 25px
        .information-third span:nth-child(1)
          color #61687c
          font-size 14px
          line-height 34px 
          margin 0 0 0 10px
        .information-third span:nth-child(2)
          margin 0 0 0 20px            
    .information div:nth-child(1) 
      margin 31px 0 0 25px
    .information div:nth-child(3)   
      .actions-span
        color #1d366e
        font-size 14px
      .actions-span span:hover
        color #7d8dcd
      .actions-span span:active
        color #617dcb  
          
</style>
