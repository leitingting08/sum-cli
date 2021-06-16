<template>
    <div class="home">
        <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from 'vue'

export default defineComponent({
    name: 'Home',
    setup() {
        const instance = getCurrentInstance()
        const tableData = ref([])
        const getData = async () => {
            const res = await instance?.appContext.config.globalProperties.$request('get', '/api/user/personList', {})
            tableData.value = res
        }
        getData()
        return {
            tableData
        }
    }
})
</script>
