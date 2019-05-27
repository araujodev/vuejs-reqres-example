import Vue from 'vue'

export default {
  state: {
    usuariosList: []
  },
  mutations: {
    updateUsuariosList (state, data) {
      state.usuariosList = data
    }
  },
  actions: {
    getUsuarios (context) {
      Vue.http.get('api/users').then(response => {
        context.commit('updateUsuariosList', response.data.data)
      })
    }
  }
}
