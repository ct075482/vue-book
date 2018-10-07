<template>
    <div class="discover">
      <header>
        <h3>{{ msg }}</h3>
        <router-link to="/Search"><i class="el-icon-search"></i></router-link>
      </header>
      <div class="box">
        <ul>
          <li>
            <i class="iconfont">&#xe63d;</i>
            <br/>书单&nbsp;&nbsp;
          </li>
          <li>
            <i class="iconfont">&#xe68f;</i>
            <br/>听书&nbsp;
          </li>
          <li>
            <i class="iconfont">&#xe617;</i>
            <br/>红包&nbsp;
          </li>
        </ul>
      </div>
      <div class="card">
        <ul>
          <li><i class="iconfont">&#xe694;</i>分类<i class="el-icon-arrow-right"></i></li>
        </ul>
      </div>
      <div class="card">
        <ul>
          <li><i class="iconfont">&#xe641;</i>排行榜<i class="el-icon-arrow-right"></i></li>
          <li><i class="iconfont">&#xe74c;</i>精品专区<i class="el-icon-arrow-right"></i></li>
          <li><i class="iconfont">&#xe649;</i>今日免费<i class="el-icon-arrow-right"></i></li>
          <li><i class="iconfont">&#xe63d;</i>新书专区<i class="el-icon-arrow-right"></i></li>
        </ul>
      </div>
      <div class="card">
        <ul>
          <li><i class="iconfont">&#xe628;</i>专栏<i class="el-icon-arrow-right"></i></li>
        </ul>
      </div>
      <div class="card">
        <ul>
          <li><i class="iconfont">&#xe688;</i>活动中心<i class="el-icon-arrow-right"></i></li>
        </ul>
      </div>
    </div>
</template>

<script >
  export default {
    name: 'discover',
    data () {
      return {
        msg: '发现'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  header i{
    display: inline-block;
    position: absolute;
    right: 1rem;
    top:0.7rem;
    font-size: 1.3rem;
    color: white;
  }
  .box{
    width: 100%;
    height: 100%;
    background: white;
    margin-top: 2.8rem;
    padding: 1rem 0;
  }
  .box ul li{
    display: inline-block;
    width: 30%;
    text-align: center;
    font-size: 0.8rem;
  }
  .box ul li i{
    font-size: 2rem;
    color: #219cea;
  }
  .card{
    background: white;
    margin-top: 10px;
    text-align: left;
  }
  .card ul li{
    line-height: 2.5rem;
    height: 2.5rem;
    text-indent: 1rem;
    position: relative;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .card ul li i:first-child{
    color: #219cea;
    font-size: 1.3rem;
    vertical-align: middle;
    padding-right: 1rem;
  }
  .card ul li i:last-child{
    color: rgba(0,0,0,.2);
    position: absolute;
    top: 0.5rem;
    right: .5rem;
  }
</style>
