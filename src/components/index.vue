<template>
    <div class="index">
      <vue-header></vue-header>
      <carousel></carousel>
      <vue-menu></vue-menu>
      <vue-card></vue-card>
    </div>
</template>

<script>
  import vueHeader from '../components/Header'
  import Carousel from '../components/Carousel'
  import vueMenu from '../components/Menu'
  import vueCard from '../components/Card'
  export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      Carousel, vueMenu, vueCard, vueHeader
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{
    padding-top: 2.8rem;
    padding-bottom: 3rem;
    -webkit-overflow-scrolling: touch;
  }
</style>
