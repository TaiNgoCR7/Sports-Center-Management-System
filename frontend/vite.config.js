import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Import Tailwind v4 plugin
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Thêm plugin tailwindcss vào đây
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Đường dẫn Path Alias @/
    },
  },
});
