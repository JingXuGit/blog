<template>
<div class='content'>
  <div style="margin: 0 auto; max-width: 1080px !important; padding: 0 10px">
    <div class="flex_between" style="height: 50px;padding:0 8px">
      <div class="title">随笔</div>
    </div>
    <el-card>
      <ul style="padding:30px">
        <li v-for="item in 9" :key="item" class="essay_li">
          <div class="essay_div shadow">
            <h4>2020-10-0{{item }}</h4>
            <p style="margin:20px 0;line-height: 30px;">随着年龄的增长，人总会变得越来越宽容；所以很多事情到最后并不是真的解决了，而是，算了吧。</p>
          </div>

        </li>
      </ul>
    </el-card>

  </div>

</div>
</template>

<script>
export default {
  computed: {},
  mounted() {},
  watch: {},
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
</style>
