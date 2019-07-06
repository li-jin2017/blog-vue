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

    <el-row :gutter="20">
      <el-col :span="15">
        <ArticleCard />
      </el-col>
      <el-col :span="9">
        <RecommendCard />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import RotaryImage from "./RotaryImage.vue";
import ArticleCard from "./ArticleCard.vue";
import RecommendCard from "./RecommendCard.vue";

@Component({
    components: {
        RotaryImage,
        ArticleCard,
        RecommendCard
    }
})
export default class CenterContent extends Vue {
    private images: any[] = [
        { src: require("../../assets/images/toppic01.jpg") },
        { src: require("../../assets/images/toppic02.jpg") }
    ];
}
</script>

<style>
.content {
    padding: 20px 100px 20px 100px;
}

.image-item {
    height: 218px;
    padding: 0 !important;
}

.t-image {
    height: 200px;
    width: 100%;
}

.card-top {
    height: 220px;
}

.card-hover {
    cursor: pointer;
}

.card-hover:hover {
    box-shadow: 0 2px 26px 0 rgba(6, 6, 6, 0.8) !important;
}

.article-base {
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: normal;
    font-stretch: normal;
    font-size: 14px;
    line-height: 1.8;
    font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif;
    font-weight: 400;
    color: #566573;
    display: block;
}
</style>


