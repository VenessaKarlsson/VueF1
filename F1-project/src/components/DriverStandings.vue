<template>
  <div class="trivia-container">
    <h1>F1 Trivia</h1>
    <h2>Has Lewis Hamilton entered more than 200 Grands Prix?</h2>
    <h4>Answer: {{ driver.GrandsPrixEntered.length > 0 ? 'Yes' : 'No' }}</h4>
    <h4>Lewis has entered 310 Grands Prix</h4>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        driver: {
          name: 'Lewis hamilton',
          GrandsPrixEntered: ['310']
        }
      }
    },
    computed: {
      publishGrandPrix() {
        return this.driver.GrandsPrixEntered.length > 0 ? 'Yes' : 'No'
      }
    }
  }
</script>

<style scoped>
  .trivia-container {
    height: 100vh;
    width: 100%;
    text-align: center;
  }

  h1 {
    margin-top: 8rem;
  }
</style>
