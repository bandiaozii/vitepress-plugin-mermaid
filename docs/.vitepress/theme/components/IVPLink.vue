<script lang="ts" setup>
import { computed } from 'vue'
import VPIconExternalLink from 'vitepress/dist/client/theme-default/components/icons/VPIconExternalLink.vue'
import { EXTERNAL_URL_RE } from 'vitepress/dist/client/shared.js'
import {useRouter, withBase} from 'vitepress'
const props = defineProps<{
  href?: string
  noIcon?: boolean
  bookKey?:string,
  pay?:boolean
}>()
let router = useRouter()
const isExternal = computed(() => props.href && EXTERNAL_URL_RE.test(props.href))
const  sads = function () {
  if(isExternal){
    let href = withBase(props.href+'');
    router.go(href)
  }else {
   // window.open(props.href)
  }
}
const funsxsa = function () {
  if(props.href){
    sads()
    // if(props.pay){
    //   getRouters({href:props.href,bookKey:bookKey}).then(res=>sads)
    // }else {
    //   sads()
    // }
  }
  return false
}
</script>

<template>
  <span
    class="VPLink"
    :class="{ link: href }"
    style="cursor: pointer;"
    @click.stop="funsxsa"
    :rel="isExternal ? 'noreferrer' : undefined"
  >
    <slot />
    <VPIconExternalLink v-if="isExternal && !noIcon" class="icon" />
  </span>
</template>

<style scoped>
.icon {
  display: inline-block;
  margin-top: -1px;
  margin-left: 4px;
  width: 11px;
  height: 11px;
  fill: var(--vp-c-text-3);
  transition: fill 0.25s;
}
</style>
