<template>
    <el-card shadow="hover" style="width: 500px;height: 250px">
        <el-table :data="news" style="width: 500px;height: 250px" :show-header="false" stripe>
            <el-table-column
                    prop="name"
                    label="名称">

            </el-table-column>
            <el-table-column
                    prop="type"
                    label="类型"
                    width="70px">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="日期"
                    width="140px">
            </el-table-column>
        </el-table>

        <el-link type="primary" href="/" class="more-link">more >></el-link>
    </el-card>
</template>

<script>
    export default {
        name: "ListCard",
        props: ['news']
    }
</script>

<style scoped>
    .more-link {
        position: relative;
        left: 50%;
    }
</style>