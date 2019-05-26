import HelloWorld from '@/components/HelloWorld'
import UsuariosList from '@/components/Usuarios/List'
import UsuariosDetail from '@/components/Usuarios/Details'

const routes = [
  { path: '/', name: 'HelloWorld', component: HelloWorld },
  { path: '/usuarios', component: UsuariosList },
  { path: '/usuarios/:id', component: UsuariosDetail }
]

export default routes
