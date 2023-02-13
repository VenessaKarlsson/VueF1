<template>
  <div class="col">
    <div class="card" style="width: 18rem">
      <img :src="info.images" class="card-img-top" alt="f1-driver" />

      <div class="card-body">
        <h5 class="card-title">{{ info.name }}</h5>
        <h6 class="card-text">Team: {{ info.team }}</h6>
        <h6 class="card-text">Country: {{ info.country }}</h6>
        <h6 class="card-text">Date of birth: {{ info.dateof }}</h6>
        <h6 class="card-text">Podiums: {{ info.podiums }}</h6>
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
    },
    created() {
      console.log('info: ', this.info);
    }
  };
</script>

<style scoped>
  .card {
    /* mellanrun mellan card*/
    margin-bottom: 30px;
    /* Höjden på card */
    height: 600px;
  }
</style>
