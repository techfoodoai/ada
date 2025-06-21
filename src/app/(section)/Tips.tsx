"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Tips = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to(".reserve-one", {
        scrollTrigger: {
          trigger: ".reserve-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });

      gsap.to(".reserve-two", {
        scrollTrigger: {
          trigger: ".reserve-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });
    });

    mm.add("(min-width:501px)", () => {
      gsap.to(".reserve-one", {
        scrollTrigger: {
          trigger: ".reserve-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
      gsap.to(".reserve-two", {
        scrollTrigger: {
          trigger: ".reserve-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
    });
    gsap.to(".reserve-arrow", {
      scrollTrigger: {
        trigger: ".reserve-arrow",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      duration: 0.8,
    });

    gsap.to(".tips-container", {
      scrollTrigger: {
        trigger: ".tips-container",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      opacity: 1,
      duration: 0.8,
    });

    const splitType = document.querySelectorAll(".head-reserve");
    splitType.forEach((char) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" });
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.2,
        });
      }
    });
  }, []);

  const text = "ABASEEN";
  return (
    <section className="h-full w-full bg-transparent px-4 py-12 md:px-40 md:py-20">
      {/* <div className="absolute left-0 top-0 hidden h-full w-full items-start justify-center md:flex">
        <div className="z-30 ml-[108px] mr-[108px] h-full w-full xl:border-x-[0.25px] xl:border-x-primary"></div>
      </div> */}
      {/* <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div> */}

      <div className="flex flex-col items-center justify-center gap-10 md:gap-16">
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="reserve-one font-stone text-xl font-[200] text-primary md:-ml-[50px] md:text-3xl">
            Gallery
          </p>
          <p className="styled_section_head mt-[-28px] flex items-center justify-center gap-3 text-center uppercase text-primary">
            <Image
              src="/images/left.png"
              alt="left"
              width={44}
              height={12}
              className="reserve-arrow w-fit"
              style={{
                transform: "scale(0.5)",
              }}
            />
            <span className="head-reserve">
              {text.split("").map((char, index) => (
                <span key={index} className="key">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
            <Image
              src="/images/right.png"
              alt="right"
              width={44}
              height={12}
              className="reserve-arrow h-fit w-fit"
              style={{
                transform: "scale(0.5)",
              }}
            />
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <Image
            src="/images/home/tips/1.jpg"
            alt="left"
            width={6024}
            height={4024}
            className="h-[200px] w-full object-cover md:h-[400px]"
          />
          <Image
            src="/images/home/tips/2.jpg"
            alt="left"
            width={6024}
            height={4024}
            className="h-[200px] w-full object-cover md:h-[400px]"
          />
          <Image
            src="/images/home/tips/3.jpg"
            alt="left"
            width={6024}
            height={4024}
            className="h-[200px] w-full object-cover md:h-[400px]"
          />
          <Image
            src="/images/home/tips/4.jpg"
            alt="left"
            width={6024}
            height={4024}
            className="h-[200px] w-full object-cover md:h-[400px]"
          />
          <Image
            src="/images/home/tips/5.jpg"
            alt="left"
            width={6024}
            height={4024}
            className="h-[200px] w-full object-cover md:h-[400px]"
          />
          <Image
            src="/images/home/tips/6.jpg"
            alt="left"
            width={6024}
            height={4024}
            className="h-[200px] w-full object-cover md:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Tips;
