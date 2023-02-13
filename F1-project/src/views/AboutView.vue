<script setup>
  import SigninHero from '../components/SigninHero.vue'
  import FormInput from '../components/FormInput.vue'
  import DriverStandings from '../components/DriverStandings.vue'
  import WatcherForm from '../components/WatcherForm.vue'
</script>
<template>
  <SigninHero />
  <FormInput />
  <DriverStandings />
  <WatcherForm />
</template>

<style>
  /* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>

<script>
  import axios from 'axios'

  axios
    .get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=essie')
    .then(function (response) {
      console.log(response.data)
    })
</script>
