<script setup>
import { ref } from 'vue'
import { useAuth } from '@/components/composables/useAuth'

const { isAuthenticated, logout, user } = useAuth()
</script>

<template>
  <nav>
    <img
      class="logo"
      :src="'/src/assets/pictures/logo.png'"
      alt="Cowabunga Comics & Collectibles"
      srcset="/src/assets/pictures/logo.png"
    />
    <div v-if="isAuthenticated" class="Username">
      <p v-show="isAuthenticated" class="email">
        Whats up 🍕
        <strong>
          <i>{{ user?.email }}</i>
          <button class="logout" @click="logout">🥱 Logout Dude</button>
        </strong>
      </p>
    </div>

    <div class="navWrapper">
      <RouterLink :to="{ name: 'Home' }" class="home">Home</RouterLink>
      <RouterLink class="aboutus" to="/aboutus">AboutUs</RouterLink>

      <div v-if="isAuthenticated">
        <RouterLink :to="{ name: 'Reviews' }" href="#" class="reviews">Reviews</RouterLink>
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
  .Username {
    @apply flex flex-col justify-center bg-red-400 text-sm font-semibold text-black;
  }
  .email {
    @apply pl-4;
  }
  .logout {
    @apply ml-40 font-mono font-bold text-black  hover:text-white;
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
  }
}
</style>
