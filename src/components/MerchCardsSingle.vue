<script setup></script>

<!-- placeholder for item pictures-->
<!-- <template>
  <div class="card" @click="selectCard">
    <div class="cardImage">
      <img :src="'/pictures/logo.png'" alt="item picure" srcset="/pictures/logo.png" />
    </div>
    <div class="items">
      <p class="item-name">Item Name</p>
      <p class="item-cost">Item Cost</p>
    </div>
  </div>
</template> -->

<template>
  <div v-for="n in 31" :key="n" class="card">
    <div class-="cardImage">
      <img :src="`/src/assets/images/${n}.png`" alt="item pictures"  />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.card {
  @apply container mx-auto flex flex-col items-center  py-9 transition-transform  duration-100 hover:scale-110 hover:border-2 hover:border-slate-900 hover:bg-red-300 hover:shadow-2xl;
}
.cardImage {
  @apply flex w-7/12 flex-col items-center bg-white;
}
.items {
  @apply flex flex-col items-center text-yellow-700;
}
</style>
