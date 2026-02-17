import { Audience } from 'shared';
import { ProductCreateInput } from 'generated/prisma/models.js';

export const products: Array<ProductCreateInput> = [
  {
    name: 'The T-Shirt',
    audience: Audience.MEN,
    categories: {
      connectOrCreate: {
        create: {
          name: 'T-Shirts',
        },
        where: {
          name: 'T-Shirts',
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
          name: 'T-Shirts',
        },
        where: {
          name: 'T-Shirts',
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
          name: 'T-Shirts',
        },
        where: {
          name: 'T-Shirts',
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
          name: 'T-Shirts',
        },
        where: {
          name: 'T-Shirts',
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
          name: 'T-Shirts',
        },
        where: {
          name: 'T-Shirts',
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
          name: 'Shirts & Overshirts',
        },
        where: {
          name: 'Shirts & Overshirts',
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
          name: 'Shirts & Overshirts',
        },
        where: {
          name: 'Shirts & Overshirts',
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
          name: 'Shirts & Overshirts',
        },
        where: {
          name: 'Shirts & Overshirts',
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
          name: 'Shirts & Overshirts',
        },
        where: {
          name: 'Shirts & Overshirts',
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
          name: 'Shirts & Overshirts',
        },
        where: {
          name: 'Shirts & Overshirts',
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
          name: 'Shirts & Overshirts',
        },
        where: {
          name: 'Shirts & Overshirts',
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
          name: 'T-Shirts',
        },
        where: {
          name: 'T-Shirts',
        },
      },
    },
  },
];
