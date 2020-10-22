<template>

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
</template>
<script>
export default {
  data() {
    return {
    };
  },
  created() {

  },
  methods: {
    getImgUrl(url) {
      return require("@/assets/images/" + url);
    },
  },
};
</script>
<style lang='scss' scoped>
</style>