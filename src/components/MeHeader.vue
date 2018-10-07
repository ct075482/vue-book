<template>
    <header class="meHeader">
      <h3>我</h3>
      <i class="el-icon-setting"></i>
    </header>
</template>

<script >
  export default {
    name: 'meHeader',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
    width: 100%;
    height: 2.8rem;
    background: #219cea;
  }
  h3{
    color: white;
    line-height: 2.8rem;
  }
  i{
    display: inline-block;
    position: absolute;
    right: 1rem;
    top:0.7rem;
    font-size: 1.3rem;
    color: white;
  }
</style>
