// "use client";

// import { Button } from "@/components/ui/button";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect } from "react";
// import SplitType from "split-type";

// const ConnectWithUs = ({}) => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     const mm = gsap.matchMedia();
//     mm.add("(max-width:500px)", () => {
//       gsap.to(".connect-one", {
//         scrollTrigger: {
//           trigger: ".connect-one",
//           toggleActions: "restart none none none",
//           // start: "top 80%", // When the top of the .title enters 80% of the viewport
//           // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
//           // scrub: true
//         },
//         x: 0,
//         opacity: 1,
//         duration: 1,
//       });
//     });

//     mm.add("(min-width:501px)", () => {
//       gsap.to(".connect-one", {
//         scrollTrigger: {
//           trigger: ".connect-one",
//           toggleActions: "restart none none none",
//           // start: "top 80%", // When the top of the .title enters 80% of the viewport
//           // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
//           // scrub: true
//         },
//         x: 30,
//         opacity: 1,
//         duration: 1,
//       });
//     });

//     const splitType = document.querySelectorAll(".head-connect");
//     splitType.forEach((char) => {
//       if (char instanceof HTMLElement) {
//         const text = new SplitType(char, { types: "chars" });
//         gsap.from(text.chars, {
//           scrollTrigger: {
//             trigger: char,
//             start: "top 80%",
//             end: "top 20%",
//             scrub: true,
//             markers: false,
//           },
//           opacity: 0.2,
//           stagger: 0.4,
//         });
//       }
//     });

//     gsap.to(".connect-arrow", {
//       scrollTrigger: {
//         trigger: ".connect-arrow",
//         toggleActions: "restart none none none",
//         // start: "top 80%", // When the top of the .title enters 80% of the viewport
//         // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
//         // scrub: true
//       },
//       scale: 1,
//       duration: 0.8,
//     });
//   }, []);

//   const text = "Connect us";
//   return (
//     <section
//       id="connect"
//       className="relative flex w-full items-center justify-center overflow-hidden bg-transparent"
//     >
//       <div className="absolute left-0 top-0 hidden h-full w-full items-start justify-center md:flex">
//         <div className="z-30 ml-[108px] mr-[108px] h-full w-full xl:border-x-[0.25px] xl:border-x-primary"></div>
//       </div>
//       <div className="lines">
//         <div className="line"></div>
//         <div className="line"></div>
//         <div className="line"></div>
//         <div className="line"></div>
//       </div>
//       <div
//         className="left-6/12 top-5/12 absolute flex h-full w-full items-center justify-center overflow-hidden"
//         // style={{
//         //   borderRadius: '1533px',
//         //   background: 'radial-gradient(50% 50% at 50% 50%, rgba(226, 161, 75, 0.14) 0%, rgba(0, 0, 0, 0.00) 100%)',
//         //   filter: 'blur(67px)',
//         // }}
//       ></div>
//       <div className="flex max-w-[1250px] flex-col gap-12 px-4 py-12 lg:px-0 lg:py-24">
//         <div className="flex w-full flex-col items-center justify-center lg:flex-row">
//           <div className="flex w-full flex-col items-center justify-center gap-3">
//             <p className="connect-one font-stone text-xl font-[200] text-primary md:-ml-[50px] md:text-3xl">
//               Follow us
//             </p>
//             <p className="styled_section_head non-italic flex items-center justify-center gap-3 text-center uppercase text-primary">
//               <Image
//                 src="/images/left.png"
//                 alt="left"
//                 width={44}
//                 height={12}
//                 className="connect-arrow w-fit"
//                 style={{
//                   transform: "scale(0.5)",
//                 }}
//               />
//               <span className="head-connect text-2xl md:text-5xl">
//                 {text.split("").map((char, index) => (
//                   <span key={index} className="key">
//                     {char === " " ? "\u00A0" : char}
//                   </span>
//                 ))}
//               </span>
//               <Image
//                 src="/images/right.png"
//                 alt="right"
//                 width={44}
//                 height={12}
//                 className="connect-arrow h-fit w-fit"
//                 style={{
//                   transform: "scale(0.5)",
//                 }}
//               />
//             </p>
//           </div>
//           {/* <div className="mt-10 flex items-center gap-7">
//               <CarouselPrevious className="static" variant="ghost" />
//               <CarouselNext className="static" />
//             </div> */}
//         </div>
//         {/* <div className="w-full max-w-[1300px] flex flex-col md:flex-row justify-center items-center md:justify-between gap-6">
//           <div className="relative">
//             <div className="absolute w-full h-full border-[2px] rotate-6 hover:rotate-0 transition-all duration-500 ease-out z-40"></div>
//             <Image
//               src="/images/home/connect/image1.png"
//               width={380}
//               height={395}
//               alt="alt"
//               className="max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover"
//             />
//           </div>
//           <div className="relative">
//             <div className="absolute w-full h-full border-[2px] rotate-6 hover:rotate-0 transition-all duration-500 ease-out z-40"></div>
//             <Image
//               src="/images/home/connect/image2.png"
//               width={380}
//               height={395}
//               alt="alt"
//               className="max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover"
//             />
//           </div>
//           <div className="relative">
//             <div className="absolute w-full h-full border-[2px] rotate-6 hover:rotate-0 transition-all duration-500 ease-out z-40"></div>
//             <Image
//               src="/images/home/connect/image3.png"
//               width={380}
//               height={395}
//               alt="alt"
//               className="max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover"
//             />
//           </div>

