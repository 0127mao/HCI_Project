<template>
    <div class="page_all">
        <div class="swiper">
            <el-carousel :interval="5000" type="card"  >
                <el-carousel-item v-for="item in imgSrc" >
                    <el-image :src="item" class="top_image" />
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="main_page">
            <div class="recommend_book_author">
                <div class="container_home">
                    <div class="recommend_one">
                        <h1>编辑力荐</h1>
                        <div class="item_first">
                            <div class="product-thumb-one">
                                <div class="flip-card-inner">
                                    <img class="recommend_pic" src="https://img2.doubanio.com/view/subject/l/public/s1076932.jpg" alt="img">
                                    <div class="recommend_des">
                                        <h3>
                                            作者: 余华 <br>
                                            出版社: 作家出版社<br>
                                            出版年: 2012-8-1<br>
                                            页数: 191<br>
                                            定价: 20.00元<br>
                                            装帧: 平装<br>
                                            丛书: 余华作品（2012版）<br>
                                            ISBN: 9787506365437<br>
                                        </h3>
                                    </div>
                                </div>

                            </div>
                            <div class="product-one-content">
                                <h3>活着 余华著</h3>
                                <!-- <h4><span>$75.28</span><span class="old">$89.50</span></h4> -->
                                <h5>《活着(新版)》讲述了农村人福贵悲惨的人生遭遇。福贵本是个阔少爷，可他嗜赌如命，终于赌光了家业，一贫如洗。他的父亲被他活活气死，母亲则在穷困中患了重病，福贵前去求药，却在途中被国民党抓去当壮丁...
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="recommend_items">
                        <div class="product-items">
                            <div class="item" v-for="(book, index) in books" :key="index">
                                <div class="product-thumb">
                                    <img :src="book.imageSrc" alt="img">
                                </div>
                                <div class="product-content">
                                    <h3>{{ book.title }}</h3>
                                    <h3>{{ book.author }}</h3>
                                    <h6>{{ book.description }}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="author_introduction">
                    <h1>著名作家</h1>
                    <div class="authors">
                        <div v-for="author in authors" :key="author.name" class="author_item">
                            <div class="card-image">
                                <img :src="author.image" alt="img">
                            </div>
                            <div class="category">{{ author.category }}</div>
                            <div class="author_short">{{ author.short }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="rank_books">
                <div class="rank_title">
                    <h3>值得一读榜</h3>
                </div>
                <div v-for="(rank, index) in ranks" :key="index" class="rank_item">
                    <div class="item_first-content">
                        <span :class="'rank_' + (index + 1 >= 4 ? 'other' : index + 1)">{{ index + 1 }}. </span><span>{{ rank.title }}</span>
                    </div>
                    <div class="item_second-content">
                        <div class="rank_item_des">
                            <div class="rank_item_des_main">
                                <h5>{{ rank.title }}</h5>
                                <h6 class="rank_item_author">{{ rank.author }}</h6>
                                <h6 class="rank_item_intro">{{ rank.intro }}</h6>
                            </div>
                            <div class="rank_item_des_photo">
                                <img :src="rank.image" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="shop_page">
            <div slot="header" class="header">
                <h1>热销书籍</h1>
            </div>
            <el-row class="shop_row">
                <!--                一共24个单位 5代表每一个item分5个单位-->
                <el-col :span="5" v-for="book in books" :key="book.id" class="shop_book_container">
                    <el-image :src="book.imageSrc" class="shop_image"/>
                    <div style="padding: 14px;" >
                        <span id="shop_book_price">￥ {{book.price.toFixed(2)}}</span>
                        <span id="shop_book_title">{{book.title}}</span>
                        <span id="shop_book_description">{{book.description}}</span>
                        <div id="actions">
                            <el-button icon="el-icon-money"  circle></el-button>
                            <el-button icon="el-icon-s-goods" circle></el-button>
                            <el-button icon="el-icon-star-on" circle></el-button>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>


    </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'HomeView',
    components: {
        HelloWorld
    },
    data: function () {
        return {
            // 这里需要 require 引入照片,不然的话是加载不到图片的
            imgSrc: [require('../images/01.png'), require('../images/02.png'),require('../images/02.png')],
            // 当前照片序号
            currentIndex: 0,
            // 定时器的统一管理
            timer: '',
            books: [
                {
                    title: "红楼梦",
                    price: 11,
                    author: "[清]曹雪芹著",
                    imageSrc: "https://img2.doubanio.com/view/subject/l/public/s1076932.jpg",
                    description: "都云作者痴，谁解其中味？"
                },
                {
                    title: "三国演义",
                    price: 12,
                    author: "[明]罗贯中著",
                    imageSrc: "https://img2.doubanio.com/view/subject/l/public/s1532272.jpg",
                    description: "是非成败转头空"
                },
                {
                    title: "百年孤独",
                    price: 13,
                    author: "[哥伦比亚]加西亚·马尔克斯",
                    imageSrc: "https://img2.doubanio.com/view/subject/l/public/s6384945.jpg",
                    description: "魔幻现实主义文学代表作"
                },
                {
                    title: "飘",
                    price: 14,
                    author: "[美国]玛格丽特·米切尔",
                    imageSrc: "https://img2.doubanio.com/view/subject/l/public/s2881231.jpg",
                    description: "革命时期的爱情，随风而逝"
                },
                {
                    title: "动物农场",
                    price: 15,
                    author: "[英]乔治·奥威尔",
                    imageSrc: "https://img2.doubanio.com/view/subject/l/public/s5816598.jpg",
                    description: "太阳底下并无新事"
                },
                {
                    title: "白夜行",
                    price: 16,
                    author: "[日]东野圭吾",
                    imageSrc: "https://img2.doubanio.com/view/subject/l/public/s4610502.jpg",
                    description: "一宗离奇命案牵出跨度近20年步步惊心的故事"
                },
                {
                    title: "小王子",
                    price: 17,
                    author: "[法]圣埃克苏佩里",
                    imageSrc: "https://img2.doubanio.com/view/subject/l/public/s1237549.jpg",
                    description: "献给长成了大人的孩子们"
                },
                {
                    title: "呐喊",
                    author: "鲁迅著",
                    price: 18,
                    imageSrc: "https://img2.doubanio.com/view/subject/l/public/s1076932.jpg",
                    description: "新文学的第一声呐喊"
                }
            ],
            ranks: [
                {
                    title: "红楼梦",
                    author: "[清] 曹雪芹 著",
                    intro: "《红楼梦》是一部百科全书式的长篇小说。以宝黛爱情悲剧为主线，以四大家族的荣辱兴衰为背景，描绘出18世纪中国封建社会的方方面面，以及封建专制下新兴资本主义民主思想的萌动。结构宏大、情节委婉、细节精致，人物形象栩栩如生，声口毕现，堪称中国古代小说中的经典。",
                    image: "https://img2.doubanio.com/view/subject/l/public/s1076932.jpg"
                },
                {
                    title: "红楼梦",
                    author: "[清] 曹雪芹 著",
                    intro: "《红楼梦》是一部百科全书式的长篇小说。以宝黛爱情悲剧为主线，以四大家族的荣辱兴衰为背景，描绘出18世纪中国封建社会的方方面面，以及封建专制下新兴资本主义民主思想的萌动。结构宏大、情节委婉、细节精致，人物形象栩栩如生，声口毕现，堪称中国古代小说中的经典。",
                    image: "https://img2.doubanio.com/view/subject/l/public/s1076932.jpg"
                },
                {
                    title: "红楼梦",
                    author: "[清] 曹雪芹 著",
                    intro: "《红楼梦》是一部百科全书式的长篇小说。以宝黛爱情悲剧为主线，以四大家族的荣辱兴衰为背景，描绘出18世纪中国封建社会的方方面面，以及封建专制下新兴资本主义民主思想的萌动。结构宏大、情节委婉、细节精致，人物形象栩栩如生，声口毕现，堪称中国古代小说中的经典。",
                    image: "https://img2.doubanio.com/view/subject/l/public/s1076932.jpg"
                },
                {
                    title: "红楼梦",
                    author: "[清] 曹雪芹 著",
                    intro: "《红楼梦》是一部百科全书式的长篇小说。以宝黛爱情悲剧为主线，以四大家族的荣辱兴衰为背景，描绘出18世纪中国封建社会的方方面面，以及封建专制下新兴资本主义民主思想的萌动。结构宏大、情节委婉、细节精致，人物形象栩栩如生，声口毕现，堪称中国古代小说中的经典。",
                    image: "https://img2.doubanio.com/view/subject/l/public/s1076932.jpg"
                },
                {
                    title: "红楼梦",
                    author: "[清] 曹雪芹 著",
                    intro: "《红楼梦》是一部百科全书式的长篇小说。以宝黛爱情悲剧为主线，以四大家族的荣辱兴衰为背景，描绘出18世纪中国封建社会的方方面面，以及封建专制下新兴资本主义民主思想的萌动。结构宏大、情节委婉、细节精致，人物形象栩栩如生，声口毕现，堪称中国古代小说中的经典。",
                    image: "https://img2.doubanio.com/view/subject/l/public/s1076932.jpg"
                },
                // 可以添加更多书籍数据
            ],
            authors: [
                {
                    image: "https://img1.doubanio.com/img/author/raw/public/1489462312.98.jpg",
                    category: "author",
                    short: "余华，1960年4月3日生于浙江杭州，现代作家"
                },
                {
                    image: "https://img1.doubanio.com/img/author/raw/public/1489462312.98.jpg",
                    category: "author",
                    short: "余华，1960年4月3日生于浙江杭州，现代作家"
                },
                {
                    image: "https://img1.doubanio.com/img/author/raw/public/1489462312.98.jpg",
                    category: "author",
                    short: "余华，1960年4月3日生于浙江杭州，现代作家"
                },
                {
                    image: "https://img1.doubanio.com/img/author/raw/public/1489462312.98.jpg",
                    category: "author",
                    short: "余华，1960年4月3日生于浙江杭州，现代作家"
                },
                {
                    image: "https://img1.doubanio.com/img/author/raw/public/1489462312.98.jpg",
                    category: "author",
                    short: "余华，1960年4月3日生于浙江杭州，现代作家"
                },
                // 可以添加更多作者数据
            ]
        }
    },

}
</script>
<style scoped>

