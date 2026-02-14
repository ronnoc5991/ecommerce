import { Audience } from 'generated/prisma/enums.js';
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
        audience: Audience.MEN,
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
        audience: Audience.MEN,
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
        audience: Audience.MEN,
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
        audience: Audience.MEN,
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
        audience: Audience.MEN,
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
        audience: Audience.MEN,
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
        audience: Audience.MEN,
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
        audience: Audience.MEN,
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
        audience: Audience.WOMEN,
      },
    },
  },
  {
    color: 'Red',
    price: 2000,
    size: 'M',
    sku: 't-shirt-red-m',
    stock: 0,
    product: {
      connect: {
        name: 'T-Shirt',
        audience: Audience.WOMEN,
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
        audience: Audience.WOMEN,
      },
    },
  },
];
