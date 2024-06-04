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
    // get facts from api and assign the first fact to display
    async fetchFacts() {
      const facts = await $fetch("/api/facts");

      this.facts = facts;
      this.currentFact = facts[0];
    },
    // change the current fact to the next fact in facts array
    updateCurrentFact() {
      this.currentFactIndex += 1;
      this.currentFact = this.facts[this.currentFactIndex];
    },
  },
  // returns the current fact
  getters: {
    getCurrentFact(state) {
      return state.currentFact;
    },
  },
});
