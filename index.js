import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const response = await prisma.registro.findMany()

  console.log(response);
}

main();