.page_all {
    background: #fff url(../images/01.png);
}

.shop_page {
    height: 35%;
    width: 80%;
    margin-left: 10%;
    margin-top: 5%;
}

.shop_image {
    width: 200px;
    height: 300px;
}

#shop_book_price {
    font-family: Arial, serif;
    font-size: 18px;
    font-weight: bolder;
    color: #d44d44;
    display: block;
}

#shop_book_title {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.2;
    margin: 0 8px;
    color: #333;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 5px 0 10px 0;
    display: block;
}

#shop_book_description {
    font-size: 12px;
    color: #999;
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

#actions {
    padding: 10px 10px 0 0;
}

.shop_book_container {
    /*padding: 20px 0;*/
    border: 1px solid #fff;
    transition: .2s;
    margin-bottom: 20px;
    margin-right: 3%;
    /*background-color: black;*/
    padding: 2%;
}

.shop_book_container:hover {
    border: 1px solid #ddd;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    cursor: pointer;
}

.shop_row {
    margin-left: -15px;
    margin-right: -15px;
    margin-top: 2%;
    background-color: white;
    padding-left: 5%;
}


.top_image {
    border: 1px solid #ddd;
    border-radius: 15px;
    /*background-color: black;*/
}
.swiper {
    position: relative;
    width: 80%;
    height: 35%;
    margin-left: 10%;
    /*background-color: black;*/
}
/* 走马灯样式 */
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.main_page {
    display: flex;
}
.product-items {
    display: flex;
    flex-wrap: wrap;
    /* position: absolute; */
    /* 固定定位 */
    /* top: 0; */
    /* 距离顶部的距离 */
    /* right: 50px; */
    /* 距离右侧的距离 */
    width: 90%;
    height: 50%;
    /* background-color: black; */
}

