<template>
    <sum-table
        border
        :columns="columns"
        :data="tableData"
        :pagenation="pagenation"
        @pagenation-change="handlePagenationChange"
        @select-change="handleSelectionChange"
    >
        <template #operation="scope">
            <el-link type="primary" @click="removeItem(scope.row)" class="mr20"> 暂停 </el-link>
            <el-link type="primary" @click="removeItem(scope.row)"> 删除 </el-link>
        </template>
    </sum-table>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import SumTable from '@sum-ui/table'
import useCurrentInstance from '@/utils/useCurrentInstance'

export default defineComponent({
    name: 'Home',
    components: { SumTable },
    setup() {
        const columns = ref([
            {
                type: 'selection',
                width: 60
            },
            {
                label: '文件名',
                prop: 'filename'
            },
            {
                label: '大小',
                prop: 'filesize'
            },
            {
                label: '状态',
                prop: 'status'
            },
            {
                label: '操作',
                slot: 'operation'
            }
        ])
        const pagenation = reactive({
            currentPage: 1,
            pageSize: 10,
            total: 100,
            background: true,
            layout: 'total, sizes, prev, pager, next, jumper'
        })
        const handlePagenationChange = (data: any) => {
            console.log(data)
        }

        const handleSelectionChange = (data: any) => {
            console.log(data)
        }
        // 单个删除
        const removeItem = (row: { id: any }) => {
            // 执行删除操作
            console.log('删除', row, row.id)
        }
        const { proxy } = useCurrentInstance()
        const tableData = ref([])
        const getData = async () => {
            const res = await proxy.$request('get', '/file/list')
            tableData.value = res.data
        }
        getData()
        return {
            columns,
            pagenation,
            handlePagenationChange,
            handleSelectionChange,
            removeItem,
            tableData
        }
    }
})
</script>
