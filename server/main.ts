import express from "express";
import cors from "cors";

import {
  handleCreateTransaction,
  handleDeleteTransaction,
  handleGetTransactions,
  handleGetTransactionsById,
  handleUpdateTransaction,
} from "./controllers/transaction.js";
import { handleCreateTestUser } from "./controllers/user.js";

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

app.post("/users", handleCreateTestUser);

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
