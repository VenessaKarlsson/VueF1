<script setup>
import SigninHero from '../components/SigninHero.vue'
import FormInput from '../components/FormInput.vue'
</script>
<template>
  <SigninHero/>
  <FormInput/>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
