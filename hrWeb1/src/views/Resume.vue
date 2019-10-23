<template>
  <Scroll ref="scroll">
    <div class="resumes">
      <div class="content">
        <!-- 教育经历删除确认 -->
        <el-dialog
                title=""
                :visible.sync="dialogedu"
                style="width:900px;margin-left:21%"
                >
          <div style="display:flex;flex-direction:row;margin-left:90px">
            <img style="height:18px;" :src="require('../assets/images/222.png')"/>
            <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">删除后不能恢复，请确定删除？</span>
          </div>
          <div slot="footer" class="dialog-footer" style="margin-top:-30px">
            <el-button style="margin:0 20px 0 0" @click="dialog = false" plain>取 消</el-button>
            <el-button type="primary" style="margin:0 90px 0 0" @click="deletedu()">确 定</el-button>
          </div>
          <div style="height:30px"></div>
        </el-dialog>
        <!-- 工作经历删除确认 -->
        <el-dialog
                title=""
                :visible.sync="dialogwork"
                style="width:900px;margin-left:21%"
                >
          <div style="display:flex;flex-direction:row;margin-left:90px">
            <img style="height:18px;" :src="require('../assets/images/222.png')"/>
            <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">删除后不能恢复，请确定删除？</span>
          </div>
          <div slot="footer" class="dialog-footer" style="margin-top:-30px">
            <el-button style="margin:0 20px 0 0" @click="dialogwork = false" plain>取 消</el-button>
            <el-button type="primary" style="margin:0 90px 0 0" @click="deletework()">确 定</el-button>
          </div>
          <div style="height:30px"></div>
        </el-dialog>
         <!-- 项目经历删除确认 -->
        <el-dialog
                title=""
                :visible.sync="dialogproject"
                style="width:900px;margin-left:21%"
                >
          <div style="display:flex;flex-direction:row;margin-left:90px">
            <img style="height:18px;" :src="require('../assets/images/222.png')"/>
            <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">删除后不能恢复，请确定删除？</span>
          </div>
          <div slot="footer" class="dialog-footer" style="margin-top:-30px">
            <el-button style="margin:0 20px 0 0" @click="dialogproject = false" plain>取 消</el-button>
            <el-button type="primary" style="margin:0 90px 0 0" @click="deleteproject()">确 定</el-button>
          </div>
          <div style="height:30px"></div>
        </el-dialog>
         <!-- 培训经历删除确认 -->
        <el-dialog
                title=""
                :visible.sync="dialogtrain"
                style="width:900px;margin-left:21%"
                >
          <div style="display:flex;flex-direction:row;margin-left:90px">
            <img style="height:18px;" :src="require('../assets/images/222.png')"/>
            <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">删除后不能恢复，请确定删除？</span>
          </div>
          <div slot="footer" class="dialog-footer" style="margin-top:-30px">
            <el-button style="margin:0 20px 0 0" @click="dialogtrain = false" plain>取 消</el-button>
            <el-button type="primary" style="margin:0 90px 0 0" @click="deletetrain()">确 定</el-button>
          </div>
          <div style="height:30px"></div>
        </el-dialog>
         <!-- 语言能力删除确认 -->
        <el-dialog
                title=""
                :visible.sync="dialoglanguage"
                style="width:900px;margin-left:21%"
                >
          <div style="display:flex;flex-direction:row;margin-left:90px">
            <img style="height:18px;" :src="require('../assets/images/222.png')"/>
            <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">删除后不能恢复，请确定删除？</span>
          </div>
          <div slot="footer" class="dialog-footer" style="margin-top:-30px">
            <el-button style="margin:0 20px 0 0" @click="dialoglanguage = false" plain>取 消</el-button>
            <el-button type="primary" style="margin:0 90px 0 0" @click="deletelanguage()">确 定</el-button>
          </div>
          <div style="height:30px"></div>
        </el-dialog>
         <!-- 专业技能删除确认 -->
        <el-dialog
                title=""
                :visible.sync="dialogskill"
                style="width:900px;margin-left:21%"
                >
          <div style="display:flex;flex-direction:row;margin-left:90px">
            <img style="height:18px;" :src="require('../assets/images/222.png')"/>
            <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">删除后不能恢复，请确定删除？</span>
          </div>
          <div slot="footer" class="dialog-footer" style="margin-top:-30px">
            <el-button style="margin:0 20px 0 0" @click="dialogskill = false" plain>取 消</el-button>
            <el-button type="primary" style="margin:0 90px 0 0" @click="deleteskill()">确 定</el-button>
          </div>
          <div style="height:30px"></div>
        </el-dialog>
         <!-- 职称等级删除确认 -->
        <el-dialog
                title=""
                :visible.sync="dialogprofess"
                style="width:900px;margin-left:21%"
                >
          <div style="display:flex;flex-direction:row;margin-left:90px">
            <img style="height:18px;" :src="require('../assets/images/222.png')"/>
            <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">删除后不能恢复，请确定删除？</span>
          </div>
          <div slot="footer" class="dialog-footer" style="margin-top:-30px">
            <el-button style="margin:0 20px 0 0" @click="dialogprofess = false" plain>取 消</el-button>
            <el-button type="primary" style="margin:0 90px 0 0" @click="deleteprofession()">确 定</el-button>
          </div>
          <div style="height:30px"></div>
        </el-dialog>
        <!-- 荣誉奖项删除确认 -->
        <el-dialog
                title=""
                :visible.sync="dialogaward"
                style="width:900px;margin-left:21%"
                >
          <div style="display:flex;flex-direction:row;margin-left:90px">
            <img style="height:18px;" :src="require('../assets/images/222.png')"/>
            <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">删除后不能恢复，请确定删除？</span>
          </div>
          <div slot="footer" class="dialog-footer" style="margin-top:-30px">
            <el-button style="margin:0 20px 0 0" @click="dialogaward = false" plain>取 消</el-button>
            <el-button type="primary" style="margin:0 90px 0 0" @click="deleteawards()">确 定</el-button>
          </div>
          <div style="height:30px"></div>
        </el-dialog>
        <!-- 基本信息编辑 -->
        <el-dialog title="基本信息编辑" style="width:1150px;margin-left:15%" :visible.sync="informationouterVisible">
          <el-dialog
            style="width:950px;margin-left:21%"
            :visible.sync="informationinnerVisible"
            append-to-body>
            <div style="display:flex;flex-direction:row;margin-left:120px">
              <img style="height:18px;" :src="require('../assets/images/222.png')"/>
              <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
            </div>
            <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="informationinnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 80px 0 0" type="primary" @click="informationouterVisible = false,informationinnerVisible = false">确定</el-button>
            </div>
          </el-dialog>
          <div>
            <el-form :model="formInformation" class="demo-form-inline" label-width="110px" :rules="personalrules"  ref="formInformation">
              <el-form-item label="姓名" prop='name'>
                <el-input style="width:400px;height:36px;margin-right:50px" v-model='formInformation.name'  placeholder="请输入姓名"></el-input>
              </el-form-item>
              <el-form-item label="性别" style="margin:0 275px 0 0" prop='sex'>
                <el-radio-group v-model='formInformation.sex'>
                  <el-radio-button  label="0" >男性</el-radio-button>
                  <el-radio-button  label="1" >女性</el-radio-button>
                </el-radio-group>
              </el-form-item><br>
              <el-form-item label="是否应届" style="margin:0 275px 0 0" prop='graduate'>
                <el-radio-group v-model='formInformation.graduate'>
                  <el-radio-button  label="1" >是</el-radio-button>
                  <el-radio-button style="margin-right:25px"  label="2" >否</el-radio-button>
                </el-radio-group>
              </el-form-item><br>
              <el-form-item label="起始工作时间" prop='workAge'>
                <el-date-picker
                  v-model='formInformation.workAge'
                  type="year"
                  :picker-options="pickerOptions"
                  style="width:400px;height:36px;margin-right:50px"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="海外工作年限">
              <el-select style="width:400px;height:36px;margin-right:50px" v-model="formInformation.overseasAge" placeholder>
                  <el-option label='1年' value="1"></el-option>
                  <el-option label='2年' value="2"></el-option>
                  <el-option label='3年' value="3"></el-option>
                  <el-option label='4年' value="4"></el-option>
                  <el-option label='5年' value="5"></el-option>
                  <el-option label='6年' value="6"></el-option>
                  <el-option label='7年' value="7"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="所在城市" prop='city'>
                  <el-cascader
                    style="width:400px;height:36px;margin-right:50px"
                    v-model="formInformation.city"
                    :options="options"
                    :props="props"
                    >
                  </el-cascader>
              </el-form-item>
              <el-form-item label="最高学历" prop='educationLevel'>
                <el-select style="width:400px;height:36px;margin-right:50px" v-model='formInformation.educationLevel' placeholder>
                  <el-option label='初中及以下' value="0"></el-option>
                  <el-option label='职中' value="1"></el-option>
                  <el-option label='高中' value="2"></el-option>
                  <el-option label='大专' value="3"></el-option>
                  <el-option label='本科' value="4"></el-option>
                  <el-option label='硕士' value="5"></el-option>
                  <el-option label='博士' value="6"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="生日" prop='birthday'>
                <el-date-picker
                  v-model='formInformation.birthday'
                  type="date"
                  :picker-options="pickerOptions"
                  style="width:400px;height:36px;margin-right:50px"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="邮箱" prop='email'>
                <el-input style="width:400px;height:36px;margin-right:50px" v-model='formInformation.email' placeholder></el-input>
              </el-form-item>
              <el-form-item label="手机" prop='phone'>
                <el-input  style="width:400px;height:36px;margin-right:50px" v-model='formInformation.phone' placeholder></el-input>
              </el-form-item>
              <el-form-item label="政治面貌" prop='politicCountenance'>
                <el-select style="width:400px;height:36px;margin-right:50px" v-model="formInformation.politicCountenance" placeholder="请选择政治面貌">
                  <el-option label='群众' value="0"></el-option>
                  <el-option label='团员' value="1"></el-option>
                  <el-option label='民主党派' value="2"></el-option>
                  <el-option label='预备党员' value="3"></el-option>
                  <el-option label='中共党员' value="4"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
           <div slot="footer" class="dialog-footer">
            <el-button style="margin:0 20px 0 0" @click="informationinnerVisible = true" plain>取 消</el-button>
            <el-button style="margin:0 35px 0 0" type="primary" @click="informationkeep('formInformation')">保存</el-button>
          </div>
        </el-dialog>
        <!-- 求职意向编辑 -->
        <el-dialog title="求职意向编辑" style="width:1150px;margin-left:15%" :visible.sync="jobintensionouterVisible">
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="jobintensioninnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:120px">
              <img style="height:18px;" :src="require('../assets/images/222.png')"/>
              <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
                <el-button style="margin:0 20px 0 0" @click="jobintensioninnerVisible = false" plain>取 消</el-button>
                <el-button style="margin:0 80px 0 0" type="primary" @click="jobintensionouterVisible = false,jobintensioninnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
          <div>
            <el-form :model="formJobintension" class="demo-form-inline" label-width="100px" :rules="jobintensionrules"  ref="formJobintension">
              <el-form-item label="职位类型" prop='postType'>
                  <el-cascader style="width:400px;height:36px;margin-right:50px"
                      :options="positionCatalogList"
                      :props="propsTwo"
                      :show-all-levels="false"
                      v-model="formJobintension.postType[0].code"
                      >
                  </el-cascader>
              </el-form-item>
              <el-form-item label="工作城市" prop='city'>
                  <el-cascader style="width:400px;height:36px;margin-right:50px"
                      :options="options"
                      :props="props"
                      v-model="formJobintension.city"
                      >
                  </el-cascader>
              </el-form-item>
              <el-form-item label="企业行业" prop='trad'>
                  <el-cascader style="width:400px;height:36px;margin-right:50px"
                      :options="industryList"
                      :props="propsOne"
                      :show-all-levels="false"
                      v-model="formJobintension.trad[0].code"
                      >
                  </el-cascader>
              </el-form-item>
              <el-form-item label="薪资范围" prop='scope'>
                  <el-select style="width:400px;height:36px;margin-right:50px" v-model="formJobintension.scope" placeholder="">
                  <el-option v-for="(list,index) in monthPayList" :key="index" :label="list.tag" :value="list.code"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="求职状态" prop='status'>
                  <el-select id="name" style="width:400px;height:36px;margin-right:50px" v-model="formJobintension.status" placeholder="" @change="Jobstate()">
                  <el-option v-for="(list,index) in jobSearchList" :key="index" :label="list.tag" :value="list.code"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="工作类型" prop='jobType'>
                  <el-select style="width:400px;height:36px;margin-right:50px" v-model="formJobintension.jobType" placeholder="">
                  <el-option v-for="(list,index) in workStateList" :key="index" :label="list.tag" :value="list.code"></el-option>
                  </el-select>
              </el-form-item>
              <!-- :disabled="this.formJobintension.status === '离职-延时到岗'?false:true" -->
              <el-form-item label="到岗时间" class="block" prop='reportTime'>
                  <el-date-picker
                  :disabled="this.formJobintension.status === 1||this.formJobintension.status === '离职-延时到岗'?false:true"
                  :picker-options="pickerOptionsOne"
                  v-model='formJobintension.reportTime'
                  style="width:400px;height:36px;margin-right:50px"
                  type="date"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
              <el-form-item>
                  <el-button style="margin:0 20px 0 175px" @click="jobintensioninnerVisible = true" plain>取 消</el-button>
                  <el-button style="margin:0 25px 0 0" type="primary" @click="jobintensionkeep('formJobintension')">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-dialog>
        <!-- 工作经历编辑 -->
        <el-dialog title="工作经历编辑" style="width:1150px;margin-left:15%"  :visible.sync="workouterVisible">
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="workinnerVisible"
            append-to-body>
            <div style="display:flex;flex-direction:row;margin-left:120px">
              <img style="height:18px;" :src="require('../assets/images/222.png')"/>
              <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
                <el-button style="margin:0 20px 0 0" @click="workinnerVisible = false" plain>取 消</el-button>
                <el-button style="margin:0 80px 0 0" type="primary" @click="workouterVisible = false,workinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
          <div>
            <el-form :model="formWork" class="demo-form-inline" label-width="100px" :rules="workrules"  ref="formWork">
              <el-form-item label="公司名称" prop='companyName'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formWork.companyName" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="职位名称" prop='postName'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formWork.postName" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="行业" prop='trade'>
                <el-cascader style="width:400px;height:36px;margin-right:50px"
                      :options="industryList"
                      :props="propsOne"
                      :show-all-levels="false"
                      v-model="formWork.trade"
                      >
                  </el-cascader>
              </el-form-item>
               <el-form-item label="工作时间" class="block" prop='workTime'>
                  <el-date-picker
                  style="width:400px;height:36px;margin-right:50px"
                  v-model="formWork.workTime"
                  type="daterange"
                  unlink-panels
                  :picker-options="pickerOptions"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                  </el-date-picker>
              </el-form-item>
              <el-form-item label="工作描述" prop='jobDescription'>
                  <el-input type="textarea" v-model="formWork.jobDescription"  style="width:400px;margin-right:50px" ></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button style="margin:0 20px 0 175px" @click="workinnerVisible = true" plain>取 消</el-button>
                  <el-button style="margin:0 20px 0 0" type="primary" @click="workkeep('formWork')">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-dialog>
        <!-- 教育经历编辑 -->
        <el-dialog title="教育经历编辑" style="width:1150px;margin-left:15%" :visible.sync="educationouterVisible">
          <div>
            <el-form :model="formEducation" class="demo-form-inline" label-width="100px" :rules="edurules" ref="formEducation">
              <el-form-item label="学校名称" prop='educationName'>
                  <el-input v-model="formEducation.educationName" style="width:400px;height:36px;margin-right:50px" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="在校时间" class="block" prop='educationTime'>
                  <el-date-picker
                  style="width:400px;height:36px;margin-right:50px"
                  v-model="formEducation.educationTime"
                  type="daterange"
                  :picker-options="pickerOptions"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                  </el-date-picker>
              </el-form-item>
               <el-form-item label="专业" prop='educationSpecialty'>
                <el-input style="width:400px;height:36px;margin-right:50px" placeholder="" v-model="formEducation.educationSpecialty"></el-input>
              </el-form-item>
              <el-form-item label="学历" prop='educationDegree'>
                  <el-select style="width:400px;height:36px;margin-right:50px" placeholder="" v-model="formEducation.educationDegree">
                  <el-option label="初中及以下" value="0"></el-option>
                  <el-option label="职中" value="1"></el-option>
                  <el-option label="高中" value="2"></el-option>
                  <el-option label="大专" value="3"></el-option>
                  <el-option label="本科" value="4"></el-option>
                  <el-option label="硕士" value="5"></el-option>
                  <el-option label="博士" value="6"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item >
                  <el-button style="margin:0 20px 0 175px" @click="educationinnerVisible = true" plain>取 消</el-button>
                  <el-button style="margin:0 20px 0 0" type="primary" @click="educationkeep('formEducation')">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="educationinnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:120px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="educationinnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 80px 0 0" type="primary" @click="educationouterVisible = false,educationinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
        </el-dialog>
        <!-- 项目经历编辑 -->
        <el-dialog title="项目经历编辑" style="width:1150px;margin-left:15%" :visible.sync="progectouterVisible">
          <div>
            <el-form :model="formProject" class="demo-form-inline" label-width="100px" :rules="progectrules" ref="formProject">
              <el-form-item label="项目名称" prop='itemName'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formProject.itemName" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="公司名称" prop='companyName'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formProject.companyName" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="项目时间" class="block" prop='schoolTime'>
                  <el-date-picker
                  style="width:400px;height:36px;margin-right:50px"
                  v-model="formProject.schoolTime"
                  type="daterange"
                  :picker-options="pickerOptions"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                  </el-date-picker>
              </el-form-item>
              <el-form-item label="个人职责" prop='duty'>
                  <el-input type="textarea" v-model="formProject.duty" style="width:400px;margin-right:50px" ></el-input>
              </el-form-item>
              <el-form-item label="项目介绍" prop='project'>
                  <el-input type="textarea" v-model="formProject.project" style="width:400px;margin-right:50px" ></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button style="margin:0 20px 0 175px" @click="progectinnerVisible = true" plain>取 消</el-button>
                  <el-button style="margin:0 25px 0 0" type="primary" @click="progectkeep('formProject')">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="progectinnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:120px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="progectinnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 80px 0 0" type="primary" @click="progectouterVisible = false,progectinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
        </el-dialog>
        <!-- 培训经历编辑 -->
        <el-dialog title="培训经历编辑" style="width:1150px;margin-left:15%" :visible.sync="trainingouterVisible">
          <div>
            <el-form :model="formtraining" class="demo-form-inline" label-width="100px" :rules="trainrules" ref="formtraining">
              <el-form-item label="培训课程" prop='trainCourse'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formtraining.trainCourse" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="培训机构" prop='trainCours'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formtraining.trainCours" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="培训时间" class="block" prop='trainTime'>
                  <el-date-picker
                  style="width:400px;height:36px;margin-right:50px"
                  v-model="formtraining.trainTime"
                  type="daterange"
                  :picker-options="pickerOptions"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                  </el-date-picker>
              </el-form-item>
              <el-form-item>
                  <el-button style="margin:0 20px 0 175px" @click="traininginnerVisible = true" plain>取 消</el-button>
                  <el-button style="margin:0 25px 0 0" type="primary" @click="trainingkeep('formtraining')">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="traininginnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:120px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="traininginnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 80px 0 0" type="primary" @click="trainingouterVisible = false,traininginnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
        </el-dialog>
        <!-- 语言能力编辑 -->
        <el-dialog title="语言能力编辑" style="width:1150px;margin-left:15%" :visible.sync="languageouterVisible">
          <div>
            <el-form  :model="formlanguage" class="demo-form-inline" label-width="100px" :rules="languagerules" ref="formlanguage">
              <el-form-item label="语种" prop='languages'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formlanguage.languages" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="听力能力" prop='listenAbility'>
                  <el-select style="width:400px;height:36px;margin-right:50px" v-model="formlanguage.listenAbility" placeholder="">
                  <el-option label="一般" value="0"></el-option>
                  <el-option label="良好" value="1"></el-option>
                  <el-option label="熟练" value="2"></el-option>
                  <el-option label="精通" value="3"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="读写能力" prop='readAbility'>
                <el-select style="width:400px;height:36px;margin-right:50px" v-model="formlanguage.readAbility" placeholder="">
                  <el-option label="一般" value="0"></el-option>
                  <el-option label="良好" value="1"></el-option>
                  <el-option label="熟练" value="2"></el-option>
                  <el-option label="精通" value="3"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item>
                  <el-button style="margin:0 20px 0 175px" @click="languageinnerVisible = true" plain>取 消</el-button>
                  <el-button style="margin:0 20px 0 0" type="primary" @click="languagekeep('formlanguage')">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="languageinnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:120px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="languageinnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 80px 0 0" type="primary"  @click="languageouterVisible = false,languageinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
        </el-dialog>
        <!-- 职称等级 -->
         <el-dialog title="职称等级编辑" style="width:1150px;margin-left:15%" :visible.sync="professionouterVisible">
          <div>
            <el-form :model="formProfession" class="demo-form-inline" label-width="120px" :rules="professionalrules" ref="formProfession">
              <el-form-item label="职称等级名称" prop='qual'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formProfession.qual" placeholder=""></el-input>
              </el-form-item>
              <el-form-item>
                   <el-button style="margin:0 20px 0 175px" @click="professioninnerVisible = true" plain>取 消</el-button>
                   <el-button style="margin:0 25px 0 0" type="primary" @click="professionkeep('formProfession')">保存</el-button>
              </el-form-item>
            </el-form>   
          </div>
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="professioninnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:120px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="professioninnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 80px 0 0" type="primary" @click="professionouterVisible = false,professioninnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
        </el-dialog>
        <!-- 专业技能 -->
         <el-dialog title="专业技能编辑" style="width:1150px;margin-left:15%" :visible.sync="personalskillouterVisible">
          <div>
            <el-form :model="formPersonalskill" class="demo-form-inline" label-width="100px" :rules="skillrules" ref="formPersonalskill">
              <el-form-item label="技能名称" prop='technicalName'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formPersonalskill.technicalName" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="掌握程度" prop='level'>
                  <el-select style="width:400px;height:36px;margin-right:50px" v-model="formPersonalskill.level" placeholder="">
                  <el-option label="一般" value="0"></el-option>
                  <el-option label="良好" value="1"></el-option>
                  <el-option label="熟练" value="2"></el-option>
                  <el-option label="精通" value="3"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item>
                  <el-button style="margin:0 20px 0 175px" @click="personalskillinnerVisible = true" plain>取 消</el-button>
                  <el-button style="margin:0 20px 0 0" type="primary" @click="skillkeep('formPersonalskill')">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="personalskillinnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:120px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="personalskillinnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 80px 0 0" type="primary" @click="personalskillouterVisible = false,personalskillinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
        </el-dialog>
         <!-- 荣誉奖项 -->
         <el-dialog title="荣誉奖项编辑" style="width:1150px;margin-left:15%" :visible.sync="awardsouterVisible">
          <div>
            <el-form :model="formAwards" class="demo-form-inline" label-width="100px" :rules="awardsrules" ref="formAwards">
              <el-form-item label="奖项名称" prop='prizeAward'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formAwards.prizeAward" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="获奖时间" prop='prizeTime'>
                <el-date-picker
                  style="width:400px;height:36px;margin-right:50px"
                  v-model="formAwards.prizeTime"
                  type="month"
                  :picker-options="pickerOptions"
                  placeholder="选择月">
                </el-date-picker>
              </el-form-item>
              <el-form-item>
                   <el-button style="margin:0 20px 0 175px" @click="awardsinnerVisible = true" plain>取 消</el-button>
                   <el-button style="margin:0 25px 0 0" type="primary" @click="awardskeep('formAwards')">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="awardsinnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:120px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="awardsinnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 80px 0 0" type="primary" @click="awardsouterVisible = false,awardsinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
        </el-dialog>
         <!-- 自我评价 -->
         <el-dialog title="自我评价编辑" style="width:1150px;margin-left:15%" :visible.sync="selfappraisalouterVisible">
          <div>
            <el-form :model="formSelfappraisal" class="demo-form-inline" label-width="100px" :rules="selfappraisalrules" ref="formSelfappraisal">
              <el-form-item label="自我评价" prop='personalDescription'>
                  <el-input type="textarea" v-model="formSelfappraisal.personalDescription" style="width:400px;margin-right:50px" placeholder="资料完善程度高，被选中的几率越大呦" ></el-input>
              </el-form-item>
               <el-form-item>
                   <el-button style="margin:0 20px 0 175px" @click="selfappraisalinnerVisible = true" plain>取 消</el-button>
                   <el-button style="margin:0 25px 0 0" type="primary" @click="selfappraisalkeep('formSelfappraisal')">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="selfappraisalinnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:120px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="selfappraisalinnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 80px 0 0" type="primary" @click="selfappraisalouterVisible = false,selfappraisalinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
        </el-dialog>
        <!-- 添加个人信息 -->
        <div class="personalinformation" v-if="personalinformation">
          <div class="personalinformation-img">
            <el-upload
              style='width:40px;height:40px;margin:32px 0 0 42px'
              class="avatar-upload"
              
              :show-file-list="false"
              >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-upload-icon"></i>
            </el-upload>
          </div>
          <div class="img-add" @click="ispersonalinformation"><img :src="require('../assets/images/add.png')"/><span
                  class="add">添加个人信息</span></div>
        </div>
        <div class="showdemo" v-if="showDemo">
          <Basic-Info :fromData="this.resumesId" @BasicEmit='BasicEmit(arguments)' />
        </div>
        <ul v-if="showPersonalinformation" style="margin:0 30px 10px 0" @mouseover="over(11)" @mouseleave="leave(11)">
          <li class='li-a'>
            <div style="width:90%;margin:0 0 0 -30px">
              <Personalinformation-From  :fromData="resumeIdList" @editsinformation='editsinformation(arguments)'/>
            </div>
            <div style="margin:40px 0 0 30px;height:12px;font-size:15px">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                      @click="showjpersonalList()">编辑</span>
              </div>
          </li>
        </ul>
        <!-- <div ref="personalinformation" @mouseover="over(11)" v-if="showPersonalinformation" @mouseleave="leave(11)">
          <div>
            <Personalinformation-From  :fromData="resumeIdList" @editsinformation='editsinformation(arguments)'/>
            <span class="actions-span">
                <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                    style="margin-right:3px" @click="showjobintensionList()">编辑</span>
            </span>
          </div>
        </div> -->
        <div class="content-line"></div>
        <!-- 求职意向 -->
        <div ref="jobintension" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/qiuzhi.png')"/><span>求职意向</span></div>
          <div class="main-content-second" v-if="joint"  @click="jobintension"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showjobintension" style="margin:-15px 0 10px 5px" @mouseover="over(10)" @mouseleave="leave(10)">
          <li class="ul-a">
              <span class="actions-span" style='margin:8px 20px 0 0'>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                      style="margin-right:3px" @click="showjobintensionList()">编辑</span>
              </span>
            <div style="width:879px">
              <from :fromData="targeIdList"></from>
              <br><br>
            </div>
          </li>
        </ul>
        <div @mouseover="over(10)" @mouseleave="leave(10)" class="showJob" v-if="showJob">
          <job-intension @jobintensionEmit='jobintensionEmit(arguments)' :JobintenDegree='this.resumesId'/>
        </div>
        <div class="content-line"></div>
        <!-- 教育经历 -->
        <div ref="educational" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/edu.png')"/><span>教育经历</span></div>
          <div class="main-content-second" @click="education"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showeducational" style="margin:-5px 0 10px 5px" @mouseover="over(9)" @mouseleave="leave(9)">
          <li v-for="(list,index) in listeducational" :key="index" class="ul-a">
              <span class="actions-span" style='margin:10px 20px 0 0'>
                  <img class="img-first" style="margin-right:9px;height:12px"
                       :src="require('../assets/images/shan.png')"/><span @click="showedudialog(list)" style="margin-right:20px">删除</span>
                  <img class="img-second" style="margin-right:9px;height:12px"
                       :src="require('../assets/images/ziwo.png')"/><span style="margin-right:3px" @click="showeducationalList(list,index)">编辑</span>
              </span>
            <educationexperience-From :fromData="list" ></educationexperience-From>
            <br>
          </li>
        </ul>
        <div class="showeducation" v-if="showeducation" >
          <Education-Experience @sendiptVal='sendiptVal(arguments)' :educationDegree='this.resumesId' />
        </div>
        <div class="content-line"></div>
        <!-- 工作经历 -->
        <div ref="work" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/work.png')"/><span>工作经历</span></div>
          <div class="main-content-second" @click="work"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showworkperience" style="margin:-5px 0 10px 5px" @mouseover="over(8)" @mouseleave="leave(8)">
          <li v-for="(list,index) in listwork" :key="index" class="ul-a">
              <span class="actions-span" style='margin:8px 20px 0 0'>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/shan.png')"/><span
                      @click="showworkdialog(list)" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                      style="margin-right:3px" @click="showworkperienceList(list)">编辑</span>
              </span>
            <work-from :from-data="list" ></work-from>
            <br>
          </li>
        </ul>
        <div v-if="showwork">
          <work-experience @workEmit='workEmit(arguments)' :workDegree='this.resumesId'/>
        </div>
        <div class="content-line"></div>
        <!-- 项目经历 -->
        <div ref="progect" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/language.png')"/><span>项目经历</span></div>
          <div class="main-content-second" @click="project"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showprogectperience" style="margin:-5px 0 10px 5px" @mouseover="over(7)" @mouseleave="leave(7)">
          <li v-for="(list,index) in listprogectperience" :key="index" class="ul-a">
              <span class="actions-span" style='margin:8px 20px 0 0'>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/shan.png')"/><span
                      @click="showprojectdialog(list)" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                      style="margin-right:3px" @click="showprogectperienceList(list)">编辑</span>
              </span>
            <progect-from :from-data="list" ></progect-from>
            <br>
          </li>
        </ul>
        <div v-if="showproject">
          <project-experience @progectEmit='progectEmit(arguments)' :projectDegree='this.resumesId'  />
        </div>
        <div class="content-line"></div>
        <!-- 培训经历 -->
        <div ref="training" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/train.png')"/><span>培训经历</span></div>
          <div class="main-content-second" @click="training"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showtrain" style="margin:-5px 0 10px 5px;" @mouseover="over(6)" @mouseleave="leave(6)">
          <li v-for="(list,index) in listtrain" :key="index" class="ul-a">
              <span class="actions-span" style='margin:20px 20px 0 0'>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/shan.png')"/><span
                      @click="showtraindialog(list)" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                      style="margin-right:3px" @click="showtrainList(list)">编辑</span>
              </span><br>
            <training-from :from-data="list" ></training-from>
            <br>
          </li>
        </ul>
        <div v-if="showtraining">
          <training-experience @trainEmit='trainEmit(arguments)' :trainDegree='this.resumesId'/>
        </div>
        <div class="content-line"></div>
        <!-- 语言能力 -->
        <div ref="language" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/language.png')"/><span>语言能力</span></div>
          <div class="main-content-second" @click="language"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showlanguages" style="margin:-5px 0 10px 5px" @mouseover="over(5)" @mouseleave="leave(5)">
          <li v-for="(list,index) in listlanguages" :key="index" class="ul-a">
              <span class="actions-span" style='margin:20px 20px 0 0'>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/shan.png')"/><span
                      @click="showlanguagedialog(list)" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                      style="margin-right:3px" @click="showlanguagesList(list)">编辑</span>
              </span><br>
            <language-from :from-data="list" ></language-from>
            <br>
          </li>
        </ul>
        <div v-if="showlanguage">
          <language-experience @languageEmit='languageEmit(arguments)' :languageDegree='this.resumesId'/>
        </div>
        <div class="content-line"></div>
        <!-- 职称等级 -->
        <div ref="professional" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/zhicheng.png')"/><span>职称等级</span></div>
          <div class="main-content-second" @click="professional()"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showprofessionals" style="margin:-5px 0 10px 5px" @mouseover="over(4)" @mouseleave="leave(4)">
          <li v-for="(list,index) in listprofessional" :key="index" class="ul-a">
              <span class="actions-span" style='margin:15px 20px 0 0'>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/shan.png')"/><span
                      @click="showprofessionaldialog(list)" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                    @click="showprofessionalList(list)"  style="margin-right:3px" >编辑</span>
              </span><br>
            <professional-from :from-data="list" ></professional-from>
            <br>
          </li>
        </ul>
        <div v-if="showprofessional">
          <professional-experience @professionalEmit='professionalEmit(arguments)' :professionalDegree='this.resumesId'/>
        </div>
        <div class="content-line"></div>
        <!-- 专业技术 -->
        <div ref="personal_skill" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/zhuanye.png')"/><span>专业技能</span></div>
          <div class="main-content-second" @click="personal_skill()"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showpersonalskills" style="margin:-5px 0 10px 5px" @mouseover="over(3)" @mouseleave="leave(3)">
          <li v-for="(list,index) in listpersonalskill" :key="index" class="ul-a">
              <span class="actions-span" style='margin:20px 20px 0 0'>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/shan.png')"/><span
                      @click="showskilldialog(list)" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                      style="margin-right:3px" @click="editskill(list)">编辑</span>
              </span><br>
            <personalskill-from :from-data="list" ></personalskill-from>
            <br>
          </li>
        </ul>
        <div v-if="showpersonalskill">
          <personal-skill @skillEmit='skillEmit(arguments)' :professionalDegree='this.resumesId'/>
        </div>
        <div class="content-line"></div>
        <div ref="awards" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/rong.png')"/><span>荣誉奖项</span></div>
          <div class="main-content-second" @click="awards"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showaward" style="margin:-5px 0 10px 5px" @mouseover="over(2)" @mouseleave="leave(2)">
          <li v-for="(list,index) in listaward" :key="index" class="ul-a">
              <span class="actions-span" style='margin:20px 20px 0 0'>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/shan.png')"/><span
                      @click="showawardsdialog(list)" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                      style="margin-right:3px" @click="showawardList(list)">编辑</span>
              </span><br>
            <awards-from :from-data="list" ></awards-from>
            <br>
          </li>
        </ul>
        <div v-if="showawards">
          <Aw-Ards @awardsemit='awardsemit(arguments)' :professionalDegree='this.resumesId'/>
        </div>
        <div class="content-line"></div>
        <div ref="self-appraisal" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/ziwo.png')"/><span>自我评价</span></div>
          <!-- <div class="main-content-second" @click="jobintension"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div> -->
        </div>
        <ul v-if="showpersonappraisal" style="margin:-5px 0 10px 5px" @mouseover="over(1)" @mouseleave="leave(1)">
          <li class="ul-a">
              <span class="actions-span" style='margin:17px 20px 0 0'>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                      style="margin-right:3px" @click="showselfappraisalList()">编辑</span>
              </span>
            <selfappraisal-from :from-data="listpersonappraisal" ></selfappraisal-from>
            <br>
          </li>
        </ul>
        <div v-if="showselfappraisal">
          <self-appraisal @selfappraisalemit='selfappraisalemit(arguments)'/>
        </div>
      </div>
      <div class="aside-body">
        <!-- <div class="aside-foot">
          <div class="aside-foot-first">附件简历</div>
          <div class="aside-foot-second" v-if="file"><span>支持格式包括： 支持DOC，DOCX,PDF,JPG,PNG格式<br>文件,大小不超过2M</span></div>
          <div class="aside-foot-third">
            <el-upload
              style='width:220px;margin:0 0 15px 0'
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button style="margin:10px 0 0 60px" type="primary" @click="upload" size="medium">简历上传</el-button>
            </el-upload>
            <div style="height:5px"></div>
          </div>
        </div> -->
        <Affix :offset="60">
          <div class="aside">
            <div class="aside-nav">
              <div class="aside-nav-first">在线简历</div>
              <div class="aside-nav-second"><span>完整度</span><span><el-progress :percentage="this.compPercent" class="progess"
                                                                               style="width:111px;padding:0 0 0 7px;height:9px"></el-progress></span>
              </div>
              <div class="aside-nav-third">最后更新：{{this.updatedTime|formatDateTwo}}</div>
            </div>
            <div class="aside-tabulation">
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('personalinformation')"><img
                      :src="require('../assets/images/ji.png')"/><span :style="active"
                                                                      class="tabulation-language">基本信息</span> </a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('jobintension')" href="#jobintension"><img
                      :src="require('../assets/images/qiuzhi.png')"/> <span :style="activejobintension"
                                                                        class="tabulation-language">求职意向</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('educational')"><img class="tabulation-img"
                      :src="require('../assets/images/edu.png')"/><span :style="activeeducation"
                                                                       class="tabulation-language">教育经历</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('work')"><img :src="require('../assets/images/work.png')"/> <span
                      :style="activework" class="tabulation-language">工作经历</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('progect')"><img :src="require('../assets/images/language.png')"/>
                <span :style="activeproject" class="tabulation-language">项目经历</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('training')"><img
                      :src="require('../assets/images/train.png')"/><span :style="activetraining"
                                                                       class="tabulation-language">培训经历</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('language')"><img
                      :src="require('../assets/images/language.png')"/><span :style="activelanguage"
                                                                       class="tabulation-language">语言能力</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('professional')"><img :src="require('../assets/images/zhicheng.png')"/>
                <span :style="activeOne" class="tabulation-language">职称等级</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('personal_skill')"><img
                      :src="require('../assets/images/zhuanye.png')"/><span :style="activeprofessional"
                                                                       class="tabulation-language">专业技能</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('awards')"><img :src="require('../assets/images/rong.png')"/> <span
                      :style="activeawards" class="tabulation-language">荣誉奖项</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('self-appraisal')"><img
                      :src="require('../assets/images/ziwo.png')"/> <span :style="activeselfAppraisal"
                                                                       class="tabulation-language">自我介绍</span></a></div>
            </div>
          </div>
        </Affix>
      </div>
    </div>
  </Scroll>
