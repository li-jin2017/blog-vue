<template>
  <div class="footer">
    <span class="footer-tip">Design by XX XXXXXXXXXXXXXXX</span>
  </div>
</template>




<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class Footer extends Vue {}
</script>



<style scoped>
.footer {
  width: 100%;
  background-color: #333;
  height: 60px;
  position: absolute;
  bottom: 0px;
  vertical-align: middle;
  text-align: center;
}

.footer-tip {
  color: #a5a4a4;
  font-size: 16px;
  line-height: 60px;
}
</style>

