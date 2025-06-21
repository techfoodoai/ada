"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const Follow = ({}) => {
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <section
      id="connect"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-900 py-16 md:py-24"
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

      <div className="container relative z-20 mx-auto max-w-6xl px-6 md:px-12">
        {/* Header Section */}
        <motion.div
          className="mb-16 text-center md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <span className="mb-4 block text-sm font-light uppercase tracking-[0.3em] text-amber-400">
            ✦ Stay Connected ✦
          </span>
          <h2 className="mb-6 text-4xl font-light leading-tight text-white md:text-6xl xl:text-7xl">
            Follow
            <br />
            <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text font-medium italic text-transparent">
              Us
            </span>
          </h2>

          {/* Decorative line */}
          <motion.div
            className="mx-auto h-0.5 w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-stone-300 md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Join our community and discover the latest from ADA through our
            social media journey.
          </motion.p>
        </motion.div>

        {/* Desktop Gallery Grid */}
        <div className="relative hidden md:block">
          <motion.div
            className="grid grid-cols-3 gap-4 lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.4 }}
                className="group relative"
              >
                {/* Decorative glow effect */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"></div>

                <div className="relative overflow-hidden rounded-2xl bg-stone-800 shadow-2xl">
                  <Image
                    src={`/images/home/follow/${index}.JPG`}
                    width={6000}
                    height={4000}
                    alt={`Instagram post ${index}`}
                    className="h-[200px] w-full object-cover transition-transform duration-700 group-hover:scale-110 lg:h-[280px]"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Instagram className="h-8 w-8 text-white" />
                  </div>

                  {/* Corner accent */}
                  <div className="absolute right-3 top-3 h-6 w-6 rounded-tr-lg border-r-2 border-t-2 border-amber-400/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop Call to Action */}
          <motion.div
            className="mt-12 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={buttonVariants}
          >
            <Link href="https://www.instagram.com/adaenfield/" target="_blank">
              <motion.button
                className="group relative overflow-hidden rounded-full border-2 border-transparent bg-gradient-to-r from-amber-600 to-orange-600 px-12 py-4 font-medium uppercase tracking-widest text-white shadow-lg transition-all duration-500 hover:border-amber-400 hover:bg-transparent hover:text-amber-400 hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Instagram className="h-5 w-5" />
                  Follow Us On Instagram
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Gallery */}
        <div className="relative flex flex-col items-center gap-6 md:hidden">
          <motion.div
            className="grid w-full grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {[1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                {/* Decorative glow effect */}
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"></div>

                <div className="relative overflow-hidden rounded-xl bg-stone-800 shadow-xl">
                  <Image
                    src={`/images/home/follow/${index}.JPG`}
                    width={6000}
                    height={4000}
                    alt={`Instagram post ${index}`}
                    className="h-[160px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Call to Action */}
          <motion.div
            className="mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={buttonVariants}
          >
            <Link href="https://www.instagram.com/adaenfield/" target="_blank">
              <motion.button
                className="group relative overflow-hidden rounded-full border-2 border-transparent bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-3 text-sm font-medium uppercase tracking-wide text-white shadow-lg transition-all duration-500 hover:border-amber-400 hover:bg-transparent hover:text-amber-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Instagram className="h-4 w-4" />
                  Follow Us On Instagram
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom decorative elements */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
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
              className="h-3 w-3 rounded-full bg-orange-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <div className="h-0.5 w-20 bg-gradient-to-r from-orange-400 to-amber-400"></div>
            <motion.div
              className="h-2 w-2 rounded-full bg-amber-400"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Follow;
