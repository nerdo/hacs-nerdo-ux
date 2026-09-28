import { defineConfig, devices } from '@playwright/test';

const PORT = 4173;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'retain-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    // The fixture loads the built bundle, so every run tests the file HACS ships.
    command: `pnpm run build && python3 -m http.server ${PORT}`,
    url: `http://localhost:${PORT}/e2e/fixture.html`,
    reuseExistingServer: !process.env.CI,
  },
});
