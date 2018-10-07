<template>
    <div class="readBook"  >
      <div class="preOrNext">
        <ul>
          <li @click="preChapter">上一章</li>
          <li @click="nextChapter">下一章</li>
        </ul>
      </div>
      <div class="top" v-bind:class="{ hide: isShow }">
        <a href="javascript:history.back()">返回</a>
        {{title}}
      </div>
      <h3>{{title}}</h3>
      <article v-html="article"></article>
      <div class="bottom" v-bind:class="{ hide: isShow }">
        <ul>
          <li>
            字体大小
            <ul class="card font" @click="changeFont">
              <li value="0">小</li>
              <li value="1">中</li>
              <li value="2">大</li>
            </ul>
          </li>
          <li>
            背景颜色
            <ul class="card color" @click="changeColor">
              <li value="0"></li>
              <li value="1"></li>
              <li value="2"></li>
              <li value="3"></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="preOrNext">
        <ul>
          <li @click="preChapter">上一章</li>
          <li @click="nextChapter">下一章</li>
        </ul>
      </div>
      <div id="mid" @click="showMenu" v-loading="loading"
           element-loading-text="拼命加载中"  ></div>
    </div>
</template>

<script >
  export default {
    name: 'readBook',
    methods: {
      showMenu: function () {
        this.isShow = !this.isShow
      },
      changeColor: function (event) {
        if (event.target.tagName.toLowerCase() === 'li') {
          var oBackground = document.getElementsByClassName('readBook')[0]
          oBackground.style.background = this.color[event.target.value]
        }
      },
      changeFont: function (event) {
        if (event.target.tagName.toLowerCase() === 'li') {
          var oArticle = document.getElementsByTagName('article')[0]
          oArticle.style.fontSize=this.font[event.target.value]
          oArticle.style.lineHeight=this.lineHeight[event.target.value]
        }
      },
      preChapter: function () {
        var bookId=this.$route.params.bookId
        var chapterId=parseInt(this.$route.params.chapterId)
        chapterId==1?chapterId:--chapterId
        //this.$router.push({name: 'ReadBook',params:{bookId: bookId, chapterId: chapterId}})
        this.$router.push({path:'/ReadBook/'+bookId+'/'+chapterId})
      },
      nextChapter: function () {
        var bookId=this.$route.params.bookId
        var chapterId=parseInt(this.$route.params.chapterId)
        chapterId++
        //this.$router.push({name: 'ReadBook',params:{bookId: bookId, chapterId: chapterId}})
        this.$router.push({path:'/ReadBook/'+bookId+'/'+chapterId})
      },
      fetchData: function () {
        this.loading=true
        var that=this
        document.getElementsByTagName('body')[0].scrollTop=0
        $.ajax({
          type: "get",
          url: "http://novel.juhe.im/book-sources?view=summary&book="+that.$route.params.bookId,
          success: function (responsterData) {
            $.ajax({
              type: "get",
              url: "http://novel.juhe.im/book-chapters/"+responsterData.data[5]._id,
              success: function (json) {
                that.title=json.data.chapters[that.$route.params.chapterId-1].title
                var oUrl=encodeURIComponent(json.data.chapters[that.$route.params.chapterId-1].link)
                $.ajax({
                  type: "get",
                  url: "http://novel.juhe.im/chapters/"+oUrl,
                  success: function (datas) {
                    if(datas.data.chapter.body!=null){
                      that.article=datas.data.chapter.body.replace(/\n/g,"<br/><p>")
                    }else{
                      that.article=datas.data.chapter.cpContent.replace(/\n/g,"<br/><p>")
                    }
                    that.loading=false
                  }
                })
              },
              error: function (errorJson) {
                that.loading=false
                alert('出错了，请稍后重新加载！')
              }
            })
          }
        })
      }
    },
    created: function () {
      this.bookId=this.$route.params.bookId
      this.chapterId=this.$route.params.chapterId
      this.fetchData()
    },
    data () {
      return {
        bookId: 1,
        chapterId: 1,
        isShow: true,
        color: ['white', 'lightgreen', 'lightgoldenrodyellow', 'gray'],
        font: ['16px', '20px', '25px'],
        lineHeight: ['1.5rem', '2rem', '2.5rem'],
        title: '',
        article: '',
        loading: true
      }
    },
    watch: {
      "$route": "fetchData"
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .readBook{
    background: lightgreen;
    min-height: 100%;
  }
  h3{
    padding: 2rem 0 1rem 0;
  }
  article{
    font-size: 16px;
    text-align: left;
    text-indent: 1.5rem;
    padding: 0 1rem 1rem 1rem;
    line-height: 1.5rem;
  }
  .top{
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.8);
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    color: white;
  }
  .top a{
    position: absolute;
    left: 1.5rem;
    color: white;
    text-decoration: none;
    font-size: .8rem;
  }
  .bottom{
    position: fixed;
    bottom: 0;
    background: rgba(0,0,0,.8);
    width: 100%;
    color: white;
    text-align: left;
    padding: 1rem 0;
  }
  .bottom li{
    list-style: none;
    padding-left: 1.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
  }
  .bottom ul.card{
    display: inline-block;
    text-align: center;
    margin-left: 1rem;
  }
  .bottom ul.card li{
    display: inline-block;
    border:1px solid gray;
    border-radius: 100%;
    padding-left: 0;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .5rem;
    line-height: 1.5rem;
    vertical-align: middle;
  }
  .bottom ul.color li:first-child{
    background: white;
  }
  .bottom ul.color li:nth-child(2){
    background: lightgreen;
  }
  .bottom ul.color li:nth-child(3){
    background: lightgoldenrodyellow;
  }
  .bottom ul.color li:nth-child(4){
    background: gray;
  }
  .preOrNext{
    padding: 1rem 0 2rem 0;
  }
  .preOrNext li{
    list-style: none;
    display: inline-block;
    width: 30%;
    background: rgba(0,0,0,0.3);
    color: white;
  }
  .preOrNext li a{
    color: white;
  }
  #mid{
    width: 100%;
    height: 60%;
    position: fixed;
    top: 20%;
    background: rgba(0,0,0,0);
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    z-index: 10;
  }
  .show{
    display: block;
  }
  .hide{
    display: none;
  }
</style>
