<template>
<div id="app">
  <router-view />
  <WaveItem />
</div>
</template>

<script>
import waves from '@/components/waves'
export default {
  components: {
    'WaveItem': waves
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
