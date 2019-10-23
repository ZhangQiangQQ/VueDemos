<template>
  <div class="position">
    <div class="positon-nav">
      <div class="block">
        <img style="width:100px;height:100px" :src="url"/>
      </div>
      <div class="aside">
        <div class="aside-nav" @click="isclick()">上海XX公司</div>
        <div class="aside-footer"><span><i class="el-icon-menu"></i></span><span>互联网</span><span>金融</span><span><i class="el-icon-s-data"></i></span><span>国企</span>
        <span><i class="el-icon-coordinate"></i></span><span>150-500人</span></div>
      </div>
    </div>
    <div class="positon-content">
      <div class="tab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="企业信息" name="first">
            <div class="information" v-if="information">
              <p class="company">公司介绍:</p>
              <p class="company-content">上海银领科技网络</p>
              <div class="positon-footer">
                <div class="address">
                  <p class="company-address">公司地址:</p>
                </div>
                <div class="map-address">
                  <span class="map-address-span">上海市徐汇区梅陇路130号</span>
                  <span class="map-address-map">查看地图</span>
                </div>
                <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler" ak="LGSF5bLoRGYzsOBrr20kXazopMHxLgL1">
                </baidu-map>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="在招职位" name="second">
            <div><post-type /></div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import PostType from 'components/post-type.vue';
export default {
  name: "position",
  components: {
    BaiduMap,
    PostType,
  },
  data() {
    return {
        center: {lng: 0, lat: 0},
        zoom: 3,
        table:false,
        information:true,
        activeName: 'first',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      }
  },
  methods: {
      // 地图加载完毕事件
      handler () {
        this.center.lng = 116.404
        this.center.lat = 39.915
        this.zoom = 15
      },
      isclick () {
        this.table=true;
        this.information=false
      }
    },
};
</script>

<style lang="stylus">
  .position 
    display flex
    flex-direction column
    margin 100px 0 0 20px
    width 1240px
    background-color white
    .positon-nav 
      display flex
      flex-direction row
      .block
        margin 30px 0 0 30px
      .aside
        .aside-nav
          text-align left 
          font-size 30px
          color #1f368d
          font-weight bold
          padding 0 0 0 10px 
          margin 35px 0 0 0  
        .aside-footer
          margin 20px 0 0 0   
        .aside-footer span
          padding 0 0 0 10px 
    .positon-content 
      .tab 
        margin 20px 0 0 25px
        .el-tabs__item
          font-size 14px
          font-weight 800
        .el-tabs__nav-wrap:after 
          background-color white
          z-index 1
        .company
          text-align left
          font-size 14px
          color #1f368d 
          margin 5px 0 0 0
          font-weight bold
        .company-content
          text-align left
          font-size 14px 
          color #b2b6c0 
        .positon-footer
          .address
            .company-address
              text-align left
              font-size 14px
              color #1f368d 
              font-weight bold 
          .map-address
            display flex
            flex-direction row
            justify-content space-between
            .map-address-span
              font-size 14px
              color #6a7183
              font-weight bold
            .map-address-map
              font-size 14px
              color #bbdf4f
              margin 10px 25px 0 0
          .bm-view
            margin 10px 0 0 0
            width 98%
            height 200px
          .BMap-cpyCtrl
            display none   
</style>
