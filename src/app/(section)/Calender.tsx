import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Calender: React.FC = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="h-full w-full bg-transparent px-4 py-20 sm:px-[10px] md:px-[50px] lg:px-[80px] lg:py-32 2xl:px-[140px]">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative flex flex-col gap-4 rounded-3xl border border-primary px-4 pb-[60px] pt-[505px]">
          <div className="absolute -top-6 left-4 right-4">
            <Image
              src="/images/home/ora/a.png"
              alt="image"
              width={417}
              height={531}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <h2 className="pb-4 font-inter text-2xl font-[500] uppercase text-primary lg:pb-6 lg:text-3xl">
            Sushi
          </h2>
          <div className="flex flex-row items-center gap-2">
            <CalendarDays className="w-6 text-[#AAA9A9]" />
            <span className="text-base text-[#AAA9A9] lg:text-lg">Sunday</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Clock className="w-6 text-[#AAA9A9]" />
            <span className="text-base text-[#AAA9A9] lg:text-lg">
              8:00Pm-2:00Am
            </span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Store className="w-6 text-[#AAA9A9]" />
            <span className="text-base text-[#AAA9A9] lg:text-lg">50% off</span>
          </div>

          <div>
            <Link href={"/table-booking"}>
              <Button className="mt-4 bg-[#000] px-7 py-6 text-center font-inter text-sm capitalize text-primary hover:bg-primary hover:text-[#000]">
                Table Booking
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative flex flex-col gap-4 rounded-3xl border border-primary px-4 pb-[60px] pt-[505px]">
          <div className="absolute -top-6 left-4 right-4">
            <Image
              src="/images/home/ora/b.png"
              alt="image"
              width={417}
              height={531}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <h2 className="pb-4 font-inter text-2xl font-[500] uppercase text-primary lg:pb-6 lg:text-3xl">
            Shisha
          </h2>
          <div className="flex flex-row items-center gap-2">
            <CalendarDays className="w-6 text-[#AAA9A9]" />
            <span className="text-base text-[#AAA9A9] lg:text-lg">Mon-Thu</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Clock className="w-6 text-[#AAA9A9]" />
            <span className="text-base text-[#AAA9A9] lg:text-lg">
              8:00Pm-2:00Am
            </span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Store className="w-6 text-[#AAA9A9]" />
            <span className="text-base text-[#AAA9A9] lg:text-lg">50% off</span>
          </div>

          <div>
            <Link href={"/table-booking"}>
              <Button className="mt-4 bg-[#000] px-7 py-6 text-center font-inter text-sm capitalize text-primary hover:bg-primary hover:text-[#000]">
                Table Booking
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative flex flex-col gap-4 rounded-3xl border border-primary px-4 pb-[60px] pt-[505px]">
          <div className="absolute -top-6 left-4 right-4">
            <Image
              src="/images/home/ora/c.png"
              alt="image"
              width={417}
              height={531}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <h2 className="pb-4 font-inter text-2xl font-[500] uppercase text-primary lg:pb-6 lg:text-3xl">
            Happy Hour
          </h2>
          <div className="flex flex-row items-center gap-2">
            <CalendarDays className="w-6 text-[#AAA9A9]" />
            <span className="text-base text-[#AAA9A9] lg:text-lg">Mon-Thu</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Clock className="w-6 text-[#AAA9A9]" />
            <span className="text-base text-[#AAA9A9] lg:text-lg">
              6:00Pm-7:00Pm
            </span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Store className="w-6 text-[#AAA9A9]" />
            <span className="text-base text-[#AAA9A9] lg:text-lg">
              Exclusive Discounts
            </span>
          </div>

          <div>
            <Link href={"/table-booking"}>
              <Button className="mt-4 bg-[#000] px-7 py-6 text-center font-inter text-sm capitalize text-primary hover:bg-primary hover:text-[#000]">
                Table Booking
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative flex flex-col gap-4 rounded-3xl border border-primary px-4 pb-[60px] pt-[505px]">
          <div className="absolute -top-6 left-4 right-4">
            <Image
              src="/images/home/ora/d.png"
              alt="image"
              width={417}
              height={531}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <h2 className="pb-4 font-inter text-2xl font-[500] uppercase text-primary lg:pb-6 lg:text-3xl">
            Live DJ
          </h2>
          <div className="flex flex-row items-center gap-2">
            <CalendarDays className="w-6 text-[#AAA9A9]" />
            <span className="text-base text-[#AAA9A9] lg:text-lg">Friday</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Clock className="w-6 text-[#AAA9A9]" />
            <span className="text-base text-[#AAA9A9] lg:text-lg">
              8:00Pm-2:00Am
            </span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Store className="w-6 text-[#AAA9A9]" />
            <span className="text-base text-[#AAA9A9] lg:text-lg">
              Exclusive Discounts
            </span>
          </div>
          <div>
            <Link href={"/table-booking"}>
              <Button className="mt-4 bg-[#000] px-7 py-6 text-center font-inter text-sm capitalize text-primary hover:bg-primary hover:text-[#000]">
                Table Booking
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative flex flex-col gap-4 rounded-3xl border border-primary px-4 pb-[60px] pt-[505px]">
          <div className="absolute -top-6 left-4 right-4">
            <Image
              src="/images/home/ora/e.png"
              alt="image"
              width={417}
              height={531}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <h2 className="pb-4 font-inter text-2xl font-[500] uppercase text-primary lg:pb-6 lg:text-3xl">
            DJ & Fire Show <br /> Girl Dance
          </h2>
          <div className="flex flex-row items-center gap-2">
            <CalendarDays className="w-6 text-[#AAA9A9]" />
            <span className="text-base text-[#AAA9A9] lg:text-lg">
              Saturday
            </span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Clock className="w-6 text-[#AAA9A9]" />
            <span className="text-base text-[#AAA9A9] lg:text-lg">
              8:00Pm-2:00Am
            </span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Store className="w-6 text-[#AAA9A9]" />
            <span className="text-base text-[#AAA9A9] lg:text-lg">
              Exclusive Discounts
            </span>
          </div>

          <div>
            <Link href={"/table-booking"}>
              <Button className="mt-4 bg-[#000] px-7 py-6 text-center font-inter text-sm capitalize text-primary hover:bg-primary hover:text-[#000]">
                Table Booking
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative flex flex-col gap-4 rounded-3xl border border-primary px-4 pb-[60px] pt-[505px]">
          <div className="absolute -top-6 left-4 right-4">
            <Image
              src="/images/home/ora/f.png"
              alt="image"
              width={417}
              height={531}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <h2 className="pb-4 font-inter text-2xl font-[500] uppercase text-primary lg:pb-6 lg:text-3xl">
            Live DJ
          </h2>
          <div className="flex flex-row items-center gap-2">
            <CalendarDays className="w-6 text-[#AAA9A9]" />
            <span className="text-base text-[#AAA9A9] lg:text-lg">Sunday</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Clock className="w-6 text-[#AAA9A9]" />
            <span className="text-base text-[#AAA9A9] lg:text-lg">
              7:00Pm-12:00Am
            </span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Store className="w-6 text-[#AAA9A9]" />
            <span className="text-base text-[#AAA9A9] lg:text-lg">
              Exclusive Discounts
            </span>
          </div>
          <div>
            <Link href={"/table-booking"}>
              <Button className="mt-4 bg-[#000] px-7 py-6 text-center font-inter text-sm capitalize text-primary hover:bg-primary hover:text-[#000]">
                Table Booking
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calender;
