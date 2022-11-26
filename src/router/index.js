import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ChooseRoleView from "@/components/ChooseRoleView";
import dogWalkerRegisterView from "@/Register/DogWalkerRegisterView";
import dogOwnerRegisterView from "@/Register/DogOwnerRegisterView";
import succesfulRegisterView from "@/components/SuccesfulRegisterView";
import dogOwnerProfileView from "@/profiles/DogOwnerProfileView";
import dogWalkerProfileView from "@/profiles/DogWalkerProfileView";



Vue.use(VueRouter)

const routes = [
  {
    path: '/walker-profile',
    name: 'DogWalkerProfileView',
    component: dogWalkerProfileView

  },

  {
    path: '/owner-profile',
    name: 'DogOwnerProfileView',
    component: dogOwnerProfileView

  },

  {
    path: '/succes',
    name: 'succesfulRegister',
    component: succesfulRegisterView

  },
  {
    path: '/walker',
    name: 'dogWalkerRegister',
    component: dogWalkerRegisterView

  },
  {
    path: '/owner',
    name: 'dogOwnerRegister',
    component: dogOwnerRegisterView

  },
  {
    path: '/chose',
    name: 'chooseRole',
    component: ChooseRoleView

  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
