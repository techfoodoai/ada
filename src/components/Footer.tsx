// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { Icons } from "./Icon";
// import { motion } from "framer-motion";

// const Footer = () => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const socialIcons = [
//     {
//       href: "https://www.instagram.com/adaenfield/",
//       icon: Icons.instagram,
//       label: "Instagram",
//       color: "from-pink-500 to-purple-600",
//     },
//     {
//       href: "https://www.facebook.com/people/Ada-restaurant-enfield/100068848490925/",
//       icon: Icons.facebook,
//       label: "Facebook",
//       color: "from-blue-500 to-blue-700",
//     },
//     {
//       href: "https://x.com/adaenfield",
//       icon: Icons.twitter,
//       label: "Twitter",
//       color: "from-sky-400 to-blue-500",
//     },
//     {
//       href: "https://g.co/kgs/oewkUAT",
//       icon: Icons.google,
//       label: "Google",
//       color: "from-red-500 to-orange-500",
//     },
//   ];

//   const quickLinks = [
//     { href: "/", label: "Home", icon: "🏠" },
//     { href: "/menu", label: "Menu", icon: "📖" },
//     { href: "/about-us", label: "Our Story", icon: "📜" },
//     { href: "/table-booking", label: "Reservations", icon: "🍽️" },
//     { href: "/contact", label: "Contact Us", icon: "📞" },
//   ];

//   return (
//     <footer className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
//       {/* Dynamic Background Effects */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Floating geometric shapes */}
//         <motion.div
//           className="absolute left-10 top-20 h-20 w-20 rotate-45 border-2 border-amber-400/30"
//           animate={{
//             rotate: [45, 135, 45],
//             scale: [1, 1.1, 1],
//           }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute right-20 top-40 h-16 w-16 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20"
//           animate={{
//             y: [0, -20, 0],
//             opacity: [0.3, 0.6, 0.3],
//           }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute bottom-32 left-1/4 h-24 w-24 rounded-full border border-orange-400/20"
//           animate={{
//             scale: [1, 1.2, 1],
//             rotate: [0, 180, 360],
//           }}
//           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//         />

//         {/* Gradient orbs */}
//         <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 blur-3xl"></div>
//         <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-gradient-to-l from-orange-400/15 to-red-500/10 blur-3xl"></div>
//       </div>

//       {/* Elegant top border */}
//       <div className="relative">
//         <div className="h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
//         <div className="absolute left-1/2 top-0 h-1 w-32 -translate-x-1/2 transform bg-gradient-to-r from-orange-500 to-amber-500 blur-sm"></div>
//       </div>

//       <div className="container relative z-10 mx-auto px-6 lg:px-12">
//         {/* Main Footer Content */}
//         <motion.div
//           className="py-16 lg:py-20"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={containerVariants}
//         >
//           {/* Top Section - Logo & Brand */}
//           <motion.div className="mb-16 text-center" variants={itemVariants}>
//             <Link href="/" className="group inline-block">
//               <div className="relative">
//                 {/* Glow effect behind logo */}
//                 <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/30 to-amber-500/20 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"></div>
//                 <Image
//                   src="/images/logo.png"
//                   width={281}
//                   height={74}
//                   alt="ADA Restaurant Logo"
//                   className="relative h-auto w-40 transition-all duration-500 group-hover:scale-110 lg:w-48"
//                 />
//               </div>
//             </Link>

//             <motion.p
//               className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-300"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               Authentic flavors, unforgettable experiences. Discover the true
//               taste of Turkey at{" "}
//               <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text font-semibold text-transparent">
//                 ADA
//               </span>
//               .
//             </motion.p>
//           </motion.div>

