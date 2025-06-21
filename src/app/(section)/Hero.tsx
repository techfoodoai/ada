"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="https://d8q1b3smcycac.cloudfront.net/jasmine/jasmine-thumbnail.png"
      >
        <source
          src="https://d8q1b3smcycac.cloudfront.net/jasmine/jasmine-web.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-40 flex h-full flex-col items-center justify-center gap-3 text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Main Title */}
        <motion.h1
          className="text-5xl font-light uppercase leading-tight text-transparent md:text-7xl md:tracking-[15px] lg:text-8xl"
          style={{
            background: "linear-gradient(180deg, #f59e0b 0%, #ea580c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          variants={titleVariants}
        >
          WELCOME TO
        </motion.h1>

        <motion.h1
          className="text-5xl font-light uppercase md:text-7xl md:tracking-[15px] lg:text-8xl"
          style={{
            background: "linear-gradient(180deg, #f59e0b 0%, #ea580c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          variants={titleVariants}
        >
          ADA
        </motion.h1>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 pt-4 md:flex-row md:pt-8"
          variants={buttonVariants}
        >
          <Link href="/table-booking">
            <motion.button
              className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-500 hover:from-amber-500 hover:to-orange-500 hover:shadow-2xl hover:shadow-amber-500/25 md:px-12 md:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Table Booking</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
            </motion.button>
          </Link>

          <Link href="/menu">
            <motion.button
              className="group relative overflow-hidden rounded-lg border-2 border-amber-400 bg-transparent px-8 py-3 text-sm font-medium uppercase tracking-wider text-amber-400 backdrop-blur-sm transition-all duration-500 hover:bg-amber-400 hover:text-slate-900 hover:shadow-2xl hover:shadow-amber-400/25 md:px-12 md:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Order Online</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2 text-amber-400"
          >
            <span className="text-xs uppercase tracking-wider">Discover</span>
            <svg
              className="h-6 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
