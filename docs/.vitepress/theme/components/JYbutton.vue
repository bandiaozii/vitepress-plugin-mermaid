<template>
  <VPLink @click="pageSkip" class="sp-link">
    <read class="sp-icon" style="width: 16px; height: 16px; margin: 5px" />开始记忆
  </VPLink>
</template>
<script>
import { withBase } from "vitepress";
// import axios from "axios";
// import { setKey } from "../utils/auth";
import { defineComponent } from "vue";
export default defineComponent({
  props: ["list"],
  methods: {
    pageSkip() {
      if (isvip) {
        window.location.href = withBase(this.list);
      } else {
        alert("no vip");
      }
    }
  },
});
</script> 



<!-- 链接题库 (弃用)-->
<!-- <template>
  <VPLink @click="pageSkip" class="sp-link">
    <read class="sp-icon" style="width: 16px; height: 16px; margin: 5px" />开始记忆
  </VPLink>
</template>
<script>
import { withBase } from "vitepress";
import axios from "axios";
import { setKey } from "../utils/auth";
import { defineComponent } from "vue";
export default defineComponent({
  props: ["list"],
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
              // window.location.href =
              //   "https://mp.weixin.qq.com/s?__biz=MzkxNTQzMTAyMg==&mid=2247483836&idx=1&sn=0b4bf543bf996839e9b84669e698a69d&chksm=c15e0abdf62983abd876a89edb3d0efdf02ad6787d04b1acf61fd202594691018b1d2d15f903#rd";
              alert("我的-兑换记忆卡");

            }
          } else {
            alert("去登入");
            // window.location.href = "https://jianyan.kaoshu.cc/index/user/login.html";
          }
        })
        .catch((response) => { });
    },
  },
});
</script>  -->

<!-- 绑定口令 -->
<!-- <template>
  <VPLink @click="pageSkip" class="sp-link">
    <read class="sp-icon" style="width: 16px; height: 16px; margin: 5px" />开始记忆
  </VPLink>
</template>
<script>
import { withBase } from "vitepress";

import { defineComponent } from "vue";
export default defineComponent({
  props: ["list"],
  methods: {
    pageSkip() {
      if (this.getCookie("pass") == 1) {
        window.location.href = withBase(this.list);
        return;
      }
      var ret = prompt("关注公众号，点击菜单“免费使用”，即可获取口令", "");
      if (ret !== null && ret != "") {
        if (ret == "666666") {
          this.setCookie("pass", 1, 1);
          window.location.href = withBase(this.list);
        } else {
          alert("口令错误");
        }
      } else {
        alert("口令不可以为空");
      }
    },
    setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 240 * 60 * 60 * 1000);
      var expires = "expires=" + d.toGMTString();
      document.cookie = cname + "=" + cvalue + "; " + expires;
    },
    getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
  },
});
</script> -->