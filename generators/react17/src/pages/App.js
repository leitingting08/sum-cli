import React, { useState } from 'react'
import BaseLayout from '@/components/layout/index'
import routes from '@/routes'
import '@/styles/variable.less'

const App = () => {
    const [currentAccount] = useState({ name: '张三', email: 'test@email.com' })
    return <BaseLayout accountInfo={currentAccount} routes={routes} />
}

export default App
