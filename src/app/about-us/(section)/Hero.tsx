"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
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

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
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
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-slate-900 text-white"
    >
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

      {/* Simple geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #f59e0b 1px, transparent 1px), radial-gradient(circle at 75% 75%, #ea580c 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-24 md:flex-row md:py-32 lg:px-8">
        {/* Left: Text Content */}
        <motion.div
          className="flex w-full flex-col items-start justify-center md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Subtitle */}
          <motion.div variants={textVariants} className="mb-6">
            <span className="text-sm font-light uppercase tracking-[0.3em] text-amber-400">
              ✦ Authentic Turkish Cuisine ✦
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="mb-6 text-4xl font-light leading-tight md:text-5xl lg:text-6xl xl:text-7xl"
            variants={textVariants}
          >
            <span className="block text-white">ADA Restaurant</span>
            <span className="mt-2 block bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text font-medium italic text-transparent">
              A Taste of Turkey,
            </span>
            <span className="block bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text font-medium italic text-transparent">
              From the Heart of Manchester
            </span>
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            className="mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          />

          {/* Description */}
          <motion.p
            className="mb-10 max-w-xl text-lg leading-relaxed text-stone-300"
            variants={textVariants}
          >
            Inspired by the rich heritage of Turkey,{" "}
            <span className="font-medium text-amber-300">ADA</span> was founded
            with a vision to bring people together through the joy of authentic
            cuisine. From our kitchen in Manchester, we serve more than just
            food—we share the true essence of Turkish culture. Every dish is
            prepared with care, and every guest is welcomed like family.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            variants={buttonVariants}
          >
            <motion.a
              href="/menu"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-white transition-all duration-500 hover:from-amber-500 hover:to-orange-500 hover:shadow-2xl hover:shadow-amber-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View Menu</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
            </motion.a>

            <motion.a
              href="/table-booking"
              className="group relative overflow-hidden rounded-full border-2 border-amber-400 bg-transparent px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-amber-400 backdrop-blur-sm transition-all duration-500 hover:bg-amber-400 hover:text-slate-900 hover:shadow-2xl hover:shadow-amber-400/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Book a Table</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <div className="group relative">
            {/* Decorative glow effects */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100"></div>
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-amber-400/30 to-orange-400/30 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"></div>

            {/* Main image container */}
            <div className="relative overflow-hidden rounded-2xl bg-stone-800 shadow-2xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/images/about-us/2.JPG"
                  alt="ADA Restaurant Interior"
                  width={1200}
                  height={1600}
                  className="h-auto w-full object-cover transition-transform duration-700"
                  priority
                />
              </motion.div>

              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Corner accents */}
              <div className="absolute right-4 top-4 h-8 w-8 rounded-tr-lg border-r-2 border-t-2 border-amber-400/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="absolute bottom-4 left-4 h-8 w-8 rounded-bl-lg border-b-2 border-l-2 border-amber-400/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              {/* Floating badge */}
              <div className="absolute bottom-6 right-6">
                <div className="rounded-lg border border-amber-400/30 bg-black/60 px-4 py-2 backdrop-blur-sm">
                  <p className="text-sm font-medium text-amber-300">
                    Manchester's Finest Turkish Cuisine
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative elements */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
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

export default Hero;
