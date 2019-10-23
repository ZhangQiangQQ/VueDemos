<template>
  <div class="home">
    <nav>
      <img src="https://sxsimg.xiaoyuanzhao.com/static/new_main/img/logo.png?v=ca7e7ee7a9339caf25d8e12d055eb1e8" />
      <div class="menu">
        <div class="btn-set">
          <button>登陆</button>
          <button>注册</button>
        </div>
        <div class="btn-single">
          <button>企业入口</button>
        </div>
      </div>
    </nav>
    <div class="main">
      <div class="left">
        <div class="main-search">
          <div class="search-bar">
            <el-input class="search-input" v-model="searchKey" placeholder="请输入搜索职位"></el-input>
            <el-button type="primary">搜索</el-button>
          </div>
          <div class="search-filters">
            <el-form ref="form" :model="filters" label-width="80px">
              <el-form-item label="工作地点">
                <el-collapse>
                  <el-collapse-item>
                    <template slot="title">
                      <el-radio-group v-model="filters.city" size="mini">
                        <el-radio-button v-for="city in cities" :label="city" :key="city">{{city}}</el-radio-button>
                      </el-radio-group>
                    </template>
                    <el-checkbox-group v-model="filters.district" size="mini">
                      <el-checkbox-button v-for="district in citiesMapper[filters.city]" :label="district" :key="district">{{district}}</el-checkbox-button>
                    </el-checkbox-group>
                  </el-collapse-item>
                </el-collapse>
              </el-form-item>
              <el-form-item label="最低学历">
                <el-checkbox-group v-model="filters.qualification" size="mini">
                  <el-checkbox-button v-for="item in qualifications" :label="item" :key="item">{{item}}</el-checkbox-button>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="月薪水平">
                <el-checkbox-group v-model="filters.salary" size="mini">
                  <el-checkbox-button v-for="item in salary" :label="item" :key="item">{{item}}</el-checkbox-button>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="年薪水平">
                <el-checkbox-group v-model="filters.annualSalary" size="mini">
                  <el-checkbox-button v-for="item in annualSalary" :label="item" :key="item">{{item}}</el-checkbox-button>
                </el-checkbox-group>
              </el-form-item>
            </el-form>
            
          </div>
        </div> 
        <div class="search-result">
          <div class="occupation-card">
            <div class="container">
              <div class="desc">
                <h3 @click="redirectToDetailPage(1)">Web 前端架构师 [上海-徐汇区] <span>10:30 发布</span></h3>
                <div class="meta">
                  <h5>10k - 15k</h5>
                  <span>经验3-5年</span>
                  <span>大专</span>
                </div>
              </div>
              <div class="company-detail">
                <h3>FESCO Adecco</h3>
                <div class="meta">
                  <span>企业服务 / 天使轮 / 15-50人</span>
                </div>
              </div>
              <div class="logo">
                <img :src="require('../assets/images/occupation7.jpg')" />
              </div>
            </div>
          </div>
          <div class="occupation-card">
            <div class="container">
              <div class="desc">
                <h3>Web 前端架构师 [上海-徐汇区] <span>10:30 发布</span></h3>
                <div class="meta">
                  <h5>10k - 15k</h5>
                  <span>经验3-5年</span>
                  <span>大专</span>
                </div>
              </div>
              <div class="company-detail">
                <h3>FESCO Adecco</h3>
                <div class="meta">
                  <span>企业服务 / 天使轮 / 15-50人</span>
                </div>
              </div>
              <div class="logo">
                <img :src="require('../assets/images/occupation7.jpg')" />
              </div>
            </div>
          </div>
          <div class="occupation-card">
            <div class="container">
              <div class="desc">
                <h3>Web 前端架构师 [上海-徐汇区] <span>10:30 发布</span></h3>
                <div class="meta">
                  <h5>10k - 15k</h5>
                  <span>经验3-5年</span>
                  <span>大专</span>
                </div>
              </div>
              <div class="company-detail">
                <h3>FESCO Adecco</h3>
                <div class="meta">
                  <span>企业服务 / 天使轮 / 15-50人</span>
                </div>
              </div>
              <div class="logo">
                <img :src="require('../assets/images/occupation7.jpg')" />
              </div>
            </div>
          </div>
          <div class="occupation-card">
            <div class="container">
              <div class="desc">
                <h3>Web 前端架构师 [上海-徐汇区] <span>10:30 发布</span></h3>
                <div class="meta">
                  <h5>10k - 15k</h5>
                  <span>经验3-5年</span>
                  <span>大专</span>
                </div>
              </div>
              <div class="company-detail">
                <h3>FESCO Adecco</h3>
                <div class="meta">
                  <span>企业服务 / 天使轮 / 15-50人</span>
                </div>
              </div>
              <div class="logo">
                <img :src="require('../assets/images/occupation7.jpg')" />
              </div>
            </div>
          </div>
          <div class="occupation-card">
            <div class="container">
              <div class="desc">
                <h3>Web 前端架构师 [上海-徐汇区] <span>10:30 发布</span></h3>
                <div class="meta">
                  <h5>10k - 15k</h5>
                  <span>经验3-5年</span>
                  <span>大专</span>
                </div>
              </div>
              <div class="company-detail">
                <h3>FESCO Adecco</h3>
                <div class="meta">
                  <span>企业服务 / 天使轮 / 15-50人</span>
                </div>
              </div>
              <div class="logo">
                <img :src="require('../assets/images/occupation7.jpg')" />
              </div>
            </div>
          </div>
          <div class="occupation-card">
            <div class="container">
              <div class="desc">
                <h3>Web 前端架构师 [上海-徐汇区] <span>10:30 发布</span></h3>
                <div class="meta">
                  <h5>10k - 15k</h5>
                  <span>经验3-5年</span>
                  <span>大专</span>
                </div>
              </div>
              <div class="company-detail">
                <h3>FESCO Adecco</h3>
                <div class="meta">
                  <span>企业服务 / 天使轮 / 15-50人</span>
                </div>
              </div>
              <div class="logo">
                <img :src="require('../assets/images/occupation7.jpg')" />
              </div>
            </div>
          </div>
          <div class="occupation-card">
            <div class="container">
              <div class="desc">
                <h3>Web 前端架构师 [上海-徐汇区] <span>10:30 发布</span></h3>
                <div class="meta">
                  <h5>10k - 15k</h5>
                  <span>经验3-5年</span>
                  <span>大专</span>
                </div>
              </div>
              <div class="company-detail">
                <h3>FESCO Adecco</h3>
                <div class="meta">
                  <span>企业服务 / 天使轮 / 15-50人</span>
                </div>
              </div>
              <div class="logo">
                <img :src="require('../assets/images/occupation7.jpg')" />
              </div>
            </div>
          </div>
          <el-pagination
            class="pagination"
            background
            @current-change="search"
            layout="prev, pager, next"
            :page-size="pageSize"
            :total="total">
          </el-pagination>
        </div>
      </div>
      <div class="right">
        <div class="ads">
          广告
        </div>
      </div>
    </div>
    <customized-footer />
  </div>
