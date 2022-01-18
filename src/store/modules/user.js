const state = {
  info: '',
  token: ''
}

const mutations = {
  updateUserInfo (state, data) {
    state.info = data
  },
  updateUserToken (state, data) {
    state.token = data
  }
}

export default {
  state,
  mutations
}
