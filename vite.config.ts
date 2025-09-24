import { defineConfig, type Alias, type AliasOptions } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from '@tailwindcss/vite'

import path from "path";
import { readdirSync } from 'node:fs';

const DEFAULT_CONFIG = {
    sysPathAddons: 'src/addons'
};

const DEFAULT_ALIAS: Alias[] = [
    { find: '@addons', replacement: path.resolve(path.dirname('/'), "src/addons") },
    { find: '@laraddon', replacement: path.resolve(path.dirname('/'), 'src') }
];

function aliasLaraModule(): Alias[] {
    const dirs = readdirSync(DEFAULT_CONFIG.sysPathAddons);
    return dirs.reduce<Alias[]>((result, name) => {
        const fullPath = path.join(DEFAULT_CONFIG.sysPathAddons, '/' + name);
        console.log(fullPath);
        result.push({ find: name, replacement: path.resolve(path.dirname('/'), fullPath) });
        return result;
    }, DEFAULT_ALIAS);
}

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(path.dirname('/'), 'src/index.ts'),
            name: 'laraddon',
            // the proper extensions will be added
            fileName: 'index',
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    plugins: [
        vue(),
        tailwindcss(),
    ],
    resolve: {
        alias: aliasLaraModule(),
        extensions: ['.js', '.ts', '.vue']
    },
});