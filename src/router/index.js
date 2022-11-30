import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ChooseRoleView from "@/components/ChooseRoleView";
import succesfulRegisterView from "@/components/SuccesfulRegisterView";
import dogOwnerProfileView from "@/profiles/DogOwnerProfileView";
import dogWalkerProfileView from "@/profiles/DogWalkerProfileView";
import profileRegisterView from "@/Register/ProfileRegisterView";
import DogRegisterView from "@/Register/DogRegisterView";
import testview from "@/views/testview";




Vue.use(VueRouter)

const routes = [
  {
    path: '/dog/register',
    name: 'DogRegisterView',
    component: DogRegisterView

  },
  {
    path: '/test',
    name: 'testview',
    component: testview

  },
  {
    path: '/register',
    name: 'profileRegisterView',
    component: profileRegisterView

  },
  {
    path: '/walker-profile',
    name: 'DogWalkerProfileRoute',
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
