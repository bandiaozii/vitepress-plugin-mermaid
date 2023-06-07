<template>
    <div  class="viteconf" @click="pageSkip">随堂练习</div>
  </template>

  <script>
import { defineComponent } from "vue";

  export default defineComponent({
    name: "Test",

 
    methods: {
      pageSkip(){
        // uni.navigateTo({ url: '/pages/questionBank/questionBankAnswer/index.html?from_type=1&name=第一章 血液样本采集和血涂片制备&id=21956' });
        uni.navigateTo({ url: '/pages/questionBank/questionBankAnswer/index?id=21956&from_type=1&name=第一章 血液样本采集和血涂片制备' });
      },
    }
  })

  </script>

  <style scoped>
  

  .pagerr {
    /* display: block; */
    border: 1px solid var(--vp-c-divider-light);
    border-radius: 8px;
    padding: 5px 5px 5px;
    /*width: 25%;*/
    /*height: 100%;*/
    transition: border-color 0.25s;
    margin: 10px;
  }

  .pagerr:hover {
    border-color: var(--vp-c-brand);
  }


  </style>





