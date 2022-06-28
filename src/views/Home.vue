<template>
  <div class="main">
    <!--logo + title-->
    <div class="flex justify-center flex-col">
      <div class="flex justify-center">
        <svg
          width="100px"
          height="100px"
          viewBox="0 0 1263 1280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M552.5 144 55 643h217.5L409 506.5V992l143.5 143.5V144ZM712 144l497.5 499H992L855.5 506.5V992L712 1135.5V144Z"
            fill="white"
          />
        </svg>
      </div>
      <h1 class="text-4xl my-5 tracking-widest">TENSOR</h1>
    </div>

    <!--decr-->
    <div class="flex justify-center mb-2">
      <h2 class="font-bold">Fastest NFT Trading Platform for Pros</h2>
    </div>
    <div class="flex justify-center mb-5">
      <h2 class="mr-2 text-sm text-gray-400">Built on Solana</h2>
      <SolanaLogo class="mt-1" />
    </div>

    <!--CTA-->
    <div>
      <a href="https://yklk3kdi3bq.typeform.com/to/OXfmDKBw" target="_blank"
        ><button class="m-2 p-1 px-5 bg-cyan text-black font-bold">
          CLOSED BETA
        </button>
      </a>
    </div>

    <!--bottom links-->
    <div class="flex justify-center align-middle">
      <div class="text-xs absolute bottom-5">
        <a
          href="https://github.com/tensor-hq"
          target="_blank"
          class="text-blue-400 m-2"
          >GITHUB 🛠</a
        >
        <a
          href="https://discord.com/invite/a8spfqxEpC"
          target="_blank"
          class="text-blue-400 m-2"
          >DISCORD 💬</a
        >
        <a
          href="https://twitter.com/tensor_hq"
          target="_blank"
          class="text-blue-400 m-2"
          >TWITTER 🐦</a
        >
        <a
          href="https://solana.com/news/riptide-hackathon-winners-solana"
          target="_blank"
          class="text-blue-400 m-2"
          >PRESS 🗞</a
        >
        <a
          href="https://docs.tensor.so/"
          target="_blank"
          class="text-blue-400 m-2"
          >V1 DOCS 📃</a
        >
      </div>
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
