/* 文章列表 */
<template>
  <div class='content'>
    <div style="margin: 0 auto; max-width: 1080px !important; padding: 0 10px">

      <el-row style="margin:20px 0" :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="17" :xl="17">
          <div>
            <div class="flex_between" style="height: 50px;padding:0 8px">
              <div class="title">{{articleObj.articleTitle}}</div>
            </div>
          </div>

          <el-card>
            <el-image :src="articleObj.cover" lazy style="width:100%;height:100%;display:inline-block;"></el-image>
            <mavon-editor class="md" :value="articleObj.articleContent" :subfield="false" :defaultOpen="'preview'" :toolbarsFlag="false" :editable="false" :scrollStyle="true" :ishljs="true" />

            <mavon-editor v-model="context" :toolbars="toolbars" defaultOpen='edit' :subfield="false" placeholder='请在这里填写留言...' @keydown="editorKeyDown" />
            <div style="text-align:left;margin:10px 0;">欢迎评论~~</div>
            <div style="text-align:right;margin:10px 0;">
              <el-button type="primary" size="mini">保存</el-button>
            </div>
          </el-card>
        </el-col>

        <rightNav />
      </el-row>

    </div>

  </div>
</template>
<script>
import { selectOneArticle } from '@/api/article'
import rightNav from '@/components/rightNav'
export default {
  components: {
    rightNav
  },
  data() {
    return {
      context: '',
      articleObj: {},
      toolbars: {
        bold: false, // 粗体
        italic: false, // 斜体
        header: false, // 标题
        underline: false, // 下划线
        strikethrough: false, // 中划线
        mark: false, // 标记
        superscript: false, // 上角标
        subscript: false, // 下角标
        quote: false, // 引用
        ol: false, // 有序列表
        ul: false, // 无序列表
        link: true, // 链接
        imagelink: false, // 图片链接
        code: true, // code
        table: false, // 表格
        fullscreen: false, // 全屏编辑
        readmodel: false, // 沉浸式阅读
        htmlcode: false, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: false, // 上一步
        redo: false, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: false, // 导航目录
        /* 2.1.8 */
        alignleft: false, // 左对齐
        aligncenter: false, // 居中
        alignright: false, // 右对齐
        /* 2.2.1 */
        subfield: false, // 单双栏模式
        preview: true, // 预览
        defaultOpen: 'edit',
      },
    };
  },
  created() {
    this.selectArticle(this.$route.query.id)
  },
  methods: {
    async selectArticle(id) {
      const { data: data } = await selectOneArticle({ id: id });
      if (data.status != 200) return this.$message.error(data.message);
      this.articleObj = data.data;
      // this.dialogForm = {
      //   id: data.data.id,
      //   articleTitle: data.data.articleTitle,
      //   keyword: data.data.keyword,
      //   articleContent: data.data.articleContent,
      //   cover: data.data.cover,
      // }
    },
    editorKeyDown() {

    },
  },
};
</script>
<style  scoped>
</style>