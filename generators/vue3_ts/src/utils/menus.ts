const menus = [
    {
        key: 'menu1',
        title: '壹级菜单',
        icon: 'el-icon-message',
        path: '/',
        children: [
            {
                key: 'submenu1',
                title: '贰级菜单',
                path: '/about'
            }
        ]
    },
    {
        key: 'menu2',
        title: '壹级菜单夹',
        icon: 'el-icon-menu',
        path: '/',
        children: [
            {
                key: 'submenu2',
                title: '贰级菜单夹',
                path: '/'
            }
        ]
    }
]

export default menus
