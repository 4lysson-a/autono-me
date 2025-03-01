import { useAuth0 } from "@auth0/auth0-react";
import { FinancialInsights } from "./sections/financial-insights";
import { RecentTransactions } from "./sections/recent-transactions";
import { TransactionProvider } from "@/context/transaction";

export const Home = () => {
  const { user } = useAuth0();

  return (
    <div className="pb-[50px]">
      <header className="flex p-4 py-6 items-center">
        <img className="rounded-full w-10" src={user?.picture} alt="" />
        <h1 className="text-center w-full font-bold text-lg">
          Olá, {user?.name?.split(" ")[0] ?? "Guest"} {" :)"}
        </h1>
      </header>

      <main className="p-4 flex flex-col gap-4">
        <TransactionProvider>
          <FinancialInsights />
          <RecentTransactions />
        </TransactionProvider>
      </main>
    </div>
  );
};
