<template>
  <div>
    <HeaderNav />
    <!-- <div class="container"> -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- </div> -->
    <aplayer/>
    <el-footer style="padding:0;position:relative;" v-if="$route.path != '/resume'">
      <p style="font-size:12px;margin:5px 0;">❤️By-JingXu-Blog</p>
      <p style="font-size:12px">© {{date}} 雪后燕瑶池,人间第一枝</p>
    </el-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from "../components/nav/header.vue";
import aplayer from "../components/aplayer/index.vue";
export default {
  data() {
    return {
      date: new Date().getFullYear()
    }
  },
  name: "Home",
  components: {
    HeaderNav,
    aplayer
  }
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
  // transition-delay: 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
