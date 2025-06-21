// "use client";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";

// const Navbar = ({
//   position = "static",
// }: {
//   position?: "static" | "fixed" | "absolute";
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const d = localStorage.getItem("positiond");
//     if (d !== null) {
//       setPositiond(d);
//     }
//   }, []);

//   const [positiond, setPositiond] = useState<string>("");

//   useEffect(() => {
//     if (positiond) {
//       localStorage.setItem("positiond", positiond);
//     }
//   }, [positiond]);

//   // Scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setIsScrolled(scrollTop > 50); // Change background after scrolling 50px
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const pathname = usePathname();
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav
//       className={cn(
//         `${position} top-0 z-50 h-[10vh] w-full pt-4 transition-all duration-300 md:pt-5`,
//         pathname === "/menu" && "bg-menubackground pt-4",
//         isScrolled && "h-[15vh] bg-[#013827] backdrop-blur-sm md:h-[11vh]",
//       )}
//     >
//       {/*big screen */}
//       <div className="hidden px-4 lg:block lg:px-20">
//         <div className="flex flex-row items-center justify-between">
//           <div></div>
//           <div className="flex flex-row items-center justify-center gap-14">
//             <Link
//               href={"/"}
//               className="font-open_sans text-sm font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
//             >
//               Home<span className="text-xl text-[#cae6d5]">+</span>
//             </Link>
//             <Link
//               href={"/menu"}
//               className="font-open_sans text-sm font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
//             >
//               Menu<span className="text-xl text-[#cae6d5]">+</span>
//             </Link>
//             <Link
//               href={"/about-us"}
//               className="font-open_sans text-sm font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
//             >
//               Our Story<span className="text-xl text-[#cae6d5]">+</span>
//             </Link>

//             <Link
//               href={"/table-booking"}
//               className="font-open_sans text-sm font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
//             >
//               Table Booking<span className="text-xl text-[#cae6d5]">+</span>
//             </Link>
//             <Link
//               href={"/contact"}
//               className="font-open_sans text-sm font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
//             >
//               Contact Us<span className="text-xl text-[#cae6d5]">+</span>
//             </Link>
//           </div>
//           <div className="flex items-end justify-end">
//             <Sidebar>
//               <Button
//                 variant="ghost"
//                 className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
//               >
//                 <div className="flex flex-row gap-2">
//                   <EqualizerIcon />
//                 </div>
//               </Button>
//             </Sidebar>{" "}
//           </div>
//         </div>
//       </div>

//       {/*mobile screen */}
//       <div className="block px-4 lg:hidden lg:px-20">
//         <div className="flex flex-row items-center justify-between">
//           <div>
//             <Link href={"/"}>
//               <Image
//                 src={"/images/logo.png"}
//                 width={281}
//                 height={74}
//                 alt="logo"
//                 className="w-16"
//               />
//             </Link>
//           </div>
//           <div>
//             <Sidebar>
//               <Button
//                 variant="ghost"
//                 className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
//               >
//                 <div className="flex flex-row gap-2">
//                   <EqualizerIcon />
//                 </div>
//               </Button>
//             </Sidebar>{" "}
//           </div>
//         </div>
//       </div>
//       <div className="w-full border-b-[1px] border-b-[#cae6d5] pt-5 md:pt-6" />
//     </nav>
//   );
// };

// export default Navbar;

// const EqualizerIcon: React.FC = () => {
//   return (
//     <div className="equalizer-icon rotate text-[#cae6d5]">
//       <div className="bar"></div>
//       <div className="bar"></div>
//       <div className="bar"></div>
//     </div>
//   );
// };

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const d = localStorage.getItem("positiond");
    if (d !== null) {
      setPositiond(d);
    }
  }, []);

  const [positiond, setPositiond] = useState<string>("");

  useEffect(() => {
    if (positiond) {
      localStorage.setItem("positiond", positiond);
    }
  }, [positiond]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Navigation items
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about-us", label: "Our Story" },
    { href: "/table-booking", label: "Table Booking" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <motion.nav
      className={cn(
        `${position} top-0 z-50 w-full transition-all duration-500`,
        pathname === "/menu" && "bg-slate-900/90 backdrop-blur-md",
        isScrolled
          ? "bg-slate-900/95 py-2 shadow-2xl backdrop-blur-md"
          : "bg-transparent py-4 md:py-6",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Desktop Navigation */}
      <div className="hidden px-6 lg:block lg:px-20">
        <div className="flex flex-row items-center justify-between">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/" className="group">
              <Image
                src="/images/logo.png"
                width={281}
                height={74}
                alt="ADA Restaurant Logo"
                className="w-20 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="flex flex-row items-center justify-center gap-8 xl:gap-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "group relative text-sm font-medium uppercase tracking-wider transition-all duration-300",
                    pathname === item.href
                      ? "text-amber-400"
                      : "text-white hover:text-amber-400",
                  )}
                >
                  <span className="relative">
                    {item.label}
                    <span className="ml-1 text-lg text-amber-400/60 transition-colors duration-300 group-hover:text-amber-400">
                      ✦
                    </span>
                    {/* Underline effect */}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300",
                        pathname === item.href
                          ? "w-full"
                          : "w-0 group-hover:w-full",
                      )}
                    ></span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Sidebar Button */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Sidebar>
              <Button
                variant="ghost"
                className="group relative rounded-full border border-amber-400/30 p-3 text-amber-400 backdrop-blur-sm transition-all duration-300 hover:bg-amber-400/10 hover:text-amber-300"
              >
                <EqualizerIcon />
              </Button>
            </Sidebar>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="block px-6 lg:hidden">
        <div className="flex flex-row items-center justify-between">
          {/* Mobile Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="group">
              <Image
                src="/images/logo.png"
                width={281}
                height={74}
                alt="ADA Restaurant Logo"
                className="w-16 transition-transform duration-300 group-hover:scale-105 md:w-10"
              />
            </Link>
          </motion.div>

          {/* Mobile Sidebar Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sidebar>
              <Button
                variant="ghost"
                className="group relative rounded-full border border-amber-400/30 p-3 text-amber-400 backdrop-blur-sm transition-all duration-300 hover:bg-amber-400/10 hover:text-amber-300"
              >
                <EqualizerIcon />
              </Button>
            </Sidebar>
          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}
      <motion.div
        className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </motion.nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="relative flex items-center space-x-1">
      {/* Animated bars */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="w-1 rounded-full bg-current"
          style={{ height: "16px" }}
          animate={{
            scaleY: [1, 1.5, 0.8, 1.2, 1],
            opacity: [0.6, 1, 0.7, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
