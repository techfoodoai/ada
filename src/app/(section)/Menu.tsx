"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const menuItems = [
  {
    title: "Dive Into Flavor",
    imageUrl: "/images/home/menu/1m.JPG",
    link: "/menu",
  },
  {
    title: "Step Into Taste",
    imageUrl: "/images/home/menu/2m.JPG",
    link: "/menu",
  },
];

export default function Menu() {
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
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-900 py-16 md:py-24">
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

      <div className="container relative z-20 mx-auto px-6 md:px-12">
        {/* Header Section */}
        <motion.div
          className="mb-16 text-center md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <span className="mb-4 block text-sm font-light uppercase tracking-[0.3em] text-amber-400">
            ✦ Culinary Excellence ✦
          </span>
          <h2 className="mb-6 text-4xl font-light leading-tight text-white md:text-6xl xl:text-7xl">
            Our
            <br />
            <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text font-medium italic text-transparent">
              Menu
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
        </motion.div>

        {/* Menu Cards Grid */}
        <motion.div
          className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4 }}
            >
              <Link href={item.link}>
                <div className="group relative cursor-pointer">
                  {/* Decorative glow effects */}
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100"></div>
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-amber-400/20 to-orange-400/20 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"></div>

                  {/* Main card container */}
                  <div className="relative h-[400px] overflow-hidden rounded-2xl bg-stone-800 shadow-2xl md:h-[500px]">
                    {/* Image with zoom effect */}
                    <motion.div
                      className="relative h-full w-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        {/* Title */}
                        <h3 className="mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-3xl font-light leading-tight text-transparent md:text-5xl">
                          {item.title}
                        </h3>

                        {/* Call to action */}
                        <motion.div
                          className="inline-flex items-center font-medium text-amber-400 transition-colors duration-300 group-hover:text-white"
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-sm uppercase tracking-wider">
                            Explore Menu
                          </span>
                          <svg
                            className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2"
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
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute right-4 top-4 h-8 w-8 rounded-tr-lg border-r-2 border-t-2 border-amber-400/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                    <div className="absolute bottom-4 left-4 h-8 w-8 rounded-bl-lg border-b-2 border-l-2 border-amber-400/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section with call to action */}
        <motion.div
          className="mt-16 text-center md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mx-auto mb-8 max-w-2xl text-lg font-light text-stone-300 md:text-xl">
            Discover the authentic flavors of Turkey through our carefully
            curated menu, featuring traditional recipes with a modern twist.
          </p>

          <Link href="/menu">
            <motion.button
              className="group relative overflow-hidden rounded-full border-2 border-transparent bg-gradient-to-r from-amber-600 to-orange-600 px-10 py-4 font-medium uppercase tracking-widest text-white shadow-lg transition-all duration-500 hover:border-amber-400 hover:bg-transparent hover:text-amber-400 hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View Full Menu</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
            </motion.button>
          </Link>
        </motion.div>

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
}
