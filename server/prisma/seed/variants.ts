import { VariantCreateInput } from 'generated/prisma/models.js';

export const variants: Array<VariantCreateInput> = [
  {
    color: 'Blue',
    price: 12000,
    size: 'M',
    sku: 'jeans_blue_m',
    stock: 0,
    product: {
      connect: {
        name: 'Jeans',
      },
    },
  },
  {
    color: 'Black',
    price: 12000,
    size: 'M',
    sku: 'jeans_black_m',
    stock: 0,
    product: {
      connect: {
        name: 'Jeans',
      },
    },
  },
  {
    color: 'Grey',
    price: 12000,
    size: 'M',
    sku: 'jeans_grey_m',
    stock: 0,
    product: {
      connect: {
        name: 'Jeans',
      },
    },
  },
  {
    color: 'Blue',
    price: 9000,
    size: 'M',
    sku: 'bomber_blue_m',
    stock: 0,
    product: {
      connect: {
        name: 'Bomber',
      },
    },
  },
  {
    color: 'Black',
    price: 9000,
    size: 'M',
    sku: 'bomber_black_m',
    stock: 0,
    product: {
      connect: {
        name: 'Bomber',
      },
    },
  },
  {
    color: 'Red',
    price: 9000,
    size: 'M',
    sku: 'bomber_red_m',
    stock: 0,
    product: {
      connect: {
        name: 'Bomber',
      },
    },
  },
  {
    color: 'White',
    price: 2000,
    size: 'M',
    sku: 't-shirt_white_m',
    stock: 0,
    product: {
      connect: {
        name: 'T-Shirt',
      },
    },
  },
  {
    color: 'Black',
    price: 2000,
    size: 'M',
    sku: 't-shirt_black_m',
    stock: 0,
    product: {
      connect: {
        name: 'T-Shirt',
      },
    },
  },
  {
    color: 'Blue',
    price: 2000,
    size: 'M',
    sku: 'wool-sweater-blue-m',
    stock: 0,
    product: {
      connect: {
        name: 'Wool Sweater',
      },
    },
  },
  {
    color: 'Red',
    price: 2000,
    size: 'M',
    sku: 'cute-top-red-m',
    stock: 0,
    product: {
      connect: {
        name: 'Cute Top',
      },
    },
  },
  {
    color: 'Blue',
    price: 2000,
    size: 'M',
    sku: 'cute-pants-blue-m',
    stock: 0,
    product: {
      connect: {
        name: 'Cute Pants',
      },
    },
  },
];
