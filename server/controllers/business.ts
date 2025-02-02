import type { Request, Response } from "express";
import { prisma } from "../prisma.ts";

export const handleGetBusiness = async (req: Request, res: Response) => {
  try {
    const business = await prisma.business.findMany();
    res.json(business);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar transações" });
  }
};

export const handleGetBusinessById = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const business = await prisma.business.findUnique({
    where: {
      id,
    },
  });

  res.json(business);
};

export const handleCreateBusiness = async (
  req: Request,
  res: Response
) => {
  const { name, description, userId } = req.body;

  const business = await prisma.business.create({
    data: {
      name,
      description,
      userId,
    },
  });

  res.json(business);
};

export const handleUpdateBusiness = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const { name, description, userId } = req.body;

  const business = await prisma.business.update({
    where: {
      id,
    },
    data: {
      name,
      description,
      userId,
    },
  });

  res.json(business);
};

export const handleDeleteBusiness = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  await prisma.business.delete({
    where: {
      id,
    },
  });

  res.json({ message: "Transação deletada" });
};
