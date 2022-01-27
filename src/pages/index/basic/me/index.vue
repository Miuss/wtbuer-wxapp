<template>
  <div>
    123
  </div>
</template>

<script>
import { wxlogin, getUserProfile, request } from '@/utils/fetch'

export default {
  data () {
    return {

    }
  },
  computed: {
    authenticated () {
      return this.$store.getters.authenticated
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

        if (!res.code) {
          this.$store.commit('UPDATE_USER', res.data)
          mpvue.setStorageSync('token', res.data.token)
        } else {
          throw new Error('服务器处理错误，请重试')
        }
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style>

</style>