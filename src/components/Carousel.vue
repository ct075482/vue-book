<template>
    <div class="carousel">
      <div class="block">
        <el-carousel height="150px">
          <el-carousel-item v-for="item in items" :key="item.path">
            <img :src="item.path">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
</template>

<script  >
  export default {
    name: 'carousel',
    data () {
      return {
        items: [
          {
            path: './static/img/banner01.jpg'
          },
          {
            path: './static/img/banner02.jpg'
          },
          {
            path: './static/img/banner01.jpg'
          },
          {
            path: './static/img/banner02.jpg'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  img{
    width: 100%;
    height: 100%;
  }
</style>
