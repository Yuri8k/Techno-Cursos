import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contato from '../views/Contato.vue'
import Cursos from '../views/Cursos.vue'
import Curso from '../views/Curso.vue'
import Aula from '../views/Aula.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contato',
    name: 'contato',
    component: Contato
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: Cursos
  },
  {
    path: "/cursos/:curso",
    name: "curso",
    component: Curso,
    props: true,
    children: [
      {
        path: ":aula",
        name: "aula",
        component: Aula,
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
