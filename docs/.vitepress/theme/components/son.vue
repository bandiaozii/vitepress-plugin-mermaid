<template>
  <span >
    <span class="yaoqiu" v-text="yaoqiu"></span>
    <span class="kemu" v-for="(ss,index) in kemu" v-show="index!=0" :key="index" v-text="ss"></span>
  </span>
  
</template>

<script>
import TenantSet from './TenantSet.vue';
import {getKey} from '../utils/auth.js'
export default {
  name: "Option",
  props: {text:String,textOption:Array,text1:String},
  components: {
    TenantSet
  },
  data() {
    return {
      textOptions: [[]],
      yaoqiu: '',
      kemu: [],
      jibie: 0
    }
  },
  created() {
    this.textOptions = this.textOption
    try {
      this.yaoqiu = this.textOption[this.jibie][0]
      this.kemu=this.textOption[this.jibie]
      let sda = getKey(this.text)
      if (sda != null && sda!='' && typeof sda != 'undefined') {
        this.jibie = Number(sda)
      }
    } catch (e) { }
    
  },
  methods: {
    
  }
}
</script>

<style scoped>
#tab{
  width: 600px;
  margin: 0 auto;
}
.yaoqiu{
  margin: 0px 5px 0px;
  padding: 0px 0px;
  text-align: center;
  font-size: 12px;
  /*font-weight:bold;*/
  color:#ffffff;
  border-radius: 4px;
  background: #64b442;
  box-shadow: inset -5px -5px 9px #64b442,
  inset 5px 5px 9px #1eb410; 
  /*float: right;*/
}
.kemu{
  margin:0px 2px 0px;
  padding: 0px 0px;
  text-align: center;
  font-size: 12px;
  /*font-weight:bold;*/
  color:#999999;
  /* border-radius: 4px; */
  /* background: #999999;
  box-shadow: inset -5px -5px 9px #949494,
  inset 5px 5px 9px #9e9e9e; */
  /*float: right;*/
}
/* .box{
  margin:-28px 2px 0px;
  float: right;
  text-align: center;
} */

.box{
  /* margin-top: -26px; */
  /* width: 100%; */
  /* display: flex; */
  /* flex-direction:row; */
  /* justify-content: flex-end; */
  /* background-color: var(--vp-c-bg-soft); */
}


</style>
