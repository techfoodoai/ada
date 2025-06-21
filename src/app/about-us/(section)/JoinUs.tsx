"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const JoinUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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
    <section
      className="relative flex w-full items-center justify-center overflow-hidden bg-cover bg-fixed bg-center px-4 py-24 md:py-36"
      style={{
        backgroundImage: "url('/images/about-us/4.JPG')",
      }}
    >
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/60 to-slate-900/80" />

      {/* Additional overlay for better contrast */}
      <div className="z-5 absolute inset-0 bg-slate-900/20" />

      {/* Floating decorative elements */}
      <div className="z-5 absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute right-1/4 top-1/4 h-32 w-32 rounded-full border border-amber-400/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 h-24 w-24 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 blur-xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 text-center text-white md:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Subtitle */}
        <motion.div variants={textVariants}>
          <span className="mb-4 inline-block text-sm font-light uppercase tracking-[0.3em] text-amber-400">
            ✦ Join Our Culinary Journey ✦
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          className="text-4xl font-light leading-tight drop-shadow-2xl md:text-5xl lg:text-6xl xl:text-7xl"
          variants={titleVariants}
        >
          <span className="mb-2 block text-white">Experience the Flavours</span>
          <span className="block">
            of{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text font-medium italic text-transparent">
              Authentic Turkey at ADA
            </span>
          </span>
        </motion.h2>

        {/* Decorative line */}
        <motion.div
          className="h-1 w-32 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Description */}
        <motion.p
          className="max-w-3xl text-lg leading-relaxed text-stone-200 drop-shadow-lg md:text-xl"
          variants={textVariants}
        >
          Discover the perfect harmony of flavor and ambiance at{" "}
          <span className="font-medium text-amber-300">ADA</span>. Each dish is
          a tribute to the rich traditions of Turkish cuisine—served with
          genuine hospitality that turns every visit into a truly unforgettable
          experience.
        </motion.p>

        {/* Call to Action */}
        <motion.div variants={buttonVariants} className="pt-4">
          <Link href="/table-booking">
            <motion.button
              className="group relative overflow-hidden rounded-full border-2 border-transparent bg-gradient-to-r from-amber-600 to-orange-600 px-12 py-4 text-base font-semibold uppercase tracking-wider text-white transition-all duration-500 hover:border-amber-400 hover:from-amber-500 hover:to-orange-500 hover:shadow-2xl hover:shadow-amber-500/25"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>🍽️</span>
                <span>Book A Table</span>
                <svg
                  className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
            </motion.button>
          </Link>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="flex flex-col items-center space-y-3 pt-6 text-sm text-stone-300 md:flex-row md:space-x-8 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-amber-400"></div>
            <span>Authentic Turkish Cuisine</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-orange-400"></div>
            <span>Warm Hospitality</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-amber-400"></div>
            <span>Unforgettable Experience</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom decorative elements */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center space-x-3">
          <motion.div
            className="h-2 w-2 rounded-full bg-amber-400"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="h-0.5 w-20 bg-gradient-to-r from-amber-400 to-orange-400"></div>
          <motion.div
            className="h-2 w-2 rounded-full bg-orange-400"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default JoinUs;
