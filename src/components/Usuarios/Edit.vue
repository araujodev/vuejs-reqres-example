<script>
export default {
  name: 'usuarios-edit',
  data: function () {
    return {
      sub_title: 'Editando Usuario'
    }
  },
  methods: {
    save () {
      this.$store.dispatch('updateUsuario', this.usuario).then(() => {
        this.$router.push('/usuarios')
      })
    }
  },
  computed: {
    usuario () {
      return this.$store.state.usuario.usuarioDetail
    }
  },
  created () {
    this.$store.dispatch('getUsuario', this.$route.params.id)
  },
  template: require('./form.html')
}
</script>

<style>
</style>
