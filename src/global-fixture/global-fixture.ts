import { request, test as base } from '@playwright/test';
import { ApiHandler } from '@core/api-handler';

type TestResources = {
  api: ApiHandler;
};

export const test = base.extend<TestResources>({
  api: async ({}, use) => {
    const api = new ApiHandler();
    await use(api);
  },
});

export { expect } from '@playwright/test';
