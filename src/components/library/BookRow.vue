<template>
    <div style="margin-top: 35px">
        <el-row :gutter="20" type="flex" justify="center">
            <el-col :flex="4">
                <div class="image-with-text" style="width: 90%;">
                    <el-card :body-style="{ padding: '0px'}" shadow="never">
                        <div style="display: flex;">
                            <img src="../../images/cover0.jpg" alt="image" width="100px" height="130px" style="border-radius: 5px">
                            <div class="text">
                                <div class="title">
                                    <a href="" target="_blank">十日终焉</a>
                                </div>
                                <div class="desc">
                                    <span>作者：<span>杀虫队队员</span></span>
                                </div>
                                <div class="desc">
                                    <span>连载中 · <span>150.9万字</span> · <span>228.2万人在读</span></span>
                                </div>
                                <div class="desc">（不后宫，不套路，不无敌，不系统，不无脑，不爽文，介意者慎入。）</div>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :flex="4">
                <div class="image-with-text" style="width: 90%;">
                    <el-card :body-style="{ padding: '0px'}" shadow="never">
                        <div style="display: flex;">
                            <img src="../../images/cover0.jpg" alt="image" width="100px" height="130px" style="border-radius: 5px">
                            <div class="text">
                                <div class="title">
                                    <a href="" target="_blank">十日终焉</a>
                                </div>
                                <div class="desc">
                                    <span>作者：<span>杀虫队队员</span></span>
                                </div>
                                <div class="desc">
                                    <span>连载中 · <span>150.9万字</span> · <span>228.2万人在读</span></span>
                                </div>
                                <div class="desc">（不后宫，不套路，不无敌，不系统，不无脑，不爽文，介意者慎入。）</div>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :flex="4">
                <div class="image-with-text" style="width: 90%;">
                    <el-card :body-style="{ padding: '0px'}" shadow="never">
                        <div style="display: flex;">
                            <img src="../../images/cover0.jpg" alt="image" width="100px" height="130px" style="border-radius: 5px">
                            <div class="text">
                                <div class="title">
                                    <a href="" target="_blank">十日终焉</a>
                                </div>
                                <div class="desc">
                                    <span>作者：<span>杀虫队队员</span></span>
                                </div>
                                <div class="desc">
                                    <span>连载中 · <span>150.9万字</span> · <span>228.2万人在读</span></span>
                                </div>
                                <div class="desc">（不后宫，不套路，不无敌，不系统，不无脑，不爽文，介意者慎入。）</div>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
  
<style>

.text {
  margin-left: 10px; /* 调整文字与图片之间的间距 */
  flex: 1; /* 让文字部分占据剩余的空间 */
}

.title a{
    font-weight: bold;
    text-decoration: none; /* 取消下划线 */
    color: #333333; /* 设置标题颜色 */
}

.desc {
    font-size: 12px;
    color: #00000066;
    margin-top: 5px; /* 调整每个描述之间的间距 */
}

</style>
  
<script>
    export default {
        name: 'BookRow',
    }
</script>