<template>
  <div class="hero-image">
    <!-- <img src="../assets/img/signin2.jpg" alt="track" /> -->
  </div>
  <div class="signin-text">
    <h1>Sign in to the F1-community!</h1>
    <!-- Slut datum -->
  </div>
</template>

<style scoped>
  .hero-image {
    height: 110vh;
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(../assets/img/s1.jpg);
  }
  img {
    width: 100%;
    height: 100%;
    max-height: 100%;
    margin: 0;
    padding: 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .signin-text {
    position: absolute;
    top: 30%;
    left: 50%;
    /* denna flyttar elementet på x och y axeln */
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
  }
</style>
