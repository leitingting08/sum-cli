const MENU = [
    {
        name: '菜单1',
        key: 'menu1',
        path: '/route',
        children: [
            {
                name: '子菜单1',
                key: 'submenu1',
                path: '/route/subroute'
            },
            {
                name: '子菜单2',
                key: 'submenu2',
                path: '/route/subroute'
            }
        ]
    },
    {
        name: '菜单2',
        key: 'home',
        path: '/'
    }
]

export default MENU
