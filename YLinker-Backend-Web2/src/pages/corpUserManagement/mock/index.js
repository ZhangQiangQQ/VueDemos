// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const searchData = ()=>{
    return{
        status:200,
        msg:'',
        data:{
            pages:2,
            total:40,
            pageNum:null,
            pageSize:null,
            list:[
                {
                    auditId:'111',
                    name:'上海sss公司',
                    location:'上海长宁',
                    industry:'互联网',
                    code:'4463321646468489',
                    commitTime:'2018-15-15 23:00:00'
                },
                {
                    auditId:'1121',
                    name:'上海sss公司',
                    location:'上海长宁',
                    industry:'互联网',
                    code:'4463321646468489',
                    commitTime:'2018-15-15 23:00:00'
                },
                {
                    auditId:'222',
                    name:'上海sss公司',
                    location:'上海长宁',
                    industry:'互联网',
                    code:'4463321646468489',
                    commitTime:'2018-15-15 23:00:00'
                },
                {
                    auditId:'333',
                    name:'上海sss公司',
                    location:'上海长宁',
                    industry:'互联网',
                    code:'4463321646468489',
                    commitTime:'2018-15-15 23:00:00'
                }
            ]
        }
    }
}
 // mock一组数据
const registLocation = ()=>{
    return{
        status:200,
        msg:'',
        data:{
            locationOptions:[
                {
                    id:0,
                    value:'上海徐汇'
                },
                {
                    id:1,
                    value:'上海徐w汇'
                },
                {
                    id:2,
                    value:'上海徐21汇'
                }
            ]
        }
    }
}
const getApprovalDetail = ()=>{
    return{
        status:200,
        msg:'',
        data:{
            approvalDetail: {
                name:'company',
                location:'shanghai',
                code:'3213123123',
                corpType:'goverment',
                img:['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'],
                contactName:'Andrd',
                contactJob:'IT',
                contactEmail:'CCC@email.com',
            },
            approvalStatus:-1,
            refuseReason:'',
            refuseReasonList:['虚假信息','涉黄'
            ]
        }
    }
}

const approveRefuse = ()=>{
    return{
        status:200,
        msg:'ok',
        data:{}
    }
}
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(RegExp('/company/audit/list'+ ".*"), 'get', searchData);
// Mock.mock('/corpUserManagement/getCity', 'post', registLocation);
Mock.mock(RegExp('/company/audit/detail'+ ".*"), 'get', getApprovalDetail);
Mock.mock('/company/audit/audit', 'post', approveRefuse);
// Mock.mock('/corpUserManagement/approvalDetail/refuse', 'post', approveRefuse);