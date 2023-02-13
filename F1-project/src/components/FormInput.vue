<template>
  <div class="form-container">
    <!-- <h1>Sign in to F1</h1>
    <label for="email">Email address</label>
    <input type="email" v-model="email" placeholder="Enter your email" />
    <label for="password">Password</label>
    <input type="password" v-model="password" placeholder="Enter your email" />
    <button @click="Onclick">Send</button> -->
    <form @submit="onSend">
      <label for="firstname">Firstname:</label>
      <input v-model="firstName" />
      <label for="email">Email:</label>
      <input type="email" />
      <label for="password">Password:</label>
      <input type="password" name="password" id="" />
      <div class="space-btn">
        <input
          :disabled="firstName.length === 0"
          type="submit"
          value="Sign in"
          class="btn"
        />
      </div>
    </form>
    <h3 v-if="message !== null">{{ message }}</h3>
  </div>
</template>
<script>
  export default {
    data() {
      return { firstName: '', message: null }
    },
    methods: {
      onSend(e) {
        //preventDefault är en funktion som gör så att sidan inte laddas om, eftersom sumbit laddar om sidan. Vi måste ha ett event parameter, därefter kan vi använda denna parameter och använda preventDefault() funktionen.
        e.preventDefault()
        this.message =
          'Welcome, ' + this.firstName + ' Your now signed in' + '!'
      }
    }
  }
</script>

<style scoped>
  .form-container {
    display: flex;
    width: 50%;
    height: 100%;
    flex-direction: column;
  }

  .form-container form {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35%;
  }

  .form-container form label {
    color: black;
    /* margin-bottom: 1rem; */
    font-size: 1.2rem;
  }

  .form-container form input {
    height: 2rem;
    /* padding: 15px 10px; */
    border-radius: 8px;
    border: 0px solid;
  }
  .form-container form .space-btn .btn {
    margin-top: 2rem;
  }
  .form-container form .btn {
    border: 3px solid black;
    margin-top: 2rem;
    background-color: red;
    color: white;
    height: 3.5rem;
    border-radius: 8px;
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* centerar knappen */
    margin: auto;
    cursor: pointer;
  }

  h3 {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35%;
    color: white;
    text-align: center;
  }
</style>
