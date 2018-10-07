<template>
  <div class="book">
    <header>
      <a href="javascript:history.back()"><i class="el-icon-arrow-left"></i>返回</a>
      <ul>
        <li><img :src="book.imgSrc"></li>
        <li>
          <h4>{{book.title}}</h4>

          <p>{{book.author}}</p>

          <p>{{book.type}}</p>
        </li>
      </ul>
    </header>
    <div class="box">
      <ul>
        <li>311<br/><span class="small">月票</span></li>
        <li>669<span class="small">万</span><br/><span class="small">推荐</span></li>
        <li>5.2<span class="small">万次</span><br/><span class="small">打赏</span></li>
        <li>336.8<span class="small">万+</span><br/><span class="small">粉丝</span></li>
      </ul>
    </div>
    <div class="card">
      <ul>
        <li>
          <p>简介</p>

          <p>{{book.txt}}</p>
        </li>
        <li>
          <router-link :to="{name: 'Schedule',params: {bookId: this.$route.params.bookId}}">
            <p>
              目录<i class="el-icon-arrow-right"></i>
            </p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="footer">
      <ul>
        <li>
          下载<br/>
          <i class="iconfont1">&#xe600;</i>
        </li>
        <li>
          <router-link :to="{name: 'ReadBook',params:{ bookId: this.book.id, chapterId: 1 }}" exact>立即阅读</router-link>
        </li>
        <li>
          加入书架<br/>
          <i class="iconfont1">&#xe60a;</i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script >
  export default {
    name: 'book',
    data ()
  {
    return {
      book: {
        id: 1,
        title: '斗破苍穹',
        author: '天蚕土豆',
        imgSrc: './static/img/book01.jpg',
        type: '玄幻|异世大陆',
        txt: '这里是属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！ 　　新书等级制度：斗者，斗师，大斗师，斗灵，斗王，斗皇，斗宗，斗尊，斗圣，斗帝。'
      }
    }
  }
  ,
  mounted: function () {
    var oBook = this.book
    $.ajax({
      type: "get",
      url: "http://novel.juhe.im/book-info/" + this.$route.params.bookId,
      success: function (responserData) {
        oBook.id = responserData.data._id
        oBook.title = responserData.data.title
        oBook.author = responserData.data.author
        oBook.type = responserData.data.majorCate + ' | ' + responserData.data.minorCate
        oBook.txt = responserData.data.longIntro
        oBook.imgSrc = 'http://statics.zhuishushenqi.com' + responserData.data.cover
      },
      error: function (errorJson) {
        alert('出错了，请稍后重新加载！')
      }
    })
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .book {
    width: 100%;
    height: 100%;
  }
  .iconfont1{
    font-family:"iconfont" !important;
    font-size:1.3rem;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    /*float: left;*/
  }
  header {
    width: 100%;
    background: rgba(0, 0, 0, .7);
    text-align: left;
    color: white;
  }

  a {
    color: white;
    text-decoration: none;
  }

  header > a {
    display: inline-block;
    color: white;
    text-decoration: none;
    padding: .5rem 0 0 .8rem;
    font-size: .8rem;
  }

  header > a > i {
    display: inline-block;
    padding-right: .1rem;
  }

  header ul {
    padding: 0.5rem 1rem 1rem 1rem;
  }

  header ul li {
    display: inline-block;
    vertical-align: top;
  }

  header ul li:first-child {
    width: 100px;
    padding-right: .8rem;
  }

  header ul li:first-child img {
    width: 100%;
    height: 100%;
  }

  header p {
    font-size: .7rem;
    line-height: 1.5rem;
  }

  .box {
    background: white;
    padding: .5rem;
    font-size: .8rem;
    font-weight: bold;
  }

  .box ul li {
    display: inline-block;
    width: 23%;
    text-align: center;
  }

  .card {
    background: white;
    margin-top: 10px;
    text-align: left;
    position: relative;
    padding-bottom: 3.5rem;
  }

  .card ul {
    padding: .5rem 1rem .5rem 1rem;
    list-style: none;
  }

  .card ul li {
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  .card li p:first-child {
    font-weight: bold;
    height: 1.8rem;
    line-height: 1.8rem;
  }

  .card li p {
    font-size: .8rem;
    line-height: 1.2rem;
  }

  .card li p:nth-child(2) {
    padding-bottom: .5rem;
  }

  .card li p > i {
    position: absolute;
    top: .5rem;
    right: .5rem;
    color: rgba(0, 0, 0, 0.2);
  }

  .card a {
    color: black;
  }

  .small {
    font-size: .5rem;
    color: gray;
    font-weight: normal;
  }

  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3.5rem;
    border-top: 1px solid rgba(0, 0, 0, .3);
    background: white;
  }

  .footer li {
    display: inline-block;
    width: 30%;
    font-size: .8rem;
    vertical-align: middle;
  }

  .footer i {
    font-size: .8rem;
  }

  .footer li:nth-child(2) {
    background: #219cea;
    color: white;
    height: 3.5rem;
    line-height: 3.5rem;
  }
</style>
