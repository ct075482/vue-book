<template>
    <div class="search">
      <header>
        <el-input
          class="in-txt"
          placeholder="输入关键字"
          icon="search"
          v-model="searchBook"
          :on-icon-click="handleIconClick">
        </el-input>
        <a href="javascript:history.back()">取消</a>
      </header>
      <div class="box">
        <h5>热门搜索</h5>
        <span>换一换</span>
        <ul>
          <li v-for="list in lists">{{list}}</li>
        </ul>
      </div>
      <div class="search-result">
        <ul>
          <li v-for="item in results">
            <router-link :to="{name: 'Book',params: {bookId: item.id}}">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script >
  export default {
    name: 'search',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        searchBook: '',
        lists: [
          '穿越', '二次元', '科技', '电影', '诸天', '神豪', '空间', '古装', '神格'
        ],
        results:[
        ]
      }
    },
    methods: {
      handleIconClick (ev) {
        if(this.searchBook==''||this.searchBook==null){
          alert('输入不能为空');
          return
        }else {
          var results=this.results;
          $.ajax({
            type: "get",
            url: "http://novel.juhe.im/search?keyword="+this.searchBook,
            success: function (responserData) {
              var len = responserData.data.books.length
              if(responserData.data.books.length>=10){
                len = 10
              }
              for(var i=0;i<len;i++){
                results.push({
                  id: responserData.data.books[i]._id,
                  title: responserData.data.books[i].title,
                  author: responserData.data.books[i].author
                })
              }
            },
            error: function (errorJson) {
              that.loading=false
              alert('出错了，请稍后重新加载！')
            }
          })
        }
      },
      readBook: function (e) {
        console.log(e.id)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  background: #219cea;
  height: 2.8rem;
  width: 100%;
  line-height: 2.8rem;
  text-align: left;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
  .in-txt{
    display: inline-block;
    width: 83%;
    padding-left: .5rem;
  }
  header a{
    color: white;
    position: absolute;
    right: .5rem;
  }
  .box{
    background: white;
    position: relative;
    text-align: left;
    padding: 3.8rem 1rem 1rem 1rem;
  }
  .box h5+span{
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: .8rem;
  }
  .box ul{
    margin-top: .5rem;
  }
  .box ul li{
    display: inline-block;
    border: 1px solid gray;
    border-radius: 1rem;
    padding: .2rem .5rem;
    margin: .2rem 0.1rem;
    font-size: .7rem;
  }
  .search-result{
    margin-top: .5rem;
    background: white;
  }
  .search-result li{
    list-style: none;
    text-align: left;
    padding-left: 1rem;
    line-height: 2.5rem;
    height: 2.5rem;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
</style>
