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
            <mavon-editor v-model="context" :autofocus="false" :toolbars="toolbars" defaultOpen='edit' :subfield="false" :placeholder='placeholder' @keydown="editorKeyDown" ref="mavon" />
            <div style="text-align:left;margin:10px 0 0 0;">欢迎留言~~</div>
            <div style="text-align:right;margin: 0 0 10px 0;">
              <el-button type="primary" size="mini" v-if="role && comment_id != null" @click="cancelReply">取消回复</el-button>
              <el-button type="primary" size="mini" v-if="role && comment_id == null" @click="release" @touchend="release">发布</el-button>
              <el-button type="primary" size="mini" v-else-if="role && comment_id != null" @click="replyEnter" @touchend="replyEnter">回复</el-button>
              <el-button type="primary" size="mini" v-else>请先登录</el-button>
            </div>
          </div>
          <div class="guestbook_box shadow" v-if="commentArr.length > 0">
            <!-- 留言 -->
            <div class="guestbook" v-for="(item,index) in commentArr" :key="index">
              <div>
                <div class="guestbook_header">
                  <div class="guestbook_personal">
                    <div>
                      <el-avatar :size="40" :src="item.avatarImgUrl" style="cursor: pointer;"></el-avatar>
                    </div>
                    <div style="text-align:left;margin-left:0px">
                      <div style="padding: 2px 10px">
                        <span style="font-size:14px;">{{item.username}}</span>
                        <span class="reply" @click="reply(item)" @touchend="reply(item)">回复</span>
                      </div>
                      <div style="padding: 2px 10px;font-size:12px;">{{item.createTime}}</div>
                    </div>

                  </div>
                  <div class="guestbook_praise" @click="praise(item.id)" @touchend="praise(item.id)">
                    <div class="el-icon-star-on"></div>
                    <div>{{item.prase_count}}</div>
                  </div>
                </div>
                <div class="guestbook_content">
                  {{item.content}}
                </div>
              </div>
              <!-- 回复 -->
              <div style="margin-left:40px;">
                <div class="extends" v-if="indexs != index && item.answer_count != null" @click="extend(item.id,index,item)">—— 展开回复</div>
                <template v-if="indexs == index">
                  <div v-for="(items,i) in item.replyArr" :key="i">
                    <div class="guestbook_header">
                      <div class="guestbook_personal">
                        <div>
                          <el-avatar :size="40" :src="items.avatarImgUrl" style="cursor: pointer;"></el-avatar>
                        </div>
                        <div style="text-align:left;margin-left:0px">
                          <div style="padding: 2px 10px">
                            <span style="font-size:14px;">{{items.username}}</span>
                            <span class="reply" @click="reply(items)" @touchend="reply(items)">回复</span>
                          </div>
                          <div style="padding: 2px 10px;font-size:12px;">{{items.createTime}}</div>
                        </div>

                      </div>
                      <div class="guestbook_praise">
                        <div class="el-icon-star-on"></div>
                        <div>{{items.prase_count}}</div>
                      </div>
                    </div>
                    <div style="font-size:12px;text-align:left;padding:0 10px;margin-top:10px;">回复 <span style="color:#f68712">@{{items.answer_name}}</span></div>
                    <div class="guestbook_content">
                      {{items.content}}
                    </div>
                  </div>
                </template>
                <div class="extends" v-if="indexs == index" @click="packUp(index,item)">—— 收起</div>

              </div>
            </div>

            <el-divider></el-divider>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pageSize" layout="total, prev, pager, next" :total="total">
            </el-pagination>
          </div>

        </el-col>

        <rightNav />
      </el-row>

    </div>

  </div>
