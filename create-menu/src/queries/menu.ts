import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createMenu = async (data: { json: string }) => {
  return prisma.menu
    .create({
      data,
    })
    .then(async (res) => {
      await prisma.$disconnect();
      return res;
    })
    .catch(async (err) => {
      console.error(err);
      console.error("failed insert menu");
      await prisma.$disconnect();
    });
};
