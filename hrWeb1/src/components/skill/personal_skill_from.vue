<template>
  <div class="from">
    <div style="margin:5px 0 0 50px;color:#61687c;line-height:10px;width:60px">{{fromData.skill}}</div>
    <div style="margin:0 0 0 76px;color:#61687c;width:60px">{{fromData.level|level}}</div>
    <div style="margin:0 0 0 141px">
      <a href="http://yinlinkrc-test.oss-cn-shanghai.aliyuncs.com/cert/resume/2019-09-19/1ed0e2530ca84587ad71bcec6dafc8c2.jpg?Expires=1568861363&OSSAccessKeyId=LTAIUfhgOSLY2xar&Signature=GaFc4AWukUBb8YM4a4Za%2FkI95gs%3D" style="color:#61687c">{{fromData.skill}}证书<img style="margin:0 0 0 5px" :src="require('../../assets/images/090.png')" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "progect_from",
  props: ["fromData"],
  data() {
    return {
      // ruleForm: {
      //    technicalName: '',
      //    level: ''
      // },
    };
  },
  filters:{
    level(level){
      const map=["一般","良好","熟练","精通"]
      return map[level]
    }
  },
  created() {
      console.log(this.fromData.level)
    //如果后台有个人之前填的数据，需要先把数据格式化后复制给子组件，可以进行修改操作
    this.ruleForm = Object.assign({}, this.fromData);
  },
  methods: {
    onSubmit() {
      //如果每次保存都要存后台，就在这里写发送时间，如果需要整体保存，就在父组件整体操作
      const flag = {
        index: this.index,
        data: this.ruleForm
      };
      this.$emit("setFromList", flag);
    },
    on() {
      document.getElementById("a").style.color = "#8897d0";
    },
    out() {
      document.getElementById("a").style.color = "#551a8b";
    }
  },
  computed() {
      
  }
};
</script>

<style lang="stylus" scoped>
  .from
     display flex
     flex-direction row
     font-size 15px
     color #1d366e
     text-align left
</style>