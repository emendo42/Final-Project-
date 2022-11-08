<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
</script>

<template>
  <form class="login-form" @submit.prevent="logUserIn">
    <input v-model="username" type="text" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit" class="">Log In</button>
  </form>
</template>

<style scoped lang="postcss"></style>
