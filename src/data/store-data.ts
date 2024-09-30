import { generateId } from '@utils/data-utils';

export type StoreOrder = {
  id: number;
  petId: number;
  quantity: number;
  shipDate: string;
  status: string;
  complete: boolean;
};

export const addOrderData: StoreOrder = {
  id: generateId(5),
  petId: 0,
  quantity: 1,
  shipDate: '2021-09-01T00:00:00.000Z',
  status: 'placed',
  complete: false,
};

export const toBeRetrievedOrderData: StoreOrder = {
  id: 1228,
  petId: 0,
  quantity: 1,
  shipDate: '2021-09-01T00:00:00.000Z',
  status: 'placed',
  complete: false,
};

export const toBeDeletedOrderData: StoreOrder = {
  id: 1278,
  petId: 0,
  quantity: 1,
  shipDate: '2021-09-01T00:00:00.000Z',
  status: 'placed',
  complete: false,
};
