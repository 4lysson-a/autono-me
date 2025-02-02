import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

export const handleGet = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
}
