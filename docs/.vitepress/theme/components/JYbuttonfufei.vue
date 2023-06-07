<template>
  <VPLink @click="pageSkip" class="sp-link">
    <read
      class="sp-icon"
      style="width: 16px; height: 16px; margin: 5px"
    />开始记忆</VPLink
  >
</template>
<script>
import { withBase } from "vitepress";

import { defineComponent } from "vue";
export default defineComponent({
  props: ["listfufei"],
  methods: {
    pageSkip() {
      const url = "https://jianyan.kaoshu.cc/index/user/logincheck.html";
      axios
        .get(url)
        .then((response) => {
          const result = response.data.user_id;
          const data = response.data;
          setKey("data", data);
          console.log(result);
          if (response.data.id) {
            if (response.data.group_id == "1") {
              window.location.href = withBase(this.list);
            } //年度
            else if (response.data.group_id == "2") {
              window.location.href = withBase(this.list);
            } //季度
            else {
              window.location.href =
                "https://mp.weixin.qq.com/s?__biz=MzkxNTQzMTAyMg==&mid=2247483770&idx=1&sn=06e9f467651797c6d1d03e748f20558c&chksm=c15e0a7bf629836d4e51ff3f57dab8287b935534077c8acf58374a93d122c7c9da47c75eaa2f#rd";
            }
          } else {
            // alert("去登入");
            window.location.href =
              "https://jianyan.kaoshu.cc/index/user/login.html";
          }
        })
        .catch((response) => {});
    },
  },
});
</script>
