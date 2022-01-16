<template>
  <div>
    <div class="container">
      <home v-if="active==0"/>
      <schedule v-if="active==1"/>
      <square v-if="active==2"/>
      <community v-if="active==3"/>
      <mine v-if="active==4"/>
    </div>
    <van-tabbar :active="active" @change="onChange">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="notes-o">课表</van-tabbar-item>
      <van-tabbar-item icon="friends-o">广场</van-tabbar-item>
      <van-tabbar-item icon="volume-o">社区</van-tabbar-item>
      <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import home from './plate/home/'
import mine from './plate/mine/'
import community from './plate/community/'
import schedule from './plate/schedule/'
import square from './plate/square/'

export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    onChange (event) {
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

</style>
