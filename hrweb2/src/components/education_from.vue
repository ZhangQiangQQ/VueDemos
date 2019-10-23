<template>
    <div class="from">
        <div class="fromfirst">
             <div class="fromfirst-one"><span>华东理工大学</span></div>
             <div class="fromfirst-one"><span>工学设计 | 硕士</span></div>
        </div>
        <div class="fromsecond">
            <div class="fromfirst-two"><span>2018-12/至今</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'from',
        props:['fromData','index'],
        data() {
            return {
                ruleForm: {
                   educationName:"",
                   educationTime:"",
                   educationDegree:""
                },
            };
        },
        created () {
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
            }
        }
    }
</script>

<style lang="stylus" scoped>
  .from
    display flex
    flex-direction row
    font-size 15px
    color #1f368d
    text-align left
    margin 0 0 0 0
    font-weight bold
    .fromfirst 
      margin 0 0 0 50px
      .fromfirst-one
        margin 10px 0 0 0 
    .fromsecond 
      margin 0 0 0 235px
      .fromfirst-two
        margin 10px 0 0 0   
</style>