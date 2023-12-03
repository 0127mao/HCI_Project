<template>
  <div class="scroll-container_author" ref="scrollContainer">
    <Turn_picture />
    <!-- 页面内容 -->
    <div class="calendar-para">
      <div class="left_calendar"><Calendar_self /></div>
      <div class="collapse-container">
        <div class="font_author">最新咨询</div>
        <br />
        <br />
        <div class="new_test">
          <el-collapse v-model="activeName" accordion class="custom-collapse">
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>
                与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
              </div>
              <div>
                在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
              </div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>
                控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
              </div>
              <div>
                页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
              </div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>
                清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
              </div>
              <div>
                帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
              </div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>
                用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
              </div>
              <div>
                结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
              </div>
            </el-collapse-item>
            <el-collapse-item title="折叠栏3" name="5">
              <!-- 折叠栏3的内容 -->
            </el-collapse-item>
            <el-collapse-item title="折叠栏3" name="6">
              <!-- 折叠栏3的内容 -->
            </el-collapse-item>
            <el-collapse-item title="折叠栏3" name="7">
              <!-- 折叠栏3的内容 -->
            </el-collapse-item>
            <el-collapse-item title="折叠栏3" name="8">
              <!-- 折叠栏3的内容 -->
            </el-collapse-item>
            <el-collapse-item title="折叠栏3" name="8">
              <!-- 折叠栏3的内容 -->
            </el-collapse-item>
            <el-collapse-item title="折叠栏3" name="9">
              <!-- 折叠栏3的内容 -->
            </el-collapse-item>
            <el-collapse-item title="折叠栏3" name="10">
              <!-- 折叠栏3的内容 -->
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="11">
              <div>
                控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
              </div>
              <div>
                页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
    <br />
    <div class="divider_line"><div class="text_next">作家专区</div></div>
    <br />
    <Author_table />
    <button v-if="btnFlag" class="back-to-top" @click="backTop">ToTop</button>
      <router-link to="/Sayings"><button class="Sayings">Says</button></router-link>

  </div>
</template>

<script>
import Calendar_self from "@/Pages/Calendar_self.vue";
import Turn_picture from "@/Pages/Turn_picture.vue";
import Author_table from "@/Pages/Author_table.vue";
export default {
  components: { Author_table, Turn_picture, Calendar_self},
  data() {
    return {
      btnFlag: false,
      activeName: "1",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    backTop() {
      let timer = setInterval(() => {
        let i_speed = Math.floor(-window.pageYOffset / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          window.pageYOffset + i_speed;
        if (window.pageYOffset === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    scrollToTop() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 60) {
        this.btnFlag = true;
      } else {
        this.btnFlag = false;
      }
    },
  },
};
</script>
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");
.scroll-container_author {
  position: relative;
  overflow-y: auto; /* 使用auto属性 */
  flex-direction: column;
  display: flex;
}
.back-to-top {
  position: fixed;
  bottom: 8vh;
  right: 8vh;
  z-index: 100; /* 按钮样式规则 */
  width: 5vh; /* 设置按钮宽度 */
  height: 5vh; /* 设置按钮高度 */
  border-radius: 50%; /* 将按钮的边框半径设置为50%，使其呈现圆形 */
  box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
    0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
  background-color: var(--white); /* 使用变量设置背景颜色 */
  border: none;
}

.calendar-para {
  display: flex;
}
.left_calendar {
  width: 55vh;
}
.font_author {
  font-weight: bold; /* 加粗 */
  text-align: left; /* 左对齐 */
  font-size: 24px; /* 字体放大，根据需要进行调整 */
}
.collapse-container {
  flex-grow: 1;
  width: 50%;
  border-radius: 1em; /* 添加圆角边缘 */
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2), 0 3px 1px #ffffff;
  color: #000000;
  padding: 20px;
  background-image: url("../images/img.png");
  background-size: cover;
  height: 70vh;
}
.new_test {
  border-radius: 1em; /* 添加圆角边缘 */
  height: 80%;
  overflow: hidden; /* 隐藏溢出内容 */
  overflow-y: auto; /* 添加垂直滚动条 */
}

.el-collapse-item__header {
  position: sticky;
  top: 0;
  background-color: #387ecc; /* 为了更好地区分固定的部分，你可以选择添加一个背景颜色 */
}
.el-collapse-item__wrap {
  max-height: 300px; /* 设置最大高度，根据需要进行调整 */
  overflow-y: auto; /* 添加垂直滚动条 */
}
.custom-collapse {
  border-radius: 1em; /* 添加圆角边缘 */
  border: none; /* 移除折叠面板的边框 */
  background-color: #d2be08;
}

.divider_line {
  width: 100%;
  height: 10vh;
  background-image: url("../images/02.png");
  background-size: cover;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.form-text {
  font-family: "SimSun", Arial, sans-serif; /* 将字体设为宋体 */
  text-indent: 2em; /* 设置首行缩进 */
  font-size: 17px;
  font-weight: bold;
}

.author-text {
  font-family: "SimSun", Arial, sans-serif; /* 将字体设为宋体 */
  text-align: right;
  font-weight: bold;
}
.author-link {
  font-family: "SimSun", Arial, sans-serif; /* 将字体设为宋体 */
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
}
.text_next {
  font-family: "SimSun", Arial, sans-serif; /* 将字体设为宋体 */
  font-weight: bold;
  font-size: 40px;
  color: #afeefe;
}
.Sayings{
    position: fixed;
    bottom: 15vh;
    right: 8vh;
    z-index: 100; /* 按钮样式规则 */
    width: 5vh; /* 设置按钮宽度 */
    height: 5vh; /* 设置按钮高度 */
    border-radius: 50%; /* 将按钮的边框半径设置为50%，使其呈现圆形 */
    box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
    0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
    background-color: var(--white); /* 使用变量设置背景颜色 */
    border: none;
}
</style>
