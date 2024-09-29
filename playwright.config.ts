import { defineConfig } from '@playwright/test';
import { developmentConfig } from './src/config/development.config';
import { productionConfig } from './src/config/production.config';
import { config } from 'dotenv';
import path = require('node:path');
import { info } from './src/utils/logger';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */

const envConfigurationToUse = process.env.AUTO_TARGET || 'development';
info(`Using ${envConfigurationToUse} configuration`);

export default defineConfig(
  envConfigurationToUse === 'development'
    ? developmentConfig
    : productionConfig,
);
