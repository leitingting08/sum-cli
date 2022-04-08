<template>
    <Layout>
        <router-view />
    </Layout>
</template>

<script>
import { defineComponent } from 'vue'
import Layout from '@/components/Layout.vue'
export default defineComponent({
    components: { Layout }
})
</script>
