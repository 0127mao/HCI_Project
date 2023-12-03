<template>
    <div class="writer-news-carousel">
        <div class="carousel-container">
            <button class="carousel-prev" @click="prevSlide">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="carousel-next" @click="nextSlide">
                <i class="fas fa-chevron-right"></i>
            </button>
            <transition-group name="carousel-slide" tag="div">
                <div
                        class="carousel-slide"
                        v-for="(news, index) in writerNews"
                        :key="news.id"
                        :class="{ active: index === currentSlide }"
                >
                    <router-link to=""
                    ><img :src="news.image" ref="newsImage" :alt="news.title"
                    /></router-link>
                    <div class="carousel-content">
                        <h3 class="h3_author">{{ news.title }}</h3>
                        <p class="p_author">{{ news.date }}</p>
                        <p class="p_author">{{ news.description }}</p>
                        <div class="carousel-indicators">
                <span
                        class="indicator"
                        v-for="(news, index) in writerNews"
                        :key="news.id"
                        :class="{ active: index === currentSlide }"
                        @click="goToSlide(index)"
                ></span>
                        </div>
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
export default {
    name: "Turn_picture",
    data() {
        return {
            writerNews: [
                {
                    id: 1,
                    title: "作家A发布新书",
                    image:
                        "https://th.bing.com/th/id/R.615e3c8d5a08a2c084644dcd6f3520bf?rik=i5ORmgYLGu%2fvQw&riu=http%3a%2f%2fwww.chinawriter.com.cn%2fNMediaFile%2f2021%2f0226%2fMAIN202102260812000164903296575.jpg&ehk=PwGmFJnKMgXCCb7t%2fGWjiM9tOjq2IWbDWHTe74Gy8Q8%3d&risl=&pid=ImgRaw&r=0",
                    date: "2023-11-01",
                    description: "作家A最新作品《XXX》正式发布。",
                },
                {
                    id: 2,
                    title: "作家B获得文学奖项",
                    image:
                        "https://th.bing.com/th/id/OIP.FPsSRBAV5MFxqZmQvvGWVwHaE8?pid=ImgDet&rs=1",
                    date: "2023-10-25",
                    description: "作家B凭借其杰出作品获得年度文学奖。",
                },
                {
                    id: 3,
                    title: "作家C开设讲座",
                    image:
                        "https://th.bing.com/th/id/R.351af0b38b8ba473ed425bd26855857e?rik=3NeXpU9zSine0w&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20130709%2f20130709103044-1179078383.jpg&ehk=7bsHLrUfh52UDZQNme8BfcIcnmBlNct9bcMlCnC1mFo%3d&risl=&pid=ImgRaw&r=0",
                    date: "2023-11-25",
                    description: "作家C在南大开设讲座。",
                },
                // 可添加更多资讯数据
            ],
            currentSlide: 0,
        };
    },
    mounted() {
        this.startCarousel();

        //this.setButtonColor();
    },
    methods: {
        startCarousel() {
            setInterval(() => {
                this.nextSlide();
            }, 5000);
        },
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.writerNews.length;
            this.setButtonColor();
        },
        prevSlide() {
            this.currentSlide =
                (this.currentSlide - 1 + this.writerNews.length) %
                this.writerNews.length;
            this.setButtonColor();
        },
        goToSlide(index) {
            this.currentSlide = index;
        },
        setButtonColor() {},
    },
}
</script>

<style scoped>
.scroll-container_author {
    position: relative;
    height: 10000px; /* 为了演示滚动效果 */
    overflow-y: auto; /* 使用auto属性 */
}

.writer-news-carousel {
    text-align: center;
    width: 100%;
    left: 50%;
}

.carousel-container {
    position: relative;
    height: 50vh;
    overflow: hidden;
}

.carousel-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s;
}

.carousel-slide.active {
    opacity: 1;
}

.carousel-content {
    position: absolute;
    height: 20vh;
    width: 100%;
    bottom: 0;
    left: 0;
    color: #333333;
    text-align: left; /* 将文本左对齐 */
}

.h3_author {
    padding-left: 10vh;
    padding-top: 5vh;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    margin-left: 0; /* 将左边距设为0，使标题左对齐 */
}

.p_author {
    padding-left: 10vh;
    padding-top: 1vh;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    margin-left: 0; /* 将左边距设为0，使段落左对齐 */
}

.carousel-slide img {
    width: 100%;
    /* 设置图片宽度为100% */
    height: auto;
    /* 自动计算图片高度，保持宽高比例 */
}

.carousel-indicators {
    margin-top: auto;
    z-index: 999;
    text-align: center; /* 将指示器居中 */
}

.indicator {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #afeefe;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
}

.indicator.active {
    background-color: #2ca8ff;
}

.carousel-prev,
.carousel-next {
    width: 5vh;
    /* 设置按钮的宽度为10vh */
    height: 50vh;
    /* 设置按钮的高度与轮播图容器的高度相同 */
    position: absolute;
    /* 设置按钮的定位方式为绝对定位 */
    top: 50%;
    /* 将按钮的上边距设置为50%，使其垂直居中 */
    transform: translateY(-50%);
    /* 将按钮向上平移50%自身高度，实现垂直居中效果 */
    /*background-color: #2ca8ff;*/
    /* 设置按钮的背景颜色为半透明 */
    border: none;
    outline: none;
    cursor: pointer;
    opacity: 0.7;
    /* 设置按钮的透明度为0.7 */
    z-index: 100;
}

.carousel-prev {
    left: 0;
    /* 将左侧按钮的左边距设置为0，紧贴左侧边 */
}

.carousel-next {
    right: 0;
    /* 将右侧按钮的右边距设置为0，紧贴右侧边 */
}
</style>
