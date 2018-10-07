<template>
    <div class="Menu">
      <ul>
        <li>
          <i class="iconfont1">&#xe641;</i>
          <br/>
          排行榜
        </li>
        <li>
          <i class="iconfont1">&#xe68d;</i>
          <br/>
          分类
        </li>
        <li>
          <i class="iconfont1">&#xe65e;</i>
          <br/>
          专题
        </li>
      </ul>
    </div>
</template>

<script >
  export default {
    name: 'Menu',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .iconfont1{
    font-family:"iconfont" !important;
    font-size:2rem;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    margin-left: 0.3rem;
    color: #219cea;
    /*float: left;*/
  }
.Menu{
  width: 100%;
  height: 70px;
  padding-top: 10px;
  background: white;
}
  ul li{
    display: inline-block;
    width: 30%;
    font-size: 0.7rem;
  }
  .iconfont{
    color:#219cea;
    font-size: 2.5rem;
  }
</style>
