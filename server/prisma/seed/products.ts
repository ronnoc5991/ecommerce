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
    variants: {
      create: [
        {
          color: 'White',
          price: 2000,
          size: 'M',
          sku: 't-shirt_white_m',
          stock: 0,
        },
        {
          color: 'Black',
          price: 2000,
          size: 'M',
          sku: 't-shirt_black_m',
          stock: 0,
        },
      ],
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
    variants: {
      create: [
        {
          color: 'Blue',
          price: 12000,
          size: 'M',
          sku: 'jeans_blue_m',
          stock: 0,
        },
        {
          color: 'Black',
          price: 12000,
          size: 'M',
          sku: 'jeans_black_m',
          stock: 0,
        },
        {
          color: 'Grey',
          price: 12000,
          size: 'M',
          sku: 'jeans_grey_m',
          stock: 0,
        },
      ],
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
    variants: {
      create: [
        {
          color: 'Blue',
          price: 9000,
          size: 'M',
          sku: 'bomber_blue_m',
          stock: 0,
        },
        {
          color: 'Black',
          price: 9000,
          size: 'M',
          sku: 'bomber_black_m',
          stock: 0,
        },
        {
          color: 'Red',
          price: 9000,
          size: 'M',
          sku: 'bomber_red_m',
          stock: 0,
        },
      ],
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
    variants: {
      create: {
        color: 'Blue',
        price: 2000,
        size: 'M',
        sku: 'wool-sweater-blue-m',
        stock: 0,
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
    variants: {
      create: {
        color: 'Red',
        price: 2000,
        size: 'M',
        sku: 't-shirt-red-m',
        stock: 0,
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
    variants: {
      create: {
        color: 'Blue',
        price: 2000,
        size: 'M',
        sku: 'cute-pants-blue-m',
        stock: 0,
      },
    },
  },
];
