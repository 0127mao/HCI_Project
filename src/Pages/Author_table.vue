<template>
  <div>
    <div class="container_author_table">
      <div
        v-for="product in displayedProducts"
        :key="product.id"
        class="product"
        :style="getProductBackground(product)"
      >
        <router-link :to="`/product/${product.id}`" class="router-link">
          <div class="product-content">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
          </div>
        </router-link>
        <div class="button-container">
          <router-link to="/introduction" class="comment-link">
            <el-badge value="new" class="item">
              <el-button size="small">评论</el-button>
            </el-badge>
          </router-link>
          <router-link to="" class="reply-link">
            <el-badge value="hot" class="item">
              <el-button size="small">资讯</el-button>
            </el-badge>
          </router-link>
        </div>
      </div>
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="products.length"
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
      products: [
        {
          id: 1,
          name: "夏目漱石",
          description: "日本作家，代表作品有《我是猫》和《坊っちゃん》",
          image:
            "https://soseki-museum.jp/site/wp-content/uploads/2019/02/soseki.jpg",
        },
        {
          id: 2,
          name: "鲁迅",
          description:
            "中国现代文学的奠基人，代表作品有《狂人日记》和《阿Q正传》",
          image:
            "https://n.sinaimg.cn/sinakd2020825s/321/w603h518/20200825/0ec1-iyaiihm8623566.jpg",
        },
        {
          id: 3,
          name: "朱自清",
          description: "中国现代散文大师，代表作品有《背影》和《荷塘月色》",
          image:
            "https://th.bing.com/th/id/OIP.EgOwDdihFJOCIc2kofE1NgHaLP?rs=1&pid=ImgDetMain",
        },
        {
          id: 3,
          name: "朱自清",
          description: "中国现代散文大师，代表作品有《背影》和《荷塘月色》",
          image:
            "https://th.bing.com/th/id/OIP.EgOwDdihFJOCIc2kofE1NgHaLP?rs=1&pid=ImgDetMain",
        },
        {
          id: 3,
          name: "朱自清",
          description: "中国现代散文大师，代表作品有《背影》和《荷塘月色》",
          image:
            "https://th.bing.com/th/id/OIP.EgOwDdihFJOCIc2kofE1NgHaLP?rs=1&pid=ImgDetMain",
        },
        {
          id: 3,
          name: "朱自清",
          description: "中国现代散文大师，代表作品有《背影》和《荷塘月色》",
          image:
            "https://th.bing.com/th/id/OIP.EgOwDdihFJOCIc2kofE1NgHaLP?rs=1&pid=ImgDetMain",
        },
        {
          id: 3,
          name: "朱自清",
          description: "中国现代散文大师，代表作品有《背影》和《荷塘月色》",
          image:
            "https://th.bing.com/th/id/OIP.EgOwDdihFJOCIc2kofE1NgHaLP?rs=1&pid=ImgDetMain",
        },
        {
          id: 3,
          name: "朱自清",
          description: "中国现代散文大师，代表作品有《背影》和《荷塘月色》",
          image:
            "https://th.bing.com/th/id/OIP.EgOwDdihFJOCIc2kofE1NgHaLP?rs=1&pid=ImgDetMain",
        },
        {
          id: 3,
          name: "朱自清",
          description: "中国现代散文大师，代表作品有《背影》和《荷塘月色》",
          image:
            "https://th.bing.com/th/id/OIP.EgOwDdihFJOCIc2kofE1NgHaLP?rs=1&pid=ImgDetMain",
        },
        {
          id: 3,
          name: "朱自清",
          description: "中国现代散文大师，代表作品有《背影》和《荷塘月色》",
          image:
            "https://th.bing.com/th/id/OIP.EgOwDdihFJOCIc2kofE1NgHaLP?rs=1&pid=ImgDetMain",
        },
        {
          id: 3,
          name: "朱自清",
          description: "中国现代散文大师，代表作品有《背影》和《荷塘月色》",
          image:
            "https://th.bing.com/th/id/OIP.EgOwDdihFJOCIc2kofE1NgHaLP?rs=1&pid=ImgDetMain",
        },
        {
          id: 3,
          name: "朱自清",
          description: "中国现代散文大师，代表作品有《背影》和《荷塘月色》",
          image:
            "https://th.bing.com/th/id/OIP.EgOwDdihFJOCIc2kofE1NgHaLP?rs=1&pid=ImgDetMain",
        },
        {
          id: 3,
          name: "朱自清",
          description: "中国现代散文大师，代表作品有《背影》和《荷塘月色》",
          image:
            "https://th.bing.com/th/id/OIP.EgOwDdihFJOCIc2kofE1NgHaLP?rs=1&pid=ImgDetMain",
        },
        {
          id: 3,
          name: "朱自清",
          description: "中国现代散文大师，代表作品有《背影》和《荷塘月色》",
          image:
            "https://th.bing.com/th/id/OIP.EgOwDdihFJOCIc2kofE1NgHaLP?rs=1&pid=ImgDetMain",
        },

        { id: 4, name: "商品4", description: "商品描述4", image: "" },
        { id: 4, name: "商品4", description: "商品描述4", image: "" },
        { id: 4, name: "商品4", description: "商品描述4", image: "" },
        { id: 4, name: "商品4", description: "商品描述4", image: "" },
        { id: 4, name: "商品4", description: "商品描述4", image: "" },
        { id: 4, name: "商品4", description: "商品描述4", image: "" },
        { id: 4, name: "商品4", description: "商品描述4", image: "" },
        { id: 4, name: "商品4", description: "商品描述4", image: "" },
        { id: 4, name: "商品4", description: "商品描述4", image: "" },
      ],
      perPage: 4, // number of products to display per page
      currentPage: 1, // current page number
    };
  },
  computed: {
    displayedProducts() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.products.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.products.length / this.perPage);
    },
  },
  methods: {
    handlePageChange(newPage) {
      this.currentPage = newPage;
    },
    getProductBackground(product) {
      return {
        "background-image": `url(${product.image})`,
      };
    },
  },
};
</script>

<style scoped>
.container_author_table {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}

.product {
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
  border-radius: 1em;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-content {
  flex-grow: 1;
}

.product h3 {
  margin-bottom: 10px;
}

.product p {
  color: #888;
}

.pagination {
  margin-top: 20px;
  text-align: center;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.item {
  margin-right: 10px;
}

.router-link {
  text-decoration: none;
}

.comment-link,
.reply-link {
  text-decoration: none;
  display: inline-block;
}
</style>
