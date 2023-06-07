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

    <KaoShiTo :ksIdf="21945" :namef="'微生物学检验（无解析）士'" :ksuIdf="20385" :unamef="'微生物学和微生物学检验（有解析）师'" :ksIds="20684"
      :names="'微生物学和微生物学检验（无解析）师'" :ksuIds="20385" :unames="'微生物学和微生物学检验（有解析）师'" :ksIdt="17667" :namet="'微生物学检验（无解析）中级'"
      :ksuIdt="17675" :unamet="'微生物学检验（有解析）中级'" :from_type="1" />
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

<style>
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
  align-items: center;
  justify-content: center;
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
</style>
