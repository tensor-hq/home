<template>
  <div class="main">
    <div class="flex justify-center flex-col">
      <div class="flex justify-center">
        <img src="@/assets/tensor.png" :width="120" :height="120" />
      </div>
      <h1 class="text-3xl my-3 tracking-widest">TENSOR</h1>
    </div>
    <div class="flex justify-center mb-10">
      <h2 class="mr-2 text-lg font-bold">NFT Pricing Protocol on Solana</h2>
      <SolanaLogo class="mt-1" />
    </div>
    <div>
      <a href="https://docs.tensor.so/" target="_blank"
        ><button class="m-2 p-1 px-5 text-xl bg-cyan text-black font-bold">
          Docs
        </button>
      </a>
      <a href="https://youtu.be/eT-jRWKdLp4" target="_blank"
        ><button class="m-2 p-1 px-5 text-xl bg-cyan text-black font-bold">
          Video
        </button>
      </a>
      <a href="/charts"
        ><button class="m-2 p-1 px-5 text-xl bg-cyan text-black font-bold">
          Charts
        </button>
      </a>

      <a href="/apps"
        ><button class="m-2 p-1 px-5 text-xl bg-cyan text-black font-bold">
          Apps
        </button>
      </a>
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
      <a
        href="https://twitter.com/tensor_hq"
        target="_blank"
        class="text-blue-400 m-2"
        >Twitter 🐦</a
      >
    </div>
    <div class="mt-10">
      <a
        href="https://forms.gle/3mWZruPdqmeasduv5"
        target="_blank"
        class="text-blue-400 font-bold underline"
      >
        Looking for NFT data & analytics API access?
      </a>
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
