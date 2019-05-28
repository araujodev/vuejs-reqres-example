<script>
export default {
  name: 'usuarios-create',
  data: function () {
    return {
      sub_title: 'Criando Usuario',
      usuario: {
      }
    }
  },
  methods: {
    save () {
      this.$store.dispatch('newUsuario', this.usuario).then(() => {
        this.$router.push('/usuarios')
      })
    }
  },
  template: require('./form.html')
}
</script>

<style>
</style>
