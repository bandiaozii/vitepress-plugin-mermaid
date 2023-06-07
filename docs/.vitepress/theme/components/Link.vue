<template>
      <VPLink :href="'/'"  no-icon>
  {{ cat }}</VPLink>
  </template>
<script setup lang="ts">
import VPLink from './IVPLink.vue'

const props = defineProps<{
  cat:string
}>()
  </script>