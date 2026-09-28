import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:py-20">
      <div className="rounded-2xl border border-[#222630] bg-[#15171D] p-5 sm:p-8 lg:p-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">

          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#C2F800] sm:mb-5 sm:text-sm">
              WORKOUT LIBRARY
            </p>

            <h1 className="font-oswald text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              TRAIN WITH INTENT.
              <br />
              LOG EVERY SET.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-6 text-[#9CA3AF] sm:mt-7 sm:text-base md:text-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <a
              href="#library"
              className="mt-6 inline-block rounded-xl bg-[#C2F800] px-5 py-3 text-sm font-bold uppercase text-black transition hover:bg-[#d0ff33] sm:mt-8 sm:px-6 sm:py-4"
            >
              Browse Workouts
            </a>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] overflow-hidden rounded-xl">
              <Image
                src="/banner.png"
                alt="Workout"
                width={500}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;