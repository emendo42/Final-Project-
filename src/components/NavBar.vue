<template>
  <nav>
    <img class="logo" :src="'/images/logo.png'" alt="Cowabunga Comics & Collectibles" srcset="/images/logo.png" />
    <div class="navWrapper">
      <RouterLink class="home" to="/">Home</RouterLink>
      <RouterLink class="login" to="/login">LoginPage</RouterLink>
      <RouterLink class="aboutus" to="/aboutus">AboutUs</RouterLink>
      <RouterLink class="reviews" to="/reviews">Reviews</RouterLink>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
nav {
  @apply flex h-4/5  flex-col bg-blue-500 text-slate-300;
  .logo {
    @apply mx-auto flex w-6/12 items-center bg-transparent;
  }
  .navWrapper {
    @apply container mx-auto flex w-full items-center justify-evenly pt-1;
    .home {
      @apply bg-slate-500 px-6;
    }
  }
}
</style>