//           {/* Content Grid */}
//           <div className="grid grid-cols-2 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-8">
//             {/* Quick Links - Left on mobile */}
//             <motion.div variants={itemVariants} className="order-1 space-y-6">
//               <h3 className="relative bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-lg font-semibold text-transparent md:text-xl">
//                 Quick Links
//                 <div className="absolute -bottom-2 left-0 h-1 w-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 md:w-12"></div>
//               </h3>
//               <nav className="space-y-3 md:space-y-4">
//                 {quickLinks.map((link, index) => (
//                   <motion.div
//                     key={link.href}
//                     whileHover={{ x: 8, scale: 1.05 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <Link
//                       href={link.href}
//                       className="group flex items-center space-x-2 text-sm text-stone-300 transition-all duration-300 hover:text-white md:space-x-3 md:text-base"
//                     >
//                       <span className="text-sm transition-transform duration-300 group-hover:scale-125 md:text-lg">
//                         {link.icon}
//                       </span>
//                       <span className="relative font-medium">
//                         {link.label}
//                         <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
//                       </span>
//                     </Link>
//                   </motion.div>
//                 ))}
//               </nav>
//             </motion.div>

//             {/* Contact Info - Right on mobile */}
//             <motion.div variants={itemVariants} className="order-2 space-y-6">
//               <h3 className="relative bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-lg font-semibold text-transparent md:text-xl">
//                 Contact Info
//                 <div className="absolute -bottom-2 left-0 h-1 w-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 md:w-12"></div>
//               </h3>
//               <div className="space-y-4 md:space-y-6">
//                 {/* Address */}
//                 <div className="group">
//                   <div className="mb-2 flex items-center space-x-2 md:mb-3 md:space-x-3">
//                     <div className="text-sm md:text-lg">📍</div>
//                     <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 md:text-sm">
//                       Address
//                     </span>
//                   </div>
//                   <Link
//                     href="https://g.co/kgs/oewkUAT"
//                     target="_blank"
//                     className="block transform pl-6 text-xs leading-relaxed text-stone-300 transition-colors transition-transform duration-300 hover:text-white group-hover:translate-x-2 md:pl-8 md:text-sm"
//                   >
//                     43 Silver St, Enfield EN1 3TN, United Kingdom
//                   </Link>
//                 </div>

//                 {/* Phone */}
//                 <div className="group">
//                   <div className="mb-2 flex items-center space-x-2 md:mb-3 md:space-x-3">
//                     <div className="text-sm md:text-lg">📞</div>
//                     <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 md:text-sm">
//                       Phone
//                     </span>
//                   </div>
//                   <Link
//                     href="tel:+442083672060"
//                     className="block transform pl-6 text-xs text-stone-300 transition-colors transition-transform duration-300 hover:text-white group-hover:translate-x-2 md:pl-8 md:text-sm"
//                   >
//                     +44 20 8367 2060
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Opening Hours - Full width on mobile, positioned after contact */}
//             <motion.div
//               variants={itemVariants}
//               className="order-3 col-span-2 space-y-6 md:col-span-1 lg:order-3"
//             >
//               <h3 className="relative bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-center text-lg font-semibold text-transparent md:text-left md:text-xl">
//                 Opening Hours
//                 <div className="absolute -bottom-2 left-1/2 h-1 w-8 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-amber-400 to-orange-500 md:left-0 md:w-12 md:translate-x-0"></div>
//               </h3>
//               <div className="group relative">
//                 <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/30 to-orange-500/30 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100"></div>
//                 <div className="relative rounded-2xl border border-amber-400/20 bg-gradient-to-br from-stone-800/80 to-stone-900/80 p-4 backdrop-blur-sm md:p-6">
//                   <div className="text-center">
//                     <div className="mb-2 text-xl md:text-2xl">🕘</div>
//                     <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-400 md:text-base">
//                       Daily
//                     </div>
//                     <div className="mb-2 text-lg font-light text-white md:text-2xl">
//                       9:00 AM - 11:00 PM
//                     </div>
//                     <div className="text-xs text-stone-400 md:text-sm">
//                       Monday - Sunday
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Social & CTA - Full width on mobile, positioned last */}
//             <motion.div
//               variants={itemVariants}
//               className="order-4 col-span-2 space-y-6 md:col-span-1 lg:order-4"
//             >
//               <h3 className="relative bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-center text-lg font-semibold text-transparent md:text-left md:text-xl">
//                 Connect With Us
//                 <div className="absolute -bottom-2 left-1/2 h-1 w-8 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-amber-400 to-orange-500 md:left-0 md:w-12 md:translate-x-0"></div>
//               </h3>

