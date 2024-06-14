<template>
  <div class="fund-details">
    <div v-if="fund">
      <h1>{{ fund.name }}</h1>
      <img :src="fund.logo" alt="Company Logo" v-if="fund.logo" class="fund-logo">
      <div class="fund-info">
        <div class="info-row">
          <span class="info-label">Returns:</span>
          <span class="info-value">{{ fund.returns }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Asset Type:</span>
          <span class="info-value">{{ fund.is_money_market ? 'Money Market' : 'Other' }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Fund Manager:</span>
          <span class="info-value">{{ fund.fund_manager }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Risk Level:</span>
          <span class="info-value">{{ getRiskLevel(fund.risk) }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Description:</span>
          <span class="info-value">{{ fund.description }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Custodian:</span>
          <span class="info-value">{{ fund.custodian }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Size:</span>
          <span class="info-value">{{ fund.size_in_kobo }} kobo</span>
        </div>
      </div>
      <h2>Performance</h2>
      <ul class="performance-list">
        <li v-for="performance in fund.performance" :key="performance.year">
          Year: {{ performance.year }}, Annual Return: {{ performance.annual_return }}
        </li>
      </ul>
      <h2>Composition</h2>
      <ul class="composition-list">
        <li v-for="(value, key) in fund.composition" :key="key">
          {{ key }}: {{ value }}%
        </li>
      </ul>
    </div>
    <div v-else class="loading">
      <p>Loading fund details...</p>
      <p>Select an Investment Fund from the home page</p>
    </div>
  </div>
</template>

<script>
import { useFundStore } from '@/stores/counter';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const fundStore = useFundStore();
    const fundId = computed(() => route.params.id);

    onMounted(() => {
      fundStore.fetchFundDetails(fundId.value);
    });

    const fund = computed(() => fundStore.fund);

    return {
      getRiskLevel: fundStore.getRiskLevel,
      fund
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

body {
  font-family: "Playfair Display", sans-serif;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
  color: #333;
}

.fund-details {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.fund-logo {
  max-width: 150px;
  display: block;
  margin: 0 auto 20px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
}

h2 {
  font-size: 1.5em;
  margin-top: 30px;
  margin-bottom: 15px;
}

.fund-info {
  display: grid;
  grid-template-columns: auto 1fr;
  row-gap: 10px;
  column-gap: 20px;
  margin-bottom: 30px;
}

.info-row {
  display: contents;
}

.info-label {
  font-weight: bold;
  color: #555;
}

.info-value {
  color: #333;
}

.performance-list, .composition-list {
  list-style-type: none;
  padding: 0;
}

.performance-list li, .composition-list li {
  background-color: #f0f0f0;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

.loading {
  text-align: center;
  padding: 50px 0;
}

.loading p {
  font-size: 1.2em;
}
</style>
