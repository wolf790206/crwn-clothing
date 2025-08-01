import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'), // @ 指向 src 資料夾
			'@components': path.resolve(__dirname, './src/components'),
			'@routers': path.resolve(__dirname, './src/routers'),
			'@assets': path.resolve(__dirname, './src/assets'),
		},
	},
	base: '/crwn-clothing/dist/',
});
