<template>
  <div class="shell">
    <div class="header">
      <h2 class="title">作家赠言</h2>
      <h3 class="subtitle">book book</h3>
    </div>
    <router-link to="/admin/author"
      ><div class="timeline">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="item"
          :data-text="item.text"
        >
          <div class="content">
            <img :src="item.image" alt="" class="img" />
            <h2 class="content-title">{{ item.year }}</h2>
            <p class="content-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
      <button class="back_to_author">Back</button></router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "《你的孤独，虽败犹荣》",
          image:
            "https://th.bing.com/th/id/R.c5c58f84e6ff8b0e96649f36e5b45ad3?rik=3ks0LxJZp4NAeA&riu=http%3a%2f%2fthumb.takefoto.cn%2fwp-content%2fuploads%2f2016%2f05%2f201605250729535720.jpeg&ehk=GFbGCKi5IyyIxzZLFAgY5qVbCi8OcLhISVONiiOu570%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
          year: "2002",
          description:
            "如果你停止，就是谷底。如果你还在继续，就是上坡。这就是我听过关于人生低谷最好的阐述。",
        },
        // Add more items as needed
        {
          text: "《你的孤独，虽败犹荣》",
          image:
            "https://th.bing.com/th/id/OIP.lfmWFTCcWZBrONgxUZANxwHaJH?rs=1&pid=ImgDetMain",
          year: "2002",
          description:
            "如果你停止，就是谷底。如果你还在继续，就是上坡。这就是我听过关于人生低谷最好的阐述。",
        },
        {
          text: "《你的孤独，虽败犹荣》",
          image:
            "https://th.bing.com/th/id/R.e5e623fd4815ae9e10f7bb3c627af65b?rik=6xhVgjQZ5d81Ng&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20181027%2fed102fe7be9145809387aa942d50946a.jpeg&ehk=wswqMM4p322wCb8zTK6Yal9dRlTrrSBwh1gBOUZb8WA%3d&risl=&pid=ImgRaw&r=0",
          year: "2002",
          description:
            "如果你停止，就是谷底。如果你还在继续，就是上坡。这就是我听过关于人生低谷最好的阐述。",
        },
        {
          text: "《你的孤独，虽败犹荣》",
          image:
            "https://pic.baike.soso.com/ugc/baikepic2/8339/cut-20150127145053-1657830164.jpg/0",
          year: "2002",
          description:
            "如果你停止，就是谷底。如果你还在继续，就是上坡。这就是我听过关于人生低谷最好的阐述。",
        },
        {
          text: "《你的孤独，虽败犹荣》",
          image:
            "https://th.bing.com/th/id/R.2c41771c8093c001fbe0f1680bbcd48f?rik=%2f%2bN8cdo0ARItGA&riu=http%3a%2f%2fsjxx.xhedu.sh.cn%2fcms%2fdata%2fhtml%2fdoc%2f2009-05%2f03%2f25565%2fattach%2f2009-05-03_21-34-44_6.jpg&ehk=pbZDa8zKnlGA7WKRTrHnmRO4WQKZmHcRTCTs%2bZlI6s0%3d&risl=&pid=ImgRaw&r=0",
          year: "2002",
          description:
            "如果你停止，就是谷底。如果你还在继续，就是上坡。这就是我听过关于人生低谷最好的阐述。",
        },
        {
          text: "《你的孤独，虽败犹荣》",
          image:
            "https://th.bing.com/th/id/OIP.w00a5VnoCyf1xWf1DH4S5wHaJj?rs=1&pid=ImgDetMain",
          year: "2002",
          description:
            "如果你停止，就是谷底。如果你还在继续，就是上坡。这就是我听过关于人生低谷最好的阐述。",
        },
        {
          text: "《你的孤独，虽败犹荣》",
          image:
            "https://th.bing.com/th/id/R.2b715799fb4b26ce08761fdcf558e894?rik=C3rRda7XB0RBeA&riu=http%3a%2f%2fimage.yjcf360.com%2fu%2fcms%2fwww%2f202101%2f111024012uw1.png&ehk=QaqwM051GW24ChPO3oPh338xyneBI9%2b7TC5xedXfCp4%3d&risl=&pid=ImgRaw&r=0",
          year: "2002",
          description:
            "如果你停止，就是谷底。如果你还在继续，就是上坡。这就是我听过关于人生低谷最好的阐述。",
        },
        {
          text: "",
          image: "",
          year: "",
          description: "",
        },
        {
          text: "",
          image: "",
          year: "",
          description: "",
        },
        {
          text: "",
          image: "",
          year: "",
          description: "",
        },
        {
          text: "",
          image: "",
          year: "",
          description: "",
        },
        {
          text: "",
          image: "",
          year: "",
          description: "",
        },
      ],
    };
  },
  mounted() {
    this.initializeTimeline();
  },
  methods: {
    initializeTimeline() {
      const itemElements = document.querySelectorAll(".item");
      itemElements[0].classList.add("item--active");
      this.$el.style.backgroundImage = `url(${itemElements[0]
        .querySelector(".img")
        .getAttribute("src")})`;

      const itemLength = itemElements.length;
      window.addEventListener("scroll", () => {
        const pos = window.scrollY;
        itemElements.forEach((item, index) => {
          const min = item.offsetTop;
          const max = item.offsetHeight + item.offsetTop;

          if (index === itemLength - 2 && pos > min + item.offsetHeight / 2) {
            itemElements.forEach((el) => el.classList.remove("item--active"));
            this.$el.style.backgroundImage = `url(${itemElements[itemLength - 1]
              .querySelector(".img")
              .getAttribute("src")})`;
            itemElements[itemLength - 1].classList.add("item--active");
          } else if (pos <= max - 10 && pos >= min) {
            this.$el.style.backgroundImage = `url(${item
              .querySelector(".img")
              .getAttribute("src")})`;
            itemElements.forEach((el) => el.classList.remove("item--active"));
            item.classList.add("item--active");
          }
        });
      });
    },
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}

