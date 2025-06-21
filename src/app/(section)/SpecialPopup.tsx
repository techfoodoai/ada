"use client";
import { useState, type FC } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { Calendar, Clock, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SpecialPopupProps {
  children: React.ReactNode;
  item: {
    image: string;
    date?: string;
    time?: string;
    food: string;
    dj?: string;
    name?: string;
  };
}

const SpecialPopup: FC<SpecialPopupProps> = ({ children, item }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex h-fit w-[90%] flex-col border-none bg-menubackground px-0 py-0 md:w-full lg:max-w-[695px]">
        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          <div className="hidden h-full w-full bg-black md:block md:w-1/2">
            <Image
              src={item?.image}
              alt="right"
              width={417}
              height={531}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex h-full w-full flex-col gap-5 px-5 py-5 md:w-1/2">
            {item?.name && <h1 className="text-3xl font-[600]">{item.name}</h1>}
            {item?.date && (
              <p className="flex w-full items-start justify-start gap-2">
                <Calendar className="w-1/12" />
                <span className="w-11/12">{item.date}</span>
              </p>
            )}
            {item?.time && (
              <p className="flex w-full items-start justify-start gap-2">
                <Clock className="w-1/12" />
                <span className="w-11/12">{item.time}</span>
              </p>
            )}
            {item?.dj && (
              <p className="flex w-full items-start justify-start gap-2">
                <Music className="w-1/12" />
                <span className="w-11/12">{item.dj}</span>
              </p>
            )}
            <p className="flex w-full items-start justify-start gap-2 text-sm">
              <span>{item?.food && item.food}</span>{" "}
            </p>
            <div className="flex w-full justify-center">
              <Link href="/table-booking">
                <Button
                  className="hero-button flex items-center justify-center gap-3 border-[0px] px-10 py-7 ring-0"
                  variant="image"
                >
                  Book A Table
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SpecialPopup;
