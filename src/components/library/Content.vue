<script setup>
import BookRow from './BookRow.vue';
</script>


<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="最热" name="first">
            <book-row></book-row>
        </el-tab-pane>
        <!-- <el-tab-pane label="最新" name="second">
            <book-row></book-row>
        </el-tab-pane> -->
    </el-tabs>
</template>

<script>
export default {
    components: { BookRow },
    name: 'Content',
    data() {
        return {
            activeName: 'first'
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
};
</script>

<style scoped>
.el-tabs {
    margin-top: 50px
}
</style>
