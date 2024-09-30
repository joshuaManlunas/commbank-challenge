import { generateId } from '@utils/data-utils';

export type PetData = {
  id: number;
  category: {
    id: number;
    name: string;
  };
  name: string;
  photoUrls: string[];
  tags: {
    id: number;
    name: string;
  }[];
  status: string;
};

export const addPetData: PetData = {
  id: generateId(5),
  category: {
    id: 0,
    name: 'Super hero animals',
  },
  name: 'Super doggie ' + generateId(5),
  photoUrls: [
    'https://www.pexels.com/photo/adult-chocolate-labrador-retriever-lying-on-brown-and-white-striped-textile-544269/',
  ],
  tags: [
    {
      id: 0,
      name: 'string',
    },
  ],
  status: 'available',
};

// An update object for the pet for pet updates
export const updatePetData: PetData = {
  id: 9999999999999,
  category: {
    id: 0,
    name: 'birdie',
  },
  name: 'Pirate Parrot UPDATED ' + generateId(3),
  photoUrls: [
    'https://www.pexels.com/photo/adult-chocolate-labrador-retriever-lying-on-brown-and-white-striped-textile-544269/',
  ],
  tags: [
    {
      id: 0,
      name: 'string',
    },
  ],
  status: 'available',
};

export const toBeDeletedPetData: PetData = {
  id: 5555555555,
  category: {
    id: 9,
    name: 'Rambo',
  },
  name: 'Dread Parrot Roberts',
  photoUrls: [
    'Bacon ipsum dolor amet brisket shank chislic salami pork spare ribs. Spare ribs hamburger',
  ],
  tags: [
    {
      id: 0,
      name: 'tag 9',
    },
  ],
  status: 'available',
};
