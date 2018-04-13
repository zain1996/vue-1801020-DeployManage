import Vue from 'vue'
import Router from 'vue-router'
import ApiList from '@/components/ApiList'
import BuildLog from '@/components/BuildLog'
import DeployLog from '@/components/DeployLog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ApiList',
      component: ApiList
    },
    {
      path: '/BuildLog',
      name: 'BuildLog',
      component: BuildLog
    },
    {
      path: '/DeployLog',
      name: 'DeployLog',
      component: DeployLog
    }
  ]
})
