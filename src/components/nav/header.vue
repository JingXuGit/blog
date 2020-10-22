<template>
  <div class='header' v-if="flag">
    <div style="max-width: 1420px;margin:0 auto;">
      <el-row class="row">
        <el-col :xs="24" :sm="21" :md="21" :lg="4" :xl="4" class="height">
          <span class="title">JingXu</span>
        </el-col>
        <el-col :lg="16" :xl="16" class="hidden-md-and-down height">
          <el-menu :default-active="activeIndex" class="el-menu-top" mode="horizontal" @select="handleSelect" router>
            <el-menu-item index="/">博客首页</el-menu-item>
            <el-menu-item index="/notes">文章</el-menu-item>
            <el-menu-item index="/resume">简历</el-menu-item>
            <el-menu-item index="/essays">随笔</el-menu-item>
            <el-menu-item index="/guestbook">留言</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :lg="4" :xl="4" class="height hidden-md-and-down">
          <el-button type="primary" size="small">登录</el-button>
        </el-col>
        <div class="hidden-lg-and-up" style="position:absolute;right:0px">
          <div class="icon_menu height"> <span class="el-icon-menu" style="font-size:24px"></span></div>
        </div>
      </el-row>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '/',
      flag: true,
    };
  },
  watch: {
    $route: function () {
      // 路由改变时执行
      this.fetchNavData();
    }
  },
  created() {
    this.fetchNavData();
  },
  methods: {
    fetchNavData() {
      // 初始化菜单激活项
      let current_path = this.$route.path; //获取当前路由
      let routers = this.$router.options.routes; // 获取路由对象
      let nav_path = ""
      for (var i = 0; i < routers.length; i++) {
        if (routers[i].type === current_path) {
          nav_path = routers[i].type;
          break;
        }
      }
      if (nav_path == "/") {
        this.activeIndex = "/";
        // this.flag = true;
      } else if (nav_path == "/resume") {
        this.flag = false;
        this.activeIndex = nav_path;
      }
      else {
        // this.flag = false;
        this.activeIndex = nav_path;
      }
    },
    handleSelect(index) {
      this.activeIndex = index;
    },
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
.el-menu,
.el-menu-item {
  height: 100%;
}
.el-menu-top {
  display: flex;
  justify-content: flex-end;
}
.height {
  height: 50px; /* no */
  line-height: 50px; /* no */
}
.title:hover {
  background: #f7f7f7;
}
.icon_menu {
  width: 50px;
  text-align: center;
  cursor: pointer;
}
</style>