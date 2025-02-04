import { Search } from "lucide-react";
import { RecentTransactions } from "./sections/recent-transactions";

export const Home = () => {
  return (
    <div>
      <header className="flex p-4 py-6">
        <h1 className="text-center w-full font-bold text-lg">Olá, João</h1>
        <Search className="place-items-end" />
      </header>

      <main className="p-4 flex flex-col gap-4">
        <h2 className="text-4xl font-bold">$12,943.00</h2>
        <RecentTransactions />
      </main>
    </div>
  );
};
