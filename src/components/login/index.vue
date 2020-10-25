<template>
  <div class='contents'>

    <el-dialog :visible.sync="loginVisible" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
      <div style="position:absolute;left:0px;top:0">
        <div class="icon_menu height"> <span class="el-icon-back" style="font-size:24px" @click="closeLoginDialog"></span></div>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin:20px 10px 0">
        <h2>欢迎回来...</h2>
        <div style="color:#ec558c" @click="toRegist">去注册</div>
      </div>
      <div style="text-align:left;font-size:16px;margin:10px 0 20px 10px;font-weight:600">请先填写以下信息进行登录</div>
      <el-form :model="loginForm" ref="loginForm" label-width="0px" style="margin:0px 20px 0 10px;padding-top:20px;user-select:none" :rules="rules">
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="loginForm.email" size="mini" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off" size="mini" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" @click="login">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog :visible.sync="registVisible" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
      <div style="position:absolute;left:0px;top:0">
        <div class="icon_menu height"> <span class="el-icon-back" style="font-size:24px" @click="closeRegistDialog"></span></div>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin:20px 10px 0">
        <h2>欢迎你...</h2>
        <div style="color:#ec558c" @click="toLogin">去登录</div>
      </div>
      <div style="text-align:left;font-size:16px;margin:10px 0 20px 10px;font-weight:600">请先填写以下信息进行注册</div>
      <el-form :model="registForm" ref="registForm" label-width="0px" style="margin:0px 20px 0 10px;padding-top:20px;user-select:none" :rules="rules">
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="registForm.email" size="mini" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registForm.password" autocomplete="off" size="mini" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="username">
          <el-input v-model="registForm.username" autocomplete="off" size="mini" placeholder="请输入昵称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" @click="regist">注册</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<script>
import {
  loginMethods
} from '@/api/login'
export default {

  data() {
    return {
      loginVisible: false,
      registVisible: false,
      rules: {
        email: [{
          required: true,
          message: '请输入邮箱地址',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: '请输入正确的邮箱地址',
          trigger: ['blur', 'change']
        }
        ],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        },
        {
          min: 6,
          max: 16,
          message: '长度在 6 到 16 个字符',
          trigger: 'blur'
        }
        ],
        username: [{
          required: true,
          message: '请输入昵称',
          trigger: 'blur'
        },
        {
          min: 2,
          max: 7,
          message: '长度在 2 到 7 个字符',
          trigger: 'blur'
        }
        ],
      },
      loginForm: {
        email: '18310282832@163.com',
        password: '123456',
      },
      registForm: {
        email: '',
        password: '',
        username: '',
      }
    };
  },
  props: {
    dialogVisible: Boolean
  },
  watch: {
    dialogVisible: function (v1) {
      this.loginVisible = v1;
    },
  },
  created() { },
  methods: {
    login() {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          var params = {
            email: this.loginForm.email,
            password: this.loginForm.password
          }
          const { data: data } = await loginMethods(params)
          console.log(data);
          if (data.status != 200) return this.$message.error(data.message)
          this.$message.success({
            message: data.message,
            duration: '1000'
          });
          window.localStorage.setItem('user', JSON.stringify(data.data))
          this.$store.dispatch('setAccount', JSON.stringify(data.data));
          this.loginVisible = false;
          this.$emit('close', false)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    regist() {
      this.$refs.registForm.validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    closeLoginDialog() {
      this.loginVisible = false;
      this.$emit('close', false)
    },
    closeRegistDialog() {
      this.registVisible = false;
      this.$emit('close', false)
    },
    toRegist() {
      this.$refs.loginForm.clearValidate()
      this.loginVisible = false;
      this.registVisible = true;

    },
    toLogin() {
      this.$refs.registForm.clearValidate()
      this.registVisible = false;
      this.loginVisible = true;
    },
  },
};
</script>

<style scoped>
</style>
