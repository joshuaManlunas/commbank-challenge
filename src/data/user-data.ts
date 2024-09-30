import { generateId } from '@utils/data-utils';

export type User = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  userStatus: number;
};

export const addUserData: User = {
  id: generateId(5),
  username: 'jomans',
  firstName: 'jomans',
  lastName: 'choy',
  email: 'test@testing.com',
  password: 'secretPassword123',
  phone: '0275534576',
  userStatus: 0,
};

export const updateUserData: User = {
  id: generateId(5),
  username: 'darth-coder',
  firstName: 'jomans',
  lastName: 'choy',
  email: 'test@testing.com',
  password: 'secretPassword123',
  phone: '0275534576',
  userStatus: 0,
};
