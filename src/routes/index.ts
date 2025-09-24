import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

// Load all routes.ts under addons
const addonRoutes = import.meta.glob('../addons/**/routes.ts', { eager: true });

// Flatten them into a single array
const routes: RouteRecordRaw[] = [];

for (const path in addonRoutes) {
  const mod = addonRoutes[path] as { routes?: RouteRecordRaw[]; default?: RouteRecordRaw[] };
  if (mod.routes) {
    routes.push(...mod.routes);
  } else if (mod.default) {
    routes.push(...mod.default);
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

export { router, routes };