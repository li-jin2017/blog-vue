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
  background-color: #333;
  height: 80px;
  text-align: center;
}

.footer-tip {
  color: #a5a4a4;
  font-size: 16px;
  line-height: 80px;
}
</style>

