"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animation";
import useIsMobile from "@/hooks/useIsMobile";

const Hero = ({ start }: { start: boolean }) => {
  const isMobile = useIsMobile();

  return (
    <div id="hero">
      <div className="relative w-full overflow-hidden [aspect-ratio:390/844] lg:min-h-screen lg:aspect-auto">
        {isMobile === null ? null : isMobile ? (
          <Image
            src="/images/Hero/Pengantin.webp"
            alt="Jusuf & Evelyn"
            fill
            className="object-cover object-top"
            priority
          />
        ) : (
          <Image
            src="/images/Hero/dekstop/Bg-Hero.webp"
            alt="Jusuf & Evelyn"
            fill
            className="object-cover object-[50%_80%]"
            priority
          />
        )}

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0 }}
            className="absolute top-[9%] left-1/2 -translate-x-1/2 w-[158px] lg:top-[8%] lg:w-[211px] h-auto z-30"
        >
          <Image
            src="/images/Hero/Logo-JE.webp"
            alt="Provite Logo"
            width={250}
            height={250}
            className="w-full"
          />
        </motion.div>

        {isMobile ? (
          <div
            className="absolute top-0 left-0 w-full z-10"
            style={{
              height: "520px",
              background:
                "linear-gradient(to bottom, rgba(85,74,56,1) 5%, rgba(85,74,56,0.8) 40%, transparent 100%)",
            }}
          />
        ) : (
          <div
            className="absolute top-0 left-0 w-full z-10"
            style={{
              height: "80%",
              background:
                "linear-gradient(to bottom, rgba(85,74,56,0.8) 15%, rgba(85,74,56,0) 100%)",
            }}
          />
        )}

        <div className="absolute inset-0 flex flex-col items-center justify-start pt-[56.5%] lg:pt-[16%] text-center z-10">
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate={start ? "show" : "hidden"}
            transition={{ duration: 2.8, ease: "easeOut", delay: 0.2 }}
            className="text-white font-ovo text-[14px] lg:text-[20px] tracking-widest"
          >
            The Wedding of
          </motion.p>
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            animate={start ? "show" : "hidden"}
            transition={{ duration: 2.8, ease: "easeOut", delay: 0.5 }}
            className="text-white font-bigCaslon text-[32px] lg:text-[52px] lg:pt-1"
          >
            JUSUF & EVELYN
          </motion.h1>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate={start ? "show" : "hidden"}
            transition={{ duration: 2.8, ease: "easeOut", delay: 0.8 }}
            className="text-white font-ovo text-[14px] mt-1 lg:text-[20px]"
          >
            08 . 08. 2026
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

