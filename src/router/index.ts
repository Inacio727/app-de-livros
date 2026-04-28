import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: () => import('@/views/CadastroPage.vue')
  },
  {
    path: '/recuperar',
    name: 'Recuperar',
    component: () => import('@/views/RecuperarSenhaPage.vue')
  },
  {
    path: '/detalhes/:id',
    name: 'Detalhes',
    component: () => import('@/views/DetalhesLivroPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
