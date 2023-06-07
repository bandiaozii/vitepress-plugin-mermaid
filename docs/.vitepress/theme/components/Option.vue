<template>
  <div class="box-z">
    <div class="box-s">
      <div class="card">
        <div class="card-details" :style="dsnum == 0 ? 'color: black;' : ''" @click="jibie(0)">
          <Link />
          <p class="text-title">
            <Link :style="dsnum == 0 ? 'color: black;' : ''" @click="jibie(0)" :cat="'临床医学检验技术(士)'" />
          </p>
          <p class="text-body">
            <Link :style="dsnum == 0 ? 'color: black;' : ''" @click="jibie(0)" :cat="'2023年大纲题库'" />
          </p>
        </div>
        <!-- <button class="card-button" @click="jibie(0)" ><Link :cat="'确定'" /></button> -->
      </div>

      <div class="card">
        <div class="card-details" :style="dsnum == 1 ? 'color: black;' : ''" @click="jibie(1)">
          <Link />
          <p class="text-title">
            <Link :style="dsnum == 1 ? 'color: black;' : ''" @click="jibie(1)" :cat="'临床医学检验技术(师)'" />
          </p>
          <p class="text-body">
            <Link :style="dsnum == 1 ? 'color: black;' : ''" @click="jibie(1)" :cat="'2023年大纲题库'" />
          </p>
        </div>
        <!-- <button class="card-button" @click="jibie(0)" ><Link :cat="'确定'" /></button> -->
      </div>
      <!-- </div> -->

      <!-- <div class="box-s"> -->
      <div class="card">
        <div class="card-details" :style="dsnum == 2 ? 'color: black;' : ''" @click="jibie(2)">
          <Link />
          <p class="text-title">
            <Link :style="dsnum == 2 ? 'color: black;' : ''" @click="jibie(2)" :cat="'临床医学检验技术(中级)'" />
          </p>
          <p class="text-body">
            <Link :style="dsnum == 2 ? 'color: black;' : ''" @click="jibie(2)" :cat="'2023年大纲题库'" />
          </p>
        </div>
        <!-- <button class="card-button" @click="jibie(0)" ><Link :cat="'确定'" /></button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { setKey, getKey } from "../utils/auth.js";
import TenantSet from "./TenantSet.vue";
export default {
  components: {
    TenantSet,
  },
  props: ["title", "kaodian", "time", "jpg"],
  data() {
    return {
      dsnum: 0,
    };
  },

  created() {
    // let aa = this.getUrlKey("titler", window.location.href);
    // alert(aa);

    let sda = getKey(this.title);
    if (sda != null && sda != "" && typeof sda != "undefined") {
      this.dsnum = Number(sda);
    } else {
      setKey(this.title, this.dsnum);
    }
  },
  methods: {
    //     getUrlKey(name, url) {
    // 　　return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url) || [, ""])[1].replace(/\+/g, '%20')) || null
    // },
    jibie(dsnum) {
      this.dsnum = dsnum;
      console.log(this.title, dsnum);
      setKey("Test", dsnum);
    },
  },
};
</script>

<style scoped>
.box-z {
  /* margin:10px 20px 20px ; */
}

.box-s {
  margin: 10px 10px 50px;
  border-radius: 3%;
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* background-color: var(--vp-c-bg-alt); */
}


.box-f {
  padding: 15px;
  /*justify-content: space-between;*/
  display: flex;
  flex-direction: column;
}

.card {
  font-size: x-large;
  width: 150px;
  height: 200px;
  border-radius: 20px;
  background: #f5f5f5;
  position: relative;
  border: 2px solid #c3c6ce;
  transition: 0.5s ease-out;
  overflow: visible;
  /* margin-top: 30px; */
}

.card-details {
  padding: 0.8rem;
  color: #dce0d9;
  height: 100%;
  gap: 0.5em;
  display: grid;
  place-content: center;
}

.card-button {
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background-color: #008bf8;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
}

.text-body {
  color: rgb(134, 134, 134);
  font-size: 0.6em;
}

/*Text*/
.text-title {
  font-size: 0.8em;
  font-weight: bold;
  text-align: center;
}

/*Hover*/
/* .card {
 border-color: #008bf8;
 box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover .card-button {
 transform: translate(-50%, 50%);
 opacity: 1;
}  */
</style>
