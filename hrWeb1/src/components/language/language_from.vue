<template>
  <div class="from">
    <div style="margin:0 0 10px 50px;line-height:10px;width:60px">{{fromData.language}}</div>
    <div style="margin:0 0 0 76px;color:#61687c;width:60px">{{fromData.listenAndSpeak|level}}</div>
    <div style="margin:0 0 0 141px;color:#61687c">{{fromData.readAndWrite|level}}</div>
  </div>
</template>

<script>
export default {
  name: "progect_from",
  props: ["fromData"],
  data() {
    return {
      // ruleForm: {
      //    languages:"",
      //    listenAbility:"",
      //    readAbility:"",
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
    //如果后台有个人之前填的数据，需要先把数据格式化后复制给子组件，可以进行修改操作
    this.ruleForm = Object.assign({}, this.fromData);
    // if (this.fromData.listenAndSpeak == 1) {
    //   this.fromData.listenAndSpeak = "一般";
    // } else if (this.fromData.listenAndSpeak == 2) {
    //   this.fromData.listenAndSpeak = "良好";
    // } else if (this.fromData.listenAndSpeak == 3) {
    //   this.fromData.listenAndSpeak = "熟练";
    // } else if (this.fromData.listenAndSpeak == 4) {
    //   this.fromData.listenAndSpeak = "精通";
    // }else{
    //   return
    // }
    // if (this.fromData.readAndWrite == 1) {
    //   this.fromData.readAndWrite = "一般";
    // } else if (this.fromData.readAndWrite == 2) {
    //   this.fromData.readAndWrite = "良好";
    // } else if (this.fromData.readAndWrite == 3) {
    //   this.fromData.readAndWrite = "熟练";
    // } else if (this.fromData.readAndWrite == 4) {
    //   this.fromData.readAndWrite = "精通";
    // }else{
    //   return
    // }
  },
  methods: {
    onSubmit() {
      //如果每次保存都要存后台，就在这里写发送时间，如果需要整体保存，就在父组件整体操作
      const flag = {
        index: this.index,
        data: this.ruleForm
      };
      this.$emit("setFromList", flag);
    }
  },
  computed() {}
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