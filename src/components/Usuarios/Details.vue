<template>
  <table>
    <thead>
      <tr>
        <th>Avatar</th>
        <th>ID</th>
        <th>Email</th>
        <th>Primeiro Nome</th>
        <th>Ultimo Nome</th>
        <th>Açao</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          <img v-bind:src="usuario.avatar" alt>
        </td>
        <td>{{ usuario.id }}</td>
        <td>{{ usuario.email }}</td>
        <td>{{ usuario.first_name }}</td>
        <td>{{ usuario.last_name }}</td>
        <td>
          <a v-bind:href="'#usuarios/' + usuario.id + '/editar'">Editar</a>
          <br>
          <a @click.prevent="remove(usuario.id)">Remover</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'usuarios-detail',
  methods: {
    remove: function (id) {
      this.$router.push('/usuarios')
    }
  },
  computed: {
    usuario () {
      return this.$store.state.usuario.usuarioDetail
    }
  },
  created () {
    this.$store.dispatch('getUsuario', this.$route.params.id)
  }
}
</script>

<style>
table {
  margin-top: 50px;
}
a {
  cursor: pointer;
}
</style>
