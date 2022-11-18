<script setup>
import MerchCards from '@/components/MerchCards.vue'
</script>

<template>
  <h1 class="update">***UPDATE-Dungeons and Gragons now on Fridays & Saturdays from 10pm to 🤷‍♂️?</h1>
  <h2 class="adress">We are located at 1500 s 16th st, McAllen, in the great state of Texas</h2>
  <h3 class="hours">Come Visit us from 10am-10pm, virtually all day to fuel your addiction in the following:</h3>
  <h4 class="addiction-items">
    🔴Comics(duhh)
    <br />
    🔴Funkos
    <br />
    🔴Posters
    <br />
    🔴Anime Merch
    <br />
    🔴Loungeflys
    <br />
    🔴Stickers
    <br />
    🔴Lanyards
    <br />
    🔴Notebooks
    <br />
    ....and more surprises in store👀

  </h4>

  <div class="Merch">
    <MerchCards />
  </div>
</template>

<style scoped lang="postcss">
.Merch {
  @apply p-3;
}
.update {
  @apply bg-red-400;
}
</style>
