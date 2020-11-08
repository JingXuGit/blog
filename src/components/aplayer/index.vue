<template>
  <div class="context">
  <!-- hidden-md-and-down -->
    <aplayer class="aplayer " theme="#C20C0C" :listFolded="true" controls autoplay :volume="0.5" float  repeat :list="muscicList" :music="muscicList[0]" />
  </div>
</template>
<script>
import Aplayer from 'vue-aplayer'
export default {
  components: {
    Aplayer
  },
  data() {
    return {
      muscicList: [
        {
          title: '慢慢喜欢你',
          artist: '莫文蔚',
          src: 'http://39.107.230.206:8101/public/page/headImg/莫文蔚 - 慢慢喜欢你.mp3',
        },
        {
          title: '红色高跟鞋',
          artist: '蔡健雅',
          src: 'http://39.107.230.206:8101/public/page/headImg/蔡健雅 - 红色高跟鞋.mp3',
        },
        {
          title: '小宇',
          artist: '张震岳',
          src: 'http://39.107.230.206:8101/public/page/headImg/张震岳 - 小宇.mp3',
        },
        {
          title: '先来先走',
          artist: '苟瀚中',
          src: 'http://39.107.230.206:8101/public/page/headImg/苟瀚中 - 先来先走.mp3',
        },
        {
          title: '流年',
          artist: '王菲',
          src: 'http://39.107.230.206:8101/public/page/headImg/王菲 - 流年.mp3',
        },
        {
          title: '后来(国)(Live)',
          artist: '张敬轩',
          src: 'http://39.107.230.206:8101/public/page/headImg/张敬轩 - 后来(国)(Live).mp3',
        },
        {
          title: '吻得太逼真',
          artist: '张敬轩',
          src: 'http://39.107.230.206:8101/public/page/headImg/张敬轩 - 吻得太逼真.mp3',
        },
        {
          title: '你瞒我瞒',
          artist: '陈柏宇',
          src: 'http://39.107.230.206:8101/public/page/headImg/陈柏宇 - 你瞒我瞒.mp3',
        },
        {
          title: '吴哥窟',
          artist: '吴雨霏',
          src: 'http://39.107.230.206:8101/public/page/headImg/吴雨霏 - 吴哥窟.mp3',
        },
        {
          title: '黄昏',
          artist: '周传雄',
          src: 'http://39.107.230.206:8101/public/page/headImg/周传雄 - 黄昏.mp3',
        },
        {
          title: '突然好想你 (Live)',
          artist: '古巨基',
          src: 'http://39.107.230.206:8101/public/page/headImg/古巨基 - 突然好想你 (Live).mp3',
        },
        {
          title: '姗姗',
          artist: '金玟岐',
          src: 'http://39.107.230.206:8101/public/page/headImg/金玟岐 - 姗姗.mp3',
        },
        {
          title: '岁月神偷',
          artist: '金玟岐',
          src: 'http://39.107.230.206:8101/public/page/headImg/金玟岐 - 岁月神偷.mp3',
        },
        {
          title: '爱情鸟',
          artist: '林依轮',
          src: 'http://39.107.230.206:8101/public/page/headImg/林依轮 - 爱情鸟.mp3',
        },
        {
          title: '夜夜夜夜',
          artist: '齐秦',
          src: 'http://39.107.230.206:8101/public/page/headImg/齐秦 - 夜夜夜夜.mp3',
        },

      ],
    }
  }
}
</script>
<style>
.aplayer {
  position: fixed !important;
  bottom: 20px;
  left: 0px;
  z-index: 999999;
}
</style>
