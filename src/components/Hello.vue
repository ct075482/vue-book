<template>
  <div class="hello">
    <vue-header></vue-header>
    <vue-nav></vue-nav>
  </div>
</template>

<script  >
  import vueHeader from '../components/Header'
  import vueNav from '../components/Nav'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      vueHeader, vueNav
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
