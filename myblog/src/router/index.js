import Vue from 'vue'
import Router from 'vue-router'
import myarticle from '../components/article/myarticle'
import loginreg from '../components/login/loginreg'
import login from '../components/login/login'
import reg from '../components/login/reg'
import articleinfo from '../components/article/articleinfo'
import writer from '../components/write/writer'
import photo from '../components/photo/photo'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/Article'},
    {path: '/Article', name: 'myarticle', component: myarticle},
    {path: '/article/info', name: 'articleinfo', component: articleinfo},
    {path: '/Study', name: 'Study', component: writer},
    {path: '/LOL', name: 'LOL', component: photo},
    {path: '/loginreg',
      name: 'loginreg',
      component: loginreg,
      children: [
        {path: '/login', component: login},
        {path: '/reg', component: reg}
      ]
    }
  ]
})
