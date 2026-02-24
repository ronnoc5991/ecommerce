import { Audience } from 'shared';
import { ProductCreateInput } from 'generated/prisma/models.js';

export const products: Array<ProductCreateInput> = [
  {
    name: 'The T-Shirt',
    audience: Audience.MEN,
    categories: {
      connectOrCreate: {
        create: {
          slug: 't-shirts',
          name: 'T-Shirts',
        },
        where: {
          slug: 't-shirts',
        },
      },
    },
  },
  {
    name: 'The Long Sleeve T-Shirt',
    audience: Audience.MEN,
    categories: {
      connectOrCreate: {
        create: {
          slug: 't-shirts',
          name: 'T-Shirts',
        },
        where: {
          slug: 't-shirts',
        },
      },
    },
  },
  {
    name: 'The Lightweight T-Shirt',
    audience: Audience.MEN,
    categories: {
      connectOrCreate: {
        create: {
          slug: 't-shirts',
          name: 'T-Shirts',
        },
        where: {
          slug: 't-shirts',
        },
      },
    },
  },
  {
    name: 'The Polo',
    audience: Audience.MEN,
    categories: {
      connectOrCreate: {
        create: {
          slug: 't-shirts',
          name: 'T-Shirts',
        },
        where: {
          slug: 't-shirts',
        },
      },
    },
  },
  {
    name: 'The Long Sleeve Polo',
    audience: Audience.MEN,
    categories: {
      connectOrCreate: {
        create: {
          slug: 't-shirts',
          name: 'T-Shirts',
        },
        where: {
          slug: 't-shirts',
        },
      },
    },
  },
  {
    name: 'The Oxford Shirt',
    audience: Audience.MEN,
    categories: {
      connectOrCreate: {
        create: {
          slug: 'shirts-and-overshirts',
          name: 'Shirts & Overshirts',
        },
        where: {
          slug: 'shirts-and-overshirts',
        },
      },
    },
  },
  {
    name: 'The Denim Shirt',
    audience: Audience.MEN,
    categories: {
      connectOrCreate: {
        create: {
          slug: 'shirts-and-overshirts',
          name: 'Shirts & Overshirts',
        },
        where: {
          slug: 'shirts-and-overshirts',
        },
      },
    },
  },
  {
    name: 'The Flannel Shirt',
    audience: Audience.MEN,
    categories: {
      connectOrCreate: {
        create: {
          slug: 'shirts-and-overshirts',
          name: 'Shirts & Overshirts',
        },
        where: {
          slug: 'shirts-and-overshirts',
        },
      },
    },
  },
  {
    name: 'The Wool Overshirt',
    audience: Audience.MEN,
    categories: {
      connectOrCreate: {
        create: {
          slug: 'shirts-and-overshirts',
          name: 'Shirts & Overshirts',
        },
        where: {
          slug: 'shirts-and-overshirts',
        },
      },
    },
  },
  {
    name: 'The Overshirt',
    audience: Audience.MEN,
    categories: {
      connectOrCreate: {
        create: {
          slug: 'shirts-and-overshirts',
          name: 'Shirts & Overshirts',
        },
        where: {
          slug: 'shirts-and-overshirts',
        },
      },
    },
  },
  {
    name: 'The Linen Shirt',
    audience: Audience.MEN,
    categories: {
      connectOrCreate: {
        create: {
          slug: 'shirts-and-overshirts',
          name: 'Shirts & Overshirts',
        },
        where: {
          slug: 'shirts-and-overshirts',
        },
      },
    },
  },
  {
    name: 'Wool Sweater',
    audience: Audience.WOMEN,
    categories: {
      connectOrCreate: {
        create: {
          slug: 'sweaters',
          name: 'Sweaters',
        },
        where: {
          slug: 'sweaters',
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
          slug: 't-shirts',
          name: 'T-Shirts',
        },
        where: {
          slug: 't-shirts',
        },
      },
    },
  },
];
