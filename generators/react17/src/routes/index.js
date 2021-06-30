import { lazy } from 'react'

const rootRoute = [
  {
    path: '/',
    breadcrumbName: '首页',
    component: lazy(() => import('@/pages/home/index')),
    children: [
      {
        path: '/material',
        breadcrumbName: '素材管理',
        component: lazy(() => import('@/pages/material/index')),
        children: [{ path: '/material/list', component: lazy(() => import('@/pages/material/list/index')) }]
      }
    ]
  }
]

export default rootRoute