</template>

<script>
  // import PersonalinformationFrom from 'components/personalinformation_from.vue'
  import datacenterBus from '../apis/datacenterBus.js';
  import BasicInfo from 'components/personalnformation/BasicInfo.vue';
  import JobIntension from 'components/jobintension/Jobintension.vue';
  import EducationExperience from 'components/education/education.vue';
  import WorkExperience from 'components/work/work.vue';
  import ProjectExperience from 'components/project/project.vue';
  import TrainingExperience from 'components/train/training.vue';
  import LanguageExperience from 'components/language/language.vue';
  import ProfessionalExperience from 'components/professional/professional.vue';
  import PersonalSkill from 'components/skill/personal_skill.vue';
  import AwArds from 'components/awards/awards.vue';
  import SelfAppraisal from 'components/appraisal/self-appraisal.vue';

  import PersonalinformationFrom from 'components/personalnformation/personalinformation_from.vue'
  import From from 'components/jobintension/jobintension_from.vue'
  import EducationexperienceFrom from 'components/education/education_from.vue'
  import WorkFrom from 'components/work/work_from.vue'
  import ProgectFrom from 'components/project/progect_from.vue'
  import TrainingFrom from 'components/train/training_from.vue'
  import LanguageFrom from 'components/language/language_from.vue'
  import ProfessionalFrom from 'components/professional/professional_from.vue'
  import PersonalskillFrom from 'components/skill/personal_skill_from.vue'
  import AwardsFrom from 'components/awards/awards_from.vue'
  import SelfappraisalFrom from 'components/appraisal/selfappraisal_from.vue'
  import Affix from 'components/affix.vue'



  import {
  jobintensionkeep,
  informationkeep,
  selfappraisalkeep,
  awardskeep,
  skillkeep,
  languagekeep,
  professionkeep,
  trainingkeep,
  workkeeped,
  educationkeep,
  resumeId,
  brief,
  deleteskill,
  deleteprofession,
  deleteawards,
  deletework,
  deletedu,
  deletetrain,
  deletelanguage,
  deleteproject,
  city,
  industry,
  allpositionCatalog,
  option,
  progectkeep
} from "apis/account";
  export default {
    name: 'Resumes',
    components: {
      // PersonalinformationFrom,
      BasicInfo,
      JobIntension,
      EducationExperience,
      WorkExperience,
      ProjectExperience,
      TrainingExperience,
      LanguageExperience,
      ProfessionalExperience,
      PersonalSkill,
      AwArds,
      SelfAppraisal,
      PersonalinformationFrom,
      From,
      EducationexperienceFrom,
      WorkFrom,
      ProfessionalFrom,
      ProgectFrom,
      TrainingFrom,
      LanguageFrom,
      PersonalskillFrom,
      AwardsFrom,
      SelfappraisalFrom,
      Affix
    },
    data() {
      return {
        monthPayList:[],
        isshowJob:false,
        joint:true,
        updatedTime:'',
        monthPayList:[],
        workStateList:[],
        jobSearchList:[],
        industryList:[],
        positionCatalogList:[],
        options:[],
        propsOne:{
            value: 'code',
            label:'tag',
            children: 'children',
            emitPath:false
        },
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        pickerOptionsOne: {
          disabledDate(time) {
            return time.getTime() < Date.now();
          }
        },
        propsTwo:{
            value: 'code',
            label:'tag',
            children: 'children',
            emitPath:false
        },
        props:{
            value: 'code',
            label:'tag',
            children: 'children'

        },
        targeIdList:'',
        resumesId:'',
        awardsId:'',
        languageId:'',
        trainId:'',
        progectId:'',
        qualId:'',
        avatarUrl:'',
        workId:'',
        educationId:'',
        resumeIdList:'',
        targetList:'',
        dialogedu: false,
        dialogwork:false,
        dialogproject:false,
        dialogtrain:false,
        dialoglanguage:false,
        dialogskill:false,
        dialogaward:false,
        dialogprofess:false,
        personalinformation: false,
        showPersonalinformation: true,
        showDemo: false,
        showJob: false,
        showadd: true,
        showeducation: '',
        showwork: false,
        showproject: false,
        showtraining: false,
        showlanguage: false,
        showprofessional: false,
        showpersonalskill: false,
        showawards: false,
        showselfappraisal: false,

        showjobintension: false,
        showeducational: true,
        showworkperience: true,
        showprogectperience: true,
        showtrain: true,
        showlanguages: true,
        showprofessionals:true,
        showpersonalskills: true,
        showaward: true,
        showpersonappraisal: true,
        file:true,
        languageouterVisible: false,
        languageinnerVisible: false,
        professionouterVisible:false,
        professioninnerVisible:false,
        educationouterVisible: false,
        educationinnerVisible: false,
        informationouterVisible: false,
        informationinnerVisible: false, 
        jobintensionouterVisible:false,
        jobintensioninnerVisible:false,
        workouterVisible:false,
        workinnerVisible:false,
        progectouterVisible:false,
        progectinnerVisible:false,
        traininginnerVisible:false,
        trainingouterVisible:false,
        personalskillouterVisible:false,
        personalskillinnerVisible:false,
        awardsouterVisible:false,
        awardsinnerVisible:false,
        selfappraisalinnerVisible:false,
        selfappraisalouterVisible:false,
        listjobintension:[],
        listeducational: [],
        listwork: [],
        listprogectperience: [],
        listtrain: [],
        listlanguages: [],
        listprofessional:[],
        listpersonalskill: [],
        listaward: [],
        listpersonappraisal: '',
        compPercent:'',
        formEducation: {
          educationDegree:'',
          educationName:'',
          educationTime:[],
          educationSpecialty:''
        },
        formInformation: {
          name:'',
          state:'',
          sex:'',
          workAge:'',
          city:[],
          educationLevel:'',
          birthday:'',
          email:'',
          phone:'',
          politicCountenance:'',
          dutyTime:'',
          overseasAge:'',
          graduate:''
        },
        formJobintension: {
          postType: [{
             code:''
           }],
          trad: [{
             code:''
           }],
          city:[],
          scope:'',
          status:'',
          jobType:'',
          reportTime:'', 
        },
        formWork: {
          jobDescription: '',
          companyName: '',
          postName: '',
          branch: '',
          trade:'',
          workTime:[]
        },
        formProject: {
          itemName: '',
          companyName: '',
          schoolTime: [],
          duty: '',
          project: '',
        },
        formtraining: {
          trainCourse:'',
          trainTime:[],
          trainCours:'',
        },
        formlanguage: {
          languages: '',
          listenAbility: '',
          readAbility:''
        },
        formProfession: {
          qual:''
        },
        formPersonalskill: {
          technicalName: '',
          level: ''
        },
        formAwards: {
           prizeAward: "",
           prizeTime: ""
        },
        formSelfappraisal: {
          personalDescription:''
        },
        activejobintension: '',
        active: '',
        activeeducation: '',
        activework: '',
        activeproject: '',
        activetraining: '',
        activelanguage: '',
        activeprofessional: '',
        activeawards: '',
        activeselfAppraisal: '',
        activeOne: '',
        edurules: {
          educationName: [
            { required: true, message: "请输入学校名称", trigger: "blur" }
            // { min: 0, max: 24, message: '长度在 0 到 24 个字符', trigger: 'blur' },
            // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
          educationTime: [
            { required: true, message: "请选择在校时间", trigger: "blur" }
          ],
          educationSpecialty: [
            {
              required: true,
              message: "请填写专业",
              trigger: "change"
            },
            { min: 0, max: 36, message: "长度在 0 到 36 个字符", trigger: "blur" }
          ],
          educationDegree: [
            { required: true, message: "请选择学历", trigger: "change" }
          ]
        },
        workrules: {
          companyName: [
            { required: true, message: "请输入公司名称", trigger: "blur" }
            // { min: 0, max: 24, message: '长度在 0 到 24 个字符', trigger: 'blur' },
            // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
          postName: [
            {required: true, message: "请输入职位名称", trigger: "blur" },
            { min: 0, max: 50, message: '长度在 0 到 50 个字符', trigger: 'blur' },
          ],
          trade: [
          { required: true, message: "请输入行业名称", trigger: "blur" }
          ],
          workTime: [
            { required: true, message: "请选择在职时间", trigger: "blur" }
          ],
          monthPay: [
          { min: 0, max: 7, message: '长度在 0 到 7 个字符', trigger: 'blur' },],
          jobDescription: [
            { min: 0, max: 800, message: '长度在 0 到 800 个字符', trigger: 'blur' },
            { required: true, message: "请填写工作描述", trigger: "change" }
          ]
        },
        progectrules: {
          itemName: [
            { required: true, message: "请输入项目名称", trigger: "blur" },
            { min: 0, max: 50, message: "长度在 0 到 50 个字符", trigger: "blur" }
            // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
          companyName: [
            { min: 0, max: 50, message: "长度在 0 到 50 个字符", trigger: "blur" }
          ],
          schoolTime: [
            { required: true, message: "请选择项目时间", trigger: "blur" }
          ],
          record: [{ required: true, message: "请选择学历", trigger: "blur" }],
          duty: [
            { required: true, message: "请填写个人职责", trigger: "change" },
            {
              min: 0,
              max: 800,
              message: "长度在 0 到 800 个字符",
              trigger: "blur"
            }
          ],
          project: [
            {
              min: 0,
              max: 800,
              message: "长度在 0 到 800 个字符",
              trigger: "blur"
            },
            { required: true, message: "请填写项目介绍", trigger: "change" }
          ]
        },
        trainrules: {
          trainCourse: [
            { required: true, message: "请输入培训课程", trigger: "blur" },
            { min: 0, max: 50, message: "长度在 0 到 50 个字符", trigger: "blur" }
            // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
          trainCours: [
            { required: true, message: "请输入培训机构", trigger: "blur" },
            { min: 0, max: 50, message: "长度在 0 到 50 个字符", trigger: "blur" }
          ],
          trainTime: []
        },
        languagerules: {
          languages: [
            { required: true, message: "请输入语种", trigger: "blur" },
            { min: 0, max: 30, message: "长度在 0 到 30 个字符", trigger: "blur" }
            // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
          listenAbility: [
            { required: true, message: "请选择听力能力", trigger: "blur" },
          ],
          readAbility: [
            { required: true, message: "请选择读写能力", trigger: "blur" }
          ],
        },
        professionalrules:{
          qual: [
            { required: true, message: "请输入语种", trigger: "blur" },
            { min: 0, max: 30, message: "长度在 0 到 30 个字符", trigger: "blur" }
            // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
        },
        skillrules: {
          technicalName: [
            { required: true, message: "请输入技能名称", trigger: "blur" },
            { min: 0, max: 50, message: "长度在 0 到 50 个字符", trigger: "blur" }
            // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
          level: [
            { required: true, message: "请选择掌握程度", trigger: "blur" },
          ],
        },
        awardsrules: {
          prizeAward: [
            { required: true, message: "请输入奖项名称", trigger: "blur" },
            { min: 0, max: 30, message: "长度在 0 到 30 个字符", trigger: "blur" }
            // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
          prizeTime: [
            { required: true, message: "请选择获奖时间", trigger: "blur" },
          ],
        },
        selfappraisalrules: {
          personalDescription: [
            { required: true, message: "请填写个人介绍", trigger: "blur" },
            { min: 0, max: 20000, message: "长度在 0 到 2000 个字符", trigger: "blur" }
          ]
        },
        personalrules: {
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 0, max: 24, message: '长度在 0 到 24 个字符', trigger: 'blur' },
            { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
          city: [
            {required: true,message: '请选择城市', trigger: 'blur' },
          ],
          sex: [
            {required: true, message: '请选择性别', trigger: 'blur' }
          ],
          graduate:[
            {required: true,  message: '请选择是否应届', trigger: 'change' }
          ],
          birthday: [
            {required: true, message: '请选择日期', trigger: 'change' }
          ],
          educationLevel: [
            {required: true, message: '请选择学历', trigger: 'change' }
          ],
          workAge: [
            { required: true,message: '请选择工作年限', trigger: 'change' }
          ],
          politicCountenance: [
            {required: true, message: '请选择政治面貌', trigger: 'change' }
          ],
          phone: [
            {required: true, message: '请填写手机号', trigger: 'change' },
            { pattern:/^[1][3578][0-9]{9}$/,message: '请输入正确的手机号', trigger: ['change','blur'] },
          ],
          email: [
            {required: true, message: '请填写邮箱', trigger: 'change' },
            { pattern:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,message: '请输入正确的邮箱', trigger: ['change','blur'] },
          ],
        },
        jobintensionrules: {
          postType: [
            { required: true, message: '请输入职位类型', trigger: 'blur' },
          ],
          status: [
            { required: true, message: '请选择求职状态', trigger: 'change' },
          ],
          reportTime: [
            { required: true, message: '请选择到岗时间', trigger: 'change' },
          ],
          trad: [
            { required: true, message: '请选择企业行业', trigger: 'change' },
          ],
          scope: [
            { required: true, message: '请选择薪资范围', trigger: 'change' }
          ],
          city: [
            { required: true, message: '请选择城市', trigger: 'change' }
          ],
          jobType: [
            { required: true, message: '请选择工作类型', trigger: 'change' }
          ],
        },
      }
    },
  //   watch: {
  //   //使用这个可以监听data中指定数据的变化,然后触发watch中对应的function的处理
  //   'formJobintension.status': function(val) {
  //     if (this.formJobintension.status == '离职-延时到岗') {
  //       this.boole = false
  //     }else{
  //       this.boole = true
  //     }
  //   },
  // },
    methods: {
      //求职意向保存
      jobintensionkeep(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
        switch (this.formJobintension.scope){
          case 0:
            this.salaryMin = 0
            this.salaryMax = 1
            break;
          case 1:
            this.salaryMin = 1
            this.salaryMax = 2
            break;
          case 2:
            this.salaryMin = 2
            this.salaryMax = 4
            break;
          case 3:
            this.salaryMin = 4
            this.salaryMax = 6
            break;
          case 4:
            this.salaryMin = 6
            this.salaryMax = 8
            break; 
          case 5:
            this.salaryMin = 8
            this.salaryMax = 10
            break; 
          case 6:
            this.salaryMin = 10
            this.salaryMax = 15
            break; 
          case 7:
            this.salaryMin = 15
            this.salaryMax = 25
            break; 
          case 8:
            this.salaryMin = 25
            this.salaryMax = 35
            break;  
          case 9:
            this.salaryMin = 35
            this.salaryMax = null
            break;           
        }
        
        if(this.formJobintension.status == '离职-延时到岗') {
            this.formJobintension.status = 1  
            
          }else if(this.formJobintension.status == '离职-随时到岗') {
            this.formJobintension.status = 0
            this.formJobintension.reportTime = ''
          }else if(this.formJobintension.status == '在职-考虑机会') {
            this.formJobintension.status = 2
            this.formJobintension.reportTime = ''
          }else if(this.formJobintension.jobType == '在职-暂不考虑') {
            this.formJobintension.status = 3
            this.formJobintension.reportTime = ''
          }
        if(this.formJobintension.jobType == '全职') {
            this.formJobintension.jobType = 0
          }else if(this.formJobintension.jobType == '兼职') {
            this.formJobintension.jobType = 1
          }
          else if(this.formJobintension.jobType == '实习') {
            this.formJobintension.languages = 2
          }
            var til = new Date(this.formJobintension.reportTime).getTime()
            let params = {
              positionCatalogs:this.formJobintension.postType,arriveTime:til,county:this.formJobintension.city[1],industries:this.formJobintension.trad,jobSearchStatus:this.formJobintension.status,jobType:this.formJobintension.jobType,province:this.formJobintension.city[0],salaryMin:this.salaryMin,salaryMax:this.salaryMax
            }
            jobintensionkeep(this.resumesId,params).then(res => {
              if (res.data.code == 200) {
                this.jobintensionouterVisible = false
                this.brief()
              }
            }).catch(error =>{
              
            });
          } else {
            return false;
          }
      });
      },
      //个人信息
      informationkeep(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
             if(this.formInformation.politicCountenance == '群众') {
                  this.formInformation.politicCountenance = 0
              }else if(this.formInformation.politicCountenance == '团员') {
                  this.formInformation.politicCountenance = 1
              }else if(this.formInformation.politicCountenance == '民主党派') {
                  this.formInformation.politicCountenance = 1
              }else if(this.formInformation.politicCountenance == '预备党员') {
                  this.formInformation.politicCountenance = 3
              }else if(this.formInformation.politicCountenance == '中共党员') {
                  this.formInformation.politicCountenance = 4
              }

              if(this.formInformation.educationLevel == '初中及以下') {
                  this.formInformation.educationLevel = 0
              }else if(this.formInformation.educationLevel == '职中') {
                  this.formInformation.educationLevel = 1
              }else if(this.formInformation.politeducationLevelicCountenance == '高中') {
                  this.formInformation.educationLevel = 2
              }else if(this.formInformation.educationLevel == '大专') {
                  this.formInformation.educationLevel = 3
              }else if(this.formInformation.educationLevel == '本科') {
                  this.formInformation.educationLevel = 4
              }else if(this.formInformation.educationLevel == '硕士') {
                  this.formInformation.educationLevel = 5
              }else if(this.formInformation.educationLevel == '博士') {
                  this.formInformation.educationLevel = 6
              }
              if(this.formInformation.isGraduate == 0) {
                  this.formInformation.isGraduate = true
              }else if(this.formInformation.isGraduate == 1) {
                  this.formInformation.isGraduate = false
              }
              let til = new Date(this.formInformation.workAge).getTime()
              let till = new Date(this.formInformation.birthday).getTime()
              let params = {
                overseasAge:Number(this.formInformation.overseasAge),
                workYear:til,
                politicalStatus:Number(this.formInformation.politicCountenance),
                birthday:till,
                county:this.formInformation.city[1],
                fullName:this.formInformation.name,
                sex:this.formInformation.sex,
                province:this.formInformation.city[0],
                degree:this.formInformation.educationLevel,
                email:this.formInformation.email,
                phone:this.formInformation.phone,
                isGraduate:this.formInformation.graduate
              }
            informationkeep(this.resumesId,params).then(res => {
              if (res.data.code == 200) {
                this.informationouterVisible = false
                this.resumeId()
              }
            }).catch(error =>{
              
            });
            this.informationouterVisible = false
          } else {
            return false;
          }
      });
      },
      //自我介绍
      selfappraisalkeep(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            let params = {
              content:this.formSelfappraisal.personalDescription
            }
            selfappraisalkeep(this.resumesId,params).then(res => {
              if (res.data.code == 200) {
                this.selfappraisalouterVisible = false
                 this.resumeId()
              }
            }).catch(error =>{
              
            });
          } else {
            return false;
          }
      });
      },
      //荣誉奖项保存
      awardskeep(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            let till = new Date(this.formAwards.prizeTime).getTime();
            let params = {
              award:this.formAwards.prizeAward,acquiredTime:till
            }
            awardskeep(this.resumesId,this.awardsId,params).then(res => {
              if (res.data.code == 200) {
                this.awardsouterVisible = false
                this.resumeId()
              }else{}
            }).catch(error => {});
          } else {
            return false;
          }
      });
      },
      //专业技能
      skillkeep(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            if(this.formPersonalskill.level == '一般') {
              this.formPersonalskill.level = 0
            }else if(this.formPersonalskill.level == '良好') {
              this.formPersonalskill.level = 1
            }
            else if(this.formPersonalskill.level == '熟练') {
              this.formPersonalskill.level = 2
            }
            else if(this.formPersonalskill.level == '精通') {
              this.formPersonalskill.level = 3
            }
            let params = {
              level:this.formPersonalskill.level,skill:this.formPersonalskill.technicalName
            }
             skillkeep(this.resumesId,this.skillId,params).then(res => {
              if (res.data.code == 200) {
               this.personalskillouterVisible = false
               this.resumeId()
              }else{}
            }).catch(error =>{});
          } else {
            return false;
          }
      });
      },
      //语言能力
      languagekeep(formName) {
         this.$refs[formName].validate(valid => {
          if (valid) {
            if(this.formlanguage.listenAbility == '一般') {
              this.formlanguage.listenAbility = 0
            }else if(this.formlanguage.listenAbility == '良好') {
              this.formlanguage.listenAbility = 1
            }
            else if(this.formlanguage.listenAbility == '熟练') {
              this.formlanguage.listenAbility = 2
            }
            else if(this.formlanguage.listenAbility == '精通') {
              this.formlanguage.listenAbility = 3
            }
            let params = {
              language:this.formlanguage.languages,listenAndSpeak:this.formlanguage.listenAbility,readAndWrite:this.formlanguage.readAbility
            }
            languagekeep(this.resumesId,this.languageId,params).then(res => {
              if (res.data.code == 200) {
               this.languageouterVisible = false
               this.resumeId()
              }else{}
            }).catch(error => {});
          } else {
            return false;
          }
      });
      },
       //职称等级
      professionkeep(formName) {
         this.$refs[formName].validate(valid => {
          if (valid) {
            let params = {
              qual:this.formProfession.qual
            }
             professionkeep(this.resumesId,this.qualId,params).then(res => {
              if (res.data.code == 200) {
               this.professionouterVisible = false
               this.resumeId()
              }else{}
            }).catch(error => {});
          } else {
            return false;
          }
      });
      },
      //培训经历保存
      trainingkeep(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            let params = {
              lesson:this.formtraining.trainCourse,institution:this.formtraining.trainCours
            }
             trainingkeep(this.resumesId,this.trainId,params).then(res => {
              if (res.data.code == 200) {
               this.trainingouterVisible = false
               this.resumeId()
              }else{}
            }).catch(error => {});
          } else {
            return false;
          }
      });
      },
      //项目经历保存
      progectkeep(formName) {
         this.$refs[formName].validate(valid => {
          if (valid) {
            let til = new Date(this.formProject.schoolTime[0]).getTime();
            let till = new Date(this.formProject.schoolTime[1]).getTime();
            let ti = this.$moment(till).format("YYYY-MM")
            let end = this.$moment(new Date().getTime()).format("YYYY-MM")
            if(ti === end) {
              var eduTime = null
            }else{
              var eduTime = till
            }
            let params = {
              duty:this.formProject.duty,endTime:eduTime,beginTime:til,company:this.formProject.companyName,description:this.formProject.project,project:this.formProject.itemName
            }
            progectkeep(this.resumesId,this.progectId,params).then(res => {
              if (res.data.code == 200) {
               this.progectouterVisible = false
               this.resumeId()
              }else{}
            }).catch(error => {});
          } else {
            return false;
          }
      });
      },
      //工作保存
      workkeep(formName) {
         this.$refs[formName].validate(valid => {
          if (valid) {
            let til = new Date(this.formWork.workTime[0]).getTime();
            let till = new Date(this.formWork.workTime[1]).getTime();
            let ti = this.$moment(till).format("YYYY-MM")
            let end = this.$moment(new Date().getTime()).format("YYYY-MM")
            if(ti === end) {
              var eduTime = null
            }else{
              var eduTime = till
            }
            let params = {
              beginTime:til,endTime:eduTime,company:this.formWork.companyName,description:this.formWork.jobDescription,position:this.formWork.postName,salaryBeforeTax:'2'
            }
            workkeeped(this.resumesId,this.workId,params).then(res => {
              console.log(this.resumesId)
              if (res.data.code == 200) {
                this.workouterVisible = false
                this.resumeId()
              }else{}
            }).catch(error => {});
          } else {
            return false;
          }
      });
      },
      //教育保存
      educationkeep(formName) {
         this.$refs[formName].validate(valid => {
          if (valid) {
            if(this.formEducation.educationDegree == '高中') {
                this.formEducation.educationDegree = 2
            }else if(this.formEducation.educationDegree == '初中及以下') {
                this.formEducation.educationDegree = 0
            }else if(this.formEducation.educationDegree == '职中') {
                this.formEducation.educationDegree = 1
            }else if(this.formEducation.educationDegree == '大专') {
                this.formEducation.educationDegree = 3
            }else if(this.formEducation.educationDegree == '本科') {
                this.formEducation.educationDegree = 4
            }else if(this.formEducation.educationDegree == '硕士') {
                this.formEducation.educationDegree = 5
            }else if(this.formEducation.educationDegree == '博士') {
                this.formEducation.educationDegree = 6
            }
            let til = new Date(this.formEducation.educationTime[0]).getTime();
            let till = new Date(this.formEducation.educationTime[1]).getTime();
            let ti = this.$moment(till).format("YYYY-MM")
            let end = this.$moment(new Date().getTime()).format("YYYY-MM")
            if(ti === end) {
              var eduTime = null
            }else{
              var eduTime = till
            }
            let params = {
              beginTime:til,endTime:eduTime,degree:this.formEducation.educationDegree,major:this.formEducation.educationSpecialty,school:this.formEducation.educationName,isUnified:false
            }
            educationkeep(this.resumesId,this.educationId,params).then(res => {
              if (res.data.code == 200) {
                this.educationouterVisible = false
                this.resumeId()
              }else{}
            }).catch(error => {});
          } else {
            return false;
          }
      });
      },
      //获取简历详情
      resumeId () {
        resumeId(this.resumesId).then(res => {
          if (res.data.code == 200) {
            this.resumeIdList = res.data.data.base
            this.avatarUrl = res.data.data.avatarUrl
            this.listjobintension = res.data.data.target
            this.listeducational = res.data.data.eduExpr
            this.listwork = res.data.data.workExpr
            this.listprogectperience = res.data.data.projects
            this.listtrain = res.data.data.training
            this.listlanguages = res.data.data.languages
            this.listpersonalskill = res.data.data.skills
            this.listprofessional = res.data.data.qualifications
            this.listaward = res.data.data.awards
            this.listpersonappraisal = res.data.data.evaluation
            this.compPercent = res.data.data.completedPercent
            this.updatedTime = res.data.data.updatedTime

            if(this.listjobintension.jobSearchStatus == 1) {
                this.listjobintension.jobSearchStatus = '离职-延时到岗'  
              }else if(this.listjobintension.jobSearchStatus == 0) {
                this.listjobintension.jobSearchStatus = '离职-随时到岗'
              }else if(this.listjobintension.jobSearchStatus == 2) {
                this.listjobintension.jobSearchStatus = '在职-考虑机会'
              }else if(this.listjobintension.jobSearchStatus == 3) {
                this.listjobintension.jobSearchStatus = '在职-暂不到岗'
              }

            if(this.listjobintension.jobType == 3) {
                this.listjobintension.jobType = '实习'  
              }else if(this.listjobintension.jobType == 0) {
                this.listjobintension.jobType = '全职'
              }else if(this.listjobintension.jobType == 1) {
                this.listjobintension.jobType = '兼职'
              }

            if(this.resumeIdList.politicalStatus == 2) {
                this.resumeIdList.politicalStatus = '民主党派'
            }else if(this.resumeIdList.politicalStatus == 0) {
                this.resumeIdList.politicalStatus = '群众'
            }else if(this.resumeIdList.politicalStatus == 1) {
                this.resumeIdList.politicalStatus = '团员'
            }else if(this.resumeIdList.politicalStatus == 3) {
                this.resumeIdList.politicalStatus = '预备党员'
            }else if(this.resumeIdList.politicalStatus == 4) {
                this.resumeIdList.politicalStatus = '中共党员'
            }  
          }
        });
      },
      //获取简历简讯
      brief () {
        brief().then(res => {
          if (res.data.code == 200) {
            this.resumesId = res.data.data.defaultResumeId
            this.targeIdList = res.data.data
            this.resumeId()
            if(res.data.data.base == null) {
              this.showPersonalinformation = false,
              this.isshowpersonalinformation = true,
              this.personalinformation = true
            }else{
              this.showPersonalinformation = true,
              this.isshowpersonalinformation = false,
              this.personalinformation = false
            }

            if(res.data.data.target == null) {
              this.joint = true,
              this.showjobintension = false
            }else{
              this.joint = false,
              this.showjobintension = true
            }
          }
        }).catch(error => {
          this.personalinformation = true
          this.showjobintension = false
            });
      },
      //上传附件简历
      upload() {
         this.file = false
         this.$http.post(`/resume/${this.resumesId}/file`).then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
      },
      //专业技能删除
      deleteskill() {
         deleteskill(this.resumesId,this.skillId).then(res => {
          if (res.data.code == 204) {
            this.dialogskill = false
            this.resumeId()
          }else{}
        }).catch(error =>{});
      },
      //职称等级删除
      deleteprofession() {
        deleteprofession(this.resumesId,this.qualId).then(res => {
          if (res.data.code == 204) {
            this.dialogprofess = false
            this.resumeId()
          }else{}
        }).catch(error => {});
      },
      //工作经历删除
      deletework() {
        deletework(this.resumesId,this.workId).then(res => {
          if (res.data.code == 204) {
            this.dialogwork = false
            this.resumeId()
          }else{}
        }).catch(error => {});
      },
      //荣誉奖项删除
      deleteawards() {
        deleteawards(this.resumesId,this.awardsId).then(res => {
          if (res.data.code == 204) {
            this.dialogaward = false
            this.resumeId()
          }else{}
        }).catch(error => {});
      },
      //教育经历删除
      deletedu() {
        deletedu(this.resumesId,this.educationId).then(res => {
          if (res.data.code == 204) {
            this.dialogedu = false
            this.resumeId()
          }else{}
        }).catch(error =>{});
      },
      //培训经历删除
      deletetrain() {
        deletetrain(this.resumesId,this.trainId).then(res => {
          if (res.data.code == 204) {
            this.dialogtrain = false
            this.resumeId()
          }else{}
        }).catch(error =>{});
      },
      //语言能力删除
      deletelanguage() {
        deletelanguage(this.resumesId,this.languageId).then(res => {
          if (res.data.code == 204) {
            this.dialoglanguage = false
            this.resumeId()
          }else{}
        }).catch(error => {});
      },
       //项目经历删除
      deleteproject() {
        deleteproject(this.resumesId,this.progectId).then(res => {
          if (res.data.code == 204) {
            this.dialogproject = false
            this.resumeId()
          }else{}
        }).catch(error =>{});
      },
      //自我评价
      selfappraisalemit(c) {
        this.showpersonappraisal = c[1]
        this.showselfappraisal = c[0]
        this.resumeId()
      },
      //荣誉奖项（$emit）
      awardsEmit(c) {
        this.showpersonalskills = c[1]
        this.showpersonalskill = c[0]
        this.resumeId()
      },
      //专业技能（$emit）
      skillEmit(c) {
        this.showpersonalskills = c[1]
        this.showpersonalskill = c[0]
        this.resumeId()
      },
      //职称等级（$emit）
      professionalEmit(c) {
        this.showprofessional = c[0]
        this.showprofessionals = c[1]
        this.resumeId()
      },
      //语言能力（$emit）
      languageEmit(c) {
        this.showlanguage = c[0]
        this.showlanguages = c[1]
        this.resumeId()
      },
      //培训经历（$emit）
      trainEmit(c) {
        this.showtraining = c[0]
        this.showtrain = c[1]
        this.resumeId()
      },
      //项目经历（$emit）
      progectEmit(c) {
        this.showproject = c[0]
        this.showprogectperience = c[1]
        this.resumeId()
      },
      //教育经历（$emit）
      sendiptVal(c) {
        this.showeducation = c[0]
        this.showeducational = c[1]
        this.resumeId()
      },
      //工作经历
      workEmit(c) {
        this.showwork = c[0],
        this.showworkperience = c[1]
        this.resumeId()
      },
      BasicEmit(c) {
        this.showDemo = c[0],
        this.showPersonalinformation = c[1]
        this.resumeId()
      },
      //求职意向（$emit）
      jobintensionEmit(c) {
        this.showJob = c[0],
        this.showjobintension = c[1]
        this.showadd = c[1]
        this.brief()
      },
      //荣誉奖项（$emit）
      awardsemit(c) {
        this.showawards = c[0]
        this.showaward = c[1]
        this.resumeId()
      },
      //自我介绍
      showselfappraisalList() {
        this.selfappraisalouterVisible = true
        this.formSelfappraisal.personalDescription = this.listpersonappraisal.content
      },
      //荣誉奖项
      showawardList(list) {
        this.awardsId = list.id
        this.awardsouterVisible = true
        this.formAwards.prizeAward = list.award
        this.formAwards.prizeTime = this.$moment(new Date(list.acquiredTime).getTime()).format("YYYY-MM")
      },
       //专业技能编辑
      editskill(list) {
        this.personalskillouterVisible = true
        this.skillId = list.id 
        this.formPersonalskill.technicalName = list.skill
        if(list.level == 0) {
          this.formPersonalskill.level = '一般'
        }else if(list.level == 1) {
         this.formPersonalskill.level = '良好'
        }else if(list.level == 2) {
          this.formPersonalskill.level = '熟练'
        }else if(list.level == 3) {
          this.formPersonalskill.level = '精通'
        }
      },
      //语言能力
      showlanguagesList(list) {
        this.languageouterVisible = true
        this.formlanguage.languages = list.language
        if(list.listenAndSpeak == 0) {
          this.formlanguage.listenAbility = '一般'
        }else if(list.listenAndSpeak == 1) {
          this.formlanguage.listenAbility = '良好'
        }else if(list.listenAndSpeak == 2) {
          this.formlanguage.listenAbility = '熟练'
        }else if(list.listenAndSpeak == 3) {
          this.formlanguage.listenAbility = '精通'
        }
        if(list.readAndWrite == 0) {
          this.formlanguage.readAbility = '一般'
        }else if(list.readAndWrite == 1) {
          this.formlanguage.readAbility = '良好'
        }else if(list.readAndWrite == 2) {
          this.formlanguage.readAbility = '熟练'
        }else if(list.readAndWrite == 3) {
          this.formlanguage.readAbility = '精通'
        }
        this.languageId = list.id
      },
      //培训经历
      showtrainList(list) {
        console.log(list)
        this.trainingouterVisible = true
        this.trainId = list.id
        this.formtraining.trainCourse = list.lesson
        this.formtraining.trainCours = list.institution
      },
      //项目经历编辑
      showprogectperienceList(list) {
        this.progectouterVisible = true
        this.progectId = list.id
        this.formProject.itemName = list.project
        this.formProject.companyName = list.company
        this.formProject.duty = list.duty
        this.formProject.project = list.description
        if(list.endTime == null) {
            var end = this.$moment(new Date().getTime()).format("YYYY-MM")
          }else{
            var end = this.$moment(new Date(list.endTime).getTime()).format("YYYY-MM")
          }
          this.formProject.schoolTime = [this.$moment(new Date(list.beginTime)).format("YYYY-MM"),end]
      },
      showprofessionalList(list) {
        this.qualId = list.id
        this.formProfession.qual = list.qual
        this.professionouterVisible = true
      },
      //工作经历编辑
      showworkperienceList(list) {
        this.workouterVisible = true
        this.workId  = list.id
        this.formWork.companyName = list.company
        this.formWork.postName = list.position
        this.formWork.jobDescription = list.description
        if(list.endTime == null) {
            var end = this.$moment(new Date().getTime()).format("YYYY-MM")
          }else{
            var end = this.$moment(new Date(list.endTime).getTime()).format("YYYY-MM")
          }
          console.log(end,"22323232323")
          this.formWork.workTime = [this.$moment(list.beginTime).format("YYYY-MM"),end]
      },
      //教育经历编辑
      showeducationalList(list) {
        this.educationId = list.id
        this.educationouterVisible = true
        this.formEducation.educationSpecialty = list.major
        this.formEducation.educationName = list.school
        if(list.degree == 2) {
          this.formEducation.educationDegree = '高中'
        }else if(list.degree == 0) {
            this.formEducation.educationDegree = '初中及以下'
        }else if(list.degree == 1) {
            this.formEducation.educationDegree = '职中'
        }else if(list.degree == 3) {
            this.formEducation.educationDegree = '大专'
        }else if(list.degree == 4) {
            this.formEducation.educationDegree = '本科'
        }else if(list.degree == 5) {
            this.formEducation.educationDegree = '硕士'
        }else if(list.degree == 6) {
            this.formEducation.educationDegree = '博士'
        }
        if(list.endTime == null) {
          var date = new Date()
          var dataOne = new Date(list.endTime).getTime()
          var end = this.$moment(date.getTime()).format("YYYY-MM")
        }else{
          var end = this.$moment(dataOne).format("YYYY-MM")
        }
        this.formEducation.educationTime = [this.$moment(list.beginTime).format("YYYY-MM"),end]
      },
      showjobintensionList () {
         this.jobintensionouterVisible = true
        if(this.listjobintension.jobSearchStatus == 1) {
            this.listjobintension.jobSearchStatus = '离职-延时到岗'  
          }else if(this.listjobintension.jobSearchStatus == 0) {
            this.listjobintension.jobSearchStatus = '离职-随时到岗'
          }else if(this.listjobintension.jobSearchStatus == 2) {
            this.listjobintension.jobSearchStatus = '在职-考虑机会'
          }else if(this.listjobintension.jobSearchStatus == 3) {
            this.listjobintension.jobSearchStatus = '在职-暂不考虑'
          }

        if(this.listjobintension.jobType == 3) {
            this.listjobintension.jobType = '实习'  
          }else if(this.listjobintension.jobType == 0) {
            this.listjobintension.jobType = '全职'
          }else if(this.listjobintension.jobType == 1) {
            this.listjobintension.jobType = '兼职'
          }
      
        if(this.listjobintension.salaryMax == 1) {
          this.formJobintension.scope = '1K以下'
        }else if(this.listjobintension.salaryMax == 2) {
          this.formJobintension.scope = '1K-2K'
        }else if(this.listjobintension.salaryMax == 4) {
          this.formJobintension.scope = '2K-4K'
        }else if(this.listjobintension.salaryMax == 6) {
          this.formJobintension.scope = '4K-6K'
        }else if(this.listjobintension.salaryMax == 8) {
          this.formJobintension.scope = '6K-8K'
        }else if(this.listjobintension.salaryMax == 10) {
          this.formJobintension.scope = '8K-10K'
        }else if(this.listjobintension.salaryMax == 15) {
          this.formJobintension.scope = '10K-15K'
        }else if(this.listjobintension.salaryMax == 25) {
          this.formJobintension.scope = '15K-25K'
        }else if(this.listjobintension.salaryMax == 35) {
          this.formJobintension.scope = '25K-35K'
        }else if(this.listjobintension.salaryMax == null) {
          this.formJobintension.scope = '35K以上'
        }
        this.formJobintension.reportTime = this.$moment(this.listjobintension.arriveTime).format("YYYY-MM-DD") 
        this.formJobintension.city = [this.listjobintension.province,this.listjobintension.county]
        this.formJobintension.status = this.listjobintension.jobSearchStatus
        this.formJobintension.jobType = this.listjobintension.jobType
        this.formJobintension.trad[0].code = this.listjobintension.industries[0].code
        this.formJobintension.postType[0].code = this.listjobintension.positionCatalogs[0].code
      },
      //个人信息编辑
      showjpersonalList() {
        this.informationouterVisible = true
        this.formInformation.name = this.resumeIdList.fullName
        this.formInformation.sex = this.resumeIdList.sex
        this.formInformation.politicCountenance = this.resumeIdList.politicalStatus
        if(this.resumeIdList.graduate == true) {
            this.formInformation.graduate = 1 
        }else if(this.resumeIdList.graduate == false) {
            this.formInformation.graduate = 2
        }
        this.formInformation.overseasAge = this.resumeIdList.overseasAge
        if(this.resumeIdList.degree == 2) {
            this.formInformation.educationLevel = '高中'
        }else if(this.resumeIdList.degree == 0) {
            this.formInformation.educationLevel = '初中及以下'
        }else if(this.resumeIdList.degree == 1) {
            this.formInformation.educationLevel = '职中'
        }else if(this.resumeIdList.degree == 3) {
            this.formInformation.educationLevel = '大专'
        }else if(this.resumeIdList.degree == 4) {
            this.formInformation.educationLevel = '本科'
        }else if(this.resumeIdList.degree == 5) {
            this.formInformation.educationLevel = '硕士'
        }else if(this.resumeIdList.degree == 6) {
            this.formInformation.educationLevel = '博士'
        }
        if(this.resumeIdList.politicalStatus == 2) {
            this.formInformation.politicCountenance = '民主党派'
        }else if(this.resumeIdList.politicalStatus == 0) {
            this.formInformation.politicCountenance = '群众'
        }else if(this.resumeIdList.politicalStatus == 1) {
            this.formInformation.politicCountenance = '团员'
        }else if(this.resumeIdList.politicalStatus == 3) {
            this.formInformation.politicCountenance = '预备党员'
        }else if(this.resumeIdList.politicalStatus == 4) {
            this.formInformation.politicCountenance = '中共党员'
        }    
        var birth = this.resumeIdList.birthday 
        this.woekTime = this.resumeIdList.birthday
        this.formInformation.birthday = this.$moment(birth).format("YYYY-MM-DD") 
        var work = this.resumeIdList.workYear 
        this.bir = this.resumeIdList.birthday  
        this.formInformation.workAge = this.$moment(work).format("YYYY-MM-DD") 
        this.formInformation.email = this.resumeIdList.email 
        this.formInformation.phone = this.resumeIdList.phone
        this.formInformation.city = [this.resumeIdList.province,this.resumeIdList.county]
      },
      testRef(ref) {
        if (ref) {
          const y = this.$refs[ref].offsetTop - 100
          window.scrollTo({top: y, behavior: "smooth"});
        } else {
          const y = this.$refs[ref].offsetTop - 600
          window.scrollTo({top: y, behavior: "smooth"});
        }
      },
      showedudialog(list) {
        this.educationId = list.id
        this.dialogedu = true
      },
      showworkdialog(list) {
        this.workId  = list.id
        this.dialogwork = true
      },
      showprojectdialog(list) {
        this.progectId  = list.id
        this.dialogproject = true
      },
      showtraindialog(list) {
        this.trainId  = list.id
        this.dialogtrain = true
      },
      showlanguagedialog(list) {
        this.languageId  = list.id
        this.dialoglanguage = true
      },
      showskilldialog(list) {
        this.skillId  = list.id
        this.dialogskill = true
      },
      showawardsdialog(list) {
        this.awardsId  = list.id
        this.dialogaward = true
      },
      showprofessionaldialog(list) {
        this.qualId  = list.id
        this.dialogprofess = true
      },
      ispersonalinformation() {
        this.isshowpersonalinformation = true
        this.personalinformation = false
        this.showDemo = true
      },
      jobintension() {
        this.showadd = false;
        this.showJob = true;
        this.showjobintension = false
      },
      education() {
        this.showeducation = false;
        setTimeout(this.showeducation = true, 5000)
        
        this.showeducational = false
      },
      work() {
        this.showwork = true;
        this.showworkperience = false
      },
      project() {
        this.showproject = true;
        this.showprogectperience = false
      },
      training() {
        this.showtraining = true;
        this.showtrain = false
      },
      language() {
        this.showlanguage = true;
        this.showlanguages = false
      },
      professional() {
        this.showprofessional = true;
        this.showprofessionals = false
      },
      personal_skill() {
        this.showpersonalskill = true;
        this.showpersonalskills = false
      },
      awards() {
        this.showawards = true;
        this.showaward = false
      },
      selfappraisal() {
        this.showselfappraisal = true;
        this.showpersonappraisal = false
      },
      over(index) {
        if (index == 1) {
          this.activeselfAppraisal = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 2) {
          this.activeawards = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 3) {
          this.activeprofessional = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 4) {
          this.activeOne = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 5) {
          this.activelanguage = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 6) {
          this.activetraining = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 7) {
          this.activeproject = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 8) {
          this.activework = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 9) {
          this.activeeducation = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 10) {
          this.activejobintension = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 11) {
          this.active = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }

      },
      leave(index) {
        if (index == 1) {
          this.activeselfAppraisal = ""
        }
        if (index == 2) {
          this.activeawards = ""
        }
        if (index == 3) {
          this.activeprofessional = ""
        }
        if (index == 4) {
          this.activeOne = ""
        }
        if (index == 5) {
          this.activelanguage = ""
        }
        if (index == 6) {
          this.activetraining = ""
        }
        if (index == 7) {
          this.activeproject = ""
        }
        if (index == 8) {
          this.activework = ""
        }
        if (index == 9) {
          this.activeeducation = ""
        }
        if (index == 10) {
          this.activejobintension = ""
        }
        if (index == 11) {
          this.active = ""
        }
      },
    //城市
      city() {
        city().then(res => {
            if (res.data.code == 200) {
              this.options = res.data.data
            }else{}
          }).catch(error =>{});
    },
    //获取所有企业行业
      allposition() {
        industry().then(res => {
          if (res.data.code == 200) {
            this.industryList = res.data.data
          }else{}
        }).catch(error => {});
      },
      //获取所有职位类型
      allpositionCatalog() {
        allpositionCatalog().then(res => {
          if (res.data.code == 200) {
            this.positionCatalogList = res.data.data
          }else{}
        }).catch(error => {});
      },
      //获取简单选项信息
      option() {
        option().then(res => {
          if (res.data.code == 200) {
            this.monthPayList = res.data.data.salaryRange
            this.workStateList = res.data.data.jobType
            this.jobSearchList = res.data.data.jobSearchStatus
          }else{}
        }).catch(error => {});
      },
    },
    created () {
      this.brief(),
      this.city(),
      this.allposition(),
      this.allpositionCatalog(),
      this.option();
      datacenterBus.$on("myFun",(message)=>{   //这里最好用箭头函数，不然this指向有问题
               this.informationouterVisible = false
            })
    },
    filters:{
    level(level){
      const map=["初中及以下","职中","大专","本科",'硕士','博士']
      return map[level]
    },
    industry(industry){
      if(industry == 1) {
        const map=['',"酒店/餐饮","旅游/度假","医疗/护理/美容/保健/卫生服务"]
        return map[industry]
      }
      if(industry == 2) {
        const map=['',"计算机软件","网络游戏","IT服务(系统/数据/维护)","计算机硬件",'互联网/电子商务','电子技术/半导体/集成电路','通信、电信运营/增值服务','通信/电信/网络设备']
        return map[industry]
      }
      if(industry == 3) {
        const map=['',"保险","银行","信托/担保/拍卖/典当","基金/证券/期货/投资"]
        return map[industry]
      }
      if(industry == 4) {
        const map=['',"零售/批发","贸易/进出口","快速消费品（食品/饮料/烟酒/日化）","耐用消耗品",'租赁服务']
        return map[industry]
      }
      if(industry == 5) {
        const map=['',"文体教育|工艺美术","教育/培训/院校","礼品/玩具/工艺美术/收藏品/奢侈品"]
        return map[industry]
      }
      if(industry == 6) {
        const map=['',"办公用品及设备","航空/航天研究与制造","医疗设备/器械",'加工制造（原料加工/模具）','医药/生物工程','大型设备/机电设备/重工业','印刷/包装/造纸','汽车/摩托车','仪器仪表及工业自动化']
        return map[industry]
      }
      if(industry == 7) {
        const map=['',"房地产/建筑/建材/工程","物业管理/商业中心","家居/室内设计/装饰装潢"]
        return map[industry]
      }
      if(industry == 8) {
        const map=['',"专业服务/咨询(财会/法律/人力资源等)","广告/会展/公关","中介服务",'外包服务','检验/检测/认证']
        return map[industry]
      }
      if(industry == 9) {
        const map=['',"娱乐/体育/休闲","媒体/出版/影视/文化传媒"]
        return map[industry]
      }
      if(industry == 10) {
        const map=['',"跨领域经营","农/林/牧/渔",'其他']
        return map[industry]
      }
      if(industry == 11) {
        const map=['',"交通/运输",'物流/仓储']
        return map[industry]
      }
      if(industry == 12) {
        const map=['',"环保",'石油/石化/化工','能源/矿产/采掘/冶炼','电气/电力/水利']
        return map[industry]
      }
      if(industry == 13) {
        const map=['',"学术/科研",'政府/公共事业/非盈利机构']
        return map[industry]
      }
    }
  },
  }

