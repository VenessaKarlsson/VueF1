<template>
  <div class="hero-image">
<img src="../assets/img/about.jpg" alt="track">
  </div>
  <div class="signin-text">
 <h1>Sign in to the F1-community!</h1>
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

.signin-text{
    position: absolute;
    top: 30%;
    left: 50%;
    /* denna flyttar elementet på x och y axeln */
    transform: translate(-50%, -50%);
    color: red;
    text-align: center;
}

</style>
