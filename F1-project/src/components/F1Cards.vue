<template>
  <div class="col">
    <div class="card" style="width: 18rem">
      <img
        src="../assets/img/norris.png"
        class="card-img-top"
        alt="f1-driver"
      />
      
      <!-- {{ info.images }} -->

      <div class="card-body">
        <h5 class="card-title">{{ info.name }}</h5>
        <h6 class="card-text">Team: {{ info.team }}</h6>
        <h6 class="card-text">Country: {{ info.country }}</h6>
        <h6 class="card-text">Date of birth: {{ info.dateof }}</h6>
        <h6 class="card-text">Podiums: {{ info.podiums }}</h6>

        <!-- <img
          src="../assets/img/haas.png"
          alt=""
          style="width: 500px, height: 500px;"
        /> -->
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

    props: {
      //jag kallar min inhämtning för info
      info: {
        require: true,
        type: Object
      }
    }
  }
</script>

<style scoped>
  .card {
    /* mellanrun mellan card*/
    margin-bottom: 30px;
    /* Höjden på card */
    height: 600px;
  }
</style>
