import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
import { HashRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

const RouteApp = () => {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    )
}

const render = (Component) => {
    ReactDOM.render(<Component />, document.querySelector('#root'))
}

render(RouteApp)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
