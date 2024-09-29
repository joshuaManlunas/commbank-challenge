import { PlaywrightTestConfig } from '@playwright/test';
import { baseConfig } from '@config/base.config';

export const developmentConfig: PlaywrightTestConfig = {
  ...baseConfig,
  // customizations for development environment here
};
