import React, { useState, Suspense } from 'react'
import BaseLayout from '@/components/layout/index'
import '@/styles/variable.less'

const App = (props) => {
    const { children } = props
    const [currentAccount] = useState({ name: '张三', email: 'test@email.com' })
    return (
        <Suspense fallback={<div>Loading</div>}>
            <BaseLayout accountInfo={currentAccount}>{children}</BaseLayout>
        </Suspense>
    )
}

export default App
