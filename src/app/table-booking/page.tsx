import Hero from "@/app/table-booking/(section)/Hero";
import TableBooking from "@/app/table-booking/(section)/TableBooking";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full">
      <div className="z-40 flex h-full w-full flex-col items-center justify-center bg-slate-900">
        <Navbar position="fixed" />
        <Hero />
        <TableBooking />
        <Footer />
      </div>
    </main>
  );
}
