<template>
  <q-page>
    <div class="flex flex-center">
      <span>Multiplication Page</span>
    </div>
    <div class="row justify-center">
      <div>{{ intRandomNum1 }}</div>
      <div>*</div>
      <div>{{ intRandomNum2 }}</div>
      <div>=</div>
      <div>
        <q-input
          flat
          dense
          outlined
          v-model="intResult"
          type="number"
          placeholder="Enter result"
        ></q-input>
      </div>
    </div>
    <div class="flex flex-center">
      <q-btn
        label="Submit"
        :disable="intResult == null"
        class="bg-primary text-white q-mt-md"
        dense
        @click="handleSubmit()"
      ></q-btn>
      <audio ref="clapSound" src="/applauseSound.mp3"></audio>
      <audio ref="wrondSound" src="/wrongAnswer.mpeg"></audio>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import confetti from "canvas-confetti";

export default defineComponent({
  name: "MultiplicationPage",
  data() {
    return {
      intRandomNum1: 0,
      intRandomNum2: 0,
      intResult: null,
    };
  },
  methods: {
    generateRandomNumber() {
      // Generate two random numbers between 1 and 10
      this.intRandomNum1 = Math.floor(Math.random() * 10) + 1;
      this.intRandomNum2 = Math.floor(Math.random() * 10) + 1;
    },
    handleSubmit() {
      if (this.intRandomNum1 * this.intRandomNum2 == this.intResult) {
        const clapSound = this.$refs.clapSound;

        // Start playing the sound
        clapSound.play();

        // Stop the sound after 2 seconds
        setTimeout(() => {
          clapSound.pause();
          clapSound.currentTime = 0; // Reset to the start
        }, 2000);

        // Trigger confetti
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });

        // Reset input and generate new numbers
        this.intResult = null;
        this.generateRandomNumber();
      } else {
        this.intResult = null;
        this.$refs.wrondSound.play();
      }
    },
  },
  beforeMount() {
    this.generateRandomNumber();
  },
});
</script>
<style scoped>
.container {
  cursor: pointer;
}
</style>
