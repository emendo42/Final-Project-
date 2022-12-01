<script setup>
import { ref } from 'vue'
import { useAuth } from '@/components/composables/useAuth'

const { isAuthenticated, logout } = useAuth()
</script>

<template>
  <nav>
    <img
      class="logo"
      :src="'/src/assets/pictures/logo.png'"
      alt="Cowabunga Comics & Collectibles"
      srcset="/src/assets/pictures/logo.png"
    />
    <div class="navWrapper">
      <RouterLink :to="{ name: 'Home' }" class="home">Home</RouterLink>
      <RouterLink class="aboutus" to="/aboutus">AboutUs</RouterLink>
      <div v-if="isAuthenticated" class="auth">
        <RouterLink :to="{ name: 'Reviews' }" href="#" class="reviews">Reviews</RouterLink>
        <button class="logout" @click="logout">🥱 Logout Dude</button>
      </div>
      <div v-else>
        <RouterLink :to="{ name: 'LoginPage' }" href="#" class="login">LoginPage</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
nav {
  @apply flex h-4/5  flex-col bg-slate-400 text-slate-300;
  .logo {
    @apply mx-auto flex w-6/12 items-center bg-transparent;
  }
  .navWrapper {
    @apply container mx-auto flex w-screen items-center justify-evenly bg-red-700 py-1;
    .home {
      @apply bg-slate-400 px-1.5 font-mono font-bold text-black hover:bg-white hover:text-black;
    }
    .login {
      @apply bg-slate-400 px-1.5 font-mono font-bold text-black hover:bg-white hover:text-black;
    }
    .aboutus {
      @apply bg-slate-400 px-1.5 font-mono font-bold text-black hover:bg-white hover:text-black;
    }
    .reviews {
      @apply bg-slate-400 px-1.5 font-mono font-bold text-black hover:bg-white hover:text-black;
    }
    .auth {
      @apply -mx-20;
    }
    .logout {
      @apply bg-red-700   font-mono font-bold text-black  hover:text-white;
    }
  }
}
</style>
