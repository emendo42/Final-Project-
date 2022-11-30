<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { useAuth } from '@/components/composables/useAuth'
const { login, logout } = useAuth()

const router = useRouter()
const route = useRoute()

const username = ref('')
const password = ref('')

const logUserIn = async () => {
  if (await login(username.value, password.value)) {
    if (route.query.redirect) {
      router.push(route.query.redirect)
    } else {
      router.push({ name: 'Home' })
    }
  } else {
    logout()
  }
}
</script>

<template>
  <form class="login-form" @submit.prevent="logUserIn">
    <input v-model="username" class="user" type="text" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit" class="login-button">Log-in for Pizza</button>
  </form>
</template>

<style scoped lang="postcss">
.login-form {
  @apply mx-auto mt-12 flex max-w-fit flex-col gap-4 rounded-md bg-white p-9 shadow-lg ring-4 ring-red-600;
  & input {
    @apply rounded-md bg-green-200 px-4 py-2 text-xl ring-2 ring-black;
  }
  & .user {
    @apply rounded-md bg-green-200 px-4 py-2 text-xl ring-2 ring-black;
  }
  & button {
    @apply rounded-md bg-green-600 p-5 ring-2 ring-black;
  }
}
</style>
