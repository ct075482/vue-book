<template>
    <header class="bookHeader">
      <ul>
        <li v-bind:class="{active: works}" @click="change('works')">作品</li>
        <li v-bind:class="{active: lists}" @click="change('lists')">书单</li>
      </ul>
      <router-link to="/Search"><i class="el-icon-search"></i></router-link>
    </header>
</template>

<script  >
  export default {
    name: 'bookHeader',
    data () {
      return {
        works: false,
        lists: true
      }
    },
    methods: {
      change: function (name) {
        if (name === 'works') {
          this.lists = false
          this.works = true
        } else {
          this.works = false
          this.lists = true
        }
        this.$emit('childToDad', this.works)
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
  ul{
    position: absolute;
    left: 1rem;
    top:0;
  }
  ul li{
    display: inline-block;
    line-height: 2.5rem;
    color: white;
    font-weight:bold;
    width: 50px;
  }
  li.active{
    border-bottom: 2px solid white;
  }
  i{
    display: inline-block;
    position: absolute;
    right: 1rem;
    top:0.7rem;
    font-size: 1.3rem;
    color: white;
  }
</style>
