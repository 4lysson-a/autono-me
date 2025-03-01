import React, { useState } from 'react';

interface Transaction {
  id: number;
  type: 'entrada' | 'saida';
  description: string;
  value: number;
}

interface TransactionInputsProps {
  addTransaction: (transaction: Transaction) => void;
}

const TransactionInputs: React.FC<TransactionInputsProps> = ({ addTransaction }) => {
  const [type, setType] = useState<'entrada' | 'saida'>('entrada');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState<number>(0);

  const handleAddTransaction = () => {
    const newTransaction: Transaction = {
      id: Date.now(),
      type,
      description,
      value,
    };
    addTransaction(newTransaction);
    setDescription('');
    setValue(0);
  };

  return (
    <div>
      <h2>Adicionar Transação</h2>
      <div>
        <label>
          Tipo:
          <select value={type} onChange={(e) => setType(e.target.value as 'entrada' | 'saida')}>
            <option value="entrada">Entrada</option>
            <option value="saida">Saida</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Descrição:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Valor:
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </label>
      </div>
      <button onClick={handleAddTransaction}>Adicionar Transação</button>
    </div>
  );
};

export default TransactionInputs;