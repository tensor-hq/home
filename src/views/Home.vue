<template>
  <div class="main">
    <div class="flex justify-center flex-col">
      <div class="flex justify-center">
        <img src="@/assets/tensor.png" :width="80" :height="80" />
      </div>
      <h1 class="text-2xl my-3 tracking-widest">TENSOR</h1>
    </div>
    <div class="flex justify-center">
      <p class="mr-2">NFT pricing protocol on Solana</p>
      <SolanaLogo class="mt-1" />
    </div>
    <a href="https://github.com/tensor-hq" target="_blank" class="text-blue-400"
      >Contact</a
    >
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
  @apply h-screen w-screen mx-auto flex flex-col justify-center align-middle text-center bg-black text-white;
  position: fixed;
}
</style>
