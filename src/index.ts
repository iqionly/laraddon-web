import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index.ts";
import "./styles/tailwind.css";

export function bootApp(el: string | HTMLElement) {
  const app = createApp(App);
  app.use(router);
  app.mount(el);
}
