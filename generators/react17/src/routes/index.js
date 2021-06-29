import { lazy } from 'react'

const checkLoginState = (replaceState) => {
    console.log('route to login page here')
}

const rootRoute = {
    path: '/',
    breadcrumbName: '首页',
    onEnter: (nextState, replaceState) => {
        // 检查登录状态
        checkLoginState(replaceState)
    },
    component: lazy(() => import('@/pages/home/index')),
    childRoutes: [
        {
            path: '/route',
            component: lazy(() => import('@/pages/home/index')),
            childRoutes: [{ path: '/route/subroute', component: lazy(() => import('@/pages/page1/index')) }]
        },
        // 这里相当于redirect, 放404
        {
            path: '*',
            onEnter: (nextState, replaceState) => {
                replaceState('/', null)
            }
        }
    ]
}

export default rootRoute
