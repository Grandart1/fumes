import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.game.create({
    data: {
      title: "TEKKEN 7",
      achievements: {
        createMany: {
          data: [
            {
              title: "There's Nowhere To Run! Give Up!",
            },
            {
              title: "Elegance At It's Purest",
            },
          ],
        },
      },
    },
  });
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
