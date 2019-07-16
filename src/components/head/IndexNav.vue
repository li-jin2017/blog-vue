<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <li role="menuitem" class="el-menu-item item-placeholder">
      <span class="title">JMMIY-BLOG</span>
    </li>

    <el-menu-item index="1" @click="route('home')">首页</el-menu-item>
    <el-menu-item index="2" @click="route('timeline')">时间轴</el-menu-item>
    <el-menu-item index="3" @click="coding">学无止境</el-menu-item>
    <el-menu-item index="4" @click="coding">写博客</el-menu-item>
    <el-menu-item index="5" @click="coding">联系</el-menu-item>
    <search/>
  </el-menu>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import SearchBar from "./SearchBar.vue";

@Component({
  components: {
    search: SearchBar
  }
})
export default class IndexNav extends Vue {
  private activeIndex: string = "1";

  handleSelect(key: any, keyPath: any): void {
    console.log(key + "---" + keyPath);
  }

  private loading: boolean = true;
  private searchValue: any[] = [];
  private artiles: any[] = [];

  remoteMethod(): void {}

  route(address: string):void {
    this.$router.push({name: address});
  }

  coding(): void{
    this.$message('努力开发中...');
  }
}
</script>

<style lang="css" scoped>
.item-placeholder {
  width: 30%;
}

.el-menu-item {
  margin-left: 38px !important;
}

.title {
  font-size: 20px;
}
</style>