.shell {
  width: 100%;
  position: relative;
  padding: 80px 0;
  transition: 0.3s ease 0s;
  background-attachment: fixed;
  background-size: cover;
}

.shell:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(99, 99, 99, 0.8);
  content: "";
}
.header {
  width: 100%;
  text-align: center;
  margin-bottom: 80px;
  position: relative;
}
.title {
  color: #ffffff;
  font-size: 40px;
  font-weight: normal;
  margin: 0;
}
.timeline {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 700px;
  position: relative;
}
.content-title {
  font-weight: normal;
  font-size: 66px;
  margin: -10px 0 0 0;
  transition: 0.4s;
  padding: 0 10px;
  box-sizing: border-box;
  color: #ffffff;
}
.content-desc {
  margin: 0;
  font-size: 15px;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.7);
  line-height: 25px;
}
.timeline:before {
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  content: "";
  background: rgba(255, 255, 255, 0);
}
.item {
  padding: 40px 0;
  opacity: 0.3;
  filter: blur(2px);
  transition: 0.5s;
  box-sizing: border-box;
  width: calc(50% - 40px);
  display: flex;
  position: relative;
  transform: translateY(-80px);
}
.item:before {
  content: attr(data-text);
  letter-spacing: 3px;
  width: 100%;
  position: absolute;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  top: 70%;
  margin-top: -5px;
  padding-left: 15px;
  opacity: 0;
  right: calc(-100% - 56px);
  font: 900 20px "";
  letter-spacing: 5px;
}
.item:nth-child(even) {
  align-self: flex-end;
}
.item:nth-child(even):before {
  right: auto;
  text-align: right;
  left: calc(-100% - 56px);
  padding-left: 0;
  border-left: none;
  border-right: 2px solid rgba(255, 255, 255, 0.5);
  padding-right: 15px;
}
.item--active {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
}
.item--active:before {
  top: 50%;
  transition: 0.3s all 0.2s;
  opacity: 1;
}
.item--active .content-title {
  margin: -50px 0 20px 0;
}
.img {
  max-width: 100%;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
}
.subtitle {
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  letter-spacing: 5px;
  margin: 10px 0 0 0;
  font-weight: normal;
}
.footer {
  padding: 95px 0;
  text-align: center;
}
.footer a {
  color: #999;
  display: inline-block;
}
@media only screen and(max-width: 767px) {
  .item {
    align-self: baseline !important;
    width: 100%;
    padding: 0 30px 150px 80px;
  }
  .item:before {
    left: 10px !important;
    padding: 0 !important;
    top: 50px;
    text-align: center !important;
    width: 60px;
    border: none !important;
  }
  .item:last-child {
    padding-bottom: 40px;
  }
}
@media only screen and(max-width: 767px) {
  .timeline:before {
    left: 40px;
  }
}
.back_to_author {
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
</style>
