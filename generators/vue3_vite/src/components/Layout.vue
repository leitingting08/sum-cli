<template>
    <el-container class="container">
        <el-header class="header">
            <el-row align="middle" justify="space-between" type="flex" class="nav">
                <div>
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTMuNzEgMzgiPjxkZWZzPjxzdHlsZT4uY2xzLTEsLmNscy0ye2ZpbGw6IzQwOWVmZjt9LmNscy0xe2ZpbGwtcnVsZTpldmVub2RkO308L3N0eWxlPjwvZGVmcz48dGl0bGU+6LWE5rqQIDE8L3RpdGxlPjxnIGlkPSLlm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYIgMiI+PGcgaWQ9IuWbvuWxgl8xLTIiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiPjxwYXRoIGlkPSJTaGFwZS1Db3B5IiBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDIsMjYuMTZzLjI4LDAsLjgyLDBhLjcyLjcyLDAsMCwxLC42OS40MXMxLjA4LDIsMS4zNywyLjQ4LDAsLjQyLS4xMi40MWgwcy0uMzEsMC0zLjQ1LDBhNC45Myw0LjkzLDAsMCwxLTQuNTQtNC41NHYtN0gxMzQuM1YxNS4yOGMwLS4zNi40MS0uNDEuNDEtLjQxaDIuMDdWMTIuMjVhLjYuNiwwLDAsMSwuNDEtLjU1bDIuMy0uNjZjLjM0LS4xLjU5LDAsLjU5LjM1VjE1aDMuNThjLjM0LDAsLjQxLjQxLjQxLjQxVjE4aC00djYuMDZjMCwxLjc2LDEuOTMsMi4wNywxLjkzLDIuMDdabS0xMC42LDNoLTIuMmMtLjQzLDAtLjQxLS41NS0uNDEtLjU1VjE4LjQ1YzAtLjYyLS44My0uODMtLjgzLS44M2gtNC41NGMtLjY4LDAtLjY5LjgzLS42OS44M1YyOC43N2EuNDEuNDEsMCwwLDEtLjQxLjQyaC0yLjJjLS40OCwwLS40MS0uNTUtLjQxLS41NVYxNS44M2MwLTEsMS4yNC0xLjI0LDEuMjQtMS4yNGg5LjYzYzEsMCwxLjIzLDEuMjQsMS4yMywxLjI0VjI4LjVjMCwuNzItLjQxLjY5LS40MS42OVpNMTE1LjczLDIzLjRIMTA3LjJ2Mi4wN2MwLC43NCwxLDEsMSwxSDExNWExLjE2LDEuMTYsMCwwLDEsLjgyLjQycy42MSwxLjI1LjgzLDEuNzktLjQxLjU1LS40MS41NUgxMDZjLTEuMjQsMC0xLjUxLTEuNTItMS41MS0xLjUyVjE2YzAtLjY3LDEtMSwxLTFoMTAuMzJjMSwwLDEuMjQsMS4yMywxLjI0LDEuMjN2NS45M2MwLDEtMS4yNCwxLjIzLTEuMjQsMS4yM1ptLTEuNTItNC45NXMtLjA4LS42OS0uNjgtLjY5aC01LjY1cy0uNjguMTgtLjY4LjY5VjIwYS42OS42OSwwLDAsMCwuNjguNjloNS42NWEuOS45LDAsMCwwLC42OC0uODNWMTguNDVaTTEwMS4yOCwyOS4xOWgtMi4yYy0uMjksMC0uNDEtLjQyLS40MS0uNDJWMTguNDVjMC0uNjQtLjgzLS44My0uODMtLjgzSDk1Ljc4Yy0uNTgsMC0uNjkuODMtLjY5LjgzVjI4Ljc3YzAsLjM1LS40MS40Mi0uNDEuNDJoLTIuMmMtLjMxLDAtLjQyLS40Mi0uNDItLjQyVjE4LjQ1YzAtLjY2LS44Mi0uODMtLjgyLS44M0g4OS4xN2MtLjYzLDAtLjY4LjgzLS42OC44M1YyOC43N2EuMzkuMzksMCwwLDEtLjQyLjQyaC0yLjJhLjQxLjQxLDAsMCwxLS40MS0uNDJWMTUuNjljMC0uNzUsMS4xLTEuMSwxLjEtMS4xaDEzLjc2YzEuMSwwLDEuMzcsMS4zOCwxLjM3LDEuMzh2MTIuOGMwLC40OC0uNDEuNDItLjQxLjQyWm0tMjAtNS43OUg3Mi44djIuMDdjMCwuNzQsMSwxLDEsMWg2Ljg4YTEuMTksMS4xOSwwLDAsMSwuODMuNDJzLjYsMS4yNS44MiwxLjc5LS40MS41NS0uNDEuNTVINzEuNTZjLTEuMjQsMC0xLjUxLTEuNTItMS41MS0xLjUyVjE2YzAtLjY3LDEtMSwxLTFIODEuMzNjMSwwLDEuMjQsMS4yMywxLjI0LDEuMjN2NS45M2MwLDEtMS4yNCwxLjIzLTEuMjQsMS4yM1ptLTEuNTEtNC45NXMtLjA5LS42OS0uNjktLjY5SDczLjQ5cy0uNjkuMTgtLjY5LjY5VjIwYS42OS42OSwwLDAsMCwuNjkuNjloNS42NGEuOTEuOTEsMCwwLDAsLjY5LS44M1YxOC40NVpNNjgsMjkuMTlINjIuNzZhNC4zNSw0LjM1LDAsMCwxLTQuMTMtNGMwLTMuOTEsMC0xNi4xLDAtMTYuMWgyLjQ4YS43OS43OSwwLDAsMSwuODIuODJWMjQuMzdBMi41OCwyLjU4LDAsMCwwLDYzLjg2LDI2aDIuMnMuNzItLjIzLDEuMjQuNjlsMS4xLDEuOTNzLjA4LjU1LS40MS41NVptLTI2LjU2LS44M1YxMC4xOWExLDEsMCwwLDEsLjY5LTFINTUuMDVjLjczLDAsLjQyLjgzLjQyLjgzcy0uNDEsMS4xMi0uNjksMS42NWExLDEsMCwwLDEtLjgzLjU1SDQ1LjU2YS43Ny43NywwLDAsMC0uODMuNjl2NC41NGg5LjVjLjU1LDAsLjI3LjY5LjI3LjY5cy0uNzEsMS41Mi0xLDEuOTNhMS4wNSwxLjA1LDAsMCwxLS44My40MWgtOHY0LjgyYS45MS45MSwwLDAsMCwuNjkuODNoOC44MWEuODUuODUsMCwwLDEsLjgyLjQxbDEuMjQsMS45M2MuMzcuNTYtLjE0LjY5LS4xNC42OUg0Mi4yNkM0MS42OCwyOS4xOSw0MS40MywyOC4zNiw0MS40MywyOC4zNlptLTguMTQtMS4xNGMwLDEuNTctLjgzLDEuOTMtLjgzLDEuOTNTMTguMzIsMzcuMzEsMTcuNCwzNy44M2ExLjY4LDEuNjgsMCwwLDEtMS41MiwwUzEuMDksMjkuMjUuNTUsMjguODdhMS4yOSwxLjI5LDAsMCwxLS41NS0xczAtMTcsMC0xNy43OFMxLDguNzYsMSw4Ljc2TDE1Ljc1LjIxYTIsMiwwLDAsMSwxLjc5LDBTMzAuNiw3LjgsMzIsOC42MmEyLjA4LDIuMDgsMCwwLDEsMS4yNSwyLjA2czAsMTUuMDcsMCwxNi41NFptLTUuOS0xN2MtMy0xLjc0LTEwLjE2LTUuODctMTAuMTYtNS44N2ExLjU4LDEuNTgsMCwwLDAtMS40MSwwTDQuMjIsMTFzLS43Ny40Ni0uNzYsMS4wOFMzLjQ2LDI2LDMuNDYsMjZhMSwxLDAsMCwwLC40My43NWMuNDMuMywxMiw3LDEyLDdhMS4zLDEuMywwLDAsMCwxLjE5LDBjLjcyLS40LDExLjgyLTYuNzksMTEuODItNi43OXMuNjUtLjI4LjY1LTEuNTFjMC0uMzYsMC0xLjc0LDAtMy40N0wxNi41MywyOS44OHYtM2EzLDMsMCwwLDEsMS0yLjA3bDExLjU2LTdhMi40OSwyLjQ5LDAsMCwwLC41NS0xLjQ2YzAtMS4yNywwLTIuMzcsMC0zLjA3TDE2LjUzLDIxLjJWMThhMi4xNywyLjE3LDAsMCwxLC44My0xLjc5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE1MC4zMiwxMS4yMWgtMi4yNHYtNWMwLS4xMS4xMi0uMjEuMjktLjI0bDEuNDQtLjI2Yy4yNiwwLC41MS4wNy41MS4yNFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDguMDgsOWgyLjI0djUuMTFjMCwuMTEtLjExLjIxLS4yOC4yNWwtMS40NS4yNmMtLjI2LjA1LS41MS0uMDctLjUxLS4yNFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xNDUuMDksOWg4LjIyYS40LjQsMCwwLDEsLjQuNHYxLjg1YTAsMCwwLDAsMSwwLDBoLTlhMCwwLDAsMCwxLDAsMFY5LjM2QS40LjQsMCwwLDEsMTQ1LjA5LDlaIi8+PC9nPjwvZz48L3N2Zz4="
                        alt="element-logo"
                        class="nav-logo"
                    />
                </div>
                <div>
                    <el-dropdown>
                        <i class="el-icon-setting setting"></i>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>查看</el-dropdown-item>
                                <el-dropdown-item>新增</el-dropdown-item>
                                <el-dropdown-item>删除</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <span class="name">王小虎</span>
                </div>
            </el-row>
        </el-header>
        <el-container>
            <el-aside width="200px"
                ><el-menu :default-openeds="defaultOpens" class="menu">
                    <el-submenu :index="key" v-for="{ key, title, icon, children } in menus" :key="key">
                        <template #title><i :class="icon"></i>{{ title }}</template>
                        <template v-if="children && children.length">
                            <el-menu-item-group v-for="sub in children" :key="sub.key">
                                <router-link :to="sub.path"
                                    ><el-menu-item :index="sub.key">{{ sub.title }}</el-menu-item></router-link
                                >
                            </el-menu-item-group>
                        </template>
                    </el-submenu>
                </el-menu></el-aside
            >
            <el-container>
                <el-main>
                    <el-breadcrumb separator="/" class="breadcrumb">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item v-for="{ path, title } in breadcrumbs" :to="{ path: path }" :key="path">{{
                            title
                        }}</el-breadcrumb-item>
                    </el-breadcrumb>
                    <slot />
                </el-main>
                <el-footer class="center">@copyright by Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script lang="ts">
import { defineComponent, watch, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import menus from '@/utils/menus'

export default defineComponent({
    setup() {
        const route = useRoute()
        let breadcrumbs: { path: string; title: string }[] = []
        let data = reactive({
            defaultOpens: ['menu1'],
            breadcrumbs,
            menus
        })

        watch(
            () => route.path,
            (newValue, oldValue) => {
                let arr: { path: string; title: string }[] = []
                newValue !== oldValue &&
                    menus.forEach((item) => {
                        item.children.forEach(({ title, path }) => {
                            if (path === newValue) {
                                arr.push({ path: item.path, title: item.title })
                                arr.push({ path, title })
                            }
                        })
                    })
                data.breadcrumbs = arr
            }
        )

        return {
            ...toRefs(data)
        }
    }
})
</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    .header {
        background-color: $blue;
        font-size: 12px;
        .nav {
            height: 100%;
        }
        .nav-logo {
            height: 40px;
        }
        .setting {
            margin-right: 15px;
            color: #fff;
        }
        .name {
            color: #fff;
        }
    }
    .menu {
        height: 100%;
    }
    .breadcrumb {
        margin-bottom: 20px;
    }
}
</style>
