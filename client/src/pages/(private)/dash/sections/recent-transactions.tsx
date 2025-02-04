import { ArrowDown } from "lucide-react";

type Transaction = {
  date: string;
  title: string;
  amount: string;
};

const Transaction: React.FC<Transaction> = ({ date, title, amount }) => {
  return (
    <li className="flex flex-row justify-between items-center">
      <div className="flex items-center gap-3 xs:gap-4">
        <div className="bg-ui-border rounded-lg p-2 xs:p-3">
          <ArrowDown className="w-5 h-5 xs:w-auto xs:h-auto" />
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

const mockData = [
  {
    date: "Today",
    title: "Payment from John Doe",
    amount: "$1,000.00",
  },
  {
    date: "Yesterday",
    title: "Payment from Jane Doe",
    amount: "$1,000.00",
  },
  {
    date: "Yesterday",
    title: "Payment from Jane Doe",
    amount: "$1,000.00",
  },
  {
    date: "Yesterday",
    title: "Payment from Jane Doe",
    amount: "$1,000.00",
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
