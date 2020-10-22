/* 文章列表 */
<template>
  <div class='content'>
    <div style="margin: 0 auto; max-width: 1080px !important; padding: 0 10px">

      <el-row style="margin:20px 0" :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="17" :xl="17">
          <div>
            <div class="flex_between" style="height: 50px;padding:0 8px">
              <div class="title">文章总览</div>
            </div>
          </div>
          <el-card>

            <el-timeline>
              <el-timeline-item timestamp="2018/4/12" placement="top" v-for="(item) in 15" :key='item'>
                <el-card>
                  <div style="display:inline-flex;justify-content:space-between;align-items:center">
                    <el-image src="https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg" lazy style="width:80px;height:80px;display:inline-block;"></el-image>
                    <div style="margin-left:20px">
                      <p>2018/4/12 20:46</p>
                      <h3 style="margin:10px 0;">更新 Github 模板</h3>
                    </div>
                  </div>
                </el-card>
              </el-timeline-item>
            </el-timeline>

            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="10" layout="total, prev, pager, next" :total="total">
            </el-pagination>

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
      currentPage: 1,
      total: 20,
    };
  },
  created() {
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
};
</script>
<style lang='scss' scoped>
.el-timeline-item {
  text-align: left;
}
</style>