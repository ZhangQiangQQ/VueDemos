import axios from 'axios'
axios.defaults.baseURL="http://47.102.145.186:8084";
const state = {
    approvalDetail: {
        name:'',
        location:'',
        code:'',
        corpType:'',
        img:[],
        contactName:'',
        contactJob:'',
        contactEmail:''
    },
    approvaSstatue:-1,
    refuseReason:'',
    refuseReasonList:['虚假信息','涉黄']
}
const mutations = {
    setValue(state, data) {
        state[data.key] = data.value
    }
}
const actions = {
    getDeail({commit},data){
        axios.get('/company/audit/detail',{params:{auditId:data}}).then(
            res=>{
                let allData = res.data.data
                console.log(allData)
                commit('setValue',{
                    key:'approvalDetail',
                    value:allData
                })
            }
        )
    },
    approve({commit},data){
        axios.post('/company/audit/audit',{
            auditId:data.auditId,
            rejectReason:'',
            audit:'S'
        }
        ).then(
            res=>{
                commit('setValue',{
                    key:'approvaSstatue',
                    value:0
                })
                this._vm.$message('审批成功');
            })
    },
    refuse({commit},data){
        axios.post('/company/audit/audit',{
            auditId:data.auditId,
            rejectReason:state.refuseReason,
            audit:'F'
        }).then(
            res=>{
                commit('setValue',{
                    key:'approvaSstatue',
                    value:1
                })
                this._vm.$message('审批拒绝成功');
            }
        )
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}