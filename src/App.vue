<template>
  <div id="app">
   
    <IndexNav/>
    <Footer/>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import IndexNav from './components/head/IndexNav.vue';
import Footer from './components/footer/Footer.vue';

@Component ({
  components: {
      IndexNav,
      Footer
  }
})

export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0px;
  padding: 0px;
}
</style>
