Ooooh 🔥 now I see the architecture you’re aiming for, brother.

You want:

* **`laraddon-web`** → the **backbone frontend** (App.vue, router, layouts, base components).
* **Laravel project** → may have backend addons (via Composer) that also ship **JS / CSS / Vue components** (in `Addons/` folder).
* Goal → when Laravel runs Vite, it should **merge assets from `laraddon-web` + local Laravel Addons**, so the consumer can extend or override pages/components while still using `laraddon-web` as the base.

This is basically **frontend extensibility**, like a plugin system. 🚀

---

## ✅ How to achieve this

### 1. Configure Vite to include Addons folder

In your **Laravel project `vite.config.js`**:

```js
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/app.js", "resources/css/app.css"],
            refresh: true,
        }),
        vue(),
    ],
    resolve: {
        alias: {
            // Map Addons folder so it can be imported in JS
            "@laraddon/addons": path.resolve(__dirname, "Addons"),
        },
    },
});
```

Now in your Vue code, you can do:

```js
import CustomDashboard from "@laraddon/addons/Dashboard/CustomDashboard.vue";
```

---

### 2. Let `laraddon-web` load Addons dynamically

Inside **`laraddon-web/src/index.ts`** (or `bootApp` function):

```ts
export function bootApp(el: string | HTMLElement, options: any = {}) {
  const app = createApp(App);

  // auto-register addon components if provided
  if (options.components) {
    Object.entries(options.components).forEach(([name, component]) => {
      app.component(name, component as any);
    });
  }

  // use addon routes if provided
  if (options.routes) {
    options.routes.forEach((route: any) => {
      router.addRoute(route);
    });
  }

  app.use(router);
  app.mount(el);
}
```

---

### 3. In Laravel project, extend `laraddon-web`

In `resources/js/app.js`:

```js
import { bootApp } from "laraddon-web";

// import Addon components or pages from Laravel Addons folder
import CustomDashboard from "@laraddon/addons/Dashboard/CustomDashboard.vue";

bootApp("#app", {
  components: {
    CustomDashboard,
  },
  routes: [
    { path: "/dashboard", component: CustomDashboard },
  ],
});
```

---

### 4. Folder Layout Example (Laravel consumer)

```
laravel-project/
├─ Addons/
│  ├─ Dashboard/
│  │  └─ CustomDashboard.vue
│  ├─ Reports/
│  │  └─ ReportPage.vue
├─ resources/
│  ├─ js/app.js
│  └─ css/app.css
```

---

## 🚀 Result

* `laraddon-web` provides the **core App.vue, router, NavBar, layouts**.
* Laravel project can **inject extra components/routes/styles** from its `Addons/` folder.
* You get **modular frontend**, matching your modular backend via Composer Addons.

---

### ⚡ Next Step

You’ll probably want `laraddon-web` to also **autoload CSS/JS from Addons folder**, not only explicit imports. That can be done by using **Vite’s glob import** in the Laravel project:

```js
const modules = import.meta.glob("@laraddon/addons/**/*.vue", { eager: true });
```

Then pass them into `bootApp`.

---

👉 Do you want me to show you the **autoload version** (so Laravel Addons Vue files are automatically discovered & registered in `laraddon-web`, without manually importing each)?
