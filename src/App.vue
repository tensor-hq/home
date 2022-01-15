<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style>
body {
  height: 100vh;
}
@font-face {
  font-family: "mandalore";
  src: local("mandalore"), url("assets/Mandalore.otf") format("truetype");
}

h1 {
  font-family: "mandalore", monospace;
}
</style>
