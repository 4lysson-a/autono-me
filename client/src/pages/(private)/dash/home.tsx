import { Search } from "lucide-react";
import { RecentTransactions } from "./sections/recent-transactions";
import { FinancialInsights } from "./sections/financial-insights";
import { useAuth0 } from "@auth0/auth0-react";

export const Home = () => {
  const { user } = useAuth0();

  return (
    <div className="pb-[50px]">
      <header className="flex p-4 py-6">
        <h1 className="text-center w-full font-bold text-lg">
          Olá, {user?.name?.split(" ")[0] ?? "Guest"} {" :)"}
        </h1>
        <Search className="place-items-end" />
      </header>

      <main className="p-4 flex flex-col gap-4">
        <FinancialInsights />
        <RecentTransactions />
      </main>
    </div>
  );
};
