<template>
    <div>
        <div class="container_author_table">
            <div v-for="author in displayedAuthors" :key="author.id">
                <vs-card type="2" class="author_card">
                    <template #title>
                        <h3>{{ author.name }}</h3>
                    </template>
                    <template #img>
                        <img :src="author.image" />
                    </template>
                    <template #text>
                        <p>{{ author.description }}</p>
                    </template>
                    <template #interactions>
                        <vs-button class="btn-chat" shadow primary>
                            <i class="el-icon-chat-line-square"></i>

                            <router-link class="review_link" to="/introduction"
                            ><span class="span"> 54 </span></router-link
                            >
                        </vs-button>
                    </template>
                </vs-card>
            </div>
        </div>
        <div class="pagination">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="authors.length"
                    :current-page="currentPage"
                    :page-size="perPage"
                    @current-change="handlePageChange"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            authors: [
                {
                    id: 1,
                    name: "夏目漱石",
                    description: "日本作家，代表作品有《我是猫》和《坊っちゃん》",
                    image:
                        "https://soseki-museum.jp/site/wp-content/uploads/2019/02/soseki.jpg",
                },
                {
                    id: 1,
                    name: "夏目漱石",
                    description: "日本作家，代表作品有《我是猫》和《坊っちゃん》",
                    image:
                        "https://soseki-museum.jp/site/wp-content/uploads/2019/02/soseki.jpg",
                },
                {
                    id: 1,
                    name: "夏目漱石",
                    description: "日本作家，代表作品有《我是猫》和《坊っちゃん》",
                    image:
                        "https://soseki-museum.jp/site/wp-content/uploads/2019/02/soseki.jpg",
                },
                {
                    id: 1,
                    name: "夏目漱石",
                    description: "日本作家，代表作品有《我是猫》和《坊っちゃん》",
                    image:
                        "https://soseki-museum.jp/site/wp-content/uploads/2019/02/soseki.jpg",
                },
                {
                    id: 1,
                    name: "夏目漱石",
                    description: "日本作家，代表作品有《我是猫》和《坊っちゃん》",
                    image:
                        "https://soseki-museum.jp/site/wp-content/uploads/2019/02/soseki.jpg",
                },
                {
                    id: 1,
                    name: "夏目漱石",
                    description: "日本作家，代表作品有《我是猫》和《坊っちゃん》",
                    image:
                        "https://soseki-museum.jp/site/wp-content/uploads/2019/02/soseki.jpg",
                },
            ],
            perPage: 4, // number of products to display per page
            currentPage: 1, // current page number
        };
    },
    computed: {
        displayedAuthors() {
            const startIndex = (this.currentPage - 1) * this.perPage;
            const endIndex = startIndex + this.perPage;
            return this.authors.slice(startIndex, endIndex);
        },
        totalPages() {
            return Math.ceil(this.products.length / this.perPage);
        },
    },
    methods: {
        handlePageChange(newPage) {
            this.currentPage = newPage;
        },
    },
};
</script>

<style scoped>
.review_link {
    text-decoration: none;
}
.container_author_table {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    padding-left: 4vh;
}
.pagination{
    margin-top: 20px;
    text-align: center;
}
</style>
