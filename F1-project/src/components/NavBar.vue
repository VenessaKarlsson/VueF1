<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h5 class="text-white h4">Formula 1</h5>
      <RouterLink class="text-white h4" to="/">Home</RouterLink>
      <br />
      <RouterLink class="text-white h4" to="/about">About</RouterLink>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <RouterView />
</template>

<!-- style scoped gäller bara denna komponenter, den ändrar ingenting globalt -->
<style scoped>
  .text-white {
    color: #e10600;
  }

  .text-white {
    text-decoration: none;
    /* margin-bottom: 20px; */
  }
</style>
