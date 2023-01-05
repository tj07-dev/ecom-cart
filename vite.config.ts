/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // add jsdom
    setupFiles: './src/tests/setupTests.ts', // setup includes
    coverage: { // config coverage
      reporter: ['text', 'html'], // generate coverage reports
      exclude: [ // dont test the following files
        'node_modules/',
        'src/tests/setupTests.ts'
      ],
    },
}
}
);
