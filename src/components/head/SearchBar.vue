<template>
  <li role="menuitem" class="el-menu-item">
    <el-select
      class="searchInput"
      v-model="searchValue"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="请输入搜索的文章标题"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in artiles" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </li>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SearchBar extends Vue {
  private loading: boolean = true;
  private searchValue: any[] = [];
  private artiles: any[] = [
    {value: 1, label: 'a'},
    {value: 2, label: 'aa'},
    {value: 3, label: 'aaa'},
  ];

  remoteMethod(query: any): void {
    if(query !== '') {
      console.log('查询的值为' + query);
    }
  }
}
</script>

