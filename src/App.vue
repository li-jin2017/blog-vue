<template>
  <div id="app">
    <el-container>
      <el-header>
        <IndexNav/>
      </el-header>
      <el-main :style="{minHeight: minHeight + 'px'}">
        <transition :name="transitionType">
          <router-view/>
        </transition>
      </el-main>
      <el-footer>
        <Footer/>
      </el-footer>
    </el-container>

    <ScrollTop/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import IndexNav from "./components/head/IndexNav.vue";
import CenterContent from "./components/content/CenterContent.vue";
import Footer from "./components/footer/Footer.vue";
import ScrollTop from "./components/utils/ScrollTop.vue";
import { Route } from "vue-router";

@Component({
  components: {
    CenterContent,
    Footer,
    IndexNav,
    ScrollTop
  }
})
export default class App extends Vue {
  //上一次路由的层级
  private oldIndex: number = 0;
  //过度动画type
  private transitionType: string = "";

  private minHeight: number = 0;

  mounted(): void {
    this.resizeContentMinHeight();
  }

  @Watch("$route", { immediate: true })
  private updateRouter(route: Route) {
    if (route.meta.index > this.oldIndex) {
      this.transitionType = "slide-left";
    } else {
      this.transitionType = "slide-right";
    }
  }

  /**
   * 设置内容区域的最小高度，避免footer在过渡动画的时候显示位置有问题
   */
  resizeContentMinHeight(): void {
    let windowHeigt: number = document.body.clientHeight;
    this.minHeight = windowHeigt - 120;
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0px;
  padding: 0px;
}

.el-footer,
.el-header {
  padding: 0 0 !important;
}

body::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
body::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
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
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 300ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
