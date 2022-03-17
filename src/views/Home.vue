<template>
  <div class="main">
    <div class="flex justify-center flex-col">
      <div class="flex justify-center">
        <img src="@/assets/tensor.png" :width="120" :height="120" />
      </div>
      <h1 class="text-3xl my-3 tracking-widest">TENSOR</h1>
    </div>
    <div class="flex justify-center mb-10">
      <p class="mr-2">NFT Pricing Protocol on Solana</p>
      <SolanaLogo class="mt-1" />
    </div>
    <div>
      <a href="https://docs.tensor.so/" target="_blank"
        ><button class="m-2 p-1 px-5 text-xl bg-cyan text-black">
          Docs
        </button></a
      >
      <!--todo add video link from hackathon-->
      <a href="#" target="_blank"
        ><button class="m-2 p-1 px-5 text-xl bg-cyan text-black">
          Video
        </button></a
      >
      <!--todo make https and redirect to public dashboards-->
      <a href="https://charts.tensor.so/" target="_blank"
        ><button class="m-2 p-1 px-5 text-xl bg-cyan text-black">
          Charts
        </button></a
      >
    </div>
    <div class="mt-10">
      <a
        href="https://github.com/tensor-hq"
        target="_blank"
        class="text-blue-400 m-2"
        >Github 🛠</a
      >
      <a
        href="https://discord.com/invite/a8spfqxEpC"
        target="_blank"
        class="text-blue-400 m-2"
        >Discord 💬</a
      >
    </div>
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
