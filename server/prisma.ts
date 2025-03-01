import { PrismaClient } from "@prisma/client";
import process from "node:process";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

// Garante que o Prisma Client seja instanciado apenas uma vez
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
