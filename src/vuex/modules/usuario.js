import Vue from 'vue'

export default {
  state: {
    usuariosList: [],
    usuarioDetail: {}
  },
  mutations: {
    updateUsuariosList (state, data) {
      state.usuariosList = data
    },
    updateUsuarioDetail (state, data) {
      state.usuarioDetail = data
    }
  },
  actions: {
    getUsuarios (context) {
      Vue.http.get('api/users').then(response => {
        context.commit('updateUsuariosList', response.data.data)
      })
    },
    getUsuario (context, id) {
      Vue.http.get('api/users/' + id).then(response => {
        context.commit('updateUsuarioDetail', response.data.data)
      })
    }
  }
}
