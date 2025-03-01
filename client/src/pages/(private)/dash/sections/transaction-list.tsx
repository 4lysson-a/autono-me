"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useTransaction } from "@/context/transaction";
import { Filter } from "lucide-react";

type Props = {
  date: string;
  type: string;
  value: string;
};

const Transaction = ({ date, value, type }: Props) => {
  return (
    <div className="flex items-center w-full justify-between">
      <div>
        <p>{date}</p>
        <p className="text-ui-text-foreground">{value}</p>
      </div>

      <p className="font-bold">{type}</p>
    </div>
  );
};

export function TransactionList() {
  const { transactions } = useTransaction();

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="text-ui-text bg-ui-border w-full rounded-lg text-sm xs:text-md font-bold p-3">
          Ver todas as transações
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[calc(100vh-2rem)]">
        <DrawerHeader>
          <DrawerTitle className="flex items-center justify-between">
            <h3 className="text-center w-full">Transações</h3>
            <Filter className="w-4 xs:w-5 absolute right-5 xs:right-10 active:scale-90 transition-all" />
          </DrawerTitle>
          <DrawerDescription>Veja suas transações aqui</DrawerDescription>
        </DrawerHeader>

        <div className="mx-auto w-full max-w-sm p-4 flex flex-col gap-6 overflow-y-auto pb-[100px]">
          {transactions.map((data, i) => (
            <Transaction
              key={i}
              date={data.date}
              type={data.type}
              value={data.amount}
            />
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
