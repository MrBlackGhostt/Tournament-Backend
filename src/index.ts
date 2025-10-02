import { PrismaClient } from "./generated/prisma/client.js";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      username: "Test",
      password: "Test",
      email: "test@test.com",
    },
  });
}
main();
