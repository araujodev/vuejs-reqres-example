import HelloWorld from '@/components/HelloWorld'
import UsuariosList from '@/components/Usuarios/List'

const routes = [
  { path: '/', name: 'HelloWorld', component: HelloWorld },
  { path: '/usuarios', component: UsuariosList }
]

export default routes
