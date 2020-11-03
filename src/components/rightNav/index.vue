<template>

  <el-col :offset="1" :md="6" :lg="6" class="hidden-md-and-down">

    <div class="right_model">
      <div class="title" style="text-align:left;height: 50px;line-height:50px;padding:0 8px">博主信息</div>
      <el-card>
        <div class="shadow" style="background:#f5f5f5;width:70px;height:70px;border-radius:50%;margin:10px auto">
          <el-avatar :size="70" :src="getImgUrl('avatar.jpg')"></el-avatar>
        </div>
        <div class="title">JingXu</div>
        <ul style="display:flex" class="personal_message_list">
          <li class="personal_message_list_li" @click="navigateToNotes" @touchend="navigateToNotes">
            <p>文章</p>
            <p>{{blogDetailsObj.articleNum}}篇</p>
          </li>
          <li class="personal_message_list_li">
            <p>标签</p>
            <p>{{labelNum}}种</p>
          </li>
          <li class="personal_message_list_li" @click="navigateToEssays" @touchend="navigateToEssays">
            <p>短句</p>
            <p>{{blogDetailsObj.essaysNum}}篇</p>
          </li>
        </ul>

        <div class="icons">
          <a href="https://weibo.com/6243831592/profile?topnav=1&wvr=6" target="_blank">
            <span class="iconfont icon-weibo"></span>
          </a>
          <a href="https://github.com/" target="_blank">
            <span class="iconfont icon-gongzhonghao"></span>
          </a>
          <a href="https://github.com/" target="_blank">
            <span class="iconfont icon-facebook"></span>
          </a>
          <a href="https://github.com/" target="_blank">
            <span class="iconfont icon-github"> </span>
          </a>
          <a href="https://github.com/" target="_blank">
            <span class="iconfont icon-twitter"></span>
          </a>
          <a href="https://github.com/" target="_blank">
            <span class="iconfont icon-youxiang"></span>
          </a>
          <a href="https://github.com/" target="_blank">
            <span class="iconfont icon-QQ"></span>
          </a>
        </div>
      </el-card>
    </div>

    <div class="right_model">
      <div class="title" style="text-align:left;height: 50px;line-height:50px;padding:0 8px">全部标签</div>
      <el-card>
        <span class="tags_box">
          <span class="tags" v-for="(item,index) in labelArr" :key="index">{{item.keyword + ' ('+item.count+')' }}</span>
        </span>
      </el-card>
    </div>

    <div class="right_model">
      <div class="title" style="text-align:left;">短句</div>
      <el-card>
        <div class="essays" v-for="(item,i) in essayArr" :key="i" @click="navigateToEssays" @touchend="navigateToEssays">
          {{item.essaysContent}}
        </div>
      </el-card>
    </div>
  </el-col>
</template>
<script>
import { selectBlogNumMethods, selectEssaysMethods, selectBlogLabelMethods } from '@/api/essays';
export default {
  data() {
    return {
      blogDetailsObj: {},
      essayArr: [],
      labelNum: null,
      labelArr: null,
    };
  },
  created() {
    this.selectBlogNum();
    this.selectEssays();
    this.selectBlogLabel();
  },
  methods: {
    async selectBlogNum() {
      const { data: data } = await selectBlogNumMethods();
      if (data.status != 200) return this.$message.error(data.message);
      this.blogDetailsObj = data.data;
    },

    async selectEssays() {
      const params = {
        currentPage: 1,
        pageSize: 5,
      }
      const { data: data } = await selectEssaysMethods(params);
      if (data.status != 200) return this.$message.error(data.message);
      this.essayArr = data.data;
    },

    async selectBlogLabel() {
      const { data: data } = await selectBlogLabelMethods();
      this.labelArr = data.data;
      this.labelNum = data.data.length;
    },
    navigateToNotes() {
      this.$router.push('/notes')
    },
    navigateToEssays() {
      this.$router.push('/essays')
    },
    getImgUrl(url) {
      return require("@/assets/images/" + url);
    },
  },
};
</script>
<style lang='scss' scoped>
.icons {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
}
.icons a {
  display: flex;
  align-items: center;
  justify-content: center;
}
.icons span {
  font-size: 24px;
  margin: 5px 13px;
  cursor: pointer;
}
</style>