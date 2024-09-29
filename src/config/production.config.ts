import { PlaywrightTestConfig } from '@playwright/test';
import { baseConfig } from '@config/base.config';

export const productionConfig: PlaywrightTestConfig = {
  ...baseConfig,
  // customizations for production environment here
};
