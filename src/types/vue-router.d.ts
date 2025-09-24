import type { Component } from 'vue';
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /** Unique ID for this route (for addons, menu, etc.) */
    id?: string

    /** icon for showing in RouterLink Navigation */
    icon?: Component,

    /** Indexing route */
    index: number,
    
    /** Custom flags */
    isAdmin?: boolean
    requiresAuth?: boolean
  }
}