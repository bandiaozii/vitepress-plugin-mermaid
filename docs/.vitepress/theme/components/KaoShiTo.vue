<template>
  <div class="box-ss">
    <div class="boxx">
      <div class="box-x">
        <div class="uiverse">
          <span class="tooltip">simple无解析</span>
          <span>3</span>
        </div>
      </div>
      <div class="box-x">
        <button class="beitibutton" @click="pageSkip">
          <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
          <p>{{ nanduText[nandu] }}基础题库</p>

        </button>
      </div>
    </div>

    <div class="boxx">
      <div class="box-x">
        <div class="uiverse">
          <span class="tooltip">difficulty有解析</span>
          <span>4</span>
        </div>
      </div>
      <div class="box-x">
        <button class="beitibutton" @click="pageSkipY">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
            <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
          </svg>
          <span>{{ nanduText[nandu] }}进阶题库</span>
        </button>
      </div>
    </div>
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
      // kes: 0,
      nandu: 0,
      nanduText: ['(士)', '(师)', '中级'],

    };
  },
  created() {

    // getKey(this.name);
    // this.kes == $cookies.get("Test");
    // this.nandu == $cookies.get("Test");
    // console.log(this.kes)

    console.log(this.name)
    this.nandu = $cookies.get("Test");
    console.log(this.nandu)
  },
  methods: {
    pageSkip() {
      if (this.nandu == 0) {
        uni.navigateTo({ url: "/pages/questionBank/detail/index?id=" + this.ksIdf + "&from_type=" + this.from_type + "&name=" + this.namef });
      }
      else if (this.nandu == 1) {
        uni.navigateTo({ url: "/pages/questionBank/detail/index?id=" + this.ksIds + "&from_type=" + this.from_type + "&name=" + this.names });
      }
      else if (this.nandu == 2) {
        uni.navigateTo({ url: "/pages/questionBank/detail/index?id=" + this.ksIdt + "&from_type=" + this.from_type + "&name=" + this.namet });
      }
      else {
        // alert("请先去首页选择科目");
        window.location.href = 'https://jianyan.kaoshu.cc/web/examination/Shi';
      }
    },
    pageSkipY() {
      if (this.nandu == 0) {
        uni.navigateTo({ url: "/pages/questionBank/detail/index?id=" + this.ksuIdf + "&from_type=" + this.from_type + "&name=" + this.unamef });
      }
      else if (this.nandu == 1) {
        uni.navigateTo({ url: "/pages/questionBank/detail/index?id=" + this.ksuIds + "&from_type=" + this.from_type + "&name=" + this.unames });
      }
      else if (this.nandu == 2) {
        uni.navigateTo({ url: "/pages/questionBank/detail/index?id=" + this.ksuIdt + "&from_type=" + this.from_type + "&name=" + this.unamet });
      }
      else {
        // alert("请先选择科目");
        window.location.href = 'https://jianyan.kaoshu.cc/web/examination/Shi';
      }
    },
  },
  components: { KaoshiTitle }
})

</script>

<style scoped>
.box-ss {
  margin: 0px -50px 40px;
  border-radius: 3%;
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* background-color: var(--vp-c-bg-alt); */

}


.boxx {
  margin: 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* background-color: var(--vp-c-bg-soft);  */
  border-radius: 2%;
}

.box-x {
  margin: 0px 10px 0px;

  /* width: 100%;  */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* background-color: var(--vp-c-bg-soft);  */
  border-radius: 2%;
}


.uiverse {
  position: relative;
  background: #ffffff;
  color: #000;
  /* padding: 15px; */
  margin: 0px 30px 0px;
  border-radius: 50px;
  width: 20px;
  height: 20px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.tooltip {
  position: absolute;
  top: 0;
  font-size: 10px;
  background: #ffffff;
  color: #000000;
  padding: 0px 8px 0px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.tooltip::before {
  position: absolute;
  content: "";
  /* height: 8px;
  width: 8px; */
  background: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.uiverse:hover .tooltip {

  top: -50px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

svg:hover span,
svg:hover .tooltip {

  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.uiverse:hover,
.uiverse:hover .tooltip,
.uiverse:hover .tooltip::before {

  /* background: linear-gradient(320deg, rgb(3, 77, 146), rgb(0, 60, 255)); */
  /* color: #ffffff; */
}

/* inspired from this svgbackgrounds.com/ */
.beitibutton {
  display: flex;
  padding: 0.6em 0.3em 10px;
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

.beitibutton span {
  font-size: 13px;
  margin: -4px -12px 0px;
}

.beitibutton p {
  font-size: 13px;
  margin: -5px 0px 0px;
}

.beitibutton:hover {
  background-size: 320%;
  background-position: right center;
}

.beitibutton:hover svg {
  fill: #fff;
}

.beitibutton svg {
  width: 23px;
  fill: #f09f33;
  transition: .3s ease;
}
</style>