<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper container">
        <a href="#" class="brand-logo">VueJS Example</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="#/usuarios">Usuarios</a>
          </li>
          <li>
            <a href="#/usuarios/novo">Novo Usuario</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col s12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  styles: [
    require('materialize-css/dist/css/materialize.min.css'),
    require('ionicons/dist/css/ionicons.min.css')
  ]
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
