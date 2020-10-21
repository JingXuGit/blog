    /* hidden-xs-only */
<template>
  <div class="content">
    <div style="margin: 0 auto; max-width: 1080px !important; padding: 0 10px">
      <div class="flex_between" style="height: 60px;padding:0 8px">
        <div class="title">猜你喜欢</div>
        <div class="flex_between">
          <el-switch v-model="switchValue" active-text="自动播放" @change="switchChange">
          </el-switch>
        </div>
      </div>

      <el-carousel height="755px" style="position: relative; padding: 0 8px" :interval="4000" :autoplay="isAutoplay">
        <el-carousel-item v-for="(item, index) in carouselArr" :key="index" style="height: 100%">
          <div class="read">
            <div class="title" style="color: #fff; font-size: 30px !important">
              {{ item.title }}
            </div>
            <el-button round size="mini" type="danger" style="margin: 10px">开始阅读</el-button>
          </div>
          <div class="bgImage" :style="'height: 100%;background-image:url(' + getImgUrl(item.images) + ')'"></div>
        </el-carousel-item>
      </el-carousel>

      <div class="flex_between">
        <el-input placeholder="请输入关键字" v-model="inputValue" size="mini"></el-input>
        <el-button icon="el-icon-message" size="mini">搜索</el-button>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  computed: {},
  mounted() { },
  watch: {},
  components: {},
  props: {},
  data() {
    return {
      switchValue: true,
      inputValue: null,
      isAutoplay: true,
      carouselArr: [
        {
          id: 1,
          images: "banner1.jpg",
          title: "忙碌是自由活着的一种底气",
        },
        {
          id: 2,
          title: "我只是来活跃气氛的~",
          images: "banner2.jpg",
        },
        {
          id: 3,
          title: "兴趣支撑梦想~",
          images: "banner3.jpg",
        },
      ],
    };
  },
  created() { },
  methods: {
    getImgUrl(url) {
      return require("@/assets/images/" + url);
    },
    /* 点击switch 开关 */
    switchChange(val) {
      if (!val) return this.isAutoplay = false;
      this.isAutoplay = true;
    }
  },
};
</script>
<style scoped>
.el-carousel__item {
  border-radius: 10px;
}
.read {
  position: absolute;
  color: #fff;
  z-index: 99;
  bottom: 20px;
  text-align: left;
}
.bgImage {
  width: 100%;
  background-position: center center;
  background-size: cover;
  transition: all 1s;
  -moz-transition: all 1s;
  -webkit-transition: all 1s;
  -o-transition: all 1s;
}
.bgImage:hover {
  transform: scale(1.1);
}
</style>