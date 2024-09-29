import { test as base } from '@playwright/test';
import { ApiHandler } from '@core/api-handler';

type TestResources = {
  api: ApiHandler;
};

export const test = base.extend<TestResources>({
  api: async ({ page }, use) => {
    const api = new ApiHandler(page);
    await use(api);
  },
});

export { expect } from '@playwright/test';
