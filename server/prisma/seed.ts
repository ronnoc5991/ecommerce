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

  const { categories } = await import('./seed/categories.js');
  const { products } = await import('./seed/products.js');
  const { variants } = await import('./seed/variants.js');

  // Use for loop instead of `await Promise.all` for stable insertion order
  for (const data of categories) {
    await prisma.category.create({ data });
  }

  for (const data of products) {
    await prisma.product.create({ data });
  }

  for (const data of variants) {
    await prisma.variant.create({ data });
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
