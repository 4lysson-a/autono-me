"use client";

import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const SingleTransaction = () => {
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

const TransactionModal = ({ children }: React.ComponentProps<"div">) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="text-ui-text bg-ui-border w-full rounded-lg text-sm xs:text-md font-bold p-3">
            Ver todas as transações
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px] p-0 max-h-[600px] overflow-y-auto">
          <DialogHeader className="px-6 flex items-center">
            <DialogTitle className="text-2xl mt-5 pb-1">Transações</DialogTitle>
          </DialogHeader>
          <div className="w-full h-[1px] bg-ui-border" />
          <div className="flex flex-col gap-6 p-4">{children}</div>
        </DialogContent>
      </Dialog>
    );
  }

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
            <span className="text-center w-full">Transações</span>
            <Filter className="w-4 xs:w-5 absolute right-5 xs:right-10 active:scale-90 transition-all" />
          </DrawerTitle>
          <DrawerDescription>Veja suas transações aqui</DrawerDescription>
        </DrawerHeader>
        <div className="mx-auto w-full max-w-sm p-4 flex flex-col gap-6 overflow-y-auto pb-[100px]">
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export function TransactionList() {
  return (
    <TransactionModal>
      {Array.from({ length: 10 }).map((_, i) => (
        <SingleTransaction key={i} />
      ))}
    </TransactionModal>
  );
}
