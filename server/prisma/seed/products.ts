import { Audience } from 'shared';
import { ProductCreateInput } from 'generated/prisma/models.js';

export const products: Array<ProductCreateInput> = [
  {
    name: 'T-Shirt',
    audience: Audience.MEN,
    categories: {
      connectOrCreate: {
        create: {
          name: 'Shirts',
        },
        where: {
          name: 'Shirts',
        },
      },
    },
  },
  {
    name: 'Jeans',
    audience: Audience.MEN,
    categories: {
      connectOrCreate: {
        create: {
          name: 'Pants',
        },
        where: {
          name: 'Pants',
        },
      },
    },
  },
  {
    name: 'Bomber',
    audience: Audience.MEN,
    categories: {
      connectOrCreate: {
        create: {
          name: 'Jackets',
        },
        where: {
          name: 'Jackets',
        },
      },
    },
  },
  {
    name: 'Wool Sweater',
    audience: Audience.WOMEN,
    categories: {
      connectOrCreate: {
        where: {
          name: 'Sweaters',
        },
        create: {
          name: 'Sweaters',
        },
      },
    },
  },
  {
    name: 'T-Shirt',
    audience: Audience.WOMEN,
    categories: {
      connectOrCreate: {
        create: {
          name: 'Shirts',
        },
        where: {
          name: 'Shirts',
        },
      },
    },
  },
  {
    name: 'Cute Pants',
    audience: Audience.WOMEN,
    categories: {
      connectOrCreate: {
        create: {
          name: 'Pants',
        },
        where: {
          name: 'Pants',
        },
      },
    },
  },
];
