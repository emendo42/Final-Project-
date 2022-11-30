<template>
  <div class="info">
    <h1>&nbsp;</h1>
    <div class="address_">
      <h2 class="address">We are located at 1500 s 16th st, McAllen, in the great state of Texas</h2>
    </div>
    <div class="hours_box">
      <h3 class="hours">
        🕙Monday &nbsp; &nbsp; &nbsp; &nbsp; 10am👉10pm
        <br />
        🕙Tuesday &nbsp; &nbsp; &nbsp; &nbsp; 10am👉10pm
        <br />
        🕙Wednesday &nbsp; 10am👉10pm
        <br />
        🕙Thrusday &nbsp; &nbsp; &nbsp; 10am👉10pm
        <br />
        🕙Friday &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 10am👉10pm
        <br />
        🕙Saturday &nbsp; &nbsp; &nbsp; 10am👉10pm
        <br />
        🕙Sunday &nbsp; &nbsp; &nbsp; &nbsp; 1pm👉 8pm
      </h3>
    </div>
    <h4 class="visit">Come Visit us, virtually all day to fuel your addiction in the following:</h4>
    <h5 class="addictionItems">
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
    </h5>
  </div>
</template>
<style scoped lang="postcss">
.info {
  @apply px-10 pb-10;
}
.address_ {
  @apply grid max-w-full justify-items-center;
}
.address {
  @apply grid w-8/12 grid-flow-row justify-items-center bg-red-400;
}
.hours_box {
  @apply grid max-w-full justify-items-center;
  .hours {
    @apply grid w-8/12  justify-items-center bg-red-400;
  }
}
.visit {
  @apply flex  justify-center bg-red-400  pl-10;
}
.addictionItems {
  @apply grid grid-cols-1 justify-items-center bg-red-400 pb-5;
}
</style>
