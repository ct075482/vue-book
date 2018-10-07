<template>
    <div class="Card">
      <ul>
        <li v-for="item in items">
          <router-link :to="{name: 'Book',params: {bookId: item.id}}">
            <div class="left">
              <img :src="item.img">
            </div>
            <div class="right">
              <h5>{{item.title}}</h5>
              <p class="txt">{{item.txt}}</p>
              <p class="author"><i class="iconfont">&#xe607;</i>&nbsp;&nbsp;{{item.author}}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script >
  export default {
    name: 'Card',
    data () {
      return {
        items: [
          {
            id: '50865988d7a545903b000009',
            img: 'http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F41615%2F_41615_067553.jpg%2F',
            title: '斗破苍穹',
            txt: '这里是属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！',
            author: '天蚕土豆'
          },
          {
            id: '50864deb9dacd30e3a00001d',
            img: 'http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F42088%2F_42088_504906.jpg%2F',
            title: '武动乾坤',
            txt: '修炼一途，乃窃阴阳，夺造化，转涅盘，握生死，掌轮回。武之极，破苍穹，动乾坤！',
            author: '天蚕土豆'
          },
          {
            id: '5091ce4b8d834c0f1900002c',
            img: 'http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F41757%2F_41757_035982.jpg%2F',
            title: '九鼎记',
            txt: '自禹皇五斧劈山，统一天下，划分九州，立九鼎后，这片大地便被称为九州。禹皇离世后，天下便纷争不断。千年后，一代天骄秦岭天帝横空出世，曾一掌令百丈宽的雁江江水断流，凭绝世武力，最终得以一统天下，可当秦岭天帝离世后，天下同样大乱，数千年来，没有再度统一过。而现代世界的一代形意宗师‘滕青山’却来到了这样的世界……',
            author: '我吃西红柿'
          },
          {
            id: '5091c84c8d834c0f1900000c',
            img: 'http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F46951%2F_46951_769457.jpg%2F',
            title: '寸芒',
            txt: '一位身怀飞刀绝技的青年。他因为经脉定型，所以内功上不可能有大的成就。可是后来青年却得到一颗丹药，一颗来自修真界的可以脱胎换骨洗经伐髓的‘洗髓丹’…… ',
            author: '我吃西红柿'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Card{
  margin-top: 10px;
  width: 100%;
  height: 100%;
  background: white;
}
a{
  color: black;
}
ul{
  width: 100%;
  height: 100%;
}
li{
  display: inline-block;
  height: 100%;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  clear: both;
}
.left{
  float: left;
  width: 20%;
  text-align: center;
  padding-left: 10px;
}
.right{
  float: left;
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
  width: 70%;
}
p.txt{
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 20px;
  font-size: 0.7rem;
  height: 40px;
  padding-top: 5px;
}
p.author{
  font-size: 0.7rem;
  padding-top: 0.5rem;
}
  img {
    width: 100%;
    height: 100%;
  }
  .iconfont{
    font-size:0.7rem;
  }
</style>
