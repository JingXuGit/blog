/* 文章列表 */
<template>
  <div class='content'>
    <div style="margin: 0 auto; max-width: 1080px !important; padding: 0 10px">

      <el-row style="margin:20px 0" :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="17" :xl="17">
          <div>
            <div class="flex_between" style="height: 50px;padding:0 8px">
              <div class="title">文章标题</div>
            </div>
          </div>

          <el-card>
            <el-image src="https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg" lazy style="width:100%;height:100%;display:inline-block;"></el-image>
            
          </el-card>  
        </el-col>

        <rightNav />
      </el-row>

    </div>

  </div>
</template>
<script>
import rightNav from '@/components/rightNav'
export default {
  components: {
    rightNav
  },
  data() {
    return {

    };
  },
  created() {
  },
  methods: {

  },
};
</script>
<style lang='scss' scoped>
.el-timeline-item {
  text-align: left;
}
</style>