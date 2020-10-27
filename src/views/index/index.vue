/* hidden-xs-only */
<template>
  <div class="content">
    <div style="margin: 0 auto; max-width: 1080px !important; padding: 0 10px">

      <div class="flex_between" style="height: 60px;padding:0 8px">
        <div class="title">我喜欢的</div>
        <div class="flex_between">
          <el-switch v-model="switchValue" active-text="自动播放" @change="switchChange" active-color="#000000">
          </el-switch>
        </div>
      </div>

      <el-carousel :height="height+'px'" class="heights" style="position: relative; padding: 0 8px" :interval="4000" :autoplay="isAutoplay">
        <el-carousel-item v-for="(item, index) in carouselArr" :key="index" style="height: 100%">
          <div class="read">
            <div class="title" style="color: #fff; font-size: 30px !important">
              {{ item.title }}
            </div>
            <!-- <el-button round size="mini" type="primary" style="margin: 10px">开始阅读</el-button> -->
          </div>
          <div class="bgImage" :style="'height: 100%;background-image:url(' + getImgUrl(item.images) + ')'"></div>
        </el-carousel-item>
      </el-carousel>

      <el-row style="margin:20px 0" :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="17" :xl="17">
          <div>
            <div class="flex_between" style="height: 50px;padding:0 8px">
              <div class="title">最近文章</div>
              <div class="flex_between">
                <el-switch v-model="showWay" active-text="列表模式" disabled @change="switchChange" active-color="#000000">
                </el-switch>
              </div>
            </div>
          </div>

          <ul class="article_list">
            <li class="article_li_list" v-for="(item,index) in articleArr" :key="index">
              <div style="position:relative">
                <div style="padding-bottom: 50%;"></div>
                <div class="bgImage1 ab" :style="'height:100%;background-image:url(' + item.cover + ')'"></div>
              </div>
              <div class="text_box">
                <h2 class="text_left margin10" style="cursor: pointer;">{{item.articleTitle}}</h2>
                <p class="text_left margin10" style="opacity:0.6;font-size:13px;">五月 24, 2020</p>
                <p class="text_clamp" v-html="item.articleContent">{{item.articleContent}}</p>
                <div class="flex_between margin10">
                  <el-button type="primary" size="mini" @click="toDetail(item.id)" @touchend="toDetail(item.id)">开始阅读</el-button>
                  <div style="cursor: pointer;">#{{item.keyword}}</div>
                </div>
              </div>

            </li>
            <!-- <el-button size="mini" type="primary" round @click="lookMore" @touchend="lookMore">加载更多</el-button> -->
          </ul>
        </el-col>

        <rightNav />
      </el-row>

    </div>
  </div>
</template>

<script>

import { selectArticleMethods } from '@/api/article'
// import { selectEssaysMethods } from '@/api/essays'
import rightNav from '@/components/rightNav'
export default {
  components: {
    rightNav
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 5,
      total: 0,
      articleArr: [],
      showWay: false,
      height: null,
      switchValue: true,
      inputValue: null,
      isAutoplay: true,
      carouselArr: [{
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
      {
        id: 4,
        title: "兴趣支撑梦想~",
        images: "banner4.jpg",
      },
      ],
    };
  },
  watch: {
    height(val) {
      if (!this.timer) {
        this.height = val;
        this.timer = true;
        const that = this;
        setTimeout(function () {
          that.timer = false
        }, 400);
      }
    }
  },
  mounted() {
    const that = this;
    that.height = window.innerHeight - document.getElementsByClassName('heights')[0].getBoundingClientRect().top - 32;
    window.onresize = () => {
      return (() => {
        that.height = window.innerHeight - document.getElementsByClassName('heights')[0].getBoundingClientRect().top - 32;
      })()
    }
  },
  created() {
    this.selectArticle();

  },
  methods: {
    async selectArticle() {
      const params = {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
      }
      const { data: data } = await selectArticleMethods(params);
      if (data.status != 200) return this.$message.error(data.message);

      if (data.data.article) {
        data.data.article.forEach(item => {
          if (item.createTime != null) {
            item.createTime = this.dayjs(item.createTime).format("YYYY-MM-DD HH:mm:ss")
          }
          if (item.updateTime != null) {
            item.updateTime = this.dayjs(item.updateTime).format("YYYY-MM-DD HH:mm:ss")
          }
        })
      }
      this.articleArr = data.data.article;
      this.total = data.data.total
    },

    /* 点击开始阅读跳转到详情页 */
    toDetail(id) {
      this.$router.push('/detail?id=' + id)
    },

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
</style>
