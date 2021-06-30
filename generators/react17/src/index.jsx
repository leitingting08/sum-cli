import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import routes from '@/routes'
import App from '@/pages/App'
import NotFound from '@/pages/notFound'
import { StoreProvider } from '@/store'
import reportWebVitals from '@/reportWebVitals'

const createRoute = (routesArr = []) => {
  return routesArr.reduce((pre, cur) => {
    return [...pre, cur, ...(cur.children ? createRoute(cur.children) : [])]
  }, [])
}

const createBasicRoute = (route, index) => {
  //  最基础的Router 用法
  const { path, component: Component } = route
  return (
    <Route
      exact
      key={index}
      path={path}
      component={(props) => {
        return (
          <App>
            <Component {...props} />
          </App>
        )
      }}
    />
  )
}

const RouteApp = () => {
  return (
    <StoreProvider>
      <HashRouter>
        <Switch>
          {createRoute(routes).map((route, index) => createBasicRoute(route, index))}
          <Route path="/notFound" component={NotFound} />
          <Redirect to="/notFound" />
        </Switch>
      </HashRouter>
    </StoreProvider>
  )
}

const render = (Component) => {
  ReactDOM.render(<Component />, document.querySelector('#app'))
}

render(RouteApp)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
