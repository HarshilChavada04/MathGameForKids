<template>
  <q-layout view="lHh Lpr lFf">
    <div v-if="route.path !== '/'" class="q-pa-none q-mt-md">
      <div class="q-gutter-md row items-center justify-between">
        <!-- Back button at the top left -->
        <q-btn
          label="Back"
          icon="arrow_back"
          @click="router.push('/')"
          class="q-ma-md"
        ></q-btn>

        <!-- Score at the top right -->
        <q-btn
          :label="`Score: ${score}`"
          @click="router.push('/')"
          class="q-mb-md text-right"
        ></q-btn>
      </div>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { defineComponent } from "vue";
import { useAuthStore } from "../stores/auth"; // Import your Pinia store

export default defineComponent({
  name: "MainLayout",

  setup() {
    // Access the Pinia store
    const authStore = useAuthStore();
    const route = useRoute();
    const router = useRouter();

    // Initialize the score in the store
    authStore.setScore(0); // Set initial score

    return {
      authStore,
      route,
      router,
    };
  },

  computed: {
    // Dynamically bind the score from the store
    score() {
      return this.authStore.score;
    },
  },
});
</script>

<style scoped>
.container {
  cursor: pointer;
}
</style>
