<template>
    <div class="main">
      <router-view></router-view>
      <vue-nav></vue-nav>
    </div>
</template>

<script >
  import vueNav from '../components/Nav'
  export default {
    name: 'main',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      vueNav
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  width: 100%;
  height: 100%;
}
</style>