//               {/* Social Icons */}
//               <div className="grid grid-cols-4 gap-3 md:grid-cols-2">
//                 {socialIcons.map((social, index) => (
//                   <motion.div
//                     key={social.label}
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Link
//                       href={social.href}
//                       target="_blank"
//                       className={`group relative flex h-10 items-center justify-center rounded-xl bg-gradient-to-r md:h-12 ${social.color} overflow-hidden opacity-80 transition-all duration-300 hover:opacity-100`}
//                       aria-label={`Follow us on ${social.label}`}
//                     >
//                       <social.icon className="relative z-10 h-4 w-4 text-white md:h-5 md:w-5" />
//                       <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Book Table Button */}
//               <Link href="/table-booking">
//                 <motion.button
//                   className="relative w-full transform overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 px-4 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-amber-500 hover:to-orange-500 hover:shadow-2xl hover:shadow-amber-500/25 md:px-6 md:py-4"
//                   whileHover={{ y: -2 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <span className="relative z-10 flex items-center justify-center space-x-2">
//                     <span>🍽️</span>
//                     <span className="text-sm uppercase tracking-wide md:text-base">
//                       Book a Table
//                     </span>
//                   </span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
//                 </motion.button>
//               </Link>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Bottom Section */}
//         <motion.div
//           className="border-gradient-to-r border-t from-transparent via-amber-400/30 to-transparent py-8"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
//             <div className="text-center text-stone-400 md:text-left">
//               © 2025{" "}
//               <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text font-semibold text-transparent">
//                 ADA Restaurant
//               </span>
//               . All Rights Reserved.
//             </div>
//             <div className="flex items-center space-x-2 text-stone-400">
//               <span>Powered by</span>
//               <Link
//                 href="https://foodo.ai"
//                 target="_blank"
//                 className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text font-semibold text-transparent transition-all duration-300 hover:from-orange-400 hover:to-amber-300"
//               >
//                 Foodo
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Bottom border */}
//       <div className="relative">
//         <div className="h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
//         <div className="absolute left-1/2 top-0 h-1 w-32 -translate-x-1/2 transform bg-gradient-to-r from-orange-500 to-amber-500 blur-sm"></div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";
import { motion } from "framer-motion";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about-us", label: "Our Story" },
    { href: "/table-booking", label: "Reservations" },
    { href: "/contact", label: "Contact Us" },
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/adaenfield/",
      icon: Icons.instagram,
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/people/Ada-restaurant-enfield/100068848490925/",
      icon: Icons.facebook,
      label: "Facebook",
    },
    { href: "https://x.com/adaenfield", icon: Icons.twitter, label: "Twitter" },
    { href: "https://g.co/kgs/oewkUAT", icon: Icons.google, label: "Google" },
  ];

  return (
    <footer className="relative w-full bg-slate-900 text-white">
      {/* Elegant top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <motion.div
          className="py-16 lg:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Logo & Brand Section */}
          <motion.div
            className="mb-12 text-center lg:mb-16"
            variants={itemVariants}
          >
            <Link href="/" className="group inline-block">
              <Image
                src="/images/logo.png"
                width={281}
                height={74}
                alt="ADA Restaurant Logo"
                className="mx-auto h-auto w-36 transition-transform duration-300 group-hover:scale-105 lg:w-40"
              />
            </Link>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-300">
              Authentic Turkish cuisine in the heart of Manchester. Experience
              traditional flavors with modern elegance at{" "}
              <span className="font-medium text-amber-400">ADA</span>.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {/* Quick Links - Left on mobile */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="relative mb-6 text-lg font-semibold text-white">
                Quick Links
                <div className="absolute bottom-0 left-0 mt-2 h-0.5 w-12 bg-amber-400"></div>
              </h3>
              <nav className="space-y-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm font-medium text-stone-300 transition-colors duration-300 hover:text-amber-400"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info - Right on mobile */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="relative mb-6 text-lg font-semibold text-white">
                Contact Info
                <div className="absolute bottom-0 left-0 mt-2 h-0.5 w-12 bg-amber-400"></div>
              </h3>
              <div className="space-y-4">
                {/* Address */}
                <div>
                  <h4 className="mb-2 text-sm font-medium uppercase tracking-wider text-amber-400">
                    Address
                  </h4>
                  <Link
                    href="https://g.co/kgs/oewkUAT"
                    target="_blank"
                    className="block text-sm leading-relaxed text-stone-300 transition-colors duration-300 hover:text-white"
                  >
                    43 Silver St, Enfield EN1 3TN
                    <br />
                    United Kingdom
                  </Link>
                </div>

                {/* Phone */}
                <div>
                  <h4 className="mb-2 text-sm font-medium uppercase tracking-wider text-amber-400">
                    Phone
                  </h4>
                  <Link
                    href="tel:+442083672060"
                    className="text-sm text-stone-300 transition-colors duration-300 hover:text-white"
                  >
                    +44 20 8367 2060
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Opening Hours */}
            <motion.div
              variants={itemVariants}
              className="col-span-2 space-y-6 md:col-span-1"
            >
              <h3 className="relative mb-6 text-center text-lg font-semibold text-white lg:text-left">
                Opening Hours
                <div className="absolute bottom-0 left-1/2 mt-2 h-0.5 w-12 -translate-x-1/2 transform bg-amber-400 lg:left-0 lg:translate-x-0"></div>
              </h3>
              <div className="rounded-lg border border-stone-700 bg-stone-800/50 p-6 text-center">
                <div className="mb-3 text-sm font-medium uppercase tracking-wider text-amber-400">
                  Daily
                </div>
                <div className="mb-2 text-xl font-light text-white">
                  9:00 AM - 11:00 PM
                </div>
                <div className="text-sm text-stone-400">Monday - Sunday</div>
              </div>
            </motion.div>

            {/* Social & CTA */}
            <motion.div
              variants={itemVariants}
              className="col-span-2 space-y-6 md:col-span-1"
            >
              <h3 className="relative mb-6 text-center text-lg font-semibold text-white lg:text-left">
                Follow Us
                <div className="absolute bottom-0 left-1/2 mt-2 h-0.5 w-12 -translate-x-1/2 transform bg-amber-400 lg:left-0 lg:translate-x-0"></div>
              </h3>

              {/* Social Icons */}
              <div className="mb-6 flex justify-center space-x-4 lg:justify-start">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-stone-300 transition-all duration-300 hover:scale-110 hover:bg-amber-400 hover:text-slate-900"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>

              {/* Book Table Button */}
              {/* <Link href="/table-booking">
                <button className="mt-4 w-full rounded-lg bg-amber-600 px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition-all duration-300 hover:bg-amber-500 hover:shadow-lg">
                  Book a Table
                </button>
              </Link> */}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-stone-800 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-center text-sm text-stone-400 md:text-left">
              © 2025 <span className="text-amber-400">ADA Restaurant</span>.
              All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-stone-400">
              <div className="flex items-center space-x-2">
                <span>Powered by</span>
                <Link
                  href="https://foodo.ai"
                  target="_blank"
                  className="font-medium text-amber-400 transition-colors duration-300 hover:text-amber-300"
                >
                  Foodo
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
