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
              <el-timeline-item :timestamp="item.createTime" placement="top" v-for="(item,index) in articleArr" :key='index'>
                <div style="cursor:pointer">
                  <div style="display:inline-flex;justify-content:space-between;align-items:center">
                    <div class="hover ehover1" style="width: 100px; height: 100px;cursor:pointer;margin:5px;">
                      <el-image :src="item.cover" lazy style="width: 100%; height: 100%;display:inline-block;" fit="cover"></el-image>
                      <div class="overlay">
                        <h3>{{item.articleTitle}}</h3>
                      </div>
                    </div>
                    <div style="margin-left:20px">
                      <p>{{item.createTime}}</p>
                      <h3 style="margin:10px 0;" @click.stop="navigateToDetail(item.id)" @touchend.stop="navigateToDetail(item.id)">{{item.articleTitle}}</h3>
                    </div>
                  </div>
                </div>
                <el-divider></el-divider>
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
import { selectArticleMethods } from '@/api/article'
import rightNav from '@/components/rightNav'
export default {
  components: {
    rightNav
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      total: 0,
      articleArr: [],
    };
  },
  created() {
    this.selectArticle();
  },
  methods: {
    async selectArticle() {
      const params = {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
      }
      const { data: data } = await selectArticleMethods(params);
      if (data.status != 200) return this.$message.error(data.message);
      if (data.data.article) {
        data.data.article.forEach(item => {
          if (item.createTime != null) {
            item.createTime = this.dayjs(item.createTime).format("YYYY-MM-DD HH:mm:ss")
          }
          if (item.updateTime != null) {
            item.updateTime = this.dayjs(item.updateTime).format("YYYY-MM-DD HH:mm:ss")
          }
        })
      }
      this.articleArr = data.data.article;
      this.total = data.data.total
    },

    navigateToDetail(id) {
      this.$router.push('/detail?id=' + id);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.selectArticle()
    }
  },
};
</script>
<style lang='scss' scoped>
.el-timeline-item {
  text-align: left;
}
</style>