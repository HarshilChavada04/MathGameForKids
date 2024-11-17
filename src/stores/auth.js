// src/stores/authStore.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    score: 0, // Initialize the score to 0
  }),
  actions: {
    // Set the score (you can use this to update the score)
    setScore(newScore) {
      this.score = newScore;
    },
    // Increment the score by a specific amount
    incrementScore(amount = 1) {
      this.score += amount;
    },
  },
});
