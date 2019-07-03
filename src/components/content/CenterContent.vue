<template>
  <div class="content">
    <el-row :gutter="30">
      <el-col :span="14">
        <RotaryImage/>
      </el-col>
      <el-col :span="8">
        <el-col :span="24">
          <img :src="images[0].src" class="t_image">
        </el-col>
        <el-col :span="24">
          <img :src="images[1].src" class="t_image t_image_buttom">
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import RotaryImage from "./RotaryImage.vue";

@Component({
  components: {
    RotaryImage
  }
})
export default class CenterContent extends Vue {
  private images: any[] = [
    { src: require("../../assets/images/t03.jpg") },
    { src: require("../../assets/images/t01.jpg") },
    ];
}
</script>

<style scoped>
.content {
  padding: 20px 100px 20px 100px;
}

.t_image {
  width: 400px;
  height: 165px;
  border-radius: 3px;
}

.t_image_buttom {
  margin-top: 12px;
}

</style>


