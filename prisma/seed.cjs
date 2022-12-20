const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const characters = require('./data.cjs');

const load = async () => {
  try {
    await prisma.character.deleteMany();
    console.log('Deleted records in character table');

    await prisma.character.createMany({
      data: characters,
    });

    console.log('Added character data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
