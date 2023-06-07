<template>
  <table v-if="treeData.name">
    <tr>
      <td :colspan="
        Array.isArray(treeData.children) ? treeData.children.length * 2 : 1
      " :class="{
  parentLevel:
    Array.isArray(treeData.children) && treeData.children.length,
  extend:
    Array.isArray(treeData.children) &&
    treeData.children.length &&
    treeData.extend,
}">
        <div :class="{ node: true, hasMate: treeData.mate }">
          <div class="person" :class="Array.isArray(treeData.class) ? treeData.class : []">
            <div v-if="treeData.image_url" class="avat">
              <img :src="treeData.image_url" @contextmenu="$emit('click-node', treeData)" />
            </div>
            <!-- <div class="name">{{treeData.name}}</div> -->
          </div>
          <div>
            <button class="modal-button" @click="showModal = true">
              {{ treeData.name }}
            </button>
            <span class="modal-tip">
              {{ treeData.x }}
            </span>
            <span class="modal-kao">
              {{ treeData.k }}
            </span>
            <!-- {{ treeData.name }}
          {{ treeData.n }} -->
          </div>

          <template v-if="Array.isArray(treeData.mate) && treeData.mate.length">
            <div class="person" v-for="(mate, mateIndex) in treeData.mate" :key="treeData.name + mateIndex"
              :class="Array.isArray(mate.class) ? mate.class : []" @click="$emit('click-node', mate)">
              <div class="avat">
                <img :src="mate.image_url" />
              </div>
              <button class="modal-button" @click="showModal = true">
                {{ mate.name }}
              </button>
              <!-- <div class="modal-button">{{ mate.name }}</div> -->
            </div>
            <!-- <div class="paeson_name">{{ treeData.name }}</div> -->
          </template>
        </div>
        <div class="extend_handle" v-if="Array.isArray(treeData.children) && treeData.children.length"
          @click="toggleExtend(treeData)"></div>
      </td>
    </tr>
    <tr v-if="
      Array.isArray(treeData.children) &&
      treeData.children.length &&
      treeData.extend
    ">
      <td v-for="(children, index) in treeData.children" :key="index" colspan="2" class="childLevel">
        <TreeChart :json="children" @click-node="$emit('click-node', $event)" />
      </td>
    </tr>
  </table>

  <Teleport to="body">
    <Transition name="modal">
      <div v-show="showModal" class="modal-mask">
        <div>
          <div class="card">
            <!-- <div class="img"> -->
            <div v-if="treeData.image_urlt" class="img">
              <img :src="treeData.image_urlt" @contextmenu="$emit('click-node', treeData)" />
            </div>
            <!-- </div> -->
            <div class="info">
              <span>{{ treeData.name }}</span>
              <pre>{{ treeData.n }}</pre>
            </div>

            <button class="modal-button" @click="showModal = false">
              Close
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<script>
// import TreeChart from "vue-tree-chart-3";

import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeChart",
  props: ["json"],
  data() {
    return {
      treeData: {},
      showModal: false,
    };
  },
  watch: {
    json: {
      handler: function (Props) {
        let extendKey = function (jsonData) {
          jsonData.extend =
            jsonData.extend === void 0 ? true : !!jsonData.extend;
          if (Array.isArray(jsonData.children)) {
            jsonData.children.forEach((c) => {
              extendKey(c);
            });
          }
          return jsonData;
        };
        if (Props) {
          this.treeData = extendKey(Props);
        }
      },
      immediate: true,
    },
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    toggleExtend: function (treeData) {
      treeData.extend = !treeData.extend;
      this.$forceUpdate();
    },
  },
});
</script>

<style scoped>
.vp-doc th,
.vp-doc td {
  border: 0px;
  position: relative;
  vertical-align: top;
  padding: 0 0 50px 0;
  text-align: center;
}

/* * {
  background-color: #fff;
} */
table {
  margin: 0px;
  background-color: var(--vp-button-alt-bg);
  border-collapse: separate !important;
  border-spacing: 0 !important;
  overflow-x: visible;
  border: 0px;
}

td {
  position: relative;
  vertical-align: top;
  padding: 0 0 50px 0;
  text-align: center;
}

.extend_handle {
  position: absolute;
  left: 50%;
  bottom: 30px;
  width: 10px;
  height: 10px;
  padding: 10px;
  transform: translate3d(-15px, 0, 0);
  cursor: pointer;
}

.extend_handle:before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  /* box-sizing: content-box; */
  border: 2px solid;
  border-color: #ccc #ccc transparent transparent;
  transform: rotateZ(135deg);
  transform-origin: 50% 50% 0;
  transition: transform ease 300ms;
}

.extend_handle:hover:before {
  border-color: #333 #333 transparent transparent;
}

/* .extend .extend_handle:before{transform: rotateZ(-45deg);} */
.extend::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 15px;
  height: 15px;
  border-left: 2px solid #ccc;
  transform: translate3d(-1px, 0, 0);
}

.childLevel::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 100%;
  height: 15px;
  border-left: 2px solid #ccc;
  transform: translate3d(-1px, 0, 0);
}

.childLevel::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -15px;
  border-top: 2px solid #ccc;
}

.childLevel:first-child:before,
.childLevel:last-child:before {
  display: none;
}

.childLevel:first-child:after {
  left: 50%;
  height: 15px;
  border: 2px solid;
  border-color: #ccc transparent transparent #ccc;
  border-radius: 6px 0 0 0;
  transform: translate3d(1px, 0, 0);
}

