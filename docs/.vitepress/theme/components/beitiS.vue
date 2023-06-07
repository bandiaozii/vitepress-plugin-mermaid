<template>
  <div class="box-zz">
    <div class="box-ss">
      <div class="box">
        <div class="box-x">
          <div class="uiverse">
            <span class="tooltip">Click考点</span>
            <span>1</span>
          </div>
        </div>
        <div class="box-x">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider" id="btn1" @click="kaishi">开始学习</span>
          </label>
        </div>
      </div>

      <div class="box">
        <div class="box-x">
          <div class="uiverse">
            <span class="tooltip">Memorization考点</span>
            <span>2</span>
          </div>
        </div>

        <div class="box-x">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider" id="btn" @click="xiaoshi">开始记忆</span>
          </label>
        </div>
      </div>
    </div>

    <KaoShiTo :ksIdf="21943" :namef="'临床生化检验（无解析）士'" :ksuIdf="20644" :unamef="'临床生化检验（有解析）师'" :ksIds="20314"
      :names="'临床生化检验（无解析）师'" :ksuIds="20644" :unames="'临床生化检验（有解析）师'" :ksIdt="17665" :namet="'临床生化检验（无解析）中级'"
      :ksuIdt="17673" :unamet="'临床生化检验（有解析）中级'" :from_type="1" />

    <!-- <div class="box-ss">

  <div class="box">
    <div class="box-x">
  <div class="uiverse">
    <span class="tooltip">simple无解析</span>
    <span>3</span>
  </div>
</div>
    
<div class="box-x">
      <button class="beitibutton" @click="pageSkipp" >
   
        <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
  
    <p >
      基础题库
    </p>
</button>
</div>

</div>




<div class="box">

  <div class="box-x">
  <div class="uiverse">
    <span class="tooltip" >difficulty有解析</span>
    <span>4</span>
  </div>
</div>


<div class="box-x">
      <button class="beitibutton" @click="pageSkip">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
        <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
    </svg>
    <span>
      全面题库
    </span>
</button>
</div>

</div>
</div> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import $ from "jquery";

export default defineComponent({
  name: "beiti",

  methods: {
    kaishi() {
      // console.log('开始学习',$('#btn1').text() );
      if ($("#btn1").text() === "开始学习") {
        $("#btn1").text("正在学习");
        $('code >> span[style="color:#C3E88D;"]')
          .addClass("mystyle")
          .unbind()
          .click(function () {
            $(this).removeClass("mystyle");
          });
      } else {
        $("#btn1").text("开始学习");
        $('code >> span[style="color:#C3E88D;"]')
          .removeClass("mystyle")
          .unbind();
      }
    },
    xiaoshi() {
      console.log(1);
      $('code >> span[style="color:#C3E88D;"]').toggleClass("cardd");
      console.log($("#btn").text());
      if ($("#btn").text() === "开始记忆") {
        $("#btn").text("正在记忆");
        $('div[class="tip custom-block"]').addClass("carding");
      } else {
        $("#btn").text("开始记忆");
        $('div[class="tip custom-block carding"]').removeClass("carding");
      }
      // .unbind().click(function () { $(this).removeClass("card") })

      // var ss = document.getElementsByTagName("code");
      // for (var i = 0; i < ss.length; i++) {
      //   // ss[i].style.color="new"
      //   ss[i].style.color = "#dee0fd"
      // }
    },
    pageSkip() {
      uni.navigateTo({
        url: "/pages/questionBank/detail/index?id=20601&from_type=1&name=高频考点",
      });
      // uni.navigateTo({ url: '/pages/questionBank/questionBankAnswer/index.html?from_type=1&name=第一章 血液样本采集和血涂片制备&id=21956'});
    },
    pageSkipp() {
      uni.navigateTo({
        url: "/pages/questionBank/detail/index？id=20232&from_type=1&name=习题集",
      });
      // uni.navigateTo({ url: '/pages/questionBank/questionBankAnswer/index.html?from_type=1&name=第一章 血液样本采集和血涂片制备&id=21956'});
    },
  },
});
</script>

<style scoped>
.box-zz {
  margin: -20px 0px 50px;
}

.box-ss {
  margin: 0px -50px -20px;
  border-radius: 3%;
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* background-color: var(--vp-c-bg-alt); */
}

