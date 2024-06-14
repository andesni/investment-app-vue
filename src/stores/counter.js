import { defineStore } from 'pinia';
import axios from 'axios';

export const useFundStore = defineStore('fundStore', {
  state: () => ({
    funds: [],
    fund: null,
    selectedRisk: ''
  }),
  getters: {
    filteredFunds(state) {
      if (!state.selectedRisk) return state.funds;
      //  basic filtering functionality
      const riskState = parseInt(state.selectedRisk);
      return state.funds.filter(fund => fund.risk === riskState);
    }
  },

  actions: {
    async fetchFunds() {
      try {
        const response = await axios.get('https://dashboard.cowrywise.com/api/v2/funds/public/');
        this.funds = response.data.data;
      } catch (error) {
        console.error('Error fetching funds:', error);
      }
    },

    async fetchFundDetails(fundId) {
      try {
        const response = await axios.get('https://dashboard.cowrywise.com/api/v2/funds/public/');
        const funds = response.data.data;
        // Find and set the specific fund based on the fundId
        this.fund = funds.find(fund => fund.id === fundId);
      }
      catch (error) {
        console.error('Error fetching fund details:', error);
      }
    },

    getRiskLevel(risk) {
      const riskLevels = { 1: 'Low Level', 2: 'Medium Level', 3: 'High Level' };
      return riskLevels[risk] || 'Unknown';
    },

    setSelectedRisk(risk) {
      this.selectedRisk = risk;
    }
  }
});
