<template>
  <div id="input-container">
    <h3>Write a secret message to the console</h3>
    <input v-model="write" type="text" />

    <!-- {{ write }} -->

    <!-- <input
      type="button"
      :value="$store.state.counter"
      @click="$store.commit('increment')"
    /> -->
  </div>
</template>

<script>
  export default {
    data() {
      return { write: '' }
    },

    created() {
      console.log(this.basket)
    },
    watch: {
      write() {
        console.log(this.write)
      }
    }
  }
</script>

<style scoped>
  #input-container {
    position: absolute;
    top: 190%;
    width: 100%;
    text-align: center;
    color: white;
  }
</style>
