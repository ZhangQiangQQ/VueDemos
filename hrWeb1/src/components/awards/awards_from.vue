<template>
   <div class="from">
        <div style="margin:5px 0 0 50px;line-height:10px;width:60px">{{fromData.award}}</div>
        <div style="margin:0 0 0 75px">{{fromData.acquiredTime | formatDateOne}}</div>
    </div>
</template>

<script>
    export default {
        name:'progect_from',
        props:['fromData'],
        data() {
            return {
            };
        },
        created(){
            //如果后台有个人之前填的数据，需要先把数据格式化后复制给子组件，可以进行修改操作
            this.ruleForm=Object.assign({},this.fromData)
        },
        methods: {
            onSubmit(){
                //如果每次保存都要存后台，就在这里写发送时间，如果需要整体保存，就在父组件整体操作
                const flag={
                    index:this.index,
                    data:this.ruleForm
                }
                this.$emit('setFromList',flag);
            }
        }
    }
</script>

<style lang="stylus" scoped>
  .from
    display flex
    flex-direction row
    font-size 15px
    color #61687c
    text-align left
</style>