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
  font-family: "jb";
  src: local("jetbrains"),
    url("assets/JetBrainsMono-Regular.ttf") format("truetype");
}
@font-face {
  font-family: "jb-bold";
  src: local("jetbrains-bold"),
    url("assets/JetBrainsMono-Bold.ttf") format("truetype");
}

* {
  font-family: "jb", monospace;
}
</style>
