import { Audience } from 'shared';
import { ProductCreateInput } from 'generated/prisma/models.js';

export const products: Array<ProductCreateInput> = [
  {
    name: 'T-Shirt',
    audience: Audience.MEN,
    categories: {
      connect: {
        name: 'Shirts',
      },
    },
  },
  {
    name: 'Jeans',
    audience: Audience.MEN,
    categories: {
      connect: {
        name: 'Pants',
      },
    },
  },
  {
    name: 'Bomber',
    audience: Audience.MEN,
    categories: {
      connect: {
        name: 'Jackets',
      },
    },
  },
];
