<template>
  <div class='header'>
    <div style="max-width: 1200px;margin:0 auto;">
      <el-row :gutter="10" class="row">
        <el-col :xs="21" :sm="21" :md="21" :lg="4" :xl="4" class="login_button">
          <span class="title">JingXu</span>
        </el-col>
        <el-col :offset="2" :lg="12" :xl="12" class="hidden-md-and-down">
          <el-menu :default-active="activeIndex" class="el-menu-top" mode="horizontal" router>
            <el-menu-item index="/">博客首页</el-menu-item>
            <el-menu-item index="/notes">好记性不如烂笔头</el-menu-item>
            <el-menu-item index="/timeLine">时间线</el-menu-item>
            <el-menu-item index="/essays">随笔</el-menu-item>
            <el-menu-item index="/leaveMessage">留言</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :offset="2" :lg="4" :xl="4" class="login_button hidden-md-and-down">
          <el-button type="primary" size="small">登录</el-button>
        </el-col>
        <el-col :xs="2" :sm="2" :md="2" class="hidden-lg-and-up">
          <div class="icon_menu"> <span class="el-icon-menu" style="font-size:24px"></span></div>
        </el-col>
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
  background: #ffff;
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
.login_button {
  height: 60px; /* no */
  line-height: 60px; /* no */
}
.title {
  font-size: 20px !important; /* no */
  font-weight: 500;
  letter-spacing: 0.0125em !important;
  cursor: pointer;
  padding: 8px; /* no */
  border-radius: 2px; /* no */
  text-indent: 0.0892857143em;
  text-transform: uppercase;
}
.title:hover {
  background: #f7f7f7;
}
.icon_menu {
  width: 60px; /* no */
  height: 60px; /* no */
  line-height: 60px; /* no */
  text-align: left;
  cursor: pointer;
}
</style>