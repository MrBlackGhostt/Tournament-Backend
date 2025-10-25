import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "info", "warn", "error"]
        : ["error"],
  });

if (process.env.NODE_ENV === "production") {
  globalForPrisma.prisma = prisma;
}

/* 
 globalForPrisma.prisma ?? new PrismaClient(...) : This means if  globalForPrisma.prisma  is already defined (not null or undefined), use it; otherwise, create a new instance of  PrismaClient . The  ??  is called the nullish coalescing operator.
	•	This mechanism helps implement the singleton pattern to avoid creating multiple PrismaClient instances, especially in development with hot-reloading.
	•	The  log  property sets which logging levels Prisma should output:
	•	In development, it logs all queries, info, warnings, and errors.
	•	In production, it logs only errors, reducing noise and performance impact.
*/
