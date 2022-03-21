import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import VueGtag from "vue-gtag";

createApp(App)
  .use(router)
  .use(VueGtag, {
    config: { id: "G-CQ7WDVCZ2D" },
  })
  .mount("#app");
