import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'AccessibilityFold',
            fileName: (format) => `accessibility-fold.${format}.js`,
        },
        rollupOptions: {
            // Externalize deps that shouldn't be bundled
            external: [],
            output: {
                // Global variable name for UMD build
                globals: {},
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') return 'accessibility-fold.css';
                    return assetInfo.name;
                },
            },
        },
        emptyOutDir: true,
    },
    server: {
        open: '/index.html',
    },
});
