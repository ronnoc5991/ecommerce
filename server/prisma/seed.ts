import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { Color, PrismaClient } from '../generated/prisma/client.js';
import { ProductVariant } from 'generated/prisma/browser.js';

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
  allowPublicKeyRetrieval: true,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding database...');

  const { colors } = await import('./seed/colors.js');
  const { products } = await import('./seed/products.js');

  // Use for loop instead of `await Promise.all` for stable insertion order

  const createdColors: Array<Color> = [];

  for (const data of colors) {
    const color = await prisma.color.create({
      data,
    });

    createdColors.push(color);
  }

  const sizes = ['s', 'm', 'l'];

  for (const data of products) {
    const product = await prisma.product.create({
      data,
    });

    const createdVariants: Array<ProductVariant> = [];

    for (const color of createdColors) {
      for (const size of sizes) {
        const variant = await prisma.productVariant.create({
          data: {
            priceCents: 10000,
            size,
            sku: [
              product.audience.toLowerCase(),
              product.name.split(' ').join('-').toLowerCase(),
              color.slug.toLowerCase(),
              size.toLowerCase(),
            ].join('-'),
            stock: 100,
            colorId: color.id,
            productId: product.id,
          },
        });

        createdVariants.push(variant);
      }

      await prisma.product.update({
        data: {
          defaultVariantId: createdVariants[0].id,
        },
        where: {
          id: product.id,
        },
      });
    }

    console.log('Seeding complete.');
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