.box {
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* background-color: var(--vp-c-bg-soft); */
}

.mystyle {
  background: rgba(226, 215, 3, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: x-large;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
}

.cardd {
  background: rgba(226, 215, 3, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: x-large;
  margin: 2%;
  width: 70px;
  height: 100px;
  /* box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.25); */
  border-radius: 3px;
  transition: 0.2s all;
  cursor: pointer;
  align-items: center;
  text-align: center;
}

.cardd>span {
  display: block;
  margin: auto;
  max-width: 40px;
}

.container:hover .cardd {
  filter: blur(3px);
  opacity: 0.5;
  transform: scale(0.98);
  box-shadow: none;
}

.container:hover .cardd:hover {
  transform: scale(1);
  filter: blur(0px);
  opacity: 1;
  box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.125);
  background: rgba(226, 215, 3, 0.15);
  color: white;
}

.carding {
  animation: shadow-animation_5020 10s linear infinite;
}

@keyframes shadow-animation_5020 {
  0% {
    box-shadow: 0 0 0 0 #83baf9;
  }

  50% {
    box-shadow: 0 0 20px 15px #ab78f2;
  }

  100% {
    box-shadow: 0 0 0 0 #83baf9;
  }
}
</style>
<style scoped>
@keyframes shadow-animation_5020 {
  0% {
    box-shadow: 0 0 0 0 #83baf9;
  }

  50% {
    box-shadow: 0 0 25px 25px #ab78f2;
  }

  100% {
    box-shadow: 0 0 0 0 #83baf9;
  }
}

.box {
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

.headingg {
  background-image: linear-gradient(120deg,
      #bd34fe 16%,
      var(--vp-c-brand-light),
      var(--vp-c-brand-light));
  margin-left: 0;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.vitecong {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 14px;
  padding: 1rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  position: relative;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.1rem;
  filter: grayscale(100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: var(--vp-c-bg-alt);
  border: 2px solid var(--vp-c-bg-alt);
  transition: border-color 0.5s;
}

.vitecong:hover {
  filter: grayscale(0%);
  border: 2px solid var(--vp-c-brand-light);
}

.vitecong img {
  position: absolute;
  left: 1.5rem;
  transition: transform 0.5s;
}

.vitecong:hover img {
  transform: scale(1.2);
}

.vitecong:hover .heading {
  background-image: linear-gradient(120deg,
      #bd34fe 16%,
      var(--vp-c-brand-light),
      var(--vp-c-brand-light));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.vitecong .extra-info {
  color: var(--vp-c-text-1);
  opacity: 0;
  font-size: 0.7rem;
  padding-left: 0.1rem;
  transition: opacity 0.5s;
}

.vitecong:hover .extra-info {
  opacity: 0.9;
}

.switch {
  position: relative;
  display: inline-block;
  width: 120px;
  height: 32px;
  text-decoration: none;
  position: absolute;
  border: none;
  /* font-size: 1px; */
  font-family: inherit;
  color: #fff;
  line-height: 2em;
  text-align: center;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%;
  border-radius: 30px;
  z-index: 1;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #3c3c3c;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  text-decoration: none;
  border: none;
  font-size: 14px;
  color: #fff;
  /* line-height: 2em; */
  text-align: center;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%;
  border-radius: 30px;
  z-index: 1;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked+.slider {
  /* background-color: #0E6EB8; */

  content: "";
  position: absolute;
  /* top: -3px;
 left: -3px;
 right: -3px;
 bottom: -3px; */
  /* z-index: -1; */
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 35px;
  transition: 1s;
  animation: ani 8s linear infinite;
  border: none;
  filter: blur(1px);
}

input:focus+.slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(85px);
}

/*------ ADDED CSS ---------*/
.slider:after {
  /* content: '开始学习'; */
  color: white;
  display: block;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  font-size: 10px;
  font-family: Verdana, sans-serif;
}

@keyframes ani {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
}

/* .slider:hover {
 animation: ani 8s linear infinite;
 border: none;
} */

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
  padding: 0.6em 1em 10px;
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
  margin: -4px -8px 0px;
}

.beitibutton p {
  font-size: 13px;
  margin: -5px 6px 0px;
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
