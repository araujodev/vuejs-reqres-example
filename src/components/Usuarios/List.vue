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
        <tr>
          <td>Alvin</td>
          <td>Eclair</td>
          <td>$0.87</td>
          <td>
            <a @click="goTo(1)">Visualizar</a>
          </td>
        </tr>
        <tr>
          <td>Alan</td>
          <td>Jellybean</td>
          <td>$3.76</td>
          <td>
            <a @click="goTo(1)">Visualizar</a>
          </td>
        </tr>
        <tr>
          <td>Jonathan</td>
          <td>Lollipop</td>
          <td>$7.00</td>
          <td>
            <a @click="goTo(1)">Visualizar</a>
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
  }
}
</script>

<style>
a {
  cursor: pointer;
}
</style>
