import { expect, test } from '@fixture/global-fixture';
import {
  addOrderData,
  toBeDeletedOrderData,
  toBeRetrievedOrderData,
} from '../../../src/data/store-data';

test.describe(
  'PetStore Store API testing',
  { tag: ['@regression', '@store'] },
  () => {
    test.beforeEach(async ({ api }) => {
      await api.init();
    });
    test.afterEach(async ({ api }) => {
      await api.close();
    });

    test('POST place an order for a pet', async ({ api }) => {
      const response = await api.post(
        `/${process.env.API_VERSION}/store/order`,
        addOrderData,
      );

      expect(response?.status()).toBe(200);

      const responseBody = await response?.json();
      expect(responseBody).toHaveProperty('id');
      expect(responseBody.status).toBe(addOrderData.status);
    });

    test('GET retrieve a specific order by id', async ({ api }) => {
      await api.post(
        `/${process.env.API_VERSION}/store/order`,
        toBeRetrievedOrderData,
      );

      const response = await api.get(
        `/${process.env.API_VERSION}/store/order/${toBeRetrievedOrderData.id}`,
      );

      expect(response?.status()).toBe(200);

      const responseBody = await response?.json();
      expect(responseBody).toHaveProperty('id');
      expect(responseBody.status).toBe(toBeRetrievedOrderData.status);
    });

    test('GET retrieve store inventory', async ({ api }) => {
      const response = await api.get(
        `/${process.env.API_VERSION}/store/inventory`,
      );

      expect(response?.status()).toBe(200);
      const responseBody = await response?.json();
      expect(responseBody).not.toBeNull();
      expect(Object.keys(responseBody).length).toBeGreaterThan(0);
    });

    test('DELETE remove a purchase order by id', async ({ api }) => {
      // add the order to be deleted later in the test
      await api.post(
        `/${process.env.API_VERSION}/store/order`,
        toBeDeletedOrderData,
      );

      const response = await api.delete(
        `/${process.env.API_VERSION}/store/order/${toBeDeletedOrderData.id}`,
      );

      expect(response?.status()).toBe(200);

      const responseBody = await response?.json();
      expect(responseBody.message).toContain(
        toBeDeletedOrderData.id.toString(),
      );
    });
  },
);
