<template>
  <div>
    <h3>Usuarios List</h3>
    <table class="striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Item Name</th>
          <th>Item Price</th>
          <th>Açao</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td>{{ usuario.first_name }}</td>
          <td>{{ usuario.last_name }}</td>
          <td>{{ usuario.email }}</td>
          <td>
            <a @click.prevent="goTo(usuario.id)">Visualizar</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'usuarios-list',
  methods: {
    goTo: function (id) {
      this.$router.push('/usuarios/' + id)
    }
  },
  computed: {
    usuarios () {
      return this.$store.state.usuario.usuariosList
    }
  },
  created () {
    this.$store.dispatch('getUsuarios')
  }
}
</script>

<style>
a {
  cursor: pointer;
}
</style>