</script>

<style lang="stylus" scoped>
  
  .resumes
    width 990px
    margin 90px 120px 0 140px
    display flex
    flex-direction row
    .content
      width 770px
      background #FFFFFF
      margin 0 10px 0 0

      .personalinformation
        width 770px
        display flex
        flex-direction row
        font-size 14px

        .img-add img
          width 12px
          margin 111px 0 0 467px

        .img-add span
          margin 0 0 0 10px
          font-size 14px
          font-family PingFangSC-Regular
          color #111D4B 100%
          font-weight bold

      .cancel:hover
        background #1d366e
        color white
        border-color #1d366e

      .cancel
        margin 0 20px 0 0
      .personalinformation div:nth-child(2)
        margin 0 75px 15px 0
      .content-line
        width 682px
        border 0.5px solid #eeeeee
        margin 0 44px 0 44px
      ul
        width 675px
      ul li
        list-style none
      .li-a
        display flex
        flex-direction row
      .ul-a
        .actions-span
          float right
          font-size 15px
          color #1d366e
          opacity 0
        &:hover
          background #f7f7f7
          .actions-span
            opacity 1
      .actions-span span:hover
        color #7d8dcb
      .actions-span span:active
        color #617dcb
      .main-content
        display flex
        flex-direction row
        justify-content space-between
        .main-content-first
          font-weight bold
          line-height 50px
          margin 0 0 0 52px
        .main-content-first span
          font-size 18px
          font-family PingFangSC-Regular
          color #111D4B 100%
          margin 0 0 0 10px
        .main-content-first img
          height 16px
          vertical-align middle
          margin 0 0 4px 0
        .main-content-second
          color #1d366e
          line-height 50px
          margin 0 74px 0 0
        .main-content-second span
          font-family PingFangSC-Regular
          color #111D4B
          font-size 14px
          margin 0 0 0 10px
        .main-content-second img
          height 12px
          vertical-align middle
          margin 0 0 2px 10px
        .main-content-second span:hover
          color #7d8dcd
        .main-content-second span:active
          color #617dcb
    .aside-body
      position relative
      .aside
        width 220px
        height 760px
        background #FFFFFF
        margin-top 0px
        .aside-nav
          display flex
          flex-direction column
          text-align left
          .aside-nav-first
            font-family PingFangSC-Regular
            color #111D4B 100%
            font-size 14px
            font-weight bold
            margin 25px 0 0 32px
          .aside-nav-second
            display flex
            flex-direction row
            font-family PingFangSC-Regular
            color #455379 100%
            font-size 12px
            margin 10px 0 0 32px

          .aside-nav-third
            font-family PingFangSC-Regular
            color #455379 100%
            font-size 12px
            margin 10px 0 0 32px

        .aside-tabulation
          display flex
          flex-direction column
          margin 25px 0 0 0

          .aside-line
            width 160px
            border 0.5px solid #eeeeee
            margin 0 27px 0 32px

          .tabulation
            line-height 42px
            margin 0 0 0 44px
            font-size 13px
            text-align left
          .tabulation a
            text-decoration none
            color #455379
            .tabulation-language
              margin 0 0 0 10px
              font-family PingFangSC-Regular
              color #455379
              font-size 14px
            .tabulation-language:hover
              color #7d8dcd
            .tabulation-language:active
              color #617dcb
          .tabulation img
            height 16px
            vertical-align middle
            margin 0 0 4px 0
      .aside-foot
        width 220px
        background #FFFFFF
        /*margin 0 0 0 790px*/
        text-align left
        /*position fixed*/
        
        padding-top 11px

        .aside-foot-first
          font-family PingFangSC-Regular
          color #1d366e
          font-size 14px
          text-align left
          margin-left 30px

        .aside-foot-second
          font-famil PingFangSC-Regular
          color #909090
          font-size 12px
          margin 5px 0 0 30px

</style>
<style lang="stylus">
  .el-button--primary 
    color #fff;
    background-color #1d366e;
    border-color #1d366e;
  .el-input__inner:hover
    border-color #7d8dcd
  .el-select .el-input__inner:hover
    border-color #7d8dcd
  .el-select-dropdown__item:hover
    color #7d8dcd
  .cancel:hover
    background #1d366e
    color white
    border-color #1d366e
  .el-button
    width 94px
    height 34px
    vertical-align middle
    padding 0px
  .keep:hover
    border-color #7d8dcd
  .el-textarea__inner:hover
    border-color #7d8dcd
  .el-cascader__inner:hover
    border-color #7d8dcd
  .el-button--primary:hover
    background #7d8dcd
    border-color #7d8dcd
  .el-button--primary:active
    background #617dcb
  .el-button.is-plain
    color #1d366e
    background white
    border-color #1d366e 
  .el-button.is-plain:hover 
    border-color #7d8dcd
    color #7d8dcd
    background white
  .el-button.is-plain:active 
    border-color #617dcb
    color #617dcb
    background white 
  .avatar-upload .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-right:15px
  }
  .avatar-upload .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-upload-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }  
</style>

