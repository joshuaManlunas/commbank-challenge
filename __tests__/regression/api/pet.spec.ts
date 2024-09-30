import { expect, test } from '@fixture/global-fixture';
import { addPetData, toBeDeletedPetData, updatePetData } from '@data/pet-data';

test.describe('Pet Store API testing', { tag: ['@regression', '@pet'] }, () => {
  test.beforeEach(async ({ api }) => {
    await api.init();
  });
  test.afterEach(async ({ api }) => {
    await api.close();
  });

  test('POST add pet to store', async ({ api }) => {
    const response = await api.post(
      `/${process.env.API_VERSION}/pet`,
      addPetData,
    );

    expect(response?.status()).toBe(200);

    const responseBody = await response?.json();
    expect(responseBody).toHaveProperty('id');
    expect(responseBody.name).toBe(addPetData.name);
    expect(responseBody.status).toBe(addPetData.status);
  });

  test('GET get pet by id', async ({ api }) => {
    // add the pet to be retrieved later in the test
    await api.post(`/${process.env.API_VERSION}/pet`, addPetData);

    const response = await api.get(
      `/${process.env.API_VERSION}/pet/${addPetData.id}`,
    );

    expect(response?.status()).toBe(200);

    const responseBody = await response?.json();
    expect(responseBody).toHaveProperty('id');
    expect(responseBody.name).toBe(addPetData.name);
    expect(responseBody.status).toBe(addPetData.status);
  });

  test('PUT update pet in store', async ({ api }) => {
    const response = await api.put(
      `/${process.env.API_VERSION}/pet`,
      updatePetData,
    );

    expect(response?.status()).toBe(200);

    const responseBody = await response?.json();
    expect(responseBody).toHaveProperty('id');
    expect(responseBody.name).toContain('UPDATED');
    expect(responseBody.status).toBe(updatePetData.status);
  });

  test('DELETE remove a pet from the store', async ({ api }) => {
    // add the pet to be deleted later in the test
    const addResponse = await api.post(
      `/${process.env.API_VERSION}/pet`,
      toBeDeletedPetData,
    );
    const addResponseBody = await addResponse?.json();

    const response = await api.delete(
      `/${process.env.API_VERSION}/pet/${addResponseBody.id}`,
    );

    expect(response?.status()).toBe(200);

    const responseBody = await response?.json();
    expect(responseBody).toHaveProperty('code');
    expect(responseBody.message).toContain(addResponseBody.id.toString());
  });
});
