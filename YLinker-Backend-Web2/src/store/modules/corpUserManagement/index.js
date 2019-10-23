import axios from 'axios'
axios.defaults.baseURL="http://47.102.145.186:8084";
const state = {
    params: {
        name: '',
        auditId: '',
        location: '',
        code: '',
        size:10,
        index:0,
        status:0
    },
    corpUserList:[],
    locationOptions:[]
}
const mutations = {
    setValue(state, data) {
        state[data.key] = data.value
    }
}
const actions = {
    search({ commit }, data) {
        let params = JSON.parse(JSON.stringify(data))
        params['id'] = params.auditId
        delete params.auditId
        delete params.total
        axios.get('/company/audit/list',{params:params}).then(res=>{
            // console.log(params)
            console.log(res)
            commit('setValue',{
                key:'corpUserList',
                value:res.data.data.list
            })
        })
    },
    getCity({ commit }, data) {
        axios.post('/corpUserManagement/getCity',data).then(res=>{
            commit('setValue',{
                key:'locationOptions',
                value:res.data.data.locationOptions
            })
            console.log(res.data.data.locationOptions)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}