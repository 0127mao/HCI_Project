<template>
    <div class="introduction">
    <div class="up">
        <div class="header">
            <div class="left">
                <button class="left-button">
                    <router-link to="/admin/author"><i class="fas fa-chevron-left"></i></router-link>
                </button>
            </div>
            <div class="center">
                <h2 class="title">John Doe</h2>
            </div>
        </div>
        <div class="block">
            <el-carousel trigger="click" height="300px" :style="{ width: '50%', margin: '0 auto' }">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="author-profile">
            <h3 class="name">{{ author.name }}</h3>
            <p class="bio">{{ author.bio }}</p>
        </div>
        <div class="review-wrapper">
            <Review />
        </div></div>
        <footer class="footer">
            <p>&copy; 2023 Your Website. All rights reserved.</p>
        </footer>
    </div>
</template>

<script>
import Review from "@/Pages/Review.vue";

export default {
    name: "Introduction",
    components: { Review },
    data() {
        return {
            author: {
                name: "John Doe",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
        };
    }
};
</script>

<style scoped>
.introduction {
    background-image: url("../images/3.png");
    min-height: 100vh;
    height: auto;
    display: flex;
    flex-direction: column;
}
.block{
    margin-top: 10px;
}
.up{
    flex-grow: 1;
    margin-bottom: 20px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.author-profile {
    width: 66.66%;
    margin: 0 auto;
    background-color: #ebe8f4; /* 淡紫色背景 */
    border-radius: 10px; /* 圆角边框 */
    padding: 20px;
    margin-top: 10px;
}

.name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}

.bio {
    font-size: 14px;
    color: #666;
}

.review-wrapper {
    width: 66.66%;
    margin: 0 auto;
    background-color: #f2f2f2; /* 淡灰色背景 */
    border-radius: 10px; /* 圆角边框 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 阴影效果 */
    margin-top: 10px;
}

.header {
    display: flex;
    align-items: center;
    background:#2D8CF0;
    height: 50px;
    //border-radius: 10px 10px 0 0; /* 顶部圆角边框 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 阴影效果 */
}

.left {
    display: flex;
    align-items: center;
}

.left-button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    margin-left: 10px;
}

.center {
    flex-grow: 1;
    text-align: center;
}

.title {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
}

.fa-chevron-left {
    color: #475669;
}
.footer {
    background: #afeefe;
    text-align: center;
    padding-bottom: 20px;
    color: #777777;
    font-size: 14px;
    flex-shrink: 0;
    margin-top: auto
}
</style>
