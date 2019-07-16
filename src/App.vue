<template>
    <div id="app">
        <el-container>
            <el-header>
                <IndexNav/>
            </el-header>
            <el-main :style="{minHeight: minHeight + 'px',}">
                <transition :name="transition">
                    <router-view />
                </transition>
            </el-main>
            <el-footer>
                <Footer/>
            </el-footer>
        </el-container>

        <ScrollTop />
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
    private transition: string = "";

    private minHeight: number = 0;

    private routerIndex: number = 0;

    @Watch("$route", { immediate: true })
    watchRouter(route: Route): void {
        if (route.meta.index > this.routerIndex) {
            this.transition = "slide-left";
        } else {
            this.transition = "slide-right";
        }

        this.routerIndex = route.meta.index;
    }

    mounted(): void {
        this.renderMinMainHeight();
    }

    renderMinMainHeight(): void {
        let clientHeight: number = window.screen.height;
        this.minHeight = clientHeight - 140;
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
