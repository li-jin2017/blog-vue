<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>博主推荐</span>
        </div>
        <el-card class="box-card" shadow="hover">
            <div class="item">
                <el-image :src="images[1].src" class="t-image"></el-image>
            </div>
        </el-card>

        <div v-for="i in 5" :key="i" class="item card-recommend">
            <el-card class="box-card card-hover card-no-border" shadow="hover">
                <div class="item">
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <div class="block">
                                <el-image style="height: 70px;" :src="images[0].src"></el-image>
                            </div>
                        </el-col>
                        <el-col :span="14">
                            <el-row>
                                <el-col :span="24">
                                    <span class="article-base article-recommend">读Spring源码源码源码</span>
                                </el-col>
                                <el-col :span="24">
                                    <span class="recommend-date">2019-07-06</span>
                                </el-col>
                            </el-row>

                        </el-col>
                    </el-row>
                </div>

            </el-card>
        </div>
    </el-card>

</template>



<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class RecommendCard extends Vue {
    private images: any[] = [
        { src: require("../../assets/images/commend.jpg") },
        { src: require("../../assets/images/commend01.jpg") }
    ];
}
</script>

<style scoped>
.recommend-date {
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: normal;
    font-stretch: normal;
    font-size: 12px;
    line-height: 1.8;
    font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif;
    color: #566573;
}

.article-recommend {
    height: 50px;
}

.card-recommend {
    height: 120px;
}

.card-no-border {
    border: none !important;
}
</style>


