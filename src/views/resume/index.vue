<template>
  <div style="height:100%;width:100%;overflow:hidden">
    <div style="height:100%;" class="row_bg">

      <div class='header hidden-lg-and-up' :style="opacityStyle">
        <el-row class="row">
          <div class="hidden-lg-and-up" style="position:absolute;right:10px">
            <div class="icon_menu height"> <span class="el-icon-menu" style="font-size:24px;color:#fff"></span></div>
          </div>
        </el-row>
      </div>

      <div class="personal_left">
        <div class="personal_box">
          <el-avatar :size="70" :src="getImgUrl('avatar.jpg')"></el-avatar>
          <h2 class="text_right">李景旭</h2>
          <p class="text_right">Web前端工程师</p>
          <p class="text_right personal">
            <span class="el-icon-s-custom"> 男 / 23岁 /</span>
            <span class="el-icon-s-cooperation"> 3年工作经验</span>
          </p>
          <p class="text_right">人民有信仰，民族有希望，国家有力量</p>
          <p class="text_right"><span class="el-icon-phone"> 18310282832</span></p>
          <p class="text_right"><span class="el-icon-message"> 18310282832@163.com</span></p>
          <el-button type="primary" size="mini" style="margin:5px 0">下载简历到本地</el-button>
          <br>
          <el-button type="primary" class="hidden-md-and-down" size="mini" style="margin:5px 0" @click.stop="returnIndex" @touhend.stop="returnIndex">返回首页</el-button>
        </div>

      </div>

      <div class="personal_right">
        <div class="right_model">
          <h2>相关技能</h2>
          <ul>
            <li> • 熟练掌握HTML5、CSS3、JavaScript、了解ES6、ES7常用语法；</li>
            <li> • 熟悉Vue，能够进行项目开发并有独立的项目开发经验；</li>
            <li> • 熟悉Element-ui、Mint-Ui等前端UI组件库；</li>
            <li> • 熟练使用Git版本控制工具进行代码管理；</li>
            <li> • 熟悉uni-app跨平台框架开发应用，有项目开发经验；</li>
            <li> • 熟悉Websocket网络通信协议构建实时数据传输web应用；</li>
            <li> • 熟悉原生小程序开发流程,有项目独立开发经验；</li>
            <li> • 熟悉nodeJs服务端语言；</li>
          </ul>
          <el-divider></el-divider>
        </div>
        <div class="right_model">
          <h2>工作经历</h2>
          <div style="display:flex;justify-content:space-between;padding: 0px 30px;align-items:center">
            <div style="display:inline-block">
              <el-image style="width: 100px; height: 100px" :src="getImgUrl('logo.png')" fit="cover"></el-image>
            </div>
            <div style="display:inline-block">
              <div style="text-align:left;padding: 8px;">2018.10 - 2020.11</div>
              <div class="title" style="text-align:left;font-size:16px !important">华克医疗科技(北京)股份公司</div>
            </div>
          </div>
          <div style="text-align:left;padding: 15px 30px;">前端开发 | 计算机软件</div>
          <ul>
            <li> • 担任公司前端开发岗位，负责产品升级迭代，缺陷修复等工作；</li>
            <li> • 与项目团队紧密合作，确保系统正常运行，优化项目性能及视图，提高用户使用体验；</li>
            <li> • 参与项目组需求调研，产品业务探讨，编写技术实现方案等；</li>
            <li> • 工作期间使用的技术栈有Vue.js、VueRouter、Vuex、Jquery，webRTC、WebSocket、Flutter、Uni-app、小程序 </li>
            <li> • 主导部分前端项目开发，项目架构，技术栈选择，项目性能优化，组件封装，并且完成前端开发任务；</li>
            <li> • 在职期间参与或独立完成多个公司项目，并且善于发现新技术去学习应用；</li>
          </ul>
          <el-divider></el-divider>
        </div>
        <div class="right_model">
          <h2>项目经历</h2>
          <div class="project">
            <div style="display:flex;justify-content:space-between;padding: 0px 0px 0 30px;align-items:center">
              <div style="text-align:left;">2018.10 - 2020.11</div>
              <div class="title" style="text-align:left;font-size:16px !important">智慧辐射安全APP（Uni-app）</div>
            </div>
            <div style="text-align:left;padding: 15px 30px;">Web前端开发工程师</div>
            <ul>
              <li> • 负责智慧辐射安全管理APP前端开发工作，根据业务需求与开发团队共同完成产品的迭代升级，缺陷优化等任务</li>
              <li> • 项目核心功能包括数据可视化，机器人指令操控，以及对接后台实现控制放射机房中智能设备控制等</li>
              <li> • 项目采用Uni-app跨平台框架开发，采用uCharts完成数据可视化展示 </li>
              <li> • 封装内网环境下API请求方法和部分共有控件的封装 </li>
              <li> • 项目中使用的技术栈：Vue、ES6、JavaScript、小程序Api等，由于项目特殊性，只兼容Android端 </li>
              <li> • 目前项目已经在北京市广安门医院，中日友好医院和PC端同步实施测试</li>
            </ul>
            <el-divider></el-divider>
          </div>
          <div class="project">
            <div style="display:flex;justify-content:space-between;padding: 0px 0px 0 30px;align-items:center">
              <div style="text-align:left;">2020.06 - 2020.10</div>
              <div class="title" style="text-align:left;font-size:16px !important">智慧辐射安全系统（PC端）</div>
            </div>
            <div style="text-align:left;padding: 15px 30px;">Web前端开发工程师</div>
            <ul>
              <li> • 负责项目前端开发工作，根据也无需求与开发团队共同完成产品的迭代升级，缺陷优化等任务 </li>
              <li> • 项目核心功能包括多种数据可视化图表、监控视频，视频通话，语音通话、缩略图、上传、下载、导入、导出以及控制到tab页签级别的权限管理系统 </li>
              <li> • 封装公用组件包括表格，tab页签，分页，导出，导入，上传头像等组件，提高了代码的可复用性 </li>
              <li> • 使用WebSocket通信协议，建立长连接，实现图表数据的实时刷新，以及指令的实时渲染，医学废物排放实时提醒 </li>
              <li> • 使用webRTC即时通信和WebSocket完成局域网环境下PC端和Android端的音视频通话</li>
              <li> • 项目中使用的技术栈：Vue、Vue-Router、Vuex、Element-Ui、axios、Echarts、WebSocket、webRTC等 </li>
              <li> • 目前项目已经在北京市广安门医院，中日友好医院和App端同步实施测试</li>
            </ul>
            <el-divider></el-divider>
          </div>
          <div class="project">
            <div style="display:flex;justify-content:space-between;padding: 0px 0px 0 30px;align-items:center">
              <div style="text-align:left;">2020.05 - 2020.07</div>
              <div class="title" style="text-align:left;font-size:16px !important">射线环境检测系统（PC端）</div>
            </div>
            <div style="text-align:left;padding: 15px 30px;">Web前端开发工程师</div>
            <ul>
              <li> • 负责项目前端开发工作，根据业务需求与开发团队共同完成产品的迭代升级，缺陷优化等任务 </li>
              <li> • 项目核心功能包括多种数据可视化图表、以及角色+用户+菜单+按钮的权限管理系统 </li>
              <li> • 封装公用组件包括表格，tab页签，分页，导出，导入，上传头像等组件，提高了代码的可复用性 </li>
              <li> • 使用WebSocket通信协议，建立长连接，实现图表数据的实时刷新 </li>
              <li> • 项目中使用的技术栈：Vue、Vue-Router、Vuex、Element-Ui、axios、Echarts、WebSocket等</li>
              <li> • 目前项目已经在北京市广安门医院，中日友好医院实施测试</li>
            </ul>
            <el-divider></el-divider>
          </div>
          <div class="project">
            <div style="display:flex;justify-content:space-between;padding: 0px 0px 0 30px;align-items:center">
              <div style="text-align:left;">2019.12 - 2020.04</div>
              <div class="title" style="text-align:left;font-size:16px !important">设备管理App（Flutter App）</div>
            </div>
            <div style="text-align:left;padding: 15px 30px;">Web前端开发工程师</div>
            <ul>
              <li> • 负责项目前端开发工作，根据业务需求与开发团队共同完成产品的迭代升级，缺陷优化等任务 </li>
              <li> • 项目核心功能包括内网环境中语音识别，面部识别，媒体数据上传，SqlLite本地数据库存储，联网上传下载基础数据 等功能 </li>
              <li> • 封装项目基础控件，列表，图表，下拉加载，上拉刷新等控件； </li>
              <li> • 项目使用ImagePicker控件获取用户拍照权限，以FormData形式上传到后台服务器并返回识别结果； </li>
              <li> • 项目使用的技术栈包括FLutter、dio、sqllite、Connectivity、image_picker等</li>
              <li> • 目前项目已经在北京市广安门医院，中日友好医院实施测试</li>
            </ul>
            <el-divider></el-divider>
          </div>
          <div class="project">
            <div style="display:flex;justify-content:space-between;padding: 0px 0px 0 30px;align-items:center">
              <div style="text-align:left;">2019.04 - 2020.02</div>
              <div class="title" style="text-align:left;font-size:16px !important">辐射安全与放射卫生管理系统</div>
            </div>
            <div style="text-align:left;padding: 15px 30px;">Web前端开发工程师</div>
            <ul>
              <li> • 负责项目前端开发工作，根据业务需求与开发团队共同完成产品的迭代升级，缺陷优化等任务 </li>
              <li> • 与后端团队共同优化数据传输流程，大幅度提高前端性能，优化数据量过大时，表格数据卡顿现象 </li>
              <li> • 封装视频在线播放功能、上传、下载、导入/导出、tabs页签，Vue ReLoad刷新等功能，并且使用Mixins混入来分发 组件中可复用的功能； </li>
              <li> • 项目是用户+角色+菜单+按钮的权限管理系统，控制单点登录，通过注册动态路由，并且将权限控制到按钮级别 </li>
              <li> • 项目使用的技术栈包括Vue， Vue-Router，Vuex，Element-ui，axios，pl-table</li>
              <li> • 该项目目前已在北京广安门医院，中日友好医院部署运行，部分医院试运行；</li>
            </ul>
            <el-divider></el-divider>
          </div>
        </div>
        <div class="right_model">
          <h2>项目经历</h2>
          <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
            <el-tab-pane label="PC端" name="pc" style="flex-wrap: wrap;justify-content: center;background:#f5f5f5">
              <!-- <vue-preview :slides="setPreview(images.pc)" class="preview"></vue-preview> -->
              <div class="hover ehover3" style="width: 150px; height: 150px;cursor:pointer;margin:5px;">
                <el-image style="width: 100%; height: 100%;" :src="getImgUrl('pc1.jpg')" fit="cover"></el-image>
                <div class="overlay">
                  <h3>辐射安全与放射卫生管理系统</h3>
                </div>
              </div>
              <div class="hover ehover3" style="width: 150px; height: 150px;cursor:pointer;margin:5px;">
                <el-image style="width: 100%; height: 100%;" :src="getImgUrl('pc2.png')" fit="cover"></el-image>
                <div class="overlay">
                  <h3>辐射安全与放射卫生管理系统</h3>
                </div>
              </div>
              <div class="hover ehover3" style="width: 150px; height: 150px;cursor:pointer;margin:5px;">
                <el-image style="width: 100%; height: 100%;" :src="getImgUrl('pc3.png')" fit="cover"></el-image>
                <div class="overlay">
                  <h3>辐射安全与放射卫生管理系统</h3>
                </div>
              </div>
              <div class="hover ehover3" style="width: 150px; height: 150px;cursor:pointer;margin:5px;">
                <el-image style="width: 100%; height: 100%;" :src="getImgUrl('pc4.png')" fit="cover"></el-image>
                <div class="overlay">
                  <h3>辐射安全与放射卫生管理系统</h3>
                </div>
              </div>
              <div class="hover ehover3" style="width: 150px; height: 150px;cursor:pointer;margin:5px;">
                <el-image style="width: 100%; height: 100%;" :src="getImgUrl('pc5.png')" fit="cover"></el-image>
                <div class="overlay">
                  <h3>辐射安全与放射卫生管理系统</h3>
                </div>
              </div>
              <div class="hover ehover3" style="width: 150px; height: 150px;cursor:pointer;margin:5px;">
                <el-image style="width: 100%; height: 100%;" :src="getImgUrl('pc6.png')" fit="cover"></el-image>
                <div class="overlay">
                  <h3>智慧辐射安全系统（PC端）</h3>
                </div>
              </div>
              <div class="hover ehover3" style="width: 150px; height: 150px;cursor:pointer;margin:5px;">
                <el-image style="width: 100%; height: 100%;" :src="getImgUrl('pc7.png')" fit="cover"></el-image>
                <div class="overlay">
                  <h3>智慧辐射安全系统（PC端）</h3>
                </div>
              </div>
              <div class="hover ehover3" style="width: 150px; height: 150px;cursor:pointer;margin:5px;">
                <el-image style="width: 100%; height: 100%;" :src="getImgUrl('pc8.png')" fit="cover"></el-image>
                <div class="overlay">
                  <h3>智慧辐射安全系统（PC端）</h3>
                </div>
              </div>
              <div class="hover ehover3" style="width: 150px; height: 150px;cursor:pointer;margin:5px;">
                <el-image style="width: 100%; height: 100%;" :src="getImgUrl('pc9.png')" fit="cover"></el-image>
                <div class="overlay">
                  <h3>智慧辐射安全系统（PC端）</h3>
                </div>
              </div>
              <div class="hover ehover3" style="width: 150px; height: 150px;cursor:pointer;margin:5px;">
                <el-image style="width: 100%; height: 100%;" :src="getImgUrl('pc10.png')" fit="cover"></el-image>
                <div class="overlay">
                  <h3>智慧辐射安全系统（PC端）</h3>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="App" name="app" style="flex-wrap: wrap;justify-content: center;background:#f5f5f5">
              <div class="hover ehover3" style="width: 150px; height: 150px;cursor:pointer;margin:5px;">
                <el-image style="width: 100%; height: 100%;" :src="getImgUrl('app1.jpg')" fit="cover"></el-image>
                <div class="overlay">
                  <h3>智慧辐射安全APP（Uni-app）</h3>
                </div>
              </div>
              <div class="hover ehover3" style="width: 150px; height: 150px;cursor:pointer;margin:5px;">
                <el-image style="width: 100%; height: 100%;" :src="getImgUrl('app2.jpg')" fit="cover"></el-image>
                <div class="overlay">
                  <h3>智慧辐射安全APP（Uni-app）</h3>
                </div>
              </div>
              <div class="hover ehover3" style="width: 150px; height: 150px;cursor:pointer;margin:5px;">
                <el-image style="width: 100%; height: 100%;" :src="getImgUrl('app3.jpg')" fit="cover"></el-image>
                <div class="overlay">
                  <h3>智慧辐射安全APP（Uni-app）</h3>
                </div>
              </div>
              <div class="hover ehover3" style="width: 150px; height: 150px;cursor:pointer;margin:5px;">
                <el-image style="width: 100%; height: 100%;" :src="getImgUrl('app4.jpg')" fit="cover"></el-image>
                <div class="overlay">
                  <h3>智慧辐射安全APP（Uni-app）</h3>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
          <el-divider></el-divider>
        </div>
        <div class="right_model">
          <h2>期望工作</h2>
          <div>
            <div style="text-align:left;padding: 15px 10px;" class="job_box">
              <span class="el-icon-s-cooperation">Web前端</span>
              <span class="el-icon-timer">全职</span>
              <span class="el-icon-location-outline">西安</span>
              <span class="el-icon-coin">12K</span>
            </div>
            <el-divider></el-divider>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'pc',
      showAbs: true,
      opacityStyle: {
        opacity: 0,
        height: '50px',
        background: '#000',
      },

    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  created() {
  },
  methods: {

    handleScroll() {
      const top = window.pageYOffset || document.documentElement.scrollTop ||
        document.body.scrollTop
      if (top > 60) {
        let opacity = top / 400
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = {
          opacity, height: '50px',
          background: '#000',
        };
        this.showAbs = false
      } else {
        this.opacityStyle = {
          opacity: 0,
          height: '50px',
          background: '#000',
        };
        this.showAbs = true
      }
    },

    getImgUrl(url) {
      return require("@/assets/images/" + url);
    },
    returnIndex() {
      this.$router.push('/')
    },
    handleClick() {

    },
    /* 缩略图初始化方法 */
    setPreview(row) {
      var arr = [];
      arr.push(row);
      //给预览图设置参数
      arr.forEach(img => {
        img.src = row.imagebase;
        img.msrc = row.imagebase;
        img.alt = row.imagename;
        img.title = row.imagename;
        img.w = 800;//这是大图的宽
        img.h = 600;
      })
      return arr;
    },
  },
};
</script>
<style lang='scss' scoped>
.personal span {
  line-height: 28px;
  font-size: 14px;
}
.personal span:last-child {
  margin-right: 0;
}
.row_bg {
  background: url("../../assets/images/page1.jpg") center center / cover
    no-repeat fixed transparent;
}
.left_return {
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: #fff;
  background: #000;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  left: 5%;
  top: 2%;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon_menu {
  width: 50px;
  text-align: center;
  cursor: pointer;
}
.right_model {
  padding: 20px 0 10px 0;
}
.right_model h2 {
  margin-left: 10px;
  padding: 0 15px;
  text-align: left;
  position: relative;
}
.right_model h2::before {
  content: "";
  width: 8px;
  height: 8px;
  background: #000;
  position: absolute;
  left: -2px;
  top: 50%;
  margin-top: -2px;
}
.right_model ul {
  margin: 0 30px;
}
.right_model ul li {
  font-size: 13px;
  margin: 5px 0;
  text-align: left;
}
.job_box span {
  margin: 0 20px;
  font-size: 16px;
}
.el-tab-pane {
  display: flex;
}
</style>