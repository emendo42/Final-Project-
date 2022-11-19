<script setup>
import MerchCards from '@/components/MerchCards.vue'
</script>

<template>
  <h1 class="update">Now Featuring: Smash Bros Tournament on Fridays from 7pm to 🤷‍♂️?</h1>
  <h2 class="update2">Dungeons and Dragons on Saturdays from 10pm to 🤷‍♂️?</h2>
  <h3 class="deals">HEY DUDE, CHECK OUT THESE DEALS</h3>

  <div class="Merch">
    <MerchCards />
  </div>
</template>

<style scoped lang="postcss">
.Merch {
  @apply p-3;
}
.update {
  @apply bg-red-400 pl-4;
}
.update2 {
  @apply bg-red-400 pl-32;
}
.deals {
  @apply flex flex-col items-center bg-green-500 font-mono text-4xl font-extrabold;
}
</style>
