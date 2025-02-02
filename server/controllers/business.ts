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
) => { };

export const handleCreateBusiness = async (
  req: Request,
  res: Response
) => { };

export const handleUpdateBusiness = async (
  req: Request,
  res: Response
) => { };

export const handleDeleteBusiness = async (
  req: Request,
  res: Response
) => { };
