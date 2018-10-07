<template>
    <header class="header">
      <router-link to="/Me"><i class="iconfont">&#xe64a;</i></router-link>
        <h3>{{ msg }}</h3>
      <router-link to="/Search"><i class="el-icon-search"></i></router-link>
    </header>
</template>

<script  >
  export default {
    name: 'Header',
    data () {
      return {
        msg: 'CT'
      }
    }
  }
</script>

<style scoped>

  header{
    position: fixed;
    top: 0;
    left: 0;
    background: #219cea;
    width: 100%;
    height: 2.8rem;
    z-index: 10;
  }
  header h3{
    line-height: 2.8rem;
    color: white;
    display: inline-block;
  }
  header .el-icon-search{
    display: inline-block;
    position: absolute;
    right: 1rem;
    top:0.7rem;
    font-size: 1.3rem;
    color: white;
  }
  header .iconfont{
    display: inline-block;
    position: absolute;
    left: 1rem;
    top:0.7rem;
    font-size: 1.3rem;
    color: white;
  }
</style>
