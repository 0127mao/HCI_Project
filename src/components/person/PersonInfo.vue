<template>
    <div>
        <div class="person">
            <img src="../../images/blue_cloud.jpg" class="person-image">
            <div class="info">
                <div class="name">{{name}}</div>
                <div class="text" v-for="(item, key) in contents">
                    <div v-show="key < 3">{{titles.at(key)}} : {{ item }}</div>
                </div>
            </div>
        </div>
        <div class="mybook">{{mybook}}</div>
        <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-left: 250px; margin-right: 250px; margin-bottom: 250px;">
            <el-tab-pane label="默认" name="default">
                <my-row></my-row>
                <div style="margin-top: 80px">
                    <div style="display: flex ;justify-content: center;">
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="更新" name="update">
                <my-row></my-row>
                <div style="margin-top: 80px">
                    <div style="display: flex ;justify-content: center;">
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="进度" name="progress">
                <my-row></my-row>
                <div style="margin-top: 80px">
                    <div style="display: flex ;justify-content: center;">
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
import MyRow from './MyRow.vue';

const name = "Admin";
const titles = ["UID"];
const contents = ["2147483647"];
const mybook = "我的书架"
</script>

<script>
export default {
    components: { MyRow },
    name: 'MyBook',
    data() {
        return {
            activeName: 'default'
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

.person {
    margin-top: 100px;
    margin-left: 250px;
    width: 500px;
    height: 150px;
    display: flex;
    border-radius: 10px;
}

.person-image {
    margin-top: 5px;
    width: 100px;
    height: 100px;
    border-radius: 50px;
}

.info {
    margin-left: 20px;
}

.name {
    margin-left: 10px;
    color: #000000;
    font-size: 40px;
}

.text{
    color: #605b5b;
    font-size: 20px
}

.mybook {
    margin-left: 250px;
    color: #000000;
    font-size: 30px;
}
</style>
