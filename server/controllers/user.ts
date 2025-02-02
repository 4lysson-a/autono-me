import type { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { prisma } from "../prisma";

export const handleCreateTestUser = async (req: Request, res: Response) => {
  await prisma.user.create({
    data: {
      id: uuidv4(),
      email: "teste@example.com",
      name: "Usuário Teste",
      password: "senha123",
    },
  });
};

export const handleCreateUser = async (req: Request, res: Response) => {
  const { email, name, password } = req.body;

  const user = await prisma.user.create({
    data: {
      id: uuidv4(),
      name,
      email,
      password,
    },
  });

  res.json(user);
};

export const handleGetUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

export const handleGetUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  res.json(user);
};

export const handleUpdateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, name, password } = req.body;

  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
      email,
      password,
    },
  });

  res.json(user);
};

export const handleDeleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  await prisma.user.delete({
    where: {
      id,
    },
  });

  res.json({ message: "Usuário deletado com sucesso" });
};
