<script setup></script>

<template>
  <div class="card" @click="selectCard">
    <div class="cardImage">
      <img :src="'/pictures/logo.png'" alt="item picure" srcset="/pictures/logo.png" />
    </div>
    <div class="items">
      <p class="item-name">Item Name</p>
      <p class="item-cost">Item Cost</p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.card {
  @apply container mx-auto flex flex-col items-center bg-red-200 py-9;
}
.cardImage {
  @apply flex flex-col w-7/12 items-center bg-white ;
}
.items {
  @apply flex flex-col items-center text-yellow-700;
}
</style>
