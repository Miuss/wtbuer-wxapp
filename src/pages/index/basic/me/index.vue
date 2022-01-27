<template>
  <div>
    <div class="login-box">
      <div class="logo"><image src="/assets/image/logo.png"></image></div>
      <div class="title">武工商课表</div>
      <div class="sub-title">武汉工商学院课表小程序 😋</div>
      <div class="sub-title">咳咳，说点啥?</div>
      <div class="sub-title">我在划水，别打扰我 💦</div>
      <div class="sub-title">Emmmm，我说点啥？</div>
      <div class="sub-title">开发君：🙇🏻‍别嫁人，我努力！</div>
      <div class="sub-title">由人工智能学院学生运营 🤖</div>
    </div>
    <div class="login-action" style="bottom: 20px;">
      <van-button type="primary" @click="login">微信账号快速登录</van-button>
      <div class="login-tips">提示：登录后绑定教务账号才能查阅课表噢~</div>
    </div>
  </div>
</template>

<script>
import { wxlogin, getUserProfile, request } from '@/utils/fetch'

export default {
  data () {
    return {

    }
  },
  methods: {
    async login () {
      try {
        const infoResult = await getUserProfile()
        const loginResult = await wxlogin()

        if (infoResult.userInfo === '' || loginResult.code === '') {
          throw new Error('登录失败，请重试')
        }

        const res = await request({
          url: '/user/login',
          method: 'POST',
          data: {
            code: loginResult.code,
            userInfo: JSON.stringify(infoResult.userInfo)
          }
        })

        this.$store.commit('updateUserToken', res.token)
        console.log(this.$store)
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style>

</style>