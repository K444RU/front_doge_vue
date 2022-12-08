import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


import dogOwnerProfileView from "@/views/OwnerProfileView";
import dogWalkerProfileView from "@/views/WalkerProfileView";
import profileRegisterView from "@/views/register/ProfileRegisterView";
import DogRegisterView from "@/views/register/DogRegisterView";
import testview from "@/views/testview";
import FindDogWalkerPageView from "@/views/FindWalkerView";
import AddWalkingServiceView from "@/views/register/AddWalkingServiceView";
import WalkerActiveServicesView from "@/views/register/WalkerActiveServicesView";
import FoundWalkingServicesView from "@/views/register/FoundWalkingServicesView";
import DogWalkerInformationView from "@/views/register/DogWalkerInformationView";


Vue.use(VueRouter)

const routes = [
    {
        path: '/found/service',
        name: 'FoundWalkingServicesRoute',
        component: FoundWalkingServicesView

    },
    {
        path: '/dogwalker/information',
        name: 'DogWalkerInformationRoute',
        component: DogWalkerInformationView,
        props: true

    },
    {
        path: '/active/service',
        name: 'WalkerActiveServicesRoute',
        component: WalkerActiveServicesView

    },
    {
        path: '/add/service',
        name: 'AddWalkingServiceRoute',
        component: AddWalkingServiceView

    },
    {
        path: '/find/dogwalker',
        name: 'FindDogWalkerPageRoute',
        component: FindDogWalkerPageView

    },
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
