"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const AdaStory = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-slate-900 px-4 py-16 lg:px-20">
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

      <div className="relative z-10 w-full max-w-7xl space-y-16">
        {/* Main Title */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <span className="mb-4 block text-sm font-light uppercase tracking-[0.3em] text-amber-400">
            ✦ Our Heritage ✦
          </span>
          <h2 className="mb-6 text-4xl font-light leading-tight text-white md:text-6xl xl:text-7xl">
            Discover the
            <br />
            <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text font-medium italic text-transparent">
              ADA Story
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

        {/* Content Section */}
        <motion.div
          className="flex flex-col items-center justify-between gap-12 md:flex-row lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Image Section */}
          <motion.div className="w-full md:w-1/2" variants={imageVariants}>
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
                    src="/images/about-us/3.JPG"
                    width={6024}
                    height={4024}
                    alt="ADA Story"
                    className="h-full w-full object-cover transition-transform duration-700"
                  />
                </motion.div>

                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Corner accents */}
                <div className="absolute right-4 top-4 h-8 w-8 rounded-tr-lg border-r-2 border-t-2 border-amber-400/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="absolute bottom-4 left-4 h-8 w-8 rounded-bl-lg border-b-2 border-l-2 border-amber-400/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full space-y-8 md:w-1/2 md:pl-12"
            variants={textVariants}
          >
            {/* Section Title */}
            <div className="text-center md:text-start">
              <h3 className="mb-4 text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
                From Tradition
                <br />
                <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text font-medium italic text-transparent">
                  to Taste
                </span>
              </h3>

              {/* Small decorative line */}
              <motion.div
                className="mx-auto mt-4 h-0.5 w-16 bg-gradient-to-r from-amber-400 to-orange-500 md:mx-0"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </div>

            {/* Story Content */}
            <div className="space-y-6 text-center text-base leading-relaxed text-stone-300 md:text-start md:text-lg">
              <p>
                <span className="font-medium text-amber-300">ADA</span> was
                founded with a passion for sharing the soul of Turkish cuisine —
                crafted from fresh ingredients, time-honored family recipes, and
                warm hospitality. What began as a humble vision has grown into a
                beloved dining destination in the heart of
                <span className="font-medium text-white"> Manchester</span>.
              </p>

              <p>
                More than just a restaurant,{" "}
                <span className="font-medium text-amber-300">ADA</span> is a
                journey through the rich culinary heritage of Turkey. Every dish
                is a celebration of tradition, thoughtfully prepared to bring
                people together and create lasting memories — one flavorful bite
                at a time.
              </p>

              <p>
                <span className="font-medium text-amber-300">ADA</span> is more
                than a place to dine; it's an experience that connects guests to
                the{" "}
                <span className="font-medium text-white">
                  warmth, culture, and flavors of Turkey
                </span>
                . With care, authenticity, and a deep respect for tradition, we
                aim to make every visit meaningful—one dish at a time.
              </p>
            </div>

            {/* Additional Visual Element */}
            <motion.div
              className="flex items-center justify-center space-x-4 pt-6 md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 text-sm text-amber-400">
                <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                <span>Authentic Recipes</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-orange-400">
                <div className="h-2 w-2 rounded-full bg-orange-400"></div>
                <span>Family Tradition</span>
              </div>
            </motion.div>
          </motion.div>
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

export default AdaStory;
