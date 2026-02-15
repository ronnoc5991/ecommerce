import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../generated/prisma/client.js';

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

  const { products } = await import('./seed/products.js');

  // Use for loop instead of `await Promise.all` for stable insertion order

  for (const data of products) {
    const product = await prisma.product.create({
      data,
      include: { variants: true },
    });

    await prisma.product.update({
      where: {
        id: product.id,
      },
      data: {
        defaultVariantId: product.variants[0].id,
      },
    });
  }

  console.log('Seeding complete.');
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
