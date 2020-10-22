<template>
  <div class="context">
    <img src="@/assets/images/not_found.gif">
    <p>哎呀，你好像迷路了</p>
    <p>不要慌！点击返回首页</p>
    <div>
      <router-link :to="{path: '/'}">
        <el-button type="primary" size="mini">返回首页</el-button>
      </router-link>
    </div>
  </div>
</template>
<style>
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  margin-top: 0;
}
.context {
  height: 100%;
  background: #fff;
  padding-top: 10%;
  position: absolute;
  /* top: 20%; */
  width: 100%;
  text-align: center;
}
.context img {
  max-width: 100%;
  max-height: 100%;
}
.context p {
  margin: 20px;
  font-size: 16px;
  color: #0d3349;
}
</style>
