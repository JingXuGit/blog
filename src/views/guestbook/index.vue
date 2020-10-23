<template>
  <div class='content'>
    <div style="margin: 0 auto; max-width: 1080px !important; padding: 0 10px">

      <el-row style="margin:20px 0" :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="17" :xl="17">
          <div>
            <div>
              <div class="flex_between" style="height: 50px;padding:0 8px">
                <div class="title">留言</div>
              </div>
            </div>
            <mavon-editor v-model="context" :toolbars="toolbars" defaultOpen='edit' :subfield="false" placeholder='请在这里填写留言...' @keydown="editorKeyDown" />
            <div style="text-align:left;margin:10px 0;">欢迎留言~~</div>
            <div style="text-align:right;margin:10px 0;">
              <el-button type="primary" size="mini">保存</el-button>
            </div>
          </div>
          <div class="guestbook_box shadow">
            <div class="guestbook" v-for="item in 4" :key="item">
              <div class="guestbook_header">
                <div class="guestbook_personal">
                  <div>
                    <el-avatar :size="40" :src="getImgUrl('avatar.jpg')" style="cursor: pointer;"></el-avatar>
                  </div>
                  <div style="text-align:left;margin-left:0px">
                    <div style="padding: 2px 10px">
                      <span style="font-size:16px;">Young</span>
                      <span class="reply">回复</span>
                    </div>
                    <div style="padding: 2px 10px;font-size:12px;">2020/10/23 23:19</div>
                  </div>

                </div>
                <div class="guestbook_praise">
                  <div class="el-icon-star-on"></div>
                  <div>10</div>
                </div>
              </div>
              <div class="guestbook_content">
                你好，你是用的云服务器，还是自己搭的服务器啊？成本怎么样？
                你好，你是用的云服务器，还是自己搭的服务器啊？成本怎么样？
                你好，你是用的云服务器，还是自己搭的服务器啊？成本怎么样？
                你好，你是用的云服务器，还是自己搭的服务器啊？成本怎么样？
              </div>
              <div class="extends">—— 展开1条回复</div>
              <el-divider></el-divider>
            </div>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="10" layout="total, prev, pager, next" :total="total">
            </el-pagination>
          </div>

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
      context: ' ',//输入的数据
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
      currentPage: 1,
      total: 20,
    };
  },
  created() {
  },
  methods: {
    editorKeyDown() {

    },
    getImgUrl(url) {
      return require("@/assets/images/" + url);
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
};
</script>
<style scoped>
.guestbook_box {
  border-radius: 10px;
}
.guestbook {
  background: #f5f5f5;
  padding: 20px 0px 0 0;
  color: #4c4e4d;
  border-radius: 2px;
}
.guestbook_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
}
.guestbook_header .reply {
  background: #409eff;
  padding: 2px 10px;
  color: #fff;
  border-radius: 2px;
  margin-left: 10px;
  cursor: pointer;
}
.guestbook_personal {
  display: flex;
  align-items: center;
}
.guestbook_praise {
  font-size: 12px;
}
.guestbook_praise .el-icon-star-on {
  font-size: 25px;
  cursor: pointer;
}
.guestbook_content {
  margin: 20px 0;
  text-align: left;
  padding: 0px 10px;
  font-size: 14px;
}
.extends {
  text-align: left;
  margin: 0px 30px 20px;
  cursor: pointer;
  font-weight: 500;
}
</style>