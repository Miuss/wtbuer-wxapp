<template>
  <div>
    <div class="container">
      <home v-if="active==0"/>
      <schedule v-if="active==1"/>
      <square v-if="active==2"/>
      <community v-if="active==3"/>
      <mine v-if="active==4"/>
    </div>
    <div class="tabbar">
      <van-tabbar :active="active" @change="onChange">
        <van-tabbar-item>
          <image 
            slot="icon" 
            :src="icon.home.default" 
            mode="aspectFit"
            :style="'width:'+ iconWidth + ';height:'+ iconHeight + ';'" 
          />
          <image
            slot="icon-active"
            :src="icon.home.active"
            mode="aspectFit"
            :style="'width:'+ iconWidth + ';height:'+ iconHeight + ';'"
          />
          <p>
            首页
          </p>
        </van-tabbar-item>
        <van-tabbar-item>
          <image 
            slot="icon" 
            :src="icon.schedule.default" 
            mode="aspectFit"
            :style="'width:'+ iconWidth + ';height:'+ iconHeight + ';'"
          />
          <image
            slot="icon-active"
            :src="icon.schedule.active"
            mode="aspectFit"
            :style="'width:'+ iconWidth + ';height:'+ iconHeight + ';'"
          />
          <p>
            课表
          </p>
        </van-tabbar-item>
        <van-tabbar-item>
          <image 
            slot="icon" 
            :src="icon.square.default" 
            mode="aspectFit"
            :style="'width:'+ iconWidth + ';height:'+ iconHeight + ';'"
          />
          <image
            slot="icon-active"
            :src="icon.square.active"
            mode="aspectFit"
            :style="'width:'+ iconWidth + ';height:'+ iconHeight + ';'"
          />
          <p>
            广场
          </p>
        </van-tabbar-item>
        <van-tabbar-item>
          <image 
            slot="icon" 
            :src="icon.community.default" 
            mode="aspectFit"
            :style="'width:'+ iconWidth + ';height:'+ iconHeight + ';'"
          />
          <image
            slot="icon-active"
            :src="icon.community.active"
            mode="aspectFit"
            :style="'width:'+ iconWidth + ';height:'+ iconHeight + ';'"
          />
          <p>社区</p>
        </van-tabbar-item>
        <van-tabbar-item>
          <image 
            slot="icon" 
            :src="icon.mine.default" 
            mode="aspectFit"
            :style="'width:'+ iconWidth + ';height:'+ iconHeight + ';'"
          />
          <image
            slot="icon-active"
            :src="icon.mine.active"
            mode="aspectFit"
            :style="'width:'+ iconWidth + ';height:'+ iconHeight + ';'"
          />
          <p>
            我的
          </p>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import home from '@/pages/index/plate/home'
import mine from '@/pages/index/plate/mine'
import community from '@/pages/index/plate/community'
import schedule from '@/pages/index/plate/schedule'
import square from '@/pages/index/plate/square'

export default {
  data () {
    return {
      active: 0,
      iconWidth: '34px',
      iconHeight: '25px',
      icon: {
        home: {
          default: '../../static/images/tabbar/home.svg',
          active: '../../static/images/tabbar/home_a.svg'
        },
        schedule: {
          default: '../../static/images/tabbar/schedule.svg',
          active: '../../static/images/tabbar/schedule_a.svg'
        },
        square: {
          default: '../../static/images/tabbar/square.svg',
          active: '../../static/images/tabbar/square_a.svg'
        },
        community: {
          default: '../../static/images/tabbar/community.svg',
          active: '../../static/images/tabbar/community_a.svg'
        },
        mine: {
          default: '../../static/images/tabbar/mine.svg',
          active: '../../static/images/tabbar/mine_a.svg'
        }
      }
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

<style scoped>
.tabbar p{
  font-size: 8px;
}
</style>