</template>
<script>
import rightNav from '@/components/rightNav';
import { addcommentMethods, replycommentMethods, selectcommentMethods, selectReplyMethods, praseMethods } from '@/api/comment';
export default {
  components: {
    rightNav
  },
  data() {
    return {
      placeholder: '请在这里填写留言...',
      extendsDiv: false,
      context: '',//输入的数据
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
      pageSize: 6,
      total: 0,
      role: JSON.parse(this.$store.state.blog.user) == null ? null : JSON.parse(this.$store.state.blog.user).role,
      id: JSON.parse(this.$store.state.blog.user) == null ? null : JSON.parse(this.$store.state.blog.user).id,
      commentArr: [],
      comment_id: null,
      replyArr: [],
      indexs: null,
    };
  },
  watch: {
    "$store.state.blog.user"(newval) {
      if (newval != null) {
        this.role = JSON.parse(newval).role;
        this.id = JSON.parse(newval).id;
      } else {
        this.role = null;
        this.id = null;
      }
    },
  },
  created() {
    this.selectcomment();


  },
  methods: {
    async selectcomment() {
      const params = {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
      }
      const { data: data } = await selectcommentMethods(params);
      if (data.status != 200) return this.$message.error(data.message);
      if (data.data) {
        data.data.guestbook.forEach(item => {
          if (item.createTime != null) {
            item.createTime = this.dayjs(item.createTime).format("YYYY-MM-DD HH:mm:ss")
          }
        })
      }
      data.data.guestbook.forEach((item1, index1) => {
        data.data.count.forEach((item2, index2) => {
          if (index1 == index2) {
            item1.answer_count = item2.answer_count
          }
        })
      })
      this.total = data.data.total
      this.commentArr = data.data.guestbook
    },
    async selectReply(id) {
      const params = {
        id: id
      }
      const { data: data } = await selectReplyMethods(params);
      if (data.status != 200) return this.$message.error(data.message);
      if (data.data) {
        data.data.forEach(item => {
          if (item.createTime != null) {
            item.createTime = this.dayjs(item.createTime).format("YYYY-MM-DD HH:mm:ss")
          }
        })
      }
      var self = this
      this.commentArr.forEach(function (item) {
        if (item.id == id) {
          self.$set(item, 'replyArr', data.data)
        } else {
          item.replyArr = [];
        }
      })
    },
    /* 点击按钮发布留言 */
    async release() {
      this.context = this.context.replace(/\s+/g, "")
      if (this.context != '') {
        const params = {
          user_id: this.id,
          content: this.context,
        }
        const { data: data } = await addcommentMethods(params);
        if (data.status != 200) return this.$message.error(data.message);
        this.$message.success(data.message);
        this.context = '';
        this.comment_id = null;
        this.placeholder = ''
        this.selectcomment();
      }

    },

    /* 点击回复按钮 */
    reply(item) {
      this.comment_id = item.id;
      this.answer_id = item.user_id;
      this.placeholder = '@ ' + item.username;
    },
    cancelReply() {
      this.comment_id = null
    },
    /* 点击点赞按钮 */
    async praise(id) {
      const params = {
        id: id
      };
      const { data: data } = await praseMethods(params);
      if (data.status != 200) return this.$message.error(data.message);
      this.selectcomment();
    },

    async replyEnter() {
      this.context = this.context.replace(/\s+/g, "")
      if (this.context != '') {
        const params = {
          answer_id: this.answer_id,
          user_id: this.id,
          parent_id: this.comment_id,
          content: this.context,
        }
        const { data: data } = await replycommentMethods(params);
        if (data.status != 200) return this.$message.error(data.message);
        this.$message.success(data.message);
        this.extendsDiv = !this.extendsDiv
        this.context = '';
        this.comment_id = null;
        this.placeholder = ''
        this.selectcomment();
      }
    },
    /* 点击展开 */
    extend(id, index) {
      this.indexs = index
      this.selectReply(id);
    },
    /* 点击收起 */
    packUp() {
      this.indexs = null
    },
    editorKeyDown() {

    },
    getImgUrl(url) {
      return require("@/assets/images/" + url);
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.selectcomment();
      // window.scrollTo(0, 0)
      this.scrollAnimation(document.documentElement.scrollTop || document.body.scrollTop, 0)
    },
    scrollAnimation(currentY, targetY) {
      // 获取当前位置方法
      // const currentY = document.documentElement.scrollTop || document.body.scrollTop

      // 计算需要移动的距离
      let needScrollTop = targetY - currentY
      let _currentY = currentY
      setTimeout(() => {
        // 一次调用滑动帧数，每次调用会不一样
        const dist = Math.ceil(needScrollTop / 10)
        _currentY += dist
        window.scrollTo(_currentY, currentY)
        // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
        if (needScrollTop > 10 || needScrollTop < -10) {
          this.scrollAnimation(_currentY, targetY)
        } else {
          window.scrollTo(_currentY, targetY)
        }
      }, 1)
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
  border-radius: 4px;
  margin-left: 15px;
  cursor: pointer;
  font-size: 12px;
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
  margin: 10px 0;
  text-align: left;
  padding: 0px 10px;
  font-size: 13px;
}
.extends {
  font-size: 13px;
  text-align: left;
  margin: 0px 10px 20px;
  cursor: pointer;
  font-weight: 500;
}
</style>