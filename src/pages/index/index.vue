<template>
  <div>
    <div class="main-container">
      <home v-if="active==0"/>
      <schedule v-if="active==1"/>
      <square v-if="active==2"/>
      <community v-if="active==3"/>
      <mine v-if="active==4"/>
    </div>
    <div class="main-tabbar">
      <van-tabbar :active="active" @change="onChange">
        <van-tabbar-item v-for="(item, index) in icons" :key="index">
          <image
            slot="icon" 
            :src="item.default" 
            mode="aspectFit"
            :style="'width:'+ iconWidth + ';height:'+ iconHeight + ';'" 
          />
          <image
            slot="icon-active"
            :src="item.active"
            mode="aspectFit"
            :style="'width:'+ iconWidth + ';height:'+ iconHeight + ';'"
          />
          <p>{{ item.text }}</p>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import home from '@/pages/index/basic/home'
import mine from '@/pages/index/basic/me'
import community from '@/pages/index/basic/forum'
import schedule from '@/pages/index/basic/schedule'
import square from '@/pages/index/basic/square'

export default {
  data () {
    return {
      active: 0,
      iconWidth: '34px',
      iconHeight: '25px',
      icons: [
        {
          default: '../../static/images/tabbar/home.svg',
          active: '../../static/images/tabbar/home_a.svg',
          text: '首页'
        }, {
          default: '../../static/images/tabbar/schedule.svg',
          active: '../../static/images/tabbar/schedule_a.svg',
          text: '课表'
        }, {
          default: '../../static/images/tabbar/square.svg',
          active: '../../static/images/tabbar/square_a.svg',
          text: '广场'
        }, {
          default: '../../static/images/tabbar/community.svg',
          active: '../../static/images/tabbar/community_a.svg',
          text: '社区'
        }, {
          default: '../../static/images/tabbar/mine.svg',
          active: '../../static/images/tabbar/mine_a.svg',
          text: '我的'
        }
      ]
    }
  },
  methods: {
    onChange (event) {
      console.log(event)
      this.active = event.mp.detail
    }
  },
  components: {
    home,
    mine,
    community,
    schedule,
    square
  },
  created () {

  }
}
</script>

<style>
.main-tabbar p{
  font-size: 8px;
}

.main-tabbar .van-tabbar {
  background-color: rgba(255,255,255,0.7);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
}
</style>
