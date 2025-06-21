"use client";
import Hero from "./(section)/Hero";
import Footer from "@/components/Footer";
import Reviews from "./(section)/Review";
import Reserve from "./(section)/Reserve";
import Ambiance from "./(section)/Ambiance";
import Menu from "./(section)/Menu";
import ViewMenu from "@/components/floating-buttons/ViewMenu";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Follow from "./(section)/Follow";
import Special from "./(section)/(special)/Special";
import About from "./(section)/About";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center overflow-x-hidden">
        <Navbar position="fixed" />
        <Hero />
        <About />
        <Ambiance />
        <Special />
        <Reserve />
        <Reviews />
        <Menu />
        <Follow />
        <Footer />
      </div>
      {isScrolled && (
        <div className="fixed bottom-6 right-2 z-50 flex md:bottom-[54px] md:right-[48px]">
          <ViewMenu />
        </div>
      )}
    </main>
  );
}
