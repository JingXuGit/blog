<template>
  <div style="height:100%">
    <HeaderNav />
    <!-- <div class="container"> -->
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    <!-- </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from "../components/nav/header.vue";
export default {
  name: "Home",
  components: {
    HeaderNav,
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
