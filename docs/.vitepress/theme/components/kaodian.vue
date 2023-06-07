
<template>
  <div>
      <span class="nandu"> {{ nanduText[nandu] }}<KaoshiTitle/></span>
   <!-- <div class="h"> {{ title }}</div> -->
    <span class="span"> {{ zishu }} 字数</span>
    <span class="span"> {{ Math.trunc(zishu/125) }} 分钟</span>
  <span class="jiyika"> {{ message }} 张记忆卡片</span>
  <span class="kaodian"> {{ kd }} 考点</span>

  </div>

  


</template>

<script>
  import { defineComponent } from "vue";
  import $ from 'jquery';
  import {getKey} from '../utils/auth.js'

  export default defineComponent({
    name: "beiti",
    props: {text:String},
    data() { return{
      message: '',
      zishu: '',
      kd: '',
      nandu: 0,
      nanduText: ['（士）','（师）','（中级）'],
    }
    },
    created() {
          console.log(this.name)
          this.nandu =  $cookies.get("Test");
          console.log(this.nandu)
        },
    mounted () {
      this.$nextTick(function(){
        this.kaishi()
      }),
      this.$nextTick(function(){
        this.kaodian()
      }),
      this.$nextTick(function(){
        this.ziShu()
      }),
      this.$nextTick(function(){
        this.titlee()
      })
      this.nandu = getKey(this.text)
      console.log(this.nandu)
    },
    methods: {
      kaishi() {
        var txt = document.getElementsByTagName("pre");
        this.message = txt.length
      },
      kaodian() {
        this.kd = $('code >> span[style="color:#C3E88D;"]').length
      },
      ziShu() {
        var sz = 0
        var s = document.getElementsByTagName("code")
        for (var i = 0; i < s.length; i++){
          sz += s[i].innerText.length
        }
        this.zishu =sz
      },
      titlee() {
        var txt = document.getElementsByTagName('title')[0].innerText.replace('| 医检考术',"")
        this.title =txt
      }
    }
  })





</script>

<style scoped>
.h{
  font-size: 25px;
  font-weight:bold;
  padding: 3px 3px;

}

.span{
  margin: 4px;
  padding: 3px 3px;
  text-align: center;
  font-size: 10px;
  font-weight:bold;
  color:#eeeeee;
  border-radius: 4px;
  background: #1b86ee;
  box-shadow: inset -5px -5px 9px #1a82e7,
  inset 5px 5px 9px #1c8af5;
  }
.jiyika{
  margin: 4px;
  padding: 3px 3px;
  text-align: center;
  font-size: 10px;
  font-weight:bold;
  color:#eeeeee;
  border-radius: 4px;
  background: #e03a41;
  box-shadow: inset 5px 5px 10px #b32e34,
  inset -5px -5px 10px #ff464e;
}
.kaodian{
  margin: 4px;
  padding: 3px 3px;
  text-align: center;
  font-size: 10px;
  font-weight:bold;
  color:#eeeeee;
  border-radius: 4px;
  background: #e03a41;
  box-shadow: inset 5px 5px 10px #b32e34,
  inset -5px -5px 10px #ff464e;
}
.nandu{
  margin: 0px;
  padding: 3px 0px;
  text-align: center;
  font-size: 10px;
  font-weight:bold;
  color:#eeeeee;
  border-radius: 4px;
  background: #026915;
  /* box-shadow: inset 5px 5px 10px #b32e34,
  inset -5px -5px 10px #ff464e; */
}
</style>





