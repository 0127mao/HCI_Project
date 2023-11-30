<template>
    <div>
        <div style="margin-top: 30px">
            <el-radio-group v-model="radio1">
                <el-radio :label="1">全部</el-radio>
                <el-radio :label="2">男生</el-radio>
                <el-radio :label="3">女生</el-radio>
            </el-radio-group>
        </div>
        <div style="margin-top: 30px">
            <el-radio-group v-model="radio2">
                <el-radio :label="1">全部</el-radio>
                <el-radio :label="2">玄幻小说</el-radio>
                <el-radio :label="3">修真小说</el-radio>
                <el-radio :label="4">都市小说</el-radio>
                <el-radio :label="5">历史小说</el-radio>
                <el-radio :label="6">玄幻小说</el-radio>
            </el-radio-group>
        </div>
        <div style="margin-top: 30px">
            <el-radio-group v-model="radio3">
                <el-radio :label="1">全部</el-radio>
                <el-radio :label="2">已完结</el-radio>
                <el-radio :label="3">连载中</el-radio>
            </el-radio-group>
        </div>
        <div style="margin-top: 30px">
            <el-radio-group v-model="radio4">
                <el-radio :label="1">全部</el-radio>
                <el-radio :label="2">30万以下</el-radio>
                <el-radio :label="3">30-50万</el-radio>
                <el-radio :label="4">50-100万</el-radio>
                <el-radio :label="5">100-200万</el-radio>
                <el-radio :label="6">200万以上</el-radio>
            </el-radio-group>
        </div>

    </div>
</template>
  
<script>
    export default {
        name: 'Radio',
        data () {
            return {
            radio1: 1,
            radio2: 1,
            radio3: 1,
            radio4: 1
            };
        }
    }
</script>