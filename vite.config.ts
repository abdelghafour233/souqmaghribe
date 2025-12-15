import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    base: './', // This ensures assets are linked relatively (fixes blank page on sub-paths)
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});