<template>
  <nav>
    <img
      class="logo"
      :src="'/public/pictures/logo.png'"
      alt="Cowabunga Comics & Collectibles"
      srcset="/public/pictures/logo.png"
    />
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
  @apply flex h-4/5  flex-col bg-white text-slate-300;
  .logo {
    @apply mx-auto flex w-6/12 items-center bg-transparent;
  }
  .navWrapper {
    @apply container mx-auto flex w-full items-center justify-evenly bg-red-700 py-1;
    .home {
      @apply bg-slate-500 px-1.5 hover:bg-white hover:text-black;
    }
    .login {
      @apply bg-slate-500 px-6  hover:bg-white hover:text-black;
    }
    .aboutus {
      @apply bg-slate-500 px-6  hover:bg-white hover:text-black;
    }
    .reviews {
      @apply bg-slate-500 px-6 hover:bg-white hover:text-black;
    }
  }
}
</style>
