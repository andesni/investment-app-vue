<template>
  <div id="app">
    <header class="navbar">
      <div class="navbar__brand">
        <RouterLink to="/">MyInvestmentApp</RouterLink>
      </div>
      <nav class="navbar__links">
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
    <footer class="footer">
      <p>© 2024 CowryRise Internship</p>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@400;700&display=swap');

* {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  background: linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
}

.navbar__brand a {
  color: #ffffff;
  font-size: 1.5rem;
  font-family: 'Playfair Display', serif;
  text-decoration: none;
}

.navbar__links a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  margin: 0 1rem;
  transition: color 0.3s ease;
}

.navbar__links a:hover {
  color: #ff6f61;
}

main {
  flex: 1;
  padding: 2rem;
  background-color: #f9f9f9;
}

.footer {
  background: linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
  color: #ffffff;
  text-align: center;
  padding: 1rem 0;
  border-top: 1px solid #eaeaea;
}
</style>
