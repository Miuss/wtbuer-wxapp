const state = {
  user: {},
  token: '',
  authenticated: false
}

const mutations = {

  UPDATE_USER (state, data) {
    state.user = data
    state.token = data.token
    state.authenticated = true
  },

  UPDATE_TOKEN (state, data) {
    state.token = data
  },

  CLEAR_USER (state) {
    state.user = {}
    state.token = ''
    state.authenticated = false
  }

}

export default {
  state,
  mutations
}
