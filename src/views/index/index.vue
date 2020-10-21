<template>
  <div class='content' style="background: red;">
    <div style="margin: 0 auto;max-width: 960px!important;" class=" hidden-xs-only">
      <div class="flex_between">
        <div class="title">猜你喜欢</div>
        <div class="flex_between">
          <div>
            <el-input placeholder="请输入关键字" v-model="inputValue" size="mini"></el-input>
          </div>
          <el-button class="el-icon-search" style="background:#fff;height:100%;border-left:none" size="mini">搜索</el-button>
        </div>
      </div>
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
      inputValue: null,
    };
  },
  created() {
  },
  methods: {
  },
};
</script>
<style lang='scss' scoped>
</style>