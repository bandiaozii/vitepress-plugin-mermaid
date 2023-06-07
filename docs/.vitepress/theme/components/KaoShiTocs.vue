<template>
  <div class="box-ss">
    <div class="boxx">
      <div class="box-x">
        <div class="uiverse">
          <span class="tooltip">error</span>
          <span>?</span>
        </div>
      </div>
      <div class="box-x">
        <button class="beitibutton" @click="pageSkip">
          <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
          <p>我的错题本</p>
        </button>
      </div>
    </div>

    <div class="boxx">
      <div class="box-x">
        <div class="uiverse">
          <span class="tooltip">Collection</span>
          <span>?</span>
        </div>
      </div>
      <div class="box-x">
        <button class="beitibutton" @click="pageSkip">
          <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
          <p>我的收藏本</p>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Test",
  methods: {
    pageSkip() {
      uni.navigateTo({ url: "/pages/my/wrongQuestion/index" });
    },
    pageSkipY() {
      uni.navigateTo({ url: "/pages/my/collect/index" });
    },
  },
});
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

.beitibutton {
  display: flex;
  padding: 0.6em 0.3em 10px;
  gap: 1rem;
  font-weight: bold;
  border-radius: 30px;
  text-shadow: 2px 2px 3px rgb(136 0 136 / 50%);
  background: linear-gradient(15deg,
      #880088,
      #aa2068,
      #cc3f47,
      #de6f3d,
      #f09f33,
      #de6f3d,
      #cc3f47,
      #aa2068,
      #880088) no-repeat;
  background-size: 300%;
  background-position: left center;
  transition: background 0.3s ease;
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
  transition: 0.3s ease;
}
</style>
