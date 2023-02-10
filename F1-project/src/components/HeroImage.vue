<!-- Man behöver inte script setup om man inte ska importera något -->
<script></script>
<template>
  <div id="hero-wrapper">
    <img src="../assets/img/hero-image.jpg" class="img- fluid" alt="f1-cars" />
  </div>
  <div class="hero-text">
    <h1>Formula 1 Official Page</h1>
    <br />
    <h3>Wanna know more about your favorite driver?</h3>
    <h3 class="cards-text">Check out the cards below</h3>
  </div>
</template>
<style scoped>
  img {
    width: 100%;
    height: 100%;
    max-height: 100%;
    margin: 0;
    padding: 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .hero-text {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
  }
</style>
