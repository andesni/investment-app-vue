<template>
    <div class="fundlist">
      <div class="banner">
        <h1>Explore Investment Funds</h1>
        <p>Discover the best investment opportunities tailored to your risk preference.</p>
      </div>
      <div class="options">
        <label for="risk-filter">Filter By Risk Level:</label>
        <select id="risk-filter" v-model="selectedRisk" @change="setRisk">
          <option value="">All</option>
          <option value="1">Low Level</option>
          <option value="2">Medium Level</option>
          <option value="3">High Level</option>
        </select>
      </div>
      <ul class="list">
        <li v-for="fund in filteredFunds" :key="fund.id" class="fund-item">
          <RouterLink :to="'/fund/' + fund.id">{{ fund.name }}</RouterLink>
          <div class="fund-info">
            <p>Returns: {{ fund.returns }}</p>
            <p>Asset Type: {{ fund.is_money_market ? 'Money Market' : 'Other' }}</p>
            <p>Fund Manager: {{ fund.fund_manager }}</p>
            <p>Risk Level: {{ getRiskLevel(fund.risk) }}</p>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { computed, onMounted, ref } from 'vue';
  import { useFundStore } from '@/stores/counter';
  import { RouterLink } from 'vue-router';
  
  export default {
    setup() {
      const fundStore = useFundStore();
  
      onMounted(() => {
        fundStore.fetchFunds();
      });
  
      const selectedRisk = ref('');
      const filteredFunds = computed(() => {
        if (!selectedRisk.value) {
          return fundStore.filteredFunds;
        }
        return fundStore.filteredFunds.filter(
          (fund) => fund.risk == selectedRisk.value
        );
      });
  
      const setRisk = (event) => {
        selectedRisk.value = event.target.value;
      };
  
      return {
        selectedRisk,
        filteredFunds,
        setRisk,
        getRiskLevel: fundStore.getRiskLevel,
      };
    },
    components: {
      RouterLink,
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@400;700&display=swap');
  
  .fundlist {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    animation: fadeIn 0.5s ease-in-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .banner {
    text-align: center;
    background: linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 2rem;
    color: white;
  }
  
  .banner h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .banner p {
    font-size: 1.2rem;
  }
  
  .options {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  .options label {
    margin-right: 1rem;
    font-weight: 600;
    color: #666;
  }
  
  .options select {
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ddd;
    background-color: #f0f0f0;
    transition: border 0.3s ease;
  }
  
  .options select:focus {
    border-color: #ff6f61;
    outline: none;
  }
  
  .list {
    list-style: none;
    padding: 0;
  }
  
  .fund-item {
    padding: 1.5rem;
    border-bottom: 1px solid #eee;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .fund-item:last-child {
    border-bottom: none;
  }
  
  .fund-item:hover {
    background-color: #fafafa;
    transform: scale(1.02);
  }
  
  .fund-item a {
    font-size: 1.5rem;
    color: #333;
    text-decoration: none;
    font-weight: 700;
    transition: color 0.3s ease;
  }
  
  .fund-item a:hover {
    color: #ff6f61;
  }
  
  .fund-info {
    margin-top: 1rem;
    color: #555;
    font-size: 1rem;
  }
  
  .fund-info p {
    margin: 0.5rem 0;
  }
  </style>
  