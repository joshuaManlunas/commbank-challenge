import { Page } from '@playwright/test';
import { info } from '@utils/logger';

export class ApiHandler {
  constructor(private readonly page: Page) {
    info('ApiHandler initialized');
  }
}
