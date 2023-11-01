// vite.config.js
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react-swc';
import { readdirSync } from 'fs';
import path from 'path';

const absolutePathAliases: Record<string, string> = {};
// Root resources folder
const srcPath = path.resolve('./src/');
// Adjust the regex here to include .vue, .js, .jsx, etc.. files from the resources/ folder
const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map(
	dirent => dirent.name.replace(/(\.ts){1}(x?)/, ''),
);

srcRootContent.forEach(directory => {
	absolutePathAliases[directory] = path.join(srcPath, directory);
});

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	publicDir: 'assets',
	resolve: {
		alias: absolutePathAliases,
	},
	build: {
		chunkSizeWarningLimit: 600,
		rollupOptions: {
			output: {
				manualChunks: id => {
					if (id.includes('node_modules'))
						return id
							.toString()
							.split('node_modules/')[1]
							.split('/')[0]
							.toString();
					return 'vendor';
				},
			},
		},
	},
});
