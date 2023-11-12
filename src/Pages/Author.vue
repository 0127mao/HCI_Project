<template>
    <div class="scroll-container_author">
        <router-link to="/admin/help"><button class="floating-button">Help</button></router-link>
    </div>
</template>

<style>
.scroll-container_author {
    position: relative;
    height: 1000px; /* 为了演示滚动效果 */
    overflow-y: auto; /* 使用auto属性 */
}

.floating-button {
    position: fixed;
    bottom: 8vh;
    right: 8vh;
    z-index: 100;
    /* 按钮样式规则 */
    width: 5vh; /* 设置按钮宽度 */
    height: 5vh; /* 设置按钮高度 */
    border-radius: 50%; /* 将按钮的边框半径设置为50%，使其呈现圆形 */
    box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25), 0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
    background-color: #2ca8ff; /* 使用变量设置背景颜色 */
    border: none;
}
</style>

<script setup></script>
