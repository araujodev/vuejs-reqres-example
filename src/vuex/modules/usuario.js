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
    },
    newUsuario (context, data) {
      Vue.http.post('api/users', data)
    },
    updateUsuario (context, params) {
      Vue.http.put('api/users/' + params.id, params.data)
    },
    removeUsuario (context, id) {
      Vue.http.delete('api/users/' + id)
    }
  }
}