.item {
    margin-top: 0;
    width: 25%;
    /* height: 100%; */
    /* 每列占据四分之一的宽度 */
    height: 50%;
    padding: 10px;
    box-sizing: border-box;
    /* background-color: black; */
}

.item_first {
    margin-top: 0;
    width: 100%;
    height: 70%;
    /* 每列占据四分之一的宽度 */
    /* height: 50%; */
    /*padding: 5px;*/
    padding-top: 20px;
    /* box-sizing: border-box; */
    /* background-color: black; */
}


.product-content {
    left: 200px;
    font-size: small;
    width: 100%;
    height: 30%;
    text-align: center;

    /*background-color: black;*/
}

/* img {
    max-width: 100%;
    max-width: 70%;
} */

.recommend_one {
    flex: 2.5;
    /*width: 35%;*/
    height: 100%;
    /*margin-right: 40px;*/
    /*margin-left: 20px;*/
    padding-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: smaller;
    /*display: flex; !* 使用flex布局 *!*/
    /*justify-content: center; !* 水平居中 *!*/
    /*background-color: black;*/
}

.recommend_items {
    /*width: 65%;*/
    height: 20%;
    flex: 7.5;
    /*margin-left: 40px;*/
    /*background-color: crimson;*/
}

.container_home {
    display: flex;
    width: 80%;
    margin-left: 12%;
    margin-top: 20px;
    background-color: white;
    /*background-color: black;*/
    /*border: 2px solid #ccc;*/
    border-radius: 15px;
}

