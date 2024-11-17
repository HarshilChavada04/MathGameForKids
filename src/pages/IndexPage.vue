<template>
  <q-page>
    <div class="row justify-center">
      <span>Please select one option from below.</span>
    </div>
    <div class="row justify-center q-mt-md">
      <q-card
        style="width: 110px; height: 100px"
        class="flex flex-center container q-mb-md"
        @click="handleButtonClick('/addition')"
      >
        <div>Addition (+)</div>
      </q-card>
      <q-card
        style="width: 110px; height: 100px"
        class="flex flex-center container q-mx-md q-mb-md"
        @click="handleButtonClick('/subtraction')"
      >
        <div>Subtraction (-)</div>
      </q-card>
      <q-card
        style="width: 110px; height: 100px"
        class="flex flex-center container"
        @click="handleButtonClick('/multiplication')"
      >
        <div>Multiplication (x)</div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  methods: {
    handleButtonClick(strPageName) {
      this.$router.push(strPageName);
    },
  },
});
</script>
<style scoped>
.container {
  cursor: pointer;
}
</style>
