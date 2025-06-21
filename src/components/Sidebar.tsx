import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import { motion } from "framer-motion";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="">
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center justify-center pt-16 md:pt-20">
              <Image
                src="/images/logo.png"
                width={197}
                height={192}
                alt="Foodo"
                className="w-24"
              />
            </div>
          </SheetTitle>
          <SheetDescription className="flex w-full flex-col items-center justify-center gap-7">
            <Link
              href="/"
              className="flex w-full justify-center p-0 font-fira text-2xl font-normal text-[#fff]"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="flex w-full justify-center p-0 font-fira text-2xl font-normal text-[#fff]"
            >
              Our Story
            </Link>
            <Link
              href="/table-booking"
              className="flex w-full justify-center p-0 font-fira text-2xl font-normal text-[#fff]"
            >
              Reservation
            </Link>
            <Link
              href="/contact"
              className="flex w-full justify-center p-0 font-fira text-2xl font-normal text-[#fff]"
            >
              Contact
            </Link>

            <Link href="/menu">
              <motion.button
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-500 hover:from-amber-500 hover:to-orange-500 hover:shadow-2xl hover:shadow-amber-500/25 md:px-12 md:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Order Online</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
              </motion.button>
            </Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
