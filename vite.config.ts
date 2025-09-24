import { defineConfig, type Alias, type AliasOptions } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from '@tailwindcss/vite'

import path from "path";
import { readdirSync } from 'node:fs';

const DEFAULT_CONFIG = {
    sysPathAddons: 'src/addons'
};

const DEFAULT_ALIAS:Alias[] = [
    { find: '@addons', replacement: path.resolve(path.dirname('/'), "src/addons") },
    { find: '@laraddon', replacement: path.resolve(path.dirname('/'), 'src') }
];

function aliasLaraModule(): Alias[] {
    const dirs = readdirSync(DEFAULT_CONFIG.sysPathAddons);
    return dirs.reduce<Alias[]>((result, name) => {
        const fullPath = path.join(DEFAULT_CONFIG.sysPathAddons, name);
        result.push({ find: name, replacement: path.resolve(path.dirname('/'), fullPath) });
        return result;
    }, DEFAULT_ALIAS);
}

export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
    ],
    resolve: {
        alias: aliasLaraModule(),
        extensions: ['.js', '.ts', '.vue']
    },
});