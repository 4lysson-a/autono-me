import type { Request, Response } from "express";
import { prisma } from "../prisma.ts";

export const handleGetTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await prisma.transaction.findMany();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar transações" });
  }
};

export const handleGetTransactionsById = async (
  req: Request,
  res: Response
) => { };

export const handleCreateTransaction = async (
  req: Request,
  res: Response
) => { };

export const handleUpdateTransaction = async (
  req: Request,
  res: Response
) => { };

export const handleDeleteTransaction = async (
  req: Request,
  res: Response
) => { };
