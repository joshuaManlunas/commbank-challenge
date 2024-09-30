import { APIRequestContext, APIResponse, request } from '@playwright/test';
import { info } from '@utils/logger';

export class ApiHandler {
  private apiContext: APIRequestContext | undefined;
  constructor() {
    info('ApiHandler initialized');
  }

  async init() {
    this.apiContext = await request.newContext({
      baseURL: process.env.BASE_URL || 'https://petstore.swagger.io',
    });
  }

  async get(endpoint: string): Promise<APIResponse | undefined> {
    // Data can also be returned as is and parsed in the test
    return this.apiContext?.get(endpoint);
  }

  async post(
    endpoint: string,
    body: Record<any, any>,
  ): Promise<APIResponse | undefined> {
    return this.apiContext?.post(endpoint, {
      data: body,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async put(
    endpoint: string,
    body: Record<any, any>,
  ): Promise<APIResponse | undefined> {
    return this.apiContext?.put(endpoint, {
      data: body,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async delete(endpoint: string): Promise<APIResponse | undefined> {
    return this.apiContext?.delete(endpoint, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async close(): Promise<void> {
    await this.apiContext?.dispose();
  }
}
