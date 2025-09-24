import type { Component } from "vue";
import type { RouteRecordNameGeneric } from "vue-router";

export default interface RouteType {
    name: string|RouteRecordNameGeneric|null,
    path: string,
    icon?: Component|null,
}