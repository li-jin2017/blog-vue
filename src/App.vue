<template>
  <div id="app">
   
    <IndexNav/>
    <CenterContent/>
    <Footer/>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import IndexNav from './components/head/IndexNav.vue';
import CenterContent from './components/content/CenterContent.vue';
import Footer from './components/footer/Footer.vue';


@Component ({
  components: {
     
      CenterContent,
      Footer,
       IndexNav,
      
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

body::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 12px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
  }
  body::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius   : 10px;
  background-color: #75737361;
  background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
  );
  }
  body::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background   : #ededed;
  border-radius: 10px;
  }
</style>
