<template>
  <div class="box-o">
    <button class="beitibuttonn" @click="pageSkip">
      <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
      <p>开始练习</p>
    </button>

  </div>
</template>
<script>
import { defineComponent } from "vue";
import { getKey } from '../utils/auth.js'
import KaoshiTitle from "./KaoshiTitle.vue";
export default defineComponent({
  name: "Test",
  props: ["ksIdf", "ksIds", "ksIdt", "ksuIdf", "ksuIds", "ksuIdt", "namef", "names", "namet", "unamef", "unames", "unamet", "from_type"],
  data() {
    return {
      kes: 0,
      nandu: 0,
      nanduText: ['(士)', '(师)', '中级'],

    };
  },
  created() {
    this.kes = $cookies.get("Test");
    console.log(this.name)
    this.nandu = getKey('');
    console.log(this.nandu)
  },
  methods: {
    pageSkip() {
      //console.log(thi.kes);
      if (this.kes == 0) {
        uni.navigateTo({ url: "/pages/questionBank/detail/index?id=" + this.ksIdf + "&from_type=" + this.from_type + "&name=" + this.namef });
      }
      else if (this.kes == 1) {
        uni.navigateTo({ url: "/pages/questionBank/detail/index?id=" + this.ksIds + "&from_type=" + this.from_type + "&name=" + this.names });
      }
      else if (this.kes == 2) {
        uni.navigateTo({ url: "/pages/questionBank/detail/index?id=" + this.ksIdt + "&from_type=" + this.from_type + "&name=" + this.namet });
      }
      else {
        // alert("请先去首页选择科目");
        window.location.href = 'https://jianyan.kaoshu.cc/web/examination/Shi';
      }
    },
  },
  components: { KaoshiTitle }
})

</script>

<style scoped>
.box-o {
  margin: 0px 10px 0px;

  /* width: 100%;  */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* background-color: var(--vp-c-bg-soft);  */
  border-radius: 2%;
}

/* inspired from this svgbackgrounds.com/ */
.beitibuttonn {
  display: flex;
  /* padding: 0.6em 0.3em 10px; */
  gap: 1rem;
  font-weight: bold;
  border-radius: 30px;
  text-shadow: 2px 2px 3px rgb(136 0 136 / 50%);
  background: linear-gradient(15deg, #880088, #aa2068, #cc3f47, #de6f3d, #f09f33, #de6f3d, #cc3f47, #aa2068, #880088) no-repeat;
  background-size: 300%;
  background-position: left center;
  transition: background .3s ease;
  color: #fff;
  width: 120px;
  height: 32px;
  position: absolute;
}


.beitibuttonn p {
  font-size: 16px;
  margin: 5px 12px 0px;
}

.beitibuttonn:hover {
  background-size: 320%;
  background-position: right center;
}

.beitibuttonn:hover svg {
  fill: #fff;
}

.beitibuttonn svg {
  width: 23px;
  fill: #f09f33;
  transition: .3s ease;
}
</style>