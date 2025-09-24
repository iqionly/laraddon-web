import type { RouteLocationNormalizedLoadedGeneric, RouteRecord } from "vue-router";

export default function findChild(currentRoute: RouteLocationNormalizedLoadedGeneric, routes: RouteRecord[]) {
    // cari definisi current route
    return routes.filter(r => r.path.indexOf(currentRoute.path) == 0 && r.path != currentRoute.path)
}