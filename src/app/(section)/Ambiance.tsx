"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Ambiance = ({}) => {
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-900 py-16 md:py-24">
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

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        {/* Main Title */}
        <motion.div
          className="mb-16 text-center md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <span className="mb-4 block text-sm font-light uppercase tracking-[0.3em] text-amber-400">
            ✦ Discover Excellence ✦
          </span>
          <h2 className="text-4xl font-light leading-tight text-white md:text-6xl xl:text-7xl">
            UNFORGETTABLE
            <br />
            <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text font-medium text-transparent">
              EXPERIENCE
            </span>
          </h2>
          <motion.div
            className="mx-auto mt-6 h-0.5 w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          className="grid gap-8 md:grid-cols-3 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* FOOD Card */}
          <motion.div
            className="group"
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/images/home/ambiance/image1.JPG"
                  width={6000}
                  height={4000}
                  alt="Authentic Turkish Food"
                  className="h-[400px] w-full object-cover md:h-[500px]"
                />
              </motion.div>

              {/* Gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 0.4 }}
                transition={{ duration: 0.4 }}
              />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="mb-4 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-3xl font-light uppercase tracking-wide text-transparent md:text-4xl">
                    FOOD
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-stone-200 md:text-base">
                    ADA was founded with a deep passion for bringing the rich,
                    authentic flavors of Turkey to the vibrant city of
                    Manchester. Rooted in tradition and driven by a dedication
                    to quality, every dish we serve is prepared with fresh
                    ingredients and heartfelt care—delivering an unforgettable
                    taste of Turkish hospitality and culinary excellence in
                    every bite.
                  </p>
                </motion.div>
              </div>

              {/* Decorative corner accent */}
              <motion.div
                className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-amber-400/60"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>

          {/* DRINKS Card */}
          <motion.div
            className="group"
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/images/home/ambiance/image2.jpg"
                  width={765}
                  height={1020}
                  alt="Traditional Turkish Drinks"
                  className="h-[400px] w-full object-cover md:h-[500px]"
                />
              </motion.div>

              {/* Gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 0.4 }}
                transition={{ duration: 0.4 }}
              />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="mb-4 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-3xl font-light uppercase tracking-wide text-transparent md:text-4xl">
                    DRINKS
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-stone-200 md:text-base">
                    At ADA, our drinks are crafted with the same passion and
                    attention to detail as our food. From refreshing traditional
                    Turkish beverages to thoughtfully selected soft drinks,
                    every sip reflects our commitment to authenticity, quality,
                    and rich, satisfying flavor.
                  </p>
                </motion.div>
              </div>

              {/* Decorative corner accent */}
              <motion.div
                className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-amber-400/60"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>

          {/* ATMOSPHERE Card */}
          <motion.div
            className="group"
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/images/home/ambiance/image3.JPG"
                  width={765}
                  height={1020}
                  alt="Restaurant Atmosphere"
                  className="h-[400px] w-full object-cover md:h-[500px]"
                />
              </motion.div>

              {/* Gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 0.4 }}
                transition={{ duration: 0.4 }}
              />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="mb-4 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-3xl font-light uppercase tracking-wide text-transparent md:text-4xl">
                    ATMOSPHERE
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-stone-200 md:text-base">
                    At ADA, we offer more than just a meal — we create a
                    memorable experience. Surrounded by a warm and intimate
                    atmosphere, elegant décor, and the irresistible aroma of
                    authentic Turkish cuisine, every visit feels like a journey
                    through the heart of Turkey, right here in Manchester.
                  </p>
                </motion.div>
              </div>

              {/* Decorative corner accent */}
              <motion.div
                className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-amber-400/60"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2">
            <motion.div
              className="h-2 w-2 rounded-full bg-amber-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="h-0.5 w-16 bg-gradient-to-r from-amber-400 to-orange-400"></div>
            <motion.div
              className="h-2 w-2 rounded-full bg-orange-400"
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
      </div>
    </section>
  );
};

export default Ambiance;
