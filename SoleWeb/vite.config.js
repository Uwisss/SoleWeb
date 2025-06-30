import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    base: '/SoleWeb/',
    plugins: [
        react({
            include: '**/*.jsx',
        })
    ],
    resolve: {
        alias: {
            '@': resolve('resources/js'),
            '~': resolve('resources'),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                },
            },
        },
    },
});
