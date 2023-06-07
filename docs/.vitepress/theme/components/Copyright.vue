<template>
  <!-- <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2021015138号-2</a> -->
  <div class="site-footer">
    <a class="vitepress" :href="website">{{ webTitle }}</a><br />
    <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2021015138号-2</a>

  </div>
</template>
<script lang="ts" setup>
import { useData } from "vitepress";

const { site, theme } = useData();
const website = theme.value.website;
const webTitle = site.value.title;
</script>

<style scoped>
.site-footer {
  color: #999;
  height: 50px;
  text-align: center;
  font-size: 0.75rem;
  width: 100vw;
}

.vitepress {
  color: #222;
  font-weight: 700;
}
</style>
