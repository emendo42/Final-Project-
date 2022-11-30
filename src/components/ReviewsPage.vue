<script setup></script>

<template>
  <div class="main_reviews">
    <div class="reviews">
      <h1 class="name">-Erick</h1>
      <h2 class="review">
        "I went on Black Friday, and you would not believe the amount of things these guys had. Im talking bout a
        million fukos. All in their boxes, undamaged by the way. I probably spent like 200 bucks in there but worth it!"
      </h2>
    </div>

    <div class="space">This is a hidden message</div>

    <div class="reviews">
      <h1 class="name">-Bob</h1>
      <h2 class="review">
        "The owner was such a cool guy, the comic was a little wrinkled so he gave me a 💲0.01 discount, can't beat that
        anywhere!"
      </h2>
    </div>

    <div class="space">You just love to look around, don't you</div>

    <div class="reviews">
      <h1 class="name">-Dabom dotcom</h1>
      <h2 class="review">
        "I saw their TMNT mural from the expressway and I just had to make a stop, event tho i was taking my chid to the
        hospital for a broken collar bone. They had a large variety of items and the owners, oh they were just so
        helpful."
      </h2>
    </div>

    <div class="space">Alright, this is the last Hidden Message</div>

    <div class="reviews">
      <h1 class="name">-Ale</h1>
      <h2 class="review">
        "I walked in and their variety of Loungefly backpacks immediately caught my eye! Not only do they have backpacks
        but also the matching wallet too!!! I took 2 sets and with every 💲10 spent you enter their raffles! Definitely
        will be stopping by again."
      </h2>
    </div>

    <div class="space">Gotcha dude</div>

    <div class="reviews">
      <h1 class="name">-Aaron</h1>
      <h2 class="review">
        "What can I say, I love Dungeons & Dragons. Now with them having D&D Saturday nights, ohhhhh Saturdays have
        never been better. I show up at 9, set up and get my stuff ready relax and prepare myself for the battle. Oh did
        i also mention they have snacks. Endless supplies of chips, popcorn, and drinks to keep your belly busy while
        you keep your brain busy."
      </h2>
    </div>

    <div class="space">Mention "Cowabunga Dude" at the register for discounts!</div>

    <div class="reviews">
      <h1 class="name">-Unknown Customer</h1>
      <h2 class="review">
        "Good store, I go in almost every day to escape the heat of the day and buy some water or coke. However, while
        im there im might as well buy a few Yu-Gi-Oh! cards and stuff. Ya know, the essentials. "
      </h2>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.main_reviews {
  @apply w-screen grid-cols-1 justify-items-center   p-6 px-12;
  & .reviews {
    @apply justify-items-center  border-8 border-b-orange-600  border-t-blue-600 border-l-purple-600 border-r-red-600 bg-red-300 px-6;
    & .name {
      @apply grid justify-center;
    }
    & .review {
      @apply grid justify-center;
    }
  }
  & .space {
    @apply grid justify-items-center text-green-500  hover:text-green-200;
  }
}
</style>
