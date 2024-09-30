import { expect, test } from '@fixture/global-fixture';
import { addUserData, updateUserData } from '../../../src/data/user-data';

test.describe(
  'PetStore User API testing',
  { tag: ['@regression', '@user'] },
  () => {
    test.beforeEach(async ({ api }) => {
      await api.init();
    });
    test.afterEach(async ({ api }) => {
      await api.close();
    });

    test('POST create user', async ({ api }) => {
      const response = await api.post(
        `/${process.env.API_VERSION}/user`,
        addUserData,
      );

      expect(response?.status()).toBe(200);

      const responseBody = await response?.json();
      expect(responseBody).toHaveProperty('message');
      expect(responseBody.message).toBe(addUserData.id.toString());
    });

    test('GET user by username', async ({ api }) => {
      // add the user to be retrieved later in the test
      await api.post(`/${process.env.API_VERSION}/user`, addUserData);

      const response = await api.get(
        `/${process.env.API_VERSION}/user/${addUserData.username}`,
      );

      expect(response?.status()).toBe(200);

      const responseBody = await response?.json();
      expect(responseBody).toHaveProperty('id');
      expect(responseBody.username).toBe(addUserData.username);
      expect(responseBody.userStatus).toBe(addUserData.userStatus);
    });

    test('PUT update user', async ({ api }) => {
      // add the user to be updated later in the test
      await api.post(`/${process.env.API_VERSION}/user`, updateUserData);

      const response = await api.put(
        `/${process.env.API_VERSION}/user/${updateUserData.username}`,
        { ...updateUserData, userStatus: 5 }, // update the userStatus to 5 from 0
      );

      expect(response?.status()).toBe(200);

      const responseBody = await response?.json();
      expect(responseBody).toHaveProperty('code');
      expect(responseBody.message).toContain(updateUserData.id.toString());
    });
  },
);
