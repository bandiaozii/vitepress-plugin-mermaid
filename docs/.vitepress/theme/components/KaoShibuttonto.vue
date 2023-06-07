<template>

 
<div class="box-o">
      <button class="beitibuttonn" @click="pageSkip" >
        <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
        <p>开始练习</p>
</button>

</div>



</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
      props: ["list"],
    methods: {
      pageSkip() {
        uni.navigateTo({
          url: this.list
        })
      }
    }
})

</script>

<style scoped>


.box-o{
 margin: 0px 10px 0px; 
 
 /* width: 100%;  */
 display: flex; 
 flex-direction:row; 
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


.beitibuttonn p{
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