<script setup>
import MerchCardsSingle from '@/components/MerchCardsSingle.vue'
</script>

<template>
  <div class="merch_area">
    <MerchCardsSingle />
  </div>
</template>

<style scoped lang="postcss">
.merch_area {
  @apply grid grid-cols-1 gap-9  bg-green-500 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6;
}
</style>
