<template>
  <div id="app">
  
  <router-view>
  <!-- 라우터에 따라 대채되는 부분 -->
  </router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
