<template>
  <div class="content">
    <el-row :gutter="20">
      <el-col :span="14">
        <RotaryImage/>
      </el-col>
      <el-col :span="10">
        <el-col :span="24" class="image-item">
          <img :src="images[0].src" class="t-image">
        </el-col>
        <el-col :span="24" class="image-item">
          <img :src="images[1].src" class="t-image">
        </el-col>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="18">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>TOP5</span>
          </div>
          <div v-for="i in 5" :key="i" class="item card-row">
            <ArticleCard/>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import RotaryImage from "./RotaryImage.vue";
import ArticleCard from "./ArticleCard.vue";

@Component({
  components: {
    RotaryImage,
    ArticleCard
  }
})
export default class CenterContent extends Vue {
  private images: any[] = [
    { src: require("../../assets/images/toppic01.jpg") },
    { src: require("../../assets/images/toppic02.jpg") }
  ];
}
</script>

<style scoped>
.content {
  padding: 20px 100px 20px 100px;
}

.image-item {
  height: 218px;
}

.t-image {
  height: 200px;
  width: 100%;
}

.card-row {
  height: 220px;
}
</style>


