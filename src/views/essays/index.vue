<template>
  <div class='content'>
    <div style="margin: 0 auto; max-width: 1080px !important; padding: 0 10px">
      <div class="flex_between" style="height: 50px;padding:0 8px">
        <div class="title">短句</div>
      </div>
      <div style="text-align:right;margin:10px 0">
        <el-button type="primary" size="mini" @click="addEssays" @touchend="addEssays" v-if="role == 'admin'">添加随笔</el-button>
      </div>
      <el-card>
        <ul style="padding:30px">
          <li v-for="(item,i) in essayArr" :key="i" class="essay_li">
            <div class="essay_div shadow">
              <h4 style="display:flex;align-items:center;justify-content:space-between">
                <div>{{item.createTime }}</div>
                <div style="text-align:right" v-if="role == 'admin'">
                  <span class="el-icon-error" style="font-size:24px" @click="deleteEssays(item.id)"></span>
                </div>
              </h4>

              <p style="margin:20px 0;line-height: 30px;">{{item.essaysContent}}</p>
            </div>

          </li>
        </ul>
      </el-card>

    </div>
    <div class="dialog_">
      <el-dialog title="添加随笔" :visible.sync="dialogVisible" :before-close="handleClose" :close-on-click-modal="false" :close-on-press-escape="false">
        <el-form :model="dialogForm" :rules="rules" class="forms" ref="dialogForm" label-width="0px" style="text-align:left">
          <el-form-item label="内容" prop="essaysContent">
            <mavon-editor v-model="dialogForm.essaysContent" :toolbars="toolbars" defaultOpen='edit' :subfield="false" placeholder='请在这里输入随笔内容...' @keydown="editorKeyDown" style="margin-top:10px" />
          </el-form-item>
        </el-form>
        <div style="text-align:right;margin:10px 0;">
          <el-button type="primary" size="mini" @click="saveEssays" @touchend="saveEssays">保存</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
/* ,   */
import { addEssaysMethods, deleteOneEssays, selectEssaysMethods } from '@/api/essays'
export default {
  data() {
    return {
      role: JSON.parse(this.$store.state.blog.user) == null ? null : JSON.parse(this.$store.state.blog.user).role,
      dialogVisible: false,
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
        defaultOpen: 'edit',
      },

      dialogForm: {
        essaysContent: '',
      },
      rules: {
        essaysContent: [
          { required: true, message: '请输入随笔内容', trigger: 'blur' }
        ],
      },
      essayArr: [],
    };
  },
  watch: {
    "$store.state.blog.user"(newval) {
      if (newval != null) {

        this.role = JSON.parse(newval).role
      } else {

        this.role = null
      }
    },
  },
  created() {
    this.selectEssays()
  },
  methods: {
    async selectEssays() {
      const params = {
        currentPage: 1,
        pageSize: 100,
      }
      const { data: data } = await selectEssaysMethods(params);
      if (data.status != 200) return this.$message.error(data.message);
      data.data.forEach(item => {
        if (item.createTime != null) {
          item.createTime = this.dayjs(item.createTime).format("YYYY-MM-DD")
        }
      })
      this.essayArr = data.data;
    },

    addEssays() {
      this.dialogVisible = true;
    },
    saveEssays() {
      this.$refs.dialogForm.validate(async (valid) => {
        if (valid) {
          const { data: data } = await addEssaysMethods(this.dialogForm);
          if (data.status != 200) return this.$message.error(data.message);
          this.dialogForm = {
            essaysContent: '',
          }
          this.dialogVisible = false;
          this.selectEssays();

        } else {
          return false;
        }
      });
    },
    async deleteEssays(id) {
      const confirmResult = await this.$confirm(
        "此操作将永久删除该条数据, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).catch(err => err);
      if (confirmResult !== "confirm") {
        return this.$message({
          type: "info",
          message: "已取消删除"
        });
      }
      const { data: data } = await deleteOneEssays({ id: id });
      if (data.status != 200) return this.$message.error(data.message);
      this.$message.success(data.message);
      this.selectEssays();
    },
    editorKeyDown() {

    },
    handleClose() {
      this.dialogVisible = false;
      this.dialogForm = {
        essaysContent: '',
      }
    },
  },
};
</script>

<style scoped>
</style>
