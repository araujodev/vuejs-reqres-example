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
          <img
            src="https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
            alt="Avatar"
          >
        </td>
        <td>2</td>
        <td>janet.weaver@reqres.in</td>
        <td>Janet</td>
        <td>Weaver</td>
        <td>
          <a href="#/contas/1/editar">Editar</a>
          <br>
          <a @click.prevent="remove(1)">Remover</a>
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
