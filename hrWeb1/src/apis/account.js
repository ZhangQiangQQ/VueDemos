import axios from '../utils/http'

// global


//获取简历简讯
export const brief = () => axios.get('/resume/brief');
//城市
export const city = () => axios.get('/constant/district');
// 行业
export const industry = () => axios.get('/constant/industry');
//获取所有职位类型
export const allpositionCatalog = () => axios.get('/constant/positionCatalog');


//resume
//项目经历删除
export const deleteproject = (id,paramsId) => axios.delete(`/resume/${id}/project/${paramsId}`)
//语言能力删除
export const deletelanguage = (id,paramsId) => axios.delete(`/resume/${id}/language/${paramsId}`)
//职称等级删除
export const deletetrain = (id,paramsId) => axios.delete(`/resume/${id}/training/${paramsId}`)
//教育经历删除
export const deletedu = (id,paramsId) => axios.delete(`/resume/${id}/education/${paramsId}`)
//荣誉奖项删除
export const deleteawards = (id,paramsId) => axios.delete(`/resume/${id}/award/${paramsId}`)
//工作经历删除
export const deletework = (id,paramsId) => axios.delete(`/resume/${id}/work/${paramsId}`)
//职称等级删除
export const deleteprofession = (id,paramsId) => axios.delete(`/resume/${id}/qualification/${paramsId}`)
//专业技能删除
export const deleteskill = (id,paramsId) => axios.delete(`/resume/${id}/skill/${paramsId}`)
//求职意向保存
export const jobintensionkeep = (id,params) => axios.put(`/resume/${id}/target`,params);
//个人信息
export const informationkeep = (id,params) => axios.put(`/resume/${id}/base`,params);
//自我介绍
export const selfappraisalkeep = (id,params) => axios.put(`/resume/${id}/evaluation`,params);
//荣誉奖项保存
export const awardskeep = (id,paramsId,params) => axios.put(`/resume/${id}/award/${paramsId}`,params);
//专业技能
export const skillkeep = (id,paramsId,params) => axios.put(`/resume/${id}/skill/${paramsId}`,params);
 //语言能力
export const languagekeep = (id,paramsId,params) => axios.put(`/resume/${id}/language/${paramsId}`,params);
//职称等级
export const professionkeep = (id,paramsId,params) => axios.put(`/resume/${id}/qualification/${paramsId}`,params);
//培训经历保存
export const trainingkeep = (id,paramsId,params) => axios.put(`/resume/${id}/training/${paramsId}`,params);
//工作保存
export const workkeeped = (id,paramsId,params) => axios.put(`/resume/${id}/work/${paramsId}`,params);
//教育保存
export const educationkeep = (id,paramsId,params) => axios.put(`/resume/${id}/education/${paramsId}`,params);
//项目经历保存
export const progectkeep = (id,paramsId,params) => axios.put(`/resume/${id}/project/${paramsId}`,params);
//获取简历详情
export const resumeId = (id) => axios.get(`/resume/${id}`);





//station

//确认投递
export const showdeliver = (id,paramsId) => axios.put(`/submitted/position/${id}/resume/${paramsId}`);
//确认收藏
export const iscollect = (id) => axios.put(`/favorite/position/${id}`);
//获取岗位详情
export const positionDetail = (id) => axios.get(`/position/${id}`);
//判断简历是否投递
export const showdeli = (id) => axios.get(`/submitted/position/${id}`);
//判断简历是否收藏
export const showcoll = (id) => axios.get(`/favorite/position/${id}`);

//position

//获取公司详情
export const companyDetail = (id) => axios.get(`/company/${id}`);
//获取岗位列表
export const positionlist = (id,params) => axios.get(`/company/${id}/position`,{params:params});
//岗位分类
export const positionCatalog = (id) => axios.get(`/company/${id}/positionCatalog`);



//joblist

//公司搜索
export const companySearch = (params) => axios.post('/searched/company',params);
//职位搜索
export const positionSearch = (params) => axios.post('/searched/position',params);
//获取简单选项信息
export const option = () => axios.get('/option');



// home

//轮播图
export const carousel = () => axios.get('/carousel');
//tabs--推荐
export const recommendation = () => axios.get('/home/recommended/position');
//tabs--最新
export const newposition = () => axios.get('/home/recent/position');
//热门企业
export const hotcompany = () => axios.get('/popular/company');
 //热门词
export const hotkeyword = () => axios.get('/popular/keyword');
//热门职位
export const hotposition = () => axios.get('/popular/position');
//搜索
export const homeSearch = (params) => axios.post('/searched/position',params);





// personal

//获取投递过的岗位
export const submitted = () => axios.get('/submitted/position');
//获取收藏的岗位
export const favorite = () => axios.get('/favorite/position');
//取消对岗位的收藏
export const isfavorite = (id) => axios.delete(`/favorite/position/${id}`);
//获取推荐岗位
export const searched = (params) => axios.post('/searched/position',params);



//inforchange

//重置密码
export const resetPassword = (params) => axios.put('/account/password',params);
//更换手机号
export const resetPhone = (params) => axios.put('/account/phone',params);
