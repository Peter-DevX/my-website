"use client";

import { FaLocationArrow } from "react-icons/fa";
import { cn } from "./lib/utils";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="pointer-events-none fixed inset-0 z-30 flex items-center justify-center">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />
      </div>
      <div className="relative z-40 flex flex-col items-center justify-center">
        {/* <h1 className="text-4xl font-bold text-white">
          Build your next project
        </h1>
        <p className="mt-4 text-lg text-white/80">
          Supercharge your development with stunning visuals and clean code.
        </p> */}
      </div>

      {/* GRID */}
      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-transparent dark:bg-[#000319]">
        <div
          //  className={cn(
          //    "absolute inset-0",
          //    "[background-size:40px_40px]",
          //    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_0px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_2px)]",
          //    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_0.5px)]"
          //  )}
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,rgba(228,228,231,0.1)_1px,transparent_0px),linear-gradient(to_bottom,rgba(228,228,231,0.5)_1px,transparent_2px)]",
            "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.19)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.19)_1px,transparent_0.5px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#000319]"></div>
        {/* <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          Backgrounds
        </p> */}
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Welcome to Creativity and Innovation
          </h2>
          <TextGenerateEffect
            className="text-center text-[1.2rem] md:text-5xl sm:text-6xl"
            duration={0.9}
            filter={false}
            words={"Transforming Concepts into Seamless User Experiences"}
          />
          <p className="text-center md:tracking-wider text-sm mb-4 ">
            Hi I&apos;m Peter, a Web Developer based in Ghana
          </p>
          <a href="#about">
            <MagicButton
              title="Explore"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
