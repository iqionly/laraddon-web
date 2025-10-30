import { defineConfig, searchForWorkspaceRoot, type Alias } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from '@tailwindcss/vite'

import path from "path";
import { readdirSync } from 'node:fs';

const DEFAULT_CONFIG = {
    sysPathAddons: 'addons'
};

const DEFAULT_ALIAS: Alias[] = [
    { find: '@addons', replacement: path.resolve(__dirname, DEFAULT_CONFIG.sysPathAddons) },
    { find: '@laraddon', replacement: path.resolve(__dirname, 'src') },
    { find: '@laraddon/addons', replacement: path.resolve(__dirname, 'src/addons') }
];

function aliases(): Alias[] {
    const dirs = readdirSync(DEFAULT_CONFIG.sysPathAddons);
    return dirs.reduce<Alias[]>((result, name) => {
        const fullPath = path.join(DEFAULT_CONFIG.sysPathAddons, '/' + name);
        console.log(fullPath);
        result.push({ find: name, replacement: path.resolve(__dirname, fullPath) });
        return result;
    }, DEFAULT_ALIAS);
}

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
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
        alias: aliases(),
        extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    server: {
        fs: {
            allow: [
                searchForWorkspaceRoot(process.cwd()),
            ]
        }
    }
});