import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 5000,
  workers: 1,
  reporter: "list",
  use: {
    trace: "on-first-retry",
  },
});
