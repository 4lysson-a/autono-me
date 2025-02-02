import express from "express";
import cors from "cors";

import {
  handleCreateTransaction,
  handleDeleteTransaction,
  handleGetTransactions,
  handleGetTransactionsById,
  handleUpdateTransaction,
} from "./controllers/transaction.js";
import { handleCreateUser, handleDeleteUser, handleGetUserById, handleGetUsers, handleUpdateUser } from "./controllers/user.js";
import { handleCreateBusiness, handleDeleteBusiness, handleGetBusiness, handleGetBusinessById, handleUpdateBusiness } from "./controllers/business.js";

const app = express();
const port = 8000;

// Configuração do CORS para permitir apenas requisições da porta 5432
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Middleware para parsing de JSON
app.use(express.json());

// Definição das rotas
app.get("/transactions", handleGetTransactions);
app.get("/transactions/:id", handleGetTransactionsById);
app.post("/transactions", handleCreateTransaction);
app.put("/transactions/:id", handleUpdateTransaction);
app.delete("/transactions/:id", handleDeleteTransaction);
// rota para criar usuários
app.post("/users", handleCreateUser);
app.get("/users", handleGetUsers);
app.put("/users/:id", handleUpdateUser);
app.delete("/users/:id", handleDeleteUser);
app.get("/users/:id", handleGetUserById);

// rotas para business
app.get("/business", handleGetBusiness);
app.get("/business/:id", handleGetBusinessById);
app.post("/business", handleCreateBusiness);
app.put("/business/:id", handleUpdateBusiness);
app.delete("/business/:id", handleDeleteBusiness);

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
