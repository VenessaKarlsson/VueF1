<template>
  <div class="trivia-container">
    <div class="text-content">
      <h1>{{ this.trivia }}</h1>
      <h2>Has Lewis Hamilton entered more than 200 Grands Prix?</h2>
      <h4>Answer: {{ driver.GrandsPrixEntered.length > 0 ? 'Yes' : 'No' }}</h4>
      <h4>Lewis has entered 310 Grands Prix</h4>
    </div>
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
    },
    props: {
      trivia: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .trivia-container {
    height: 120vh;
    width: 100%;
    text-align: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
      url(../assets/img/check.jpg);
    background-size: cover;
    color: white;
  }

  .text-content{
    padding: 10rem;
  }
</style>