.product-thumb {
    margin-top: 0;
    width: 130px;
    height: 170px;
    overflow: hidden;
    /* 防止图片溢出容器 */
    background-color: black;
}

.product-thumb img {
    transition: transform 1s ease; /* 添加动画效果 */
    width: 130px;
    height: 170px;
    object-fit: cover;
}

.product-thumb-one {
    margin-top: 0;
    width: 100%;
    height: 70%;
}

.product-thumb-one img {
    width: 80%;
    height: 250px;
    margin-left: 10%;
    margin-right: 10%;
}

.product-one-content {
    width: 100%;
    margin-top: 280px;
}

h1 {
    text-align: center;
}

h3 {
    white-space: nowrap;     /* 防止换行 */
    overflow: hidden;        /* 隐藏溢出的文本 */
    text-overflow: ellipsis; /* 显示省略号 */
}
.author_introduction {
    width: 100%;
    height: 45%;
    padding-left: 12%;
    padding-top: 5%;
    /*background-color: white;*/
}

.authors {
    display: flex;
    justify-content: space-between;
    height: 80%;
    width: 91%;
    margin-top: 20px;
    margin-bottom: 3%;
    /*margin-right: 30%;*/
    /*transition: 1s;*/
    border-radius: 15px;
    background-color: white;
}




.author_introduction h2 {
    padding-left: 50px;
}

.product-thumb:hover img {
    transform: scale(1.2); /* 图片放大 */
}


/*#swiper {*/
/*    width: 70vw;*/
/*    height: 45vh;*/
/*    display: flex;*/
/*    justify-content: center;*/
/*    position: relative;*/
/*    overflow: hidden;*/
/*    margin-left: 15vw;*/
/*    !*margin-left: 10vw;*!*/
/*}*/

/*#box {*/
/*    position: absolute;*/
/*    left: 0;*/
/*    width: 100%;*/
/*    height: 100%;*/
/*    display: flex;*/
/*}*/

/*.swiper_top img {*/
/*    width: 100vw;*/
/*    flex: 1;*/
/*}*/

/*#span {*/
/*    position: absolute;*/
/*    bottom: 10px;*/
/*    height: 8px;*/
/*    width: 100vw;*/
/*    display: flex;*/
/*    justify-content: center;*/
/*}*/

/*.swiper_top span {*/
/*    padding: 0 10px;*/
/*    margin: 0 10px;*/
/*    background-color: rgba(95, 95, 95, 0.7);*/
/*    border-radius: 6px;*/
/*}*/

/*#leftSide {*/
/*    position: absolute;*/
/*    top: 50%;*/
/*    transform: translateY(-50%) translateX(15%);*/
/*    left: 10px;*/
/*    padding: 15px;*/
/*    background: rgba(95, 95, 95, 0.7);*/
/*    border-radius: 6px;*/
/*    opacity: 0.1;*/
/*    transition: 0.5s;*/
/*}*/
/*#leftSide:hover,#rightSide:hover {*/
/*    transition: 0.5s;*/
/*    opacity: 1;*/
/*}*/