</template>

<script>
import placeholder from 'assets/images/placeholder.jpg';
import CustomizedFooter from 'components/customized-footer.vue';
import citiesMapper from './cities';

export default {
  name: 'home',
  components: {
    CustomizedFooter,
  },
  data() {
    return {
      citiesMapper,
      placeholder,
      searchKey: '',
      pageSize: 15,
      total: 10,
      cities: ['上海', '北京', '广州', '深圳'],
      qualifications: ['专科以下', '专科', '本科', '硕士', '博士及以上'],
      salary: ['3000及以下', '3000-5000', '5000-8000', '8000-10000', '10000以上', '面议'],
      annualSalary: ['3W以下', '3W-5W', '5W-8W', '8W-10W', '10000以上', '10W以上', '面议'],
      searchJobsResult: [
        {

        }
      ],
      filters: {
        city: '上海',
        qualification: ['专科以下'],
        salary: ['3000及以下'],
        annualSalary: ['3W以下'],
        district: []
      }
    }
  },
  methods: {
    redirectToDetailPage(id) {
      this.$router.push({ path: `/detail/${id}` });   
    },
    search() {
      // 
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home
    margin 0
    nav
      z-index 100
      background-color white
      box-shadow 0px 1px 9px #ccc
      width 100%
      top 0
      display flex
      flex-direction row
      height 70px
      align-content center
      align-items center
      img
        height 40
        margin 0 20px
      .menu
        display flex
        flex 1
        height 100%
        justify-content flex-end
        align-items center
        .btn-set
          margin 0 10px
          button 
            font-size 15px
            background none
            border none
            border-right solid 1px lightgrey
            &:last-child
              border none
        .btn-single
          margin 0 10px
          button 
            padding 10px 20px
            border solid 1px lightgrey
            font-size 14px
    .main
      display flex
      flex-direction row
      max-width 1280px
      min-width 1024px
      margin auto
      .right
        width 200px
        .ads
          border solid 1px lightgray
          &:first-child
            margin-top 20px
            padding 10px
      .left
        flex 1
        margin-right 10px
        .main-search
          max-width 1280px
          min-width 1024px
          text-align left
          margin auto
          padding 10px
          margin-top 20px
          .search-bar
            flex 1
            display flex
            flex-direction row
            height 55px
            .search-input
              flex 1
            button
              font-size 21px
              width 150px
              margin-left 20px
          .search-filters
            border solid 1px #eee
            margin-top 10px
            padding 10px
        .search-result
          .pagination
            text-align right
            margin-top 20px
          .occupation-card
            margin auto
            max-width 1280px
            min-width 1024px
            div.container
              display flex
              flex 1
              padding 10px
              align-items center
              flex-direction row
              margin 10px
              border solid 1px lightgray
              .desc, .company-detail
                flex 1
                display flex
                flex-direction column
                align-items flex-start
                h3
                  margin 0 0 10px 0
                  span
                    margin 0 3px
                    color #999
                    font-size 15px
                h5
                  margin 10px 0
                .meta
                  h5
                    display inline-block
                    margin-right 15px
                    font-size 16px
                    color #fd5f39
                  span 
                    margin-right 10px
                    font-size 14px
              .logo
                display flex
                align-items center
                img 
                  height 100px
</style>

<style lang="stylus">
.home
  .main-search
    .search-bar
      .search-city-picker, .search-input
        input 
          height 55px
    .search-filters
      .el-form-item
        margin-bottom 5px
</style>