<template>
  <div class='content'>
    <div style="margin: 0 auto; max-width: 1080px !important; padding: 0 10px">

      <el-row style="margin:20px 0" :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div>
            <div class="flex_between" style="height: 50px;padding:0 8px">
              <div class="title">编辑文档</div>
            </div>
          </div>
          <div style="text-align:right;margin:20px 0">
            <el-button type="primary" size="mini" @click="addArticle" @touchend="addArticle">添加文章</el-button>
          </div>

          <el-table :data="tableData" border class="shadow" stripe size="mini" style="border-radius:10px;width: 100%;background:#f5f5f5;">
            <el-table-column prop="articleTitle" align="center" label="文章标题"></el-table-column>
            <el-table-column prop="articleContent" align="center" label="文章内容"></el-table-column>
            <el-table-column prop="cover" align="center" label="封面图">
              <template slot-scope="scope">
                <div>
                  <vue-preview :slides="setPreview(scope.row)" class="preview"></vue-preview>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="keyword" align="center" label="关键字" width="70"></el-table-column>
            <el-table-column prop="classifiId" align="center" label="文章标签" width="90">
              <template slot-scope="scope">
                {{scope.row.classifiId == 1?'#文章':'#其他'}}
              </template>
            </el-table-column>
            <el-table-column prop="clicks" align="center" label="点击数" width="70">
              <template slot-scope="scope">
                <div>
                  {{scope.row.clicks}} 次
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="comments" align="center" label="评论数" width="70">
              <template slot-scope="scope">
                <div>
                  {{scope.row.clicks}} 条
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="createTime" align="center" label="创建时间"></el-table-column>
            <el-table-column prop="updateTime" align="center" label="更新时间"></el-table-column>
            <el-table-column prop="updateTime" align="center" label="操作" width="150">
              <template slot-scope="scope">
                <el-button type="primary" size="mini" @click="editArticle(scope.row.id)" @touchend="editArticle(scope.row.id)">编辑</el-button>
                <el-button type="primary" size="mini" @click="deleteArticle(scope.row.id)" @touchend="deleteArticle(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pageSize" layout="total, prev, pager, next" :total="total" style="margin-top:20px;">
          </el-pagination>

          <div class="dialog_">
            <el-dialog :title="addOrEdit?'添加文章':'编辑文章'" :visible.sync="dialogVisible" :before-close="handleClose" :close-on-click-modal="false" :close-on-press-escape="false">
              <el-form :model="dialogForm" :rules="rules" class="forms" ref="dialogForm" label-width="0px" style="text-align:left">
                <el-form-item label="标题" prop="articleTitle">
                  <el-input v-model="dialogForm.articleTitle" size="mini"></el-input>
                </el-form-item>
                <el-form-item label="关键字" prop="keyword">
                  <el-input v-model="dialogForm.keyword" size="mini"></el-input>
                </el-form-item>
                <!-- <el-form-item label="类型" prop="classifiId">
                <el-select v-model="dialogForm.classifiId" placeholder="请选择文章类型" size="mini">
                  <el-option label="文章" value="1"></el-option>
                  <el-option label="随笔" value="2"></el-option>
                </el-select>
              </el-form-item> -->
                <el-form-item label="封面图" prop="cover">
                  <el-upload class="avatar-uploader" action="" :show-file-list="false" :on-change="getFile" :limit="1" list-type="picture" :auto-upload="false">
                    <el-image v-if="dialogForm.cover" :src="dialogForm.cover" class="avatar" fit="cover" style="width: 100px; height: 100px"></el-image>
                    <i v-else class="el-icon-plus avatar-uploader-icon" style="font-size:26px;"></i>
                  </el-upload>
                </el-form-item>
                <el-form-item label="内容" prop="articleContent">
                  <mavon-editor v-model="dialogForm.articleContent" :toolbars="toolbars" defaultOpen='edit' :subfield="false" placeholder='请在这里输入文章/随笔内容...' @keydown="editorKeyDown" ref=md @imgAdd="$imgAdd" style="margin-top:10px" />
                </el-form-item>
              </el-form>
              <div style="text-align:right;margin:10px 0;">
                <el-button type="primary" size="mini" @click="addOrEdit?saveArticle():saveEditArticle()" @touchend="addOrEdit?saveArticle():saveEditArticle()">保存</el-button>
              </div>
            </el-dialog>
          </div>

        </el-col>

      </el-row>

    </div>

  </div>
</template>
<script>
import { addArticleMethods, selectArticleMethods, selectOneArticle, deleteOneArticle, uploadImage } from '@/api/article';
export default {
  components: {
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      total: 0,
      addOrEdit: true,
      dialogVisible: false,
      tableData: [],

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
      imageUrl: null,
      dialogForm: {
        articleTitle: null,
        keyword: null,
        // classifiId: null,
        articleContent: '',
        cover: null,
      },
      rules: {
        articleTitle: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        keyword: [
          { required: true, message: '请输入关键字', trigger: 'blur' }
        ],
        classifiId: [
          { required: true, message: '请选择文章类型', trigger: 'change' }
        ],
        cover: [
          { required: true, message: '请选择封面图', trigger: 'change' }
        ],
        articleContent: [
          { required: true, message: '请输入文章内容', trigger: 'blur' }
        ],
      },
    };
  },
  created() {
    this.selectArticle()
  },
  methods: {

    /* 缩略图初始化方法 */
    setPreview(row) {
      var arr = [];
      arr.push(row);
      //给预览图设置参数
      arr.forEach(img => {
        img.src = row.cover;
        img.msrc = row.cover;
        img.w = 1200;//这是大图的宽
        img.h = 800;
      })
      return arr;
    },

    editorKeyDown() {

    },
    async $imgAdd(pos, $file) {
      // 将图片上传到服务器.
      var base64Data = $file.miniurl.replace(/^data:image\/\w+;base64,/, "")
      // let params = { base64: base64Data }
      // console.log(params);
      const { data: data } = await uploadImage({ "imgData": base64Data })
      console.log(data);
      // uploadImg(params).then(res => {
      //   // 回显
      //   this.$refs.md.$img2Url(pos, 服务器返回的路径);
      // })
    },

    /* 查询文章 */
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

      this.tableData = data.data.article;
      this.total = data.data.total
    },

    /* 点击添加按钮 */
    addArticle() {
      this.addOrEdit = true;
      this.dialogVisible = true;
    },

    /* 添加保存 */
    saveArticle() {
      this.$refs.dialogForm.validate(async (valid) => {
        if (valid) {
          this.dialogForm.id = null
          const { data: data } = await addArticleMethods(this.dialogForm);
          if (data.status != 200) return this.$message.error(data.message);
          this.dialogForm = {
            articleTitle: null,
            keyword: null,
            articleContent: '',
            cover: null,
          }
          this.dialogVisible = false;
          this.selectArticle();

        } else {
          return false;
        }
      });
    },

    /* 编辑获取单条数据 */
    async editArticle(id) {
      this.addOrEdit = false;
      this.dialogVisible = true;
      console.log(id)
      const { data: data } = await selectOneArticle({ id: id });
      if (data.status != 200) return this.$message.error(data.message);
      this.dialogForm = {
        id: data.data.id,
        articleTitle: data.data.articleTitle,
        keyword: data.data.keyword,
        articleContent: data.data.articleContent,
        cover: data.data.cover,
      }
    },

    /* 编辑保存 */
    saveEditArticle() {
      this.$refs.dialogForm.validate(async (valid) => {
        if (valid) {
          const { data: data } = await addArticleMethods(this.dialogForm);
          console.log(data);
          if (data.status != 200) return this.$message.error(data.message);
          this.dialogVisible = false;
          this.selectArticle();
          this.dialogForm = {
            articleTitle: null,
            keyword: null,
            articleContent: '',
            cover: null,
          }
        } else {
          return false;
        }
      });
    },

    async deleteArticle(id) {
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
      const { data: data } = await deleteOneArticle({ id: id });
      if (data.status != 200) return this.$message.error(data.message);
      this.$message.success(data.message);
      this.selectArticle();
    },

    getFile(file) {
      this.getBase64(file.raw).then(res => {
        this.dialogForm.cover = res
      })
    },
    getBase64(file) {
      return new Promise(function (resolve, reject) {
        let reader = new FileReader()
        let imgResult = ''
        reader.readAsDataURL(file)
        reader.onload = function () {
          imgResult = reader.result
        }
        reader.onerror = function (error) {
          reject(error)
        }
        reader.onloadend = function () {
          resolve(imgResult)
        }
      })
    },

    handleClose() {
      this.dialogVisible = false;
      this.dialogForm = {
        articleTitle: null,
        keyword: null,
        articleContent: '',
        cover: null,
      }
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
</style>