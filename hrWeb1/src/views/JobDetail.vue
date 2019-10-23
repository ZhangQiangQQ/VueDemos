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
        <div class="main-content">
          <header>
            <h3>FESCO Adecco | Web 前端架构师 [上海-徐汇区]</h3>
            <div class="meta">
              <h5>10k - 15k</h5>
              <span>经验3-5年</span>
              <span>大专</span>
            </div>
            <el-button class="submit-btn" type="primary" @click="delivery">投个简历</el-button>
          </header>
          <div class="desc">
            <h3>职位描述</h3>
            <p>职位描述职位描述职位描述职位描述职位描述职位描述职位描述职位描述职位描述</p>

            <h3>职位需求</h3>
            <p>职位需求职位需求职位需求职位需求职位需求职位需求职位需求职位需求职位需求</p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="company-desc">
          <img :src="placeholder" />
          <span>FESCO Adecco</span>
          <ul class="meta">
            <li>移动互联网,人工智能</li>
            <li>不需要融资</li>
            <li>15-50人</li>
            <li>https://zeno.group</li>
          </ul>
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
    delivery() {
      // 
    }
  },
  mounted() {
    // const id = this.$route.params.id;
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
        width 300px
        .company-desc
          padding 40px 10px
          img
            width 100px
          span
            margin-left 15px
            font-size 18px
          .meta
            text-align left
            margin 20px
            padding 20px
            li
              margin 0 0 16px
              color #737373
              line-height 25px
      .left
        flex 1
        margin-right 10px
        .main-content
          background-color #f1f5f4
          text-align left
          margin auto
          padding 10px
          margin-top 20px
          .desc
            background-color white
            padding 20px
          header
            margin 40px 0
            position relative
            .submit-btn 
              position absolute
              right 0
              top 0
              width 140px
              font-size 17px
              margin 0 20px
              border-radius 0
            h3
              height 36px
              font-size 30px
              color #333
              line-height 30px
              margin 20px
            .meta
              margin 20px
              h5
                display inline-block
                color #fd5f39
                font-size 18px
                margin 0
              span
                font-size 18px
                margin-left 20px
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