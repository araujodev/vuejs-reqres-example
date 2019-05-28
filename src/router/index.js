import HelloWorld from '@/components/HelloWorld'
import UsuariosList from '@/components/Usuarios/List'
import UsuariosDetail from '@/components/Usuarios/Details'
import UsuariosNovo from '@/components/Usuarios/Create'
import UsuariosEditar from '@/components/Usuarios/Edit'

const routes = [
  { path: '/', name: 'HelloWorld', component: HelloWorld },
  { path: '/usuarios', component: UsuariosList },
  { path: '/usuarios/novo', component: UsuariosNovo },
  { path: '/usuarios/:id', component: UsuariosDetail },
  { path: '/usuarios/:id/editar', name: 'usuario.edit', component: UsuariosEditar }
]

export default routes
