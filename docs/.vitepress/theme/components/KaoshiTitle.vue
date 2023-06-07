<template>
    <div>
      <span class="titledj">{{ nanduText[nandu] }}</span>
   </div>
</template>
    <script>
    import { defineComponent } from "vue";
    import {getKey} from '../utils/auth.js'
      export default defineComponent({
        name: "KaoshiTitle",
        props:{name:String},
        data() {
          return {
            nandu: 0,
            nanduText: ['（士）','（师）','中级'],
          }
        },
        created() {
          console.log(this.name)
          this.nandu =  $cookies.get("Test");
          console.log(this.nandu)
        }
      })
    
    </script>
    
<style scoped>
  .titledj{
  /* padding: 3px 0px; */
  /* text-align: center; */
  /* font-size: 10px; */
  /* font-weight:bold; */
  color:#eeeeee;
  /* border-radius: 4px; */
  /* background: #026915; */
  /* box-shadow: inset 5px 5px 10px #b32e34,
  inset -5px -5px 10px #ff464e; */
}
</style>