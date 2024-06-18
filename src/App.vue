<template>
  <div id="app">
    <header class="navbar">
      <div class="navbar__brand">
        <RouterLink to="/">MyInvestmentApp</RouterLink>
      </div>
      <button class="navbar__toggle" @click="toggleMenu">☰</button>
      <nav class="navbar__links" :class="{ 'navbar__links--open': menuOpen }">
        <RouterLink to="/" @click="closeMenu">Home</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
    <footer class="footer">
      <p>© 2024 Cowrywise Internship</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
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

.navbar__toggle {
  display: none;
  font-size: 1.5rem;
  color: #ffffff;
  background: none;
  border: none;
  cursor: pointer;
}

.navbar__links {
  display: flex;
  align-items: center;
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
  font-size: 1rem;
}

.footer {
  background: linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
  color: #ffffff;
  text-align: center;
  padding: 1rem 0;
  border-top: 1px solid #eaeaea;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .navbar__toggle {
    display: block;
  }

  .navbar__links {
    display: none;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    text-align: center;
  }

  .navbar__links a {
    margin: 1rem 0;
  }

  .navbar__links--open {
    display: flex;
  }

  .navbar {
    padding: 0.5rem 1rem;
  }

  .navbar__brand a {
    font-size: 1.2rem;
  }

  main {
    padding: 1rem;
    font-size: 0.9rem;
  }

  .footer {
    padding: 0.5rem 0;
    font-size: 0.8rem;
  }
}

@media (min-width: 1200px) {
  .navbar__brand a {
    font-size: 2rem;
  }

  .navbar__links a {
    font-size: 1.2rem;
    margin: 0 1.5rem;
  }

  main {
    padding: 3rem;
    font-size: 1.1rem;
  }

  .footer {
    padding: 1.5rem 0;
    font-size: 1rem;
  }
}
</style>
