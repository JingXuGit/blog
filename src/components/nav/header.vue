<template>
  <div class='header'>
    <div style="max-width: 1420px;margin:0 auto;">
      <el-row  class="row">
        <el-col :xs="24" :sm="21" :md="21" :lg="4" :xl="4" class="height">
          <span class="title">JingXu</span>
        </el-col>
        <el-col :lg="16" :xl="16" class="hidden-md-and-down height">
          <el-menu :default-active="activeIndex" class="el-menu-top" mode="horizontal" router>
            <el-menu-item index="/">博客首页</el-menu-item>
            <el-menu-item index="/notes">好记性不如烂笔头</el-menu-item>
            <el-menu-item index="/timeLine">时间线</el-menu-item>
            <el-menu-item index="/essays">随笔</el-menu-item>
            <el-menu-item index="/leaveMessage">留言</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :lg="4" :xl="4" class="height hidden-md-and-down">
          <el-button type="primary" size="small">登录</el-button>
        </el-col>
        <div class="hidden-lg-and-up" style="position:absolute;right:0px">
          <div class="icon_menu"> <span class="el-icon-menu" style="font-size:24px"></span></div>
        </div>
      </el-row>
    </div>

  </div>
</template>
<script>
export default {
  computed: {
  },
  mounted() {
  },
  watch: {
  },
  components: {
  },
  props: {
  },
  data() {
    return {
      activeIndex: '/'
    };
  },
  created() {
  },
  methods: {
    handleSelect() {

    }
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  top: 0;
  z-index: 9;
  background: #ffff;
  position: fixed;
}
.row {
  position: relative;
  width: 100%;
  height: 60px; /* no */
  text-align: center;
  height: 100%;
  margin: 0 auto;
}
.el-menu-top {
  display: flex;
  justify-content: space-around;
}
.height {
  height: 60px; /* no */
  line-height: 60px; /* no */
}
.title:hover {
  background: #f7f7f7;
}
.icon_menu {
  width: 60px; /* no */
  height: 60px; /* no */
  line-height: 60px; /* no */
  text-align: center;
  cursor: pointer;
}
</style>