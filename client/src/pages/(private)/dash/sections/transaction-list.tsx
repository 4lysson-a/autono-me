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
import { Filter } from "lucide-react";

const Transaction = () => {
  return (
    <div className="flex items-center w-full justify-between">
      <div>
        <p>Jun 15, 2022</p>
        <p className="text-ui-text-foreground">$ 2,000</p>
      </div>

      <p className="font-bold">Deposit</p>
    </div>
  );
};

export function TransactionList() {
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
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
