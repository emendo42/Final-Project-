<script setup>
import MerchCardsSingle from '@/components/MerchCardsSingle.vue'
</script>

<template>
  <div class="merch_area">
    <MerchCardsSingle v-for="n in 30" :key="n" />
  </div>
</template>

<style scoped lang="postcss">
.merch_area {
  @apply grid grid-cols-1 gap-9  bg-green-500 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}
</style>
