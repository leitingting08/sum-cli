<template>
    <div class="home">
        <sum-layout :settings="settings">
          <div class="sum-breadcrumb">
              <el-breadcrumb separator=">">
                  <el-breadcrumb-item v-for="item in breadcrumbList" :to="{ path: item.path }" :key="item.name">{{item.name}}</el-breadcrumb-item>
              </el-breadcrumb>
          </div>
           <slot />
        </sum-layout>
    </div>
</template>

<script lang="tsx">
import { defineComponent, reactive, ref, watch } from 'vue'
import SumLayout from '@sum-ui/layout'
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'Home',
    components: { SumLayout, ElBreadcrumb, ElBreadcrumbItem },
    setup() {
        
        const settings = reactive({
            headerTitle: () => (
                <div class="title">
                    <div>我是logo</div>
                    <div>测试标题</div>
                </div>
            ),
            headerRight: () => <div>admin</div>,
            menuData: [
                {
                    title: '素材管理', // 标题
                    icon: 'el-icon-s-goods', // icon
                    auth: 'menu', // 权限
                    path: '/menu', // 路径
                    children: [
                        // 子菜单
                        {
                            title: '素材列表',
                            auth: 'menu/data',
                            path: '/menu/data'
                        }
                    ]
                }
            ],
            headerStyles: {
                backgroundColor: '#545c64',
                padding: '10px',
                color: '#fff'
            },
            menuProps: {
                backgroundColor: '#f7f6f2',
                textColor: '#333',
                activeTextColor: '#409eff',
                defaultActive: '0-0',
                defaultOpeneds: [0]
            },
            triggerCollapse: true,
            footer: '@copyRight by footer' // 字符串或者render函数
        })
        const breadcrumbList = ref([])
        const router = useRouter()
        const updateBread = (arr, routeValue) => {
          arr.forEach(item=>{
              if(routeValue.includes(item.path)) {
                breadcrumbList.value.push({name:item.title, path: item.path})
              }
              if(item.children) {
                updateBread(item.children, routeValue)
              }
            })
        }
        watch(
          () => router.currentRoute.value.path,
          (newValue) => {
            breadcrumbList.value = []
            newValue && newValue !== '/' && updateBread(settings.menuData, newValue)
          },
          { immediate: true }
        );
        
        return {
            settings,
            breadcrumbList
        }
    }
})
</script>

<style lang="scss" scoped>
.sum-breadcrumb {
  padding-bottom: 20px;
}
</style>
