"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Reserve: React.FC = () => {
  const [lineWidth, setLineWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth < 768 ? 64 : 96;
      setLineWidth(width);
    }
  }, []);
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const backgroundVariants = {
    initial: { scale: 1.1 },
    animate: {
      scale: 1,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* Background Image with zoom effect */}
      <motion.div
        className="absolute inset-0"
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/images/home/reserve/bg.JPG"
          alt="Restaurant Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60"></div>

      {/* Subtle animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute right-1/4 top-1/4 h-32 w-32 rounded-full bg-amber-400/5"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="bg-orange-400/8 absolute bottom-1/3 left-1/3 h-24 w-24 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Content Container - Fixed for mobile */}
      <div className="absolute inset-0 flex items-center justify-center md:items-end">
        <motion.div
          className="relative mx-4 w-full max-w-4xl md:mb-8 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Reservation Card */}
          <div className="relative">
            {/* Decorative glow effects - Reduced for mobile */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-amber-500/10 to-orange-500/10 blur-xl md:-inset-8 md:rounded-[3rem] md:blur-2xl"></div>
            <div className="absolute -inset-2 rounded-[1.5rem] bg-gradient-to-r from-amber-400/20 to-orange-400/20 blur-lg md:-inset-4 md:rounded-[2.5rem] md:blur-xl"></div>

            {/* Main card - Responsive padding and sizing */}
            <div className="relative rounded-[1.5rem] border border-amber-400/30 bg-black/40 px-6 py-8 backdrop-blur-xl md:rounded-[2rem] md:px-16 md:py-20">
              {/* Top decorative element */}
              <motion.div
                className="absolute left-1/2 top-4 -translate-x-1/2 transform md:top-6"
                variants={itemVariants}
              >
                <div className="h-0.5 w-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 md:h-1 md:w-16"></div>
              </motion.div>

              <div className="flex flex-col items-center space-y-6 md:space-y-8">
                {/* Header Section - Responsive text sizes */}
                <motion.div
                  className="space-y-3 text-center md:space-y-4"
                  variants={itemVariants}
                >
                  <span className="block text-xs font-light uppercase tracking-[0.2em] text-amber-400 md:text-sm md:tracking-[0.3em]">
                    ✦ Reservation ✦
                  </span>

                  <h2 className="text-3xl font-light leading-tight text-white md:text-4xl lg:text-6xl">
                    Reserve
                    <br />
                    <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text font-medium italic text-transparent">
                      Your Table
                    </span>
                  </h2>

                  {/* Decorative line - Responsive sizing */}
                  <motion.div
                    className="mx-auto h-0.5 w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent md:w-24"
                    initial={{ width: 0 }}
                    whileInView={{ width: lineWidth }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                  />
                </motion.div>

                {/* Description - Responsive text and spacing */}
                <motion.div
                  className="max-w-xl px-2 text-center md:max-w-2xl md:px-0"
                  variants={itemVariants}
                >
                  <p className="text-base font-light leading-relaxed text-stone-200 md:text-lg lg:text-xl">
                    Reserve your table at{" "}
                    <span className="font-medium text-amber-300">ADA</span> and
                    enjoy an unforgettable Turkish dining experience. From rich,
                    authentic flavors to our warm and welcoming ambiance — every
                    detail is crafted to delight. Book now and let{" "}
                    <span className="font-medium text-amber-300">ADA</span> make
                    your visit truly special.
                  </p>
                </motion.div>

                {/* Call to Action - Responsive button sizing */}
                <motion.div className="pt-2 md:pt-4" variants={itemVariants}>
                  <Link href="/table-booking">
                    <motion.button
                      className="group relative overflow-hidden rounded-full border-2 border-transparent bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-3 text-sm font-medium uppercase tracking-wide text-white shadow-lg transition-all duration-500 hover:border-amber-400 hover:bg-transparent hover:text-amber-400 hover:shadow-xl md:px-12 md:py-4 md:text-base md:tracking-widest"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">Table Booking</span>
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Additional info - Responsive layout */}
                <motion.div
                  className="flex flex-col items-center space-y-2 text-xs text-stone-400 md:flex-row md:space-x-6 md:space-y-0 md:text-sm"
                  variants={itemVariants}
                >
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                    <span>Instant Confirmation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-orange-400"></div>
                    <span>No Booking Fee</span>
                  </div>
                </motion.div>
              </div>

              {/* Bottom decorative elements - Responsive positioning */}
              <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-6"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-2">
                  <motion.div
                    className="h-1.5 w-1.5 rounded-full bg-amber-400 md:h-2 md:w-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="h-0.5 w-8 bg-gradient-to-r from-amber-400 to-orange-400 md:w-12"></div>
                  <motion.div
                    className="h-1.5 w-1.5 rounded-full bg-orange-400 md:h-2 md:w-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                </div>
              </motion.div>

              {/* Corner accents - Responsive sizing */}
              <div className="absolute left-3 top-3 h-6 w-6 rounded-tl-lg border-l-2 border-t-2 border-amber-400/40 md:left-4 md:top-4 md:h-8 md:w-8"></div>
              <div className="absolute right-3 top-3 h-6 w-6 rounded-tr-lg border-r-2 border-t-2 border-amber-400/40 md:right-4 md:top-4 md:h-8 md:w-8"></div>
              <div className="absolute bottom-3 left-3 h-6 w-6 rounded-bl-lg border-b-2 border-l-2 border-amber-400/40 md:bottom-4 md:left-4 md:h-8 md:w-8"></div>
              <div className="absolute bottom-3 right-3 h-6 w-6 rounded-br-lg border-b-2 border-r-2 border-amber-400/40 md:bottom-4 md:right-4 md:h-8 md:w-8"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reserve;
