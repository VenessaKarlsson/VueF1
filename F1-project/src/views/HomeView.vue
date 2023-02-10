<script setup>
  import HeroImage from '../components/HeroImage.vue';
  import F1Cards from '../components/F1Cards.vue';
</script>

<template>
  <HeroImage />
  <h1 class="title">{{ text }}</h1>
  <div id="card-container">
    <div class="container text-center">
      <div class="row align-items-start">
        <!-- man måste lägga in :keys för att den ska hitta varje unik nyckel -->
        <!-- i key:n skiver man in vilket värde man vill hämta från json objektet -->
        <!-- custom events, two way binding då behöver man hämta in offer som står i propsen i
          inhämtningen. Då berättar jag för dig att jag binder :offer="driver" då kännder den av -->
        <!-- För varje objekt jag hämtar in så ska den bindas med någonting som heter offer
        i F1Cards komponenten-->
        <F1Cards v-for="driver in drivers" :key="driver.id" :info="driver" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: 'Meet our F1 drivers',
        drivers: []
      };
    },

    mounted() {
      this.fetchData();
    },
    methods: {
      // skapar fetch funktionen i axios
      async fetchData() {
        //säger vad/vilket json objekt som ska fetchas
        const res = await fetch('F1.json');
        //här bestämmer man vad man ska göra med fetchen
        const result = await res.json();
        //this.drivers referarar till den tomma arrayen,
        //om man har fått fram någon info från fetchen i from utav json-data så kommer den att skicka
        // info:n till den tomma arrayen drivers [] som man sedan kan hämtas in i komponenten F1Cards
        // console.log(result)
        this.drivers = result;
        // console.log('this.drivers: ', this.drivers[0].images);
      }
    }
  };
</script>

<style scoped>
  /* denna container gör mellan rum mellan varje card */
  #card-container {
    display: flex;
    justify-content: center;
    margin-top: 10vh;
    margin-bottom: 10vh;
  }

  .title {
    text-align: center;
    margin-top: 9vh;
  }

  .card {
    margin-bottom: 30px;
  }
</style>
