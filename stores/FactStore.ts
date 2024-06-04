//@ts-ignore
import { defineStore } from "pinia";

export const useFactStore = defineStore("fact", {
  state() {
    return {
      facts: [],
      currentFact: "",
      currentFactIndex: 0,
    };
  },
  actions: {
    async fetchFacts() {
      const facts = await $fetch("/api/facts");

      this.facts = facts;
      this.currentFact = facts[0];
    },
    updateCurrentFact() {
      this.currentFactIndex += 1;
      this.currentFact = this.facts[this.currentFactIndex];
    },
  },
  getters: {
    getCurrentFact(state) {
      return state.currentFact;
    },
  },
});
