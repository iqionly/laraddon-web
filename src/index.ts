import { createApp } from "vue";
import App from "./App.vue";
import { router, routes } from "./routes/index.ts";

import "./style.css";

export default function bootApp(el: string | HTMLElement, options: any = {}) {
  const app = createApp(App);

  app.provide('routes', routes);

  // auto-register addon components if provided
  // if (options.components) {
  //   Object.entries(options.components).forEach(([name, component]) => {
  //     app.component(name, component as any);
  //   });

  // }

  // use addon routes if provided
  if (options.routes) {
    options.routes.forEach((route: any) => {
      router.addRoute(route);
    });
  }

  app.use(router);
  app.mount(el);
}