.childLevel:last-child:after {
  right: 50%;
  height: 15px;
  border: 2px solid;
  border-color: #ccc #ccc transparent transparent;
  border-radius: 0 6px 0 0;
  transform: translate3d(-1px, 0, 0);
}

.childLevel:first-child.childLevel:last-child::after {
  left: auto;
  border-radius: 0;
  border-color: transparent #ccc transparent transparent;
  transform: translate3d(1px, 0, 0);
}

.node {
  position: relative;
  display: inline-block;
  /* margin: 0 1em; */
  /* box-sizing: border-box; */
  text-align: center;
}

.node:hover {
  color: #2d8cf0;
  cursor: pointer;
}

.node .person {
  position: relative;
  display: inline-block;
  z-index: 2;
  width: 6em;
  overflow: hidden;
}

.node .person .avat {
  display: block;
  width: 4em;
  height: 4em;
  margin: auto;
  overflow: hidden;
  border: 0px solid #ccc;
  /* box-sizing: border-box; */
}

.node .person .avat:hover {
  border: 1px solid #2d8cf0;
}

.node .person .avat img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
}

.node .person .name {
  height: 2em;
  line-height: 2em;
  overflow: hidden;
  width: 100%;
}

.node .person .name2 {
  height: 2em;
  line-height: 2em;
  overflow: hidden;
  width: 100%;
}

.node.hasMate::after {
  content: "";
  position: absolute;
  left: 2em;
  right: 2em;
  top: 2em;
  border-top: 2px solid #ccc;
  z-index: 1;
}

.node .paeson_name {
  transform: rotate(90deg);
  position: absolute;
  top: 68px;
  right: 39px;
  width: 88px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  /* white-space: nowrap; */
}

.landscape {
  transform: translate(-100%, 0) rotate(-90deg);
  transform-origin: 100% 0;
}

.landscape .node {
  text-align: left;
  height: 8em;
  width: 8em;
  right: 18px;
}

.landscape .person {
  position: absolute;
  transform: rotate(90deg);
  height: 4em;
  top: 4em;
  left: 2.5em;
}

.landscape .person .avat {
  position: absolute;
  left: 0;
  border-radius: 2em;
  border-width: 2px;
}

.landscape .person .name {
  height: 4em;
  line-height: 4em;
}

.landscape .hasMate {
  position: relative;
}

.landscape .hasMate .person {
  position: absolute;
}

.landscape .hasMate .person:first-child {
  left: auto;
  right: -4em;
}

.landscape .hasMate .person:last-child {
  left: -4em;
  margin-left: 0;
}

.uiverse {
  position: relative;
  transform: rotate(90deg);
  top: 68px;
  right: 19px;
  width: 100px;
  text-align: center;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.uiverse:hover .tooltip {
  /* left: -90px; */
  top: -60px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.modal-mask {
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: var(--vp-c-bg);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.model-footer {
  margin-top: 8px;
  text-align: right;
}

.modal-button {
  /* padding: 4px 8px; */
  font-size: xx-small;
  border-radius: 4px;
  border-color: var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: #e8e8e8;
}

.modal-button:hover {
  border-color: var(--vp-button-alt-hover-border);
  color: var(--vp-button-alt-hover-text);
  background-color: var(--vp-button-alt-hover-bg);
}

.modal-tip {
  margin-top: -7px;
  display: flex;
  justify-content: space-evenly;
  vertical-align: middle;
  text-align: center;
  /* font-size: 1px; */
  color: #67b440;
  border-radius: 4px;
  /* background: #abd397; */
}

.modal-kao {
  margin-top: 5px;
  display: flex;
  justify-content: space-evenly;
  vertical-align: middle;
  text-align: center;
  /* font-size: 1px; */
  color: #f33349;
  border-radius: 4px;
  letter-spacing: -1px;
  line-height: 1;
  /* background: #abd397; */
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(1.1);
}

.card {
  width: 290px;
  height: 354px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f2f2f3;
  border-radius: 12px;
  box-shadow: inset 5px 5px 10px #a9a9aa77, inset -5px -5px 10px #ffffff7e;
}

/* .card .img {
  height: 100px;
  margin-top: 1.6em;
  aspect-ratio: 1;
  background: #ffffff;
  margin-bottom: 0.4em;
  box-shadow: -5px -5px 8px #ffffff7a, 5px 5px 8px #5050517a;

  border-radius: 100%;
  display: block;
  width: 4em;
  height: 4em;
  margin: auto;
  overflow: hidden;
} */
.card .img {
  overflow: hidden;
  display: block;
  height: 100px;
  margin-top: 1.6em;
  aspect-ratio: 1;
  border-radius: 100%;
  background: #f2f2f3;
  margin-bottom: 0.4em;
  box-shadow: -5px -5px 8px #ffffff7a, 5px 5px 8px #5050517a;
}

* {
  box-sizing: content-box;
}

.card .info {
  text-align: center;
  /* margin-top: 0.4em;
  background: linear-gradient(
    120deg,
    rgba(0, 194, 255, 1) 0%,
    rgba(0, 86, 255, 1) 100%
  );
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
}

.card .info>span {
  text-align: center;
  margin-top: 0.4em;
  background: linear-gradient(120deg,
      rgba(0, 194, 255, 1) 0%,
      rgba(0, 86, 255, 1) 100%);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 1.2em;
}

.card .info>pre {
  text-align: center;
  margin: 15px;
  font-weight: black;
  font-size: 0.1em;
  white-space: pre-wrap;
}
</style>

vue想要介绍图片中的内容,点击图片某一点,展示文字.如何实现
