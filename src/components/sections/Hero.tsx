import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero">
      <div className="relative w-full overflow-hidden [aspect-ratio:390/844] lg:[aspect-ratio:1763/945]">
        <Image
          src="/images/Hero/Pengantin.webp"
          alt="Jusuf & Evelyn"
          fill
          className="object-cover object-top lg:hidden"
          priority
        />

        <Image
          src="/images/Hero/Pengantin.svg"
          alt="Jusuf & Evelyn"
          fill
          className="object-cover object-bottom hidden lg:block"
          priority
        />

        <div
          className="absolute top-0 left-0 w-full z-10 lg:hidden"
          style={{
            height: "476px",
            background:
              "linear-gradient(to bottom, rgba(85,74,56,1) 0%, rgba(85,74,56,0.8) 40%, transparent 100%)",
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-start pt-[35%] text-center z-10">
          <p className="text-white font-ovo text-[14px] tracking-widest">
            The Wedding of
          </p>
          <h1 className="text-white font-bigCaslon text-[32px]">
            JUSUF & EVELYN
          </h1>
          <p className="text-white font-ovo text-[14px] mt-1">27 JUNE 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
