    /* hidden-xs-only */
<template>
  <div class="content">
    <div style="margin: 0 auto; max-width: 1080px !important; padding: 0 10px">

      <div class="flex_between" style="height: 60px;padding:0 8px">
        <div class="title">~~~~</div>
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
            <el-button round size="mini" type="primary" style="margin: 10px">开始阅读</el-button>
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
            <li class="article_li_list" v-for="o in 5" :key="o">
              <div style="position:relative">
                <div style="padding-bottom: 50%;"></div>
                <div class="bgImage1 ab" :style="'height:100%;background-image:url(' + getImgUrl('article1.webp') + ')'"></div>
              </div>
              <div class="text_box">
                <h2 class="text_left margin10" style="cursor: pointer;">忙碌是自由活着的一种底气</h2>
                <p class="text_left margin10" style="opacity:0.6;font-size:13px;">五月 24, 2020</p>
                <p class="text_clamp">程序员的工作和别的工作相比，看似是非常轻松的，而且薪资还偏高。但是作为程序员，加班是十分常见的情况：特别是在互联网公司，相信大家深有体会，除了典型的996外，项目赶进度得加班，项目上线得加班，项目突发情况得加班，疫情期间加班的程序员也不少。</p>
                <div class="flex_between margin10">
                  <el-button type="primary" size="mini">开始阅读</el-button>
                  <div style="cursor: pointer;">#随笔</div>
                </div>
              </div>

            </li>
            <el-button size="mini" type="primary" round>加载更多</el-button>
          </ul>
        </el-col>

        <el-col :offset="1" :md="6" :lg="6" class="hidden-md-and-down">

          <div class="right_model">
            <div class="title" style="text-align:left;height: 50px;line-height:50px;padding:0 8px">博主信息</div>
            <el-card>
              <div class="shadow" style="background:#f5f5f5;width:50px;height:50px;border-radius:50%;margin:10px auto">
                <el-avatar :size="50" :src="getImgUrl('avatar.jpg')"></el-avatar>
              </div>
              <div class="title">JingXu</div>
              <ul style="display:flex" class="personal_message_list">
                <li class="personal_message_list_li">
                  <p>文章</p>
                  <p>17</p>
                </li>
                <li class="personal_message_list_li">
                  <p>标签</p>
                  <p>13</p>
                </li>
                <li class="personal_message_list_li">
                  <p>分类</p>
                  <p>2</p>
                </li>
              </ul>
            </el-card>
          </div>

          <div class="right_model">
            <div class="title" style="text-align:left;height: 50px;line-height:50px;padding:0 8px">全部标签</div>
            <el-card>
              <span class="tags_box">
                <span class="tags" v-for="o in 11" :key="o">{{'标签 ' + o }}</span>
              </span>
            </el-card>
          </div>

          <div class="right_model">
            <div class="title" style="text-align:left;">随笔</div>
            <el-card>
              <div class="essays">
                随着年龄的增长，人总会变得越来越宽容；所以很多事情到最后并不是真的解决了，而是，算了吧。
              </div>
              <div class="essays">
                有时候就是觉得挺累的，什么都不想说，其实也没人愿意听你吐苦水，一堆负能量爆棚的话，真的没人愿意听，所以更想一个人，安静的听着歌喝着酒，想通看透自己安慰自己。
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showWay: false,
      height: null,
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
  max-width: 100%;
  background-position: center center;
  background-size: cover;
  transition: all 1s;
  -moz-transition: all 1s;
  -webkit-transition: all 1s;
  -o-transition: all 1s;
}
.bgImage1 {
  width: 100%;
  background-position: center center;
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: all 1s;
  -moz-transition: all 1s;
  -webkit-transition: all 1s;
  -o-transition: all 1s;
}

.right_model:nth-child(2n) {
  margin: 10px 0;
}
.tags_box {
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.tags {
  margin: 5px 10px;
  border-radius: 4px;
  display: inline-block;
  height: 100%;
  background: #e0e0e0;
  color: #000;
  padding: 6px;
  cursor: pointer;
}

.tags:hover,
.essays:hover {
  opacity: 0.8;
}
.bgImage:hover,
.bgImage1:hover {
  transform: scale(1.1);
}

.essays {
  padding: 6px;
  border: 1px solid #e0e0e0;
  margin: 20px;
  text-align: left;
  font-size: 14px;
  border-radius: 6px;
  color: #000;
  cursor: pointer;
  position: relative;
  background: #f7f7f7;
}
.essays::before {
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  left: -10px;
  top: 20px;
  border-top: 8px solid transparent;
  border-right: 10px solid #e0e0e0;
  border-bottom: 8px solid transparent;
}

.essays:nth-child(2n + 1) {
  background: #e0e0e0;
}

.article_list {
  height: 100%;
}

.article_li_list {
  height: 100%;
  border-radius: 10px;
  background: #f5f5f5;
  box-shadow: 10px 10px 10px #d0d0d0, -10px -10px 10px #fff;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}

.text_box {
  padding: 10px;
}
.text_clamp {
  overflow: hidden;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  font-size: 14px;
  color: #666;
  margin-bottom: 14px;
  padding-right: 10px;
  text-align: left;
}
.ab {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.personal_message_list {
  margin:10px;
}
.personal_message_list_li {
  text-align: center;
  width: 33%;
}
.personal_message_list_li p:first-child {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
  text-indent: 0.0125em;
}
.personal_message_list_li p:last-child {
  font-size: 16px;
  text-indent: 0.00125em;
  font-weight: 600;
}
</style>