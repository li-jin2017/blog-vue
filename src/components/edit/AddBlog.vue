<template>
  <div class="add-blog">
    <el-row class="blog-title">
      <el-col
        :span="16"
        :offset="4"
      >
        <input
          type="text"
          class="el-input__inner"
          v-model="title"
          placeholder="请输入标题"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col
        :span="16"
        :offset="4"
      >
        <ckeditor
          :editor="editor"
          v-model="editorData"
          :config="editorConfig"
        ></ckeditor>
      </el-col>
    </el-row>
  </div>

</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default class AddBlog extends Vue {
  private editor: any = ClassicEditor;
  private editorData: string = '';
  private editorConfig: any = {};
  private title: string = '';
}
</script>

<style>
.ck-content {
  min-height: 500px;
}
.blog-title {
  height: 80px;
  line-height: 60px;
}
</style>