//           <div className="relative">
//             <div className="absolute w-full h-full border-[2px] rotate-6 hover:rotate-0 transition-all duration-500 ease-out z-40"></div>
//             <Image
//               src="/images/home/connect/image4.png"
//               width={380}
//               height={395}
//               alt="alt"
//               className="max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover"
//             />
//           </div>
//         </div> */}

//         <div className="relative hidden w-full max-w-[1300px] md:flex">
//           <div className="grid w-full grid-cols-4">
//             <Image
//               src="/images/home/connect/image1.png"
//               width={380}
//               height={395}
//               alt="alt"
//               className="z-30 max-h-[250px] object-cover md:h-[300px] lg:max-h-[400px]"
//             />
//             <Image
//               src="/images/home/connect/image2.png"
//               width={380}
//               height={395}
//               alt="alt"
//               className="z-30 max-h-[250px] object-cover md:h-[300px] lg:max-h-[400px]"
//             />
//             <Image
//               src="/images/home/connect/image3.png"
//               width={380}
//               height={395}
//               alt="alt"
//               className="z-30 max-h-[250px] object-cover md:h-[300px] lg:max-h-[400px]"
//             />
//             <Image
//               src="/images/home/connect/image4.png"
//               width={380}
//               height={395}
//               alt="alt"
//               className="z-30 max-h-[250px] object-cover md:h-[300px] lg:max-h-[400px]"
//             />
//             <Image
//               src="/images/home/connect/5.png"
//               width={380}
//               height={395}
//               alt="alt"
//               className="z-30 max-h-[250px] object-cover md:h-[300px] lg:max-h-[400px]"
//             />
//             <Image
//               src="/images/home/connect/6.png"
//               width={380}
//               height={395}
//               alt="alt"
//               className="z-30 max-h-[250px] object-cover md:h-[300px] lg:max-h-[400px]"
//             />
//             <Image
//               src="/images/home/connect/7.png"
//               width={380}
//               height={395}
//               alt="alt"
//               className="z-30 max-h-[250px] object-cover md:h-[300px] lg:max-h-[400px]"
//             />
//             <Image
//               src="/images/home/connect/8.png"
//               width={380}
//               height={395}
//               alt="alt"
//               className="z-30 max-h-[250px] object-cover md:h-[300px] lg:max-h-[400px]"
//             />
//           </div>
//           <div className="absolute top-[270px] z-40 flex w-full justify-center">
//             <Link href="https://www.instagram.com/abaseenmcr/">
//               <Button
//                 className="flex items-center justify-center gap-3 px-10 py-7 uppercase text-white"
//                 variant="imageInverted"
//               >
//                 Follow Us On Instagram
//               </Button>
//             </Link>
//           </div>
//         </div>

//         <div className="relative flex w-full flex-col items-center justify-center gap-3 md:hidden">
//           <div className="grid w-full grid-cols-1 gap-3">
//             <Image
//               src="/images/home/connect/image1.png"
//               width={380}
//               height={395}
//               alt="alt"
//               className="z-30 max-h-[250px] object-cover md:h-[300px] lg:max-h-[400px]"
//             />
//             <Image
//               src="/images/home/connect/image2.png"
//               width={380}
//               height={395}
//               alt="alt"
//               className="z-30 max-h-[250px] object-cover md:h-[300px] lg:max-h-[400px]"
//             />
//           </div>
//           <div className="absolute z-40 flex w-full justify-center">
//             <Link href="https://www.instagram.com/vulounge?igsh=MXNveGEzZnhsNzJhYg==">
//               <Button
//                 className="flex items-center justify-center gap-3 px-10 py-7 uppercase text-white"
//                 variant="imageInverted"
//               >
//                 Follow Us On Instagram
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConnectWithUs;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Icons } from "@/components/Icon";

