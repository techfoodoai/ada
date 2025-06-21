import { useRestaurant } from "@/context/RestaurantContext";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ModelBox from "@/components/ModelBox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FireEmberButton from "@/components/FireEmberButton";

const Special = ({}) => {
  const { modelData } = useRestaurant();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to(".special-one", {
        scrollTrigger: {
          trigger: ".special-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });

      gsap.to(".special-two", {
        scrollTrigger: {
          trigger: ".special-two",
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
      gsap.to(".special-one", {
        scrollTrigger: {
          trigger: ".special-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
      gsap.to(".special-two", {
        scrollTrigger: {
          trigger: ".special-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
    });

    const splitType = document.querySelectorAll(".head-special");
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
    gsap.to(".special-arrow", {
      scrollTrigger: {
        trigger: ".special-arrow",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      duration: 0.8,
    });
  }, []);

  return (
    <section className="relative flex h-full w-full justify-center bg-[#0f1d22]">
      <div
        className="absolute left-0 top-0 z-10 h-full w-full opacity-10"
        style={{
          backgroundImage: "url('/images/mobilebg.jpg')",
        }}
      />
      <div className="z-30 flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <h3 className="special-one font-merriweather text-base italic text-primary md:-ml-[50px] md:text-xl">
          Recommendations
        </h3>
        <p className="styled_section_head non-italic flex items-center justify-center gap-3 text-center uppercase text-primary">
          <Image
            src="/images/left.png"
            alt="left"
            width={44}
            height={12}
            className="special-arrow w-fit"
            style={{
              transform: "scale(0.5)",
            }}
          />
          <span className="head-welcome font-merriweather">
            {" "}
            Our best
            <br />
            specialties
          </span>
          <Image
            src="/images/right.png"
            alt="right"
            width={44}
            height={12}
            className="special-arrow h-fit w-fit"
            style={{
              transform: "scale(0.5)",
            }}
          />
        </p>
        <div className="relative z-20 flex min-h-[400px] w-full flex-col items-center justify-center px-2">
          <Carousel
            className="carousal-item w-full md:w-[1200px]"
            style={{
              transform: "scale(1.3)",
              opacity: 0,
            }}
          >
            <CarouselContent className="">
              {modelData?.map((model, index) => (
                <CarouselItem
                  key={index}
                  className="flex flex-col items-center justify-center md:basis-1/2 lg:basis-1/3"
                >
                  <ModelBox
                    src={model.modelPath.glb}
                    width="300px"
                    height="300px"
                    cameraOrbit="0deg 40deg 0deg 5m"
                    fieldOfView="25deg"
                    cameraTarget="0m 0m 0m"
                  />
                  <div className="flex w-full items-center justify-center pb-6">
                    <p className="min-h-[80px] max-w-[300px] pt-12 text-center font-inter text-xl text-primary">
                      {formatModelName(model.name)}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="hidden h-12 w-12 bg-transparent text-primary shadow-2xl outline-none md:flex"
              variant="default"
            />
            <CarouselNext
              className="hidden h-12 w-12 bg-transparent text-primary shadow-2xl outline-none md:flex"
              variant="default"
            />
            <div className="flex items-center justify-center gap-7 pt-12 md:hidden">
              <CarouselPrevious
                className="static h-12 w-12 bg-[#0e1719] text-primary shadow-2xl outline-none"
                variant="default"
              />
              <CarouselNext
                className="static h-12 w-12 bg-[#0e1719] text-primary shadow-2xl outline-none"
                variant="default"
              />
            </div>
          </Carousel>
        </div>
        <div className="flex w-full items-center justify-center py-5">
          <Link href="/menu">
            <FireEmberButton
              className="uppercase"
              colorScheme="gold"
              size="small"
            >
              View Menu
            </FireEmberButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Special;

const formatModelName = (name: string) => {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
