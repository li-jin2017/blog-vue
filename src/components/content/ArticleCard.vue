<template>
  <div>
    <div v-for="i in 5" :key="i" class="item card-top">
      <el-card shadow="hover" class="card-hover">
        <el-row>
          <span class="article-title">文章标题</span>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="9">
            <el-image style="width: 100%; height: 120px" :src="article.src"></el-image>
          </el-col>
          <el-col :span="15">
            <span class="article-base article-content">&emsp;&emsp;如果，如果如果如果如果如果、如果如果如果如果如果如果如果，如果如果如果如果如果如果如果如果、如果如果如果如果如果如果如果如果如果如果如果如果如果如果如果如果...</span>
          </el-col>
          <el-col :span="15" class="article-more">
            <i class="el-icon-user-solid" title="作者">{{article.author}}</i>
            <i class="el-icon-tickets" title="标签">{{article.label}}</i>
            <i class="el-icon-time" title="时间">{{article.time}}</i>
            <i class="el-icon-view" title="查看次数">{{article.views}}</i>
            <i class="el-icon-star-on" title="喜欢">{{article.star}}</i>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>

</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class ArticleCard extends Vue {
    private article: any = {
        src: require("../../assets/images/t01.jpg"),
        author: "木子",
        label: "勇往直前",
        time: "2019-7-4",
        views: "2009",
        star: 1000
    };
    private currentDate: string = "2019-07-04 15:00";
}
</script>

<style scoped>
.article-title {
    display: block;
    font-size: 18px;
    font-weight: 600;
    line-height: 40px;
}

.article-image {
    width: 100%;
}

.article-content {
    height: 100px;
}

.article-more i {
    font-size: 14px;
    color: #566573;
    font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif;
    font-weight: 400;
    margin-left: 20px;
}
</style>

