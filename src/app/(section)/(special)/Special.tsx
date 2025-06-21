"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import type { EmblaOptionsType } from "embla-carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import { motion } from "framer-motion";

const OPTIONS: EmblaOptionsType = { loop: true };

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const headlineVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.2 },
  },
};

const Special = ({}) => {
  const { modelData } = useRestaurant();

  return (
    <section className="relative flex h-full w-full justify-center bg-slate-900">
      <div
        className="absolute left-0 top-0 z-10 h-full w-full opacity-10"
        style={{
          backgroundImage: "url('/images/modelbg.png')",
        }}
      />
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="space-y-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={titleVariants}
          >
            <span className="mb-4 block text-sm font-light uppercase tracking-[0.3em] text-amber-400">
              ✦ Chef's Recommendations ✦
            </span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headlineVariants}
            className="space-y-4"
          >
            <h2 className="text-4xl font-light leading-tight text-white md:text-6xl xl:text-7xl">
              Our Best
              <br />
              <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text font-medium italic text-transparent">
                Specialties
              </span>
            </h2>

            {/* Decorative line */}
            <motion.div
              className="mx-auto h-0.5 w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-stone-300 md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Discover our most beloved dishes, carefully crafted with authentic
            Turkish flavors and premium ingredients to create an unforgettable
            dining experience.
          </motion.p>
        </div>
        <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
