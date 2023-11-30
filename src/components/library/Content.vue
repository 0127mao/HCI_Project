<script setup>
import BookRow from './BookRow.vue';
import BookRowVue from './BookRow.vue';
</script>


<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="最热" name="first">
        <book-row></book-row>
        <book-row></book-row>
        <book-row></book-row>
        <book-row></book-row>
        <book-row></book-row>
        <book-row></book-row>
        <div style="margin-top: 80px">
            <div style="display: flex ;justify-content: center;">
                <el-pagination
                    background
                    :page-size="18"
                    :pager-count="6"
                    layout="prev, pager, next"
                    :total="1800">
                </el-pagination>
            </div>
        </div>
        
      </el-tab-pane>
      <el-tab-pane label="最新" name="second">
        <book-row></book-row>
        <book-row></book-row>
        <book-row></book-row>
        <book-row></book-row>
        <book-row></book-row>
        <book-row></book-row>
        <div style="margin-top: 80px">
            <div style="display: flex ;justify-content: center;">
                <el-pagination
                    background
                    :page-size="18"
                    :pager-count="6"
                    layout="prev, pager, next"
                    :total="1800">
                </el-pagination>
            </div>
        </div>
      </el-tab-pane>
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