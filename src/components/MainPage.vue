<script setup>
import MerchCards from '@/components/MerchCards.vue'
</script>

<template>
  <h1 class="update">***UPDATE-Dungeons and Gragons now on Fridays & Saturdays from 10pm to 🤷‍♂️?</h1>
  <h2 class="adress">We are located at 1500 s 16th st, McAllen, in the great state of Texas</h2>
  <h3 class="hours">Come Visit us from 10am-10pm, virtually all day to fuel your addiction in the following:</h3>
  <h4 class="addiction-items">
    💥Comics..............(duhh)
    <br />
    💥Funkos...............(boxes as perfect as you can imagine)
    <br />
    💥Posters...............(rolled up neatly for you)
    <br />
    💥Anime Merch...(you'll need it for vacations)
    <br />
    💥Loungeflys........(you'll look fancy)
    <br />
    💥Stickers...............(they really stick on anyone, I mean anything)
    <br />
    💥Lanyards.............(you need something for you keys or id)
    <br />
    💥Notebooks.........(wanna write an angry letter, we got the notebook for you)
    <br />
    ...........and more surprises in store👀
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
