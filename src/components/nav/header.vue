<template>
  <div>
    <div class='header' v-if="flag" :style="opacityStyle">
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
            <div class="icon_menu height"> <span class="el-icon-menu" style="font-size:24px" @click="drawer = true"></span></div>
          </div>
        </el-row>
      </div>
    </div>
    <drawer-biew :drawerFlag="drawer" @changeDrawer="drawerChange"></drawer-biew>
  </div>

</template>
<script>
import drawer from '@/components/drawer';
export default {
  components: { 'drawer-biew': drawer },
  data() {
    return {
      activeIndex: '/',
      flag: true,
      showAbs: true,
      opacityStyle: {
        opacity: 1,
        background: '#fff',
      },
      drawer: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
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

    /* 监听滚动事件 */
    handleScroll() {
      if (this.$route.path == '/') {
        const top = window.pageYOffset || document.documentElement.scrollTop ||
          document.body.scrollTop
        if (top > 60) {
          let opacity = top /  300
          opacity = opacity > 1 ? 1 : opacity;
          this.opacityStyle = {
            opacity,
            background: '#fff',
          };
          this.showAbs = false
        } else {
          this.opacityStyle = {
            opacity: 1,
            background: '#fff',
          };
          this.showAbs = true
        }
      }
    },

    // 初始化菜单激活项
    fetchNavData() {
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
        this.flag = true;
        this.activeIndex = "/";
      } else if (nav_path == "/resume") {
        this.flag = false;
        this.activeIndex = nav_path;
      }
      else {
        this.flag = true;
        this.activeIndex = nav_path;
      }
    },

    getImgUrl(url) {
      return require("@/assets/images/" + url);
    },

    handleSelect(index) {
      this.activeIndex = index;
    },

    drawerChange(data) {
      this.drawer = data;
    },
  },
};
</script>
<style scoped>
</style>