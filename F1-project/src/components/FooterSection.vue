<template>
  <footer>
    <footer id="footer-grid-container">
      <div id="footer-link1">
        <a href="#">Latest News</a>
        <a href="#">Video</a>
        <a href="#">Drivers</a>
      </div>
      <div id="footer-link2">
        <a href="#">Standings</a>
        <a href="#">2022 Season</a>
        <a href="#">Driver Standings</a>
      </div>
      <div id="footer-link3">
        <a href="#">Tickets</a>
        <a href="#">ESPORTS</a>
        <a href="#">Store</a>
      </div>
    </footer>
  </footer>
</template>

<style>
  @media screen and (min-width: 360px) {
    #footer-grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      grid-template-areas: 'footer-link1 footer-link2 footer-link3';
      height: 29vh;
      width: 100%;
      background-color: #212529;
    }

    #footer-link1 a,
    #footer-link2 a,
    #footer-link3 a {
      text-decoration: none;
      color: white;
      font-size: 1.3rem;
    }

    #footer-link1,
    #footer-link2,
    #footer-link3 {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 0 1rem;
    }

    #footer-link1 {
      grid-area: footer-link1;
    }

    #footer-link2 {
      grid-area: footer-link2;
    }

    #footer-link3 {
      grid-area: footer-link3;
    }
  }
</style>
