<template>
  <div class="home">
    <div class="content">
      <div class="middle">
        <div class="search-bar">
          <el-cascader
            class="search-picker"
            placeholder="请选择地区"
            :options="options"
            v-model="selectedOptions"
            @change="handleChangeLocation">
          </el-cascader>
          <el-cascader
            class="search-picker"
            placeholder="请选择职位"
            :options="options"
            v-model="selectedOptions"
            @change="handleChangeLocation">
          </el-cascader>
          <el-input class="search-input" v-model="searchKey" placeholder="请输入搜索职位"></el-input>
          <el-button type="primary" @click="redirectToSearchResult"><i class="el-icon-search"></i> 搜索</el-button>
        </div>
      </div>
      <div class="header">
        <div class="carousel">
          <el-carousel :interval="5000" arrow="always" height="450px">
            <el-carousel-item v-for="item in carouselImgs" :key="item">
              <img :src="item"/>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="company" ref="company-holder">
        <img :src="require('../assets/images/company1.jpg')"/>
        <img :src="require('../assets/images/company2.jpg')"/>
        <img :src="require('../assets/images/company3.png')"/>
        <img :src="require('../assets/images/company4.png')"/>
        <img :src="require('../assets/images/company5.png')"/>
        <img :src="require('../assets/images/company1.jpg')"/>
        <img :src="require('../assets/images/company2.jpg')"/>
        <img :src="require('../assets/images/company3.png')"/>
        <img :src="require('../assets/images/company4.png')"/>
        <img :src="require('../assets/images/company5.png')"/>
        <img :src="require('../assets/images/company1.jpg')"/>
        <img :src="require('../assets/images/company2.jpg')"/>
        <img :src="require('../assets/images/company3.png')"/>
        <img :src="require('../assets/images/company4.png')"/>
        <img :src="require('../assets/images/company5.png')"/>
      </div>
      <div class="occupation-card">
        <div class="container">
          <div class="desc">
            <h3>Web 前端架构师</h3>
            <h5>FESCO Adecco - 企业服务,教育/培训</h5>
            <div class="meta">
              <span>2天/周</span>
              <span>100-150/天</span>
              <span>上海</span>
            </div>
          </div>
          <div class="logo">
            <img :src="require('../assets/images/occupation1.png')" />
          </div>
        </div>
        <div class="container">
          <div class="desc">
            <h3>Web 前端架构师</h3>
            <h5>FESCO Adecco - 企业服务,教育/培训</h5>
            <div class="meta">
              <span>2天/周</span>
              <span>100-150/天</span>
              <span>上海</span>
            </div>
          </div>
          <div class="logo">
            <img :src="require('../assets/images/occupation2.png')" />
          </div>
        </div>
        <div class="container">
          <div class="desc">
            <h3>Web 前端架构师</h3>
            <h5>FESCO Adecco - 企业服务,教育/培训</h5>
            <div class="meta">
              <span>2天/周</span>
              <span>100-150/天</span>
              <span>上海</span>
            </div>
          </div>
          <div class="logo">
            <img :src="require('../assets/images/occupation2.png')" />
          </div>
        </div>
      </div>
      <div class="occupation-card">
        <div class="container">
          <div class="desc">
            <h3>Web 前端架构师</h3>
            <h5>FESCO Adecco - 企业服务,教育/培训</h5>
            <div class="meta">
              <span>2天/周</span>
              <span>100-150/天</span>
              <span>上海</span>
            </div>
          </div>
          <div class="logo">
            <img :src="require('../assets/images/occupation1.png')" />
          </div>
        </div>
        <div class="container">
          <div class="desc">
            <h3>Web 前端架构师</h3>
            <h5>FESCO Adecco - 企业服务,教育/培训</h5>
            <div class="meta">
              <span>2天/周</span>
              <span>100-150/天</span>
              <span>上海</span>
            </div>
          </div>
          <div class="logo">
            <img :src="require('../assets/images/occupation2.png')" />
          </div>
        </div>
        <div class="container">
          <div class="desc">
            <h3>Web 前端架构师</h3>
            <h5>FESCO Adecco - 企业服务,教育/培训</h5>
            <div class="meta">
              <span>2天/周</span>
              <span>100-150/天</span>
              <span>上海</span>
            </div>
          </div>
          <div class="logo">
            <img :src="require('../assets/images/occupation2.png')" />
          </div>
        </div>
      </div>
      <div class="occupation-card">
        <div class="container">
          <div class="desc">
            <h3>Web 前端架构师</h3>
            <h5>FESCO Adecco - 企业服务,教育/培训</h5>
            <div class="meta">
              <span>2天/周</span>
              <span>100-150/天</span>
              <span>上海</span>
            </div>
          </div>
          <div class="logo">
            <img :src="require('../assets/images/occupation1.png')" />
          </div>
        </div>
        <div class="container">
          <div class="desc">
            <h3>Web 前端架构师</h3>
            <h5>FESCO Adecco - 企业服务,教育/培训</h5>
            <div class="meta">
              <span>2天/周</span>
              <span>100-150/天</span>
              <span>上海</span>
            </div>
          </div>
          <div class="logo">
            <img :src="require('../assets/images/occupation2.png')" />
          </div>
        </div>
        <div class="container">
          <div class="desc">
            <h3>Web 前端架构师</h3>
            <h5>FESCO Adecco - 企业服务,教育/培训</h5>
            <div class="meta">
              <span>2天/周</span>
              <span>100-150/天</span>
              <span>上海</span>
            </div>
          </div>
          <div class="logo">
            <img :src="require('../assets/images/occupation2.png')" />
          </div>
        </div>
      </div>
      <button class="more">查看更多</button>
    </div>
  </div>
