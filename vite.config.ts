import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@douganderson444/svelte-fillvert': path.resolve('src/lib')
		}
	}
};

export default config;
