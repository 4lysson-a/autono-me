import { Search } from "lucide-react";
import { RecentTransactions } from "./sections/recent-transactions";
import { FinancialInsights } from "./sections/financial-insights";

export const Home = () => {
  return (
    <div>
      <header className="flex p-4 py-6">
        <h1 className="text-center w-full font-bold text-lg">Olá, João</h1>
        <Search className="place-items-end" />
      </header>

      <main className="p-4 flex flex-col gap-4">
        <FinancialInsights />
        <RecentTransactions />
      </main>
    </div>
  );
};
