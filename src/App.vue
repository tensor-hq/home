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
  font-family: "tensor";
  src: local("tensor"), url("assets/NEWACADEMY.ttf") format("truetype");
}

h1 {
  font-family: "tensor", monospace;
}
</style>