/*#rightSide {*/
/*    position: absolute;*/
/*    top: 50%;*/
/*    transform: translateY(-50%) translateX(-15%);*/
/*    right: 10px;*/
/*    padding: 15px;*/
/*    background: rgba(0, 0, 0, 0.3);*/
/*    border-radius: 6px;*/
/*    opacity: 0.1;*/
/*}*/
/*i {*/
/*    color: rgba(0, 0, 0, 0.7);*/
/*    z-index: 1;*/
/*}*/


.flip-card-inner {
    position: relative;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.product-thumb-one:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.recommend_pic, .recommend_des {
    box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid coral;
    border-radius: 1rem;
}


.recommend_des {

    transform: rotateY(180deg);
    width: 80%;
    height: 250px;
    margin-left: 10%;
    margin-right: 10%;
}
.recommend_book_author {
    /*background-color: white;*/
    flex: 8;
}

.rank_books {
    /*background-color: red;*/
    background: #fff url(../images/01.png);
    flex: 2;
    padding-top: 2%;
    padding-left: 2%;
    margin: 3% 2% 10%;
    border-radius: 20px;
    /*padding-left: 3%;*/
}

.rank_item {
    width: 250px;
    height: 65px;
    transition: all 0.4s;
    border-radius: 10px;
    /*box-shadow: 0px 0px 10px 5px  rgba(0, 0, 0, 0.705);*/
    /*font-size: 30px;*/
    font-weight: 900;
    margin-bottom: 5px;
    margin-top: 5px;
}

.rank_item:hover {
    border-radius: 15px;
    cursor: pointer;
    transform: scale(1.2);
    /*box-shadow: 0px 0px 10px 5px  rgba(0, 0, 0, 0.705);*/
    /*background-color: white;*/
    /*background: rgb(103, 151, 255);*/

}

.item_first-content {
    font-size: 18px;
    height: 100%;
    width: 100%;
    transition: all 0.4s;
    display: flex;
    /*justify-content: center;*/
    align-items: center;
    opacity: 1;
    border-radius: 15px;
}

.rank_item:hover .item_first-content {
    height: 0px;
    opacity: 0;
}

.item_second-content {
    height: 0%;
    width: 100%;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    transition: all 0.4s;
    font-size: 0px;
    /*transform: rotate(90deg) scale(-1);*/
}

.rank_item:hover .item_second-content {
    opacity: 1;
    height: 100%;
    font-size: 1rem;
    background-color: white;
    /*transform: rotate(0deg);*/
}

.rank_title{
    margin-bottom: 5%;
}

.rank_item_des {
    display: flex;
}
.rank_item_des_main {
    flex: 7;
    padding-top: 13px;
    padding-left: 10px;
}
.rank_item_des_photo {
    flex: 3;
}
.rank_item_des_photo img {
    height: 80%;
    width: 80%;
}


.rank_item_author {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}
.rank_item_intro {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.rank_1 {
    color: #ff5f00;
    margin-right: 2%;
}

.rank_2 {
    color: #00754a;
    margin-right: 2%;
}

.rank_3 {
    color: #d6a562;
    margin-right: 2%;
}

.rank_other {
    color: rgba(0,0,0,.24);
    margin-right: 2%;
}




.author_item {
    /*flex: 2;*/
    width: 18%;
    /*height: 85%;*/
    background-color: white;
    padding: .4em;
    border-radius: 6px;
    margin-right: 2%;
    cursor: pointer;
    /*background-color: black;*/
}

.card-image {
    /*width: 90%;*/
    height: 60%;
    padding-left: 15%;
    /*background-color: black;*/
}
.card-image img{
    background-color: rgb(236, 236, 236);
    width: 80%;
    /*height: 50%;*/
    border-radius: 6px 6px 0 0;
}

/*.card-image:hover {*/
/*    transform: scale(0.98);*/
/*}*/

.category {
    text-transform: uppercase;
    font-size: 0.7em;
    font-weight: 600;
    color: rgb(63, 121, 230);
    padding: 8px 7px 0;
}

.category:hover {
    cursor: pointer;
}

.author_short {
    font-weight: 600;
    color: rgb(88, 87, 87);
    padding: 7px;
}

.author_short:hover {
    cursor: pointer;
}

.authors .author_item:hover {
    transition: transform 0.5s;
    transform: scale(1.1, 1.1);

}

.authors:hover > .author_item:not(:hover) {
    filter: blur(1px);
    transform: scale(0.9, 0.9);
}


</style>
