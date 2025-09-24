import { ref, type Ref } from "vue";
import type { RouteLocation, RouteRecord } from "vue-router";
import type RouteType from "../types/RouteType.ts";

const listData: Ref<Array<RouteType>> = ref([]);

export default function RouteTyping(currentRoute: RouteLocation, routes: RouteRecord[])
{
    listData.value = [];
    routes.map((item) => {
        if (item.path == currentRoute.fullPath) {
            return;
        }

        let newRoute: RouteType = {
            icon: item.meta.icon,
            name: item.children[0]?.name,
            path: item.path
        }

        listData.value.push(newRoute);
    });

    

    listData.value.push({
        icon: listData.value.length == 0 ? currentRoute.meta.icon : null,
        name: currentRoute.name,
        path: currentRoute.path
    });
}

export { RouteTyping, listData }