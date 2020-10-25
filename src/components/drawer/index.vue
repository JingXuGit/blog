<template>
  <div>
    <el-drawer title="我是标题" ref="drawer" :visible.sync="drawer" :with-header="false" direction="ltr" :before-close="handleClose" :modal="true">
      <div style="padding: 20px 10px;display: flex; align-items: center;justify-content: space-around;">
        <div class="el-icon-sunny" style="color:#fff;font-size:24px;"></div>
        <div class="el-icon-bell" style="color:#fff;font-size:22px;"></div>
      </div>
      <div style="background:#f5f5f5;width:70px;height:70px;border-radius:50%;margin:10px auto">
        <el-avatar :size="70" :src="avatarImgUrl"></el-avatar>
      </div>
      <h2 class="title" style="color:#fff;font-size:16px!important">{{username}}</h2>
      <div class="menu_list">
        <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @select="handleSelect" router>
          <el-menu-item index="/">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/notes">
            <i class="el-icon-notebook-2"></i>
            <span slot="title">文章</span>
          </el-menu-item>
          <el-menu-item index="/resume">
            <i class="el-icon-document"></i>
            <span slot="title">简历</span>
          </el-menu-item>
          <el-menu-item index="/essays">
            <i class="el-icon-chat-line-square"></i>
            <span slot="title">随笔</span>
          </el-menu-item>
          <el-menu-item index="/guestbook">
            <i class="el-icon-message"></i>
            <span slot="title">留言</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div style="margin:0 20px;">
        <el-button size="mini" type="danger" @click="showLoginDialog" style="width:100%" v-if="role ==null">登录</el-button>
        <el-button size="mini" type="danger" @click="logout" style="width:100%" v-else>退出登录</el-button>
      </div>
    </el-drawer>
    <dialog-login :dialogVisible="dialogVisible" @close="closeDialog"></dialog-login>
  </div>
</template>

<script>
import login from '@/components/login';
export default {
  components: {
    'dialog-login': login
  },
  props: {
    drawerFlag: Boolean
  },
  data() {
    return {
      activeIndex: '/',
      drawer: false,
      dialogVisible: false,
      role: JSON.parse(this.$store.state.blog.user) == null ? null : JSON.parse(this.$store.state.blog.user).role,
      username: JSON.parse(this.$store.state.blog.user) == null ? null : JSON.parse(this.$store.state.blog.user).username,
      avatarImgUrl: JSON.parse(this.$store.state.blog.user) == null ? null : JSON.parse(this.$store.state.blog.user).avatarImgUrl,
    };
  },
  watch: {
    drawerFlag: function (v1) {
      this.drawer = v1
    },
    $route: function () {
      // 路由改变时执行
      this.fetchNavData();
    },
    "$store.state.blog.user"(newval) {
      if (newval != null) {
        this.role = JSON.parse(newval).role
        this.username = JSON.parse(newval).username
        this.avatarImgUrl = JSON.parse(newval).avatarImgUrl
      } else {
        this.role = null;
        this.username = 'JingXu';
        this.avatarImgUrl = null;
      }
    },
  },
  created() {
    this.fetchNavData();
  },
  methods: {
    handleSelect(index) {
      this.activeIndex = index;
      this.$refs.drawer.closeDrawer()
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
      } else {
        this.flag = true;
        this.activeIndex = nav_path;
      }
    },
    getImgUrl(url) {
      return require("@/assets/images/" + url);
    },
    handleClose(done) {
      this.$emit('changeDrawer', false)
      done();
    },

    showLoginDialog() {
      this.$refs.drawer.closeDrawer()
      this.dialogVisible = true
    },
    closeDialog(data) {
      this.dialogVisible = data
    },
    logout() {
      this.$store.dispatch('setAccount', null)
      window.localStorage.clear();
      this.$refs.drawer.closeDrawer()
      this.$message.success({
        message: '您已退出登录',
        duration: '1000'
      });
    },

  },
};
</script>

<style lang='scss' scoped>
</style>
