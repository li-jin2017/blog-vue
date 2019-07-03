<template>

  <el-carousel trigger="click" height="420px" class="rotary-image">
    <el-carousel-item v-for="image in images" :key="image.key">
      <img :src="image.src">
      <div class="rotary-title">{{image.title}}</div>
    </el-carousel-item>
  </el-carousel>
  
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class RotaryImage extends Vue { 

  private images: any[] = [
    {key: 1, src: require('../../assets/images/banner01.jpg'), title: '如何在单行文字下保持水平垂直居中1'},
    {key: 2, src: require('../../assets/images/banner02.jpg'), title: '如何在单行文字下保持水平垂直居中2'},
    {key: 3, src: require('../..//assets/images/banner03.jpg'), title: '如何在单行文字下保持水平垂直居中3'},
  ];
    
}
</script>

<style scoped>

.rotary-title {
  position: absolute;
  bottom: 30px;
  width: 100%;
  height: 50px;
  background-color: #00000061;
  color: #FFF;
  font-size: 18px;
  line-height: 50px;
  text-align: center;
}
</style>
