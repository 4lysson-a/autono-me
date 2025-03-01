import { useTransaction } from "@/context/transaction";

export const TransactionInput = () => {
  const { setTransactions } = useTransaction();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      amount: formData.get("amount") as string,
      type: formData.get("type") as "income" | "expense",
      description: formData.get("description") as string,
    };

    setTransactions((prev) => [
      ...prev,
      {
        date: new Date().toLocaleDateString(),
        description: data.description,
        amount: data.amount,
        type: data.type,
      },
    ]);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1 border-b pb-4">
        <label htmlFor="type">Tipo</label>
        <select name="type" id="type">
          <option value="income">Entrada</option>
          <option value="expense">Saída</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="title">Description</label>
        <input
          className="border p-2 rounded-lg"
          type="text"
          name="description"
          id="description"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="amount">Amount</label>
        <input
          className="border p-2 rounded-lg"
          type="text"
          name="amount"
          id="amount"
        />
      </div>

      <button className="w-full bg-ui-highlight text-white" type="submit">
        Add Transaction
      </button>
    </form>
  );
};
