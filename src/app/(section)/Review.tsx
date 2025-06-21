"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  const [expandedReviews, setExpandedReviews] = useState(new Set());

  const toggleReadMore = (index: number) => {
    const newExpanded = new Set(expandedReviews);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedReviews(newExpanded);
  };

  const isTextTruncated = (text: string) => {
    return text && text.length > 200;
  };

  // Animation variants
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

  const carouselVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  };

  return (
    <section className="relative flex min-h-screen w-full justify-center overflow-hidden bg-slate-900 py-16 md:py-24">
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

      <div className="relative z-20 flex h-full w-full max-w-7xl flex-col items-center justify-center gap-12 px-6 md:px-12">
        {/* Header Section */}
        <div className="space-y-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={titleVariants}
          >
            <span className="mb-4 block text-sm font-light uppercase tracking-[0.3em] text-amber-400">
              ✦ Testimonials ✦
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
              Our Clients
              <br />
              <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text font-medium italic text-transparent">
                Say
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
            Hear what our valued guests have to say about their unforgettable
            experiences at ADA.
          </motion.p>
        </div>

        {/* Reviews Carousel */}
        {reviews && (
          <motion.div
            className="w-full max-w-5xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={carouselVariants}
          >
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {reviews
                  .filter((review) => review.rating >= 4)
                  .map((review, index) => {
                    const isExpanded = expandedReviews.has(index);
                    const needsReadMore = isTextTruncated(review.text.text);

                    return (
                      <CarouselItem
                        key={index}
                        className="flex basis-full justify-center pl-4 md:basis-1/2 lg:basis-1/3"
                      >
                        <motion.div
                          className="w-full p-2"
                          whileHover={{ y: -8 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="group relative">
                            {/* Decorative glow */}
                            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"></div>

                            <Card className="relative h-[450px] overflow-hidden rounded-2xl border border-amber-400/20 bg-stone-800/80 backdrop-blur-sm md:h-[400px]">
                              <CardContent className="flex h-full flex-col p-6">
                                {/* Quote icon */}
                                <div className="mb-4 flex justify-center">
                                  <Quote className="h-8 w-8 text-amber-400/60" />
                                </div>

                                {/* Star rating */}
                                <div className="mb-6 flex justify-center">
                                  {Array.from({ length: review.rating }).map(
                                    (_, i) => (
                                      <Star
                                        key={i}
                                        className="h-5 w-5 fill-amber-400 text-amber-400"
                                      />
                                    ),
                                  )}
                                </div>

                                {/* Review text */}
                                <div className="mb-6 flex flex-1 flex-col justify-center">
                                  <p
                                    className={`text-center text-sm leading-relaxed text-stone-200 transition-all duration-300 md:text-base ${
                                      isExpanded ? "" : "line-clamp-6"
                                    }`}
                                  >
                                    "{review.text.text}"
                                  </p>

                                  {needsReadMore && (
                                    <motion.button
                                      onClick={() => toggleReadMore(index)}
                                      className="mt-3 text-xs font-medium text-amber-400 transition-colors duration-200 hover:text-orange-400"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      {isExpanded ? "Read Less" : "Read More"}
                                    </motion.button>
                                  )}
                                </div>

                                {/* Author info */}
                                <div className="flex flex-col items-center space-y-3">
                                  <div className="relative">
                                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 opacity-60 blur"></div>
                                    <Image
                                      src={review.authorAttribution.photoUri}
                                      alt="profile pic"
                                      width={48}
                                      height={48}
                                      className="relative rounded-full border-2 border-amber-400/30"
                                    />
                                  </div>
                                  <div className="text-center">
                                    <p className="text-sm font-medium text-white">
                                      {review.authorAttribution.displayName}
                                    </p>
                                    <p className="mt-1 text-xs text-stone-400">
                                      {review.relativePublishTimeDescription}
                                    </p>
                                  </div>
                                </div>

                                {/* Decorative corner accents */}
                                <div className="absolute left-3 top-3 h-6 w-6 rounded-tl-lg border-l-2 border-t-2 border-amber-400/40"></div>
                                <div className="absolute right-3 top-3 h-6 w-6 rounded-tr-lg border-r-2 border-t-2 border-amber-400/40"></div>
                              </CardContent>
                            </Card>
                          </div>
                        </motion.div>
                      </CarouselItem>
                    );
                  })}
              </CarouselContent>

              {/* Enhanced Navigation Arrows */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <CarouselPrevious className="relative border-amber-400/30 bg-stone-800/80 text-amber-400 transition-all duration-300 hover:scale-110 hover:border-amber-400 hover:bg-amber-400/20 hover:text-white" />
                <CarouselNext className="relative border-amber-400/30 bg-stone-800/80 text-amber-400 transition-all duration-300 hover:scale-110 hover:border-amber-400 hover:bg-amber-400/20 hover:text-white" />
              </div>
            </Carousel>
          </motion.div>
        )}

        {/* Bottom decorative elements */}
        <motion.div
          className="mt-8 flex justify-center"
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

        {/* Optional floating accent elements */}
        <motion.div
          className="absolute left-10 top-20 h-20 w-1 rounded-full bg-gradient-to-b from-amber-400/30 to-transparent"
          initial={{ height: 0 }}
          whileInView={{ height: 80 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute bottom-20 right-10 h-16 w-1 rounded-full bg-gradient-to-t from-orange-400/30 to-transparent"
          initial={{ height: 0 }}
          whileInView={{ height: 64 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default Reviews;
