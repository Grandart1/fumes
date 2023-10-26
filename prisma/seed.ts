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

  await prisma.game.create({
    data: {
      title: "Dungeon Defenders",
      achievements: {
        createMany: {
          data: [
            {
              title: "Good Student",
            },
            {
              title: "Smithy",
            },
          ],
        },
      },
    },
  });

  await prisma.game.create({
    data: {
      title: "Tales of Maj'eyal",
      achievements: {
        createMany: {
          data: [
            {
              title: "RICH",
            },
            {
              title: "REACH LEVEL 10",
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
