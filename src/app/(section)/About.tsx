"use client";
import Image from "next/image";
import Link from "next/link";

const About = ({}) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-900">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute right-1/4 top-1/4 h-32 w-32 animate-pulse rounded-full bg-amber-400/5"></div>
        <div className="bg-orange-400/8 absolute bottom-1/3 left-1/3 h-24 w-24 animate-pulse rounded-full delay-1000"></div>
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

      <div className="container relative z-20 mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <div className="inline-block">
            <span className="mb-4 block text-sm font-light uppercase tracking-[0.3em] text-amber-400">
              ✦ Turkish Heritage & Hospitality ✦
            </span>
            <h1 className="mb-6 text-6xl font-thin text-white md:text-8xl">
              <span className="block">The</span>
              <span className="block bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text font-light italic text-transparent">
                ADA
              </span>
              <span className="block">Experience</span>
            </h1>
            <div className="mx-auto h-0.5 w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <div className="order-2 space-y-8 lg:order-1">
            <div className="relative">
              <div className="absolute -left-6 top-0 h-full w-1 rounded-full bg-gradient-to-b from-amber-400 to-orange-600"></div>

              <blockquote className="mb-8 text-xl font-light italic leading-relaxed text-amber-100 md:text-2xl">
                "Where Turkish tradition meets modern elegance, creating
                unforgettable dining experiences in the heart of Manchester."
              </blockquote>

              <div className="space-y-6 leading-loose text-stone-300">
                <p className="text-lg">
                  At <span className="font-medium text-amber-300">ADA</span>,
                  our journey began with a
                  <span className="font-medium text-white">
                    {" "}
                    simple yet heartfelt vision
                  </span>{" "}
                  — to create a space where every guest feels welcomed and at
                  ease, while enjoying the
                  <span className="text-amber-300">
                    {" "}
                    rich and diverse flavors
                  </span>{" "}
                  of traditional Turkish cuisine. Each dish we serve is
                  thoughtfully crafted using fresh, high-quality ingredients and
                  <span className="font-medium text-white">
                    authentic recipes
                  </span>{" "}
                  that celebrate the essence of Turkey's culinary heritage.
                </p>

                <p className="text-lg">
                  Whether you're dropping in for a relaxed lunch, gathering with
                  loved ones for dinner, or celebrating a special moment,{" "}
                  <span className="font-medium text-amber-300">ADA</span> offers
                  more than just a meal — we provide a
                  <span className="font-medium text-white">
                    {" "}
                    warm, intimate experience
                  </span>{" "}
                  paired with
                  <span className="text-amber-300">attentive service</span> and
                  a genuine love for hospitality.
                </p>

                <p className="text-lg">
                  Located in the heart of{" "}
                  <span className="font-medium text-white">Manchester</span>,
                  our goal is to share the spirit and flavor of Turkish dining
                  with communities throughout the UK, all while staying true to
                  the
                  <span className="text-amber-300">
                    culture, warmth, and traditions
                  </span>{" "}
                  that define who we are.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-8">
              <Link href="/about-us">
                <button className="group relative overflow-hidden rounded-none border-2 border-transparent bg-gradient-to-r from-amber-600 to-orange-600 px-12 py-4 font-medium uppercase tracking-widest text-white transition-all duration-500 hover:border-amber-400 hover:bg-transparent hover:text-amber-400">
                  <span className="relative z-10">About Us</span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative order-1 lg:order-2">
            <div className="group relative">
              {/* Decorative frames inspired by Turkish motifs */}
              <div className="absolute -inset-4 rotate-1 transform rounded-lg bg-gradient-to-r from-amber-400/20 to-orange-500/20 transition-transform duration-500 group-hover:rotate-2"></div>
              <div className="absolute -inset-2 -rotate-1 transform rounded-lg bg-gradient-to-r from-orange-500/30 to-red-500/20 transition-transform duration-500 group-hover:-rotate-2"></div>

              {/* Main image container */}
              <div className="relative overflow-hidden rounded-lg bg-stone-800 shadow-2xl">
                <Image
                  src="/images/home/about/1a.JPG"
                  width={6000}
                  height={4000}
                  alt="ADA Turkish Restaurant Interior"
                  className="h-[500px] w-full object-cover transition-all duration-700 group-hover:scale-110 md:h-[600px]"
                />

                {/* Elegant overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-stone-900/20"></div>

                {/* Floating location badge */}
                <div className="absolute right-6 top-6">
                  <div className="rounded-full border border-amber-300/50 bg-amber-500/90 px-4 py-2 backdrop-blur-sm">
                    <p className="text-sm font-medium tracking-wide text-white">
                      Manchester
                    </p>
                  </div>
                </div>

                {/* Turkish-inspired accent */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-lg border border-amber-400/30 bg-black/60 p-6 backdrop-blur-sm">
                    <p className="text-lg font-light italic text-amber-300">
                      "Where Turkish warmth meets British hospitality"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative elements with Turkish flair */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center space-x-3">
            <div className="h-3 w-3 animate-bounce rounded-full bg-amber-400"></div>
            <div className="h-2 w-2 animate-bounce rounded-full bg-orange-500 delay-100"></div>
            <div className="h-4 w-4 animate-bounce rounded-full bg-red-500/70 delay-200"></div>
            <div className="h-2 w-2 animate-bounce rounded-full bg-orange-500 delay-300"></div>
            <div className="delay-400 h-3 w-3 animate-bounce rounded-full bg-amber-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
