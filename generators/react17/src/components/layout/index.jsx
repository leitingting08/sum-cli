import React, { useState, useEffect } from 'react'
import ProLayout, { PageContainer } from '@ant-design/pro-layout'
import MENU from './menu'
import { Layout } from 'antd'
import { Link, useLocation } from 'react-router-dom'
const { Content } = Layout

const BaseLayout = (props) => {
  const { accountInfo, children } = props
  const [ready, setReady] = useState(false)
  const [pathname, setPathname] = useState('/')

  const location = useLocation()
  useEffect(() => {
    setReady(true)
    setPathname(location.pathname)
  }, [location.pathname, pathname])

  const settings = {
    navTheme: 'light',
    layout: 'mix',
    collapsedWidth: 80,
    contentWidth: 'Fluid',
    fixedHeader: false,
    fixSiderbar: false,
    collapsedButtonRender: false,
    menu: {
      locale: true
    },
    headerHeight: 64,
    siderWidth: 150,
    title: '',
    location: {
      pathname
    },
    primaryColor: '#1890ff',
    breakpoint: false,
    splitMenus: false,
    openKeys: false,
    selectedKeys: [pathname.split('/')[2]],
    rightContentRender: () => (
      <div>
        <span style={{ color: '#fff' }}>{accountInfo?.name}</span>
      </div>
    )
  }

  return (
    ready && (
      <div
        style={{
          height: '100vh'
        }}
      >
        <ProLayout
          {...settings}
          menuDataRender={() => MENU}
          menuItemRender={(item, dom) => (
            <Link key={item.key} to={item.path}>
              {dom}
            </Link>
          )}
        >
          <PageContainer />
          <Content className="content_container">{children}</Content>
        </ProLayout>
      </div>
    )
  )
}

export default BaseLayout
