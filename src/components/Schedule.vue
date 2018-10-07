<template>
    <div class="Schedule" v-loading="loading"
         element-loading-text="拼命加载中"style="height: 100%;width: 100%">
      <header>
        <a href="javascript:history.back()">
          <i class="el-icon-arrow-left"></i>&nbsp;返回</a>
      </header>
      <div class="schedule-result">
        <ul>
          <li v-for="item in schedules">
            <router-link :to="{name: 'ReadBook',params:{ bookId: item.book, chapterId: item.index }}" exact>{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script >
  export default {
    name: 'Schedule',
    data () {
      return {
        schedules: [ ],
        loading: true
      }
    },
    mounted: function () {
      var oSchedules=this.schedules
      var that = this
      var book = this.$route.params.bookId
      $.ajax({
        type: "get",
        url: "http://novel.juhe.im/book-sources?view=summary&book="+this.$route.params.bookId,
        success: function (responserData) {
          $.ajax({
            type: 'get',
            url: 'http://novel.juhe.im/book-chapters/'+responserData.data[5]._id,
            success: function (oJson) {
              for(var i=0;i<20;i++){
                oSchedules.push({
                  title: oJson.data.chapters[i].title,
                  id: oJson.data.chapters[i].id,
                  index: i+1,
                  book: book
                })
              }
              that.loading = false
            },
            error: function (errorJson) {
              that.loading=false
              alert('出错了，请稍后重新加载！')
            }
          })
        }
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
    height: 2.8rem;
    background-color: #219cea;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  header>a{
    color: white;
    position: absolute;
    left: 1rem;
    top:.7rem;
  }
  .schedule-result{
    background: white;
    padding-top: 2.8rem;
  }
  .schedule-result li{
    list-style: none;
    text-align: left;
    padding-left: 1rem;
    line-height: 2.5rem;
    height: 2.5rem;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
</style>