const ConnectWithUs: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-transparent pt-12 md:pt-24">
      {/* big screen */}
      <div className="hidden flex-col gap-8 md:flex md:gap-20">
        <div className="flex w-full flex-col gap-4 px-4 md:px-[60px] 2xl:px-[80px]">
          {/* <motion.h1
            className="pb-6 text-center text-3xl font-[400] uppercase tracking-[3.2px] text-primary md:pb-16 md:text-7xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            SCROLL YOUR INSTAGRAM
          </motion.h1> */}
          <p className="styled_section_head flex items-center justify-center gap-3 break-words text-center uppercase text-primary">
            <Image
              src="/images/left.png"
              alt="left"
              width={44}
              height={12}
              className="menu-arrow w-fit"
              style={{
                transform: "scale(0.5)",
              }}
            />
            <span className="head-menu max-w-72 md:max-w-full">
              SCROLL YOUR INSTAGRAM
            </span>
            <Image
              src="/images/right.png"
              alt="right"
              width={44}
              height={12}
              className="menu-arrow h-fit w-fit"
              style={{
                transform: "scale(0.5)",
              }}
            />
          </p>
          <div className="flex w-full flex-col gap-4 pt-12 md:flex-row">
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/1.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <motion.div
              className="flex w-full flex-col items-center justify-center gap-2 md:mt-16 md:w-[25%]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              {/* <Image
                src={"/images/home/follow/insta.svg"}
                width={160}
                height={160}
                alt="logo"
                className="w-12"
              /> */}
              <Link href={"https://www.instagram.com/antephan.baklava.uk/"}>
                <Icons.instagram className="h-24 w-24 text-primary" />
              </Link>
              <div>
                <Link
                  href={"https://www.instagram.com/antephan.baklava.uk/"}
                  target="_blank"
                  className="text-md text-center font-stone font-[400] uppercase text-primary md:text-xl"
                >
                  antephan.baklava.uk
                </Link>
              </div>
            </motion.div>
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/2.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/3.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/4.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-[50%]">
              {" "}
              <motion.img
                src={"/images/home/follow/5.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>

            <div className="z-0 flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/6.png"}
                width={160}
                height={160}
                alt="logo"
                className="z-0 h-[300px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/*mobile view */}
      <div className="flex flex-col gap-8 md:hidden md:gap-20">
        <div className="flex w-full flex-col gap-4 px-4 md:px-[60px] 2xl:px-[80px]">
          {/* <motion.h1
            className="pb-6 text-center text-3xl font-[400] uppercase tracking-[3.2px] text-primary md:pb-16 md:text-7xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            SCROLL YOUR INSTAGRAM
          </motion.h1> */}
          <p className="styled_section_head flex items-center justify-center gap-3 break-words text-center uppercase text-primary">
            <Image
              src="/images/left.png"
              alt="left"
              width={44}
              height={12}
              className="menu-arrow w-fit"
              style={{
                transform: "scale(0.5)",
              }}
            />
            <span className="head-menu max-w-72 md:max-w-full">
              SCROLL YOUR INSTAGRAM
            </span>
            <Image
              src="/images/right.png"
              alt="right"
              width={44}
              height={12}
              className="menu-arrow h-fit w-fit"
              style={{
                transform: "scale(0.5)",
              }}
            />
          </p>
          <div className="grid grid-cols-2 gap-2 pt-8">
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/1.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-auto w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <motion.div
              className="flex w-full flex-col items-center justify-center gap-2 md:mt-16 md:w-[25%]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              {/* <Image
                src={"/images/home/follow/insta.svg"}
                width={160}
                height={160}
                alt="logo"
                className="w-12"
              /> */}
              <Link href={"https://www.instagram.com/antephan.baklava.uk/"}>
                <Icons.instagram className="h-24 w-24 text-primary" />
              </Link>
              <div>
                <Link
                  href={"https://www.instagram.com/antephan.baklava.uk/"}
                  target="_blank"
                  className="text-md text-center font-stone font-[400] uppercase text-primary md:text-xl"
                >
                  antephan.baklava.uk
                </Link>
              </div>
            </motion.div>
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/2.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-auto w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/3.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-auto w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/4.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-auto w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            {/* <div className="w-full md:w-[50%]">
              {" "}
              <motion.img
                src={"/images/home/follow/5.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-auto w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div> */}

            <div className="z-0 flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/6.png"}
                width={160}
                height={160}
                alt="logo"
                className="z-0 h-auto w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
