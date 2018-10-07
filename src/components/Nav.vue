<template>
    <footer class="footer">
      <ul>
        <li>
          <router-link to="/" exact>
            <i class="iconfont1">&#xe603;</i>
            <br/>
            <span class="nav-text">首页</span>
          </router-link>
        </li>
        <!--<li>-->
          <!--<router-link to="/Bookshelves" exact>-->
            <!--<i class="iconfont1">&#xe60a;</i>-->
            <!--<br/>-->
            <!--<span class="nav-text">书架</span>-->
          <!--</router-link>-->
        <!--</li>-->
        <li>
          <router-link to="/Discover" exact>
            <i class="iconfont1">&#xe608;</i>
            <br/>
            <span class="nav-text">发现</span>
          </router-link>
        </li>
        <li>
          <router-link to="/Me" >
            <i class="iconfont1">&#xe607;</i>
            <br/>
            <span class="nav-text">账号</span>
          </router-link>
       </li>
      </ul>
    </footer>
</template>

<script >
  export default {
    name: 'nav',
    data () {
      return {
        index: 0
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .iconfont1{
    /*margin-top:15px;*/
    /*margin-left: ;*/
    font-family:"iconfont" !important;
    font-size:1.3rem;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    /*float: left;*/
  }
  footer{
    width: 100%;
    height: 3.5rem;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid gray;
    background: white;
    z-index: 10;
  }
  ul{
    width: 100%;
  }
  li{
    display: inline-block;
    width: 20%;
    height: 3.5rem;
    padding-top: 0.6rem;
  }
  li i{
    padding-left: 0.3rem;
  }
  .iconfont{
    font-size: 1.2rem;
  }
  a{
    color: black;
    text-decoration: none;
  }
  .nav-text{
    font-size: 0.6rem;
  }
  .router-link-active{
    color: #219cea;
  }
</style>