</template>

<script>
import placeholder from 'assets/images/placeholder.jpg';


export default {
  name: 'home',
  data() {
    return {
      isLogin: false,
      placeholder,
      showLoginModal: false,
      showRegisterModal: false,
      showForgetPwdModal: false,
      selectedOptions: null,
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        email: '',
        captcha: '',
        password: ''
      },
      resetPwdForm: {
        email: '',
        captcha: '',
        newPassword: ''
      },
      carouselImgs: [
        require('../assets/images/loop1.jpg'),
        require('../assets/images/loop2.png')
      ],
      options: [{
        value: '101',
        label: '江苏省',
        children: [{
          value: '10101',
          label: '南京'
        }, {
          value: '10102',
          label: '苏州'
        }, {
          value: '10103',
          label: '无锡'
        }, {
          value: '10104',
          label: '常州'
        }, {
          value: '10105',
          label: '南通'
        }, {
          value: '10106',
          label: '泰州'
        }, {
          value: '10107',
          label: '扬州'
        }, {
          value: '10108',
          label: '盐城'
        }, {
          value: '10109',
          label: '镇江'
        }, {
          value: '10110',
          label: '盐城'
        }, {
          value: '10111',
          label: '宿迁'
        }, {
          value: '10112',
          label: '淮安'
        }, {
          value: '10113',
          label: '徐州'
        }, {
          value: '10114',
          label: '连云港'
        }]
      }],
      searchKey: ''
    }
  },
  methods: {
    handleOpenMenu() {},
    handleChangeLocation() {},
    doLogin() {
      // request;
      this.showLoginModal = false;
      this.isLogin = true;
    },
    dealMenuClick(command) {
      if (command === 'logout') {
        this.isLogin = false;
      }
    },
    doLogot() {
      this.isLogin = false;
    },
    doRegister() {

    },
    doResetPwd() {

    },
    redirectToSearchResult() {
      this.$router.push({ path: '/search' });
    },
    companyScrolling() {
      const holder = this.$refs['company-holder'];
      if (holder && document.body.clientWidth === (holder.scrollWidth - holder.scrollLeft))
          holder.scrollLeft = 0;
        holder.scrollLeft += 1;
      requestAnimationFrame(this.companyScrolling);
    }
  },
  mounted() {
    this.companyScrolling();
  }
}
</script>

<style lang="stylus" scoped>
  .home
    margin-top 70px
    .content
      width 100%
      /*padding 20px 40px*/
      margin auto
      background-color white
      .more
        width 210px
        height 43px
        background-color #1F368D
        color white
        font-size 14px
        margin 30px 0
        cursor pointer
      .header
        margin 20px 0
        display flex
        flex-direction row
        justify-content center
        align-items center
        .carousel
          width 100%
      .middle
        display flex
        flex-direction row
        padding 20px
        align-items center
        margin auto
        border solid 1px #eeee
        margin 20px auto
        .search-bar
          flex 1
          display flex
          flex-direction row
          height 55px
          .search-picker
            font-size 17px
            line-height 55px
            width 180px
            margin-right 20px
          .search-input
            flex 1
          button
            font-size 16px
            width 200px
            margin-left 20px
      .company
        height 170px
        display flex
        flex--direction row
        justify-content space-evenly
        align-items center
        border: solid 1px #eee
        margin: 20px auto
        overflow scroll
        img
          height 150px
          margin 0 10px
      .occupation-card
        display flex
        flex-direction row
        margin auto
        flex-wrap wrap
        div.container
          display flex
          flex 1
          padding 10px
          align-items center
          flex-direction row
          margin 10px
          border solid 1px lightgray
          .desc
            flex 1
            display flex
            flex-direction column
            align-items flex-start
            h3
              margin 0 0 10px 0
            h5
              margin 10px 0
            .meta
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
  .middle
    .search-bar
      .search-picker, .search-input
        input
          height 55px
  .category
    .list
      .el-menu--collapse
        width 300px
        i
          width 100%
          text-align left
          font-size 20px
          &:after
            content '>'
            margin-left 50px
    .carousel
      flex 1
      margin-left 20px
  .company
    &::-webkit-scrollbar
      display none
</style>
