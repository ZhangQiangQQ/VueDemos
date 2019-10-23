<template>
   <div class="from">
        <span style="margin:15px 0 10px 50px">CET6</span>
        <span style="margin:15px 0 0 50px">六级</span>
        <span style="margin:15px 235px 0 0"><a href="#" style="color:#1f368d">点击查看证书<img style="margin:0 0 0 5px" :src="require('../assets/images/090.png')"/></a></span>
    </div>
</template>

<script>
    export default {
        name:'progect_from',
        props:['fromData','index'],
        data() {
            return {
                ruleForm: {
                   technicalName: '',
                   level: ''
                },
            };
        },
        created(){
            //如果后台有个人之前填的数据，需要先把数据格式化后复制给子组件，可以进行修改操作
            this.ruleForm = Object.assign({},this.fromData)
        },
        methods: {
            onSubmit () {
                //如果每次保存都要存后台，就在这里写发送时间，如果需要整体保存，就在父组件整体操作
                const flag = {
                    index:this.index,
                    data:this.ruleForm
                }
                this.$emit('setFromList',flag);
            },
            on () {
              document.getElementById("a").style.color = "#8897d0";
            },
            out () {
              document.getElementById("a").style.color = "#551a8b";
            }
        }
    }
</script>

<style lang="stylus" scoped>
  .from
    display flex
    flex-direction row
    flex-wrap wrap 
    justify-content space-between
    font-size 15px
    color #1f368d
    font-weight bold
    text-align left
</style>