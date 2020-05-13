import Vue from 'vue'
import Router from 'vue-router'
import profile from '../components/profile.vue'
import aboutpdf from '../components/aboutpdf.vue'
import aboutpdf1 from '../components/aboutpdf1.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'profile',
      component: profile
    },
    {
      path: '/pdf',
      name: 'aboutpdf',
      component: aboutpdf
    },
    {
      path: '/pdf1',
      name: 'aboutpdf1',
      component: aboutpdf1
    },


  ]

})
