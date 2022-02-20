<template>
  <div class="main">
    <div class="flex justify-center flex-col">
      <div class="flex justify-center">
        <img src="@/assets/apple-red.png" :width="40" :height="40" />
      </div>
      <h1 class="text-6xl my-3 mb-4 tracking-widest">asimov</h1>
    </div>
    <div class="flex justify-center">
      <p class="mr-2">NFT price discovery protocol on Solana</p>
      <SolanaLogo class="mt-1" />
    </div>
    <a href="mailto:team@asimov.so" class="text-blue-700">team@asimov.so</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SolanaLogo from "@/components/SolanaLogo.vue";
export default defineComponent({
  components: { SolanaLogo },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.main {
  @apply h-screen w-screen mx-auto flex flex-col justify-center align-middle text-center;
  position: fixed;
}
</style>
