import React, { useState, Suspense } from 'react'
import BaseLayout from '@/components/layout/index'
import routes from '@/routes'
import '@/styles/variable.less'

const App = () => {
    const [currentAccount] = useState({ name: '张三', email: 'test@email.com' })
    return (
        <Suspense fallback={<div>Loading</div>}>
            <BaseLayout accountInfo={currentAccount} routes={routes} />
        </Suspense>
    )
}

export default App
