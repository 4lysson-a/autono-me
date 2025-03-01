import { cn } from "@/lib/utils";
import { TransactionList } from "./transaction-list";
import { ArrowDown as Arrow } from "lucide-react";
import { useTransaction } from "@/context/transaction";
import { TransactionInput } from "./transaction-list/input";

type ITransaction = {
  date: string;
  title: string;
  amount: string;
  type: "income" | "expense";
};

const Transaction: React.FC<ITransaction> = ({ date, title, amount, type }) => {
  return (
    <li className="flex flex-row justify-between items-center">
      <div className="flex items-center gap-3 xs:gap-4">
        <div
          className={cn(
            "bg-ui-border rounded-xl p-2 xs:p-3",
            type === "expense" && "bg-red-400 text-white",
            type === "income" && "bg-green-400 text-white"
          )}
        >
          <Arrow
            className={cn(
              "w-5 h-5 xs:w-auto xs:h-auto",
              type == "expense" && "rotate-180"
            )}
          />
        </div>
        <div>
          <p className="text-sm xs:text-md">{title}</p>
          <p className="text-xs xs:text-sm text-ui-text-foreground">{date}</p>
        </div>
      </div>

      <div>
        <p className="text-md font-bold ">{amount}</p>
      </div>
    </li>
  );
};

const Shadow = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, var(--ui-background) 100%)",
      }}
      className="w-full h-[100px] absolute bottom-0 left-0"
    />
  );
};

export const RecentTransactions = () => {
  const { transactions } = useTransaction();

  return (
    <div className="flex flex-col gap-6">
      <ul className="flex flex-col gap-4 relative">
        <h3 className="text-lg font-bold">Recent Transactions</h3>

        {transactions.map((data, index) => (
          <Transaction
            date={data.date}
            type={data.type}
            key={index}
            title={data.description}
            amount={data.amount}
          />
        ))}
        {transactions.length > 5 && <Shadow />}
      </ul>

      <TransactionList />
      <TransactionInput />
    </div>
  );
};
