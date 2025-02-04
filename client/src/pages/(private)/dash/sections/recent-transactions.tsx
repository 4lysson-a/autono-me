import { cn } from "@/lib/utils";
import { ArrowDown as Arrow } from "lucide-react";

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
        <div className="bg-ui-border rounded-lg p-2 xs:p-3">
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

const mockData: ITransaction[] = [
  {
    date: "Today",
    title: "Payment from John Doe",
    amount: "$1,000.00",
    type: "income",
  },
  {
    date: "Yesterday",
    title: "Payment from Jane Doe",
    amount: "$1,000.00",
    type: "expense",
  },
  {
    date: "Jan 2",
    title: "Payment from Jane Doe",
    amount: "$1,000.00",
    type: "income",
  },
  {
    date: "Jan 1",
    title: "Payment from Jane Doe",
    amount: "$1,000.00",
    type: "expense",
  },
];

export const RecentTransactions = () => {
  return (
    <div className="flex flex-col gap-6">
      <ul className="flex flex-col gap-4">
        <h3>Recent Transactions</h3>

        {mockData.map((data) => (
          <Transaction
            date={data.date}
            type={data.type}
            key={data.title}
            title={data.title}
            amount={data.amount}
          />
        ))}
      </ul>

      <button className="text-ui-text bg-ui-border text-md font-bold">
        View All
      </button>
    </div>
  );
};
