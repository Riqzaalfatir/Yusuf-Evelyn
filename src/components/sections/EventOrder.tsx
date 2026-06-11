import React from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animation";

const EventOrder = () => {
  const isMobile = useIsMobile();

  return (
    <section
      id="eventorder"
      className="relative w-full overflow-y-hidden overflow-x-hidden"
    >
      {/* BG MARMER */}
      {isMobile === null ? null : isMobile ? (
        <Image
          alt="Bg Marmer"
          src="/images/About/Bg-Marmer.svg"
          fill
          className="object-cover object-bottom"
        />
      ) : (
        <Image
          alt="Bg Marmer"
          src="/images/About/dekstop/Bg-Marmer.svg"
          fill
          className="object-cover object-bottom"
        />
      )}

      {/* Gradient Top */}
      <div className="absolute top-0 left-0 w-full h-[80vw] lg:h-[45vw] z-20 bg-gradient-to-b from-white from-55% to-transparent" />
      {/* Gradient Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[110vw] lg:h-[55vw] z-20 bg-gradient-to-t from-white via-white to-transparent" />

      {/* BINTANG */}
      <Image
        src="/images/EventOrder/Bintang-Laut.webp"
        alt=""
        width={129}
        height={104}
        className="absolute top-[8vw] lg:top-[2.1vw] w-[30.08vw] lg:w-[16vw] right-[3vw] lg:right-[6vw] z-[51]"
      />

      {/* KERANG KIRI */}
      <Image
        src="/images/EventOrder/Kerang.webp"
        alt=""
        width={147}
        height={108}
        className="absolute top-[41.5%]  w-[23.5vw] lg:top-[23.5%] lg:w-[11vw] -left-[1.5vw] lg:left-[1.5%] z-20 "
      />

      {/* RANTING DESKTOP */}
      {isMobile === false && (
        <Image
          src="/images/About/dekstop/Ranting.webp"
          alt=""
          width={147}
          height={108}
          className="absolute top-[51%] w-[16vw] right-0 z-20"
        />
      )}

      {/* ASET ATAS */}
      {isMobile === null ? null : isMobile ? (
        <img
          src="/images/EventOrder/Aset-Atas.webp"
          alt=""
          className="absolute -top-[5vw] z-[50] pointer-events-none"
          style={{
            width: "105vw",
            height: "auto",
            left: "48%",
            transform: "translateX(-50%)",
            maxWidth: "none",
          }}
        />
      ) : (
        <img
          src="/images/EventOrder/dekstop/Aset-Atas.webp"
          alt=""
          className="absolute -top-[1vw] z-[50]"
          style={{
            width: "102vw",
            height: "auto",
            left: "49.5%",
            transform: "translateX(-50%)",
            maxWidth: "none",
          }}
        />
      )}

    

      {/* SEWED */}
       <img
        src="/images/About/Sewed.gif"
        alt=""
        className="absolute -bottom-[25vw] -right-[35vw] w-[86vw] lg:-bottom-[10vw] lg:-right-[15vw] z-[60]  lg:w-[41vw] pointer-events-none scale-x-[-1]"
      />

      <img
        src="/images/EventOrder/fish.gif"
        alt=""
        className="absolute bottom-[12vw] -right-[2vw] w-[60vw] lg:bottom-[6vw] lg:right-[0vw] z-[60]  lg:w-[27vw] pointer-events-none scale-x-[-1]"
      />

      {/* ASET BAWAH */}
      {isMobile === null ? null : isMobile ? (
        <img
          src="/images/EventOrder/AsetBawah.webp"
          alt=""
          className="absolute -bottom-[8vw] z-[50] pointer-events-none"
          style={{
            width: "130vw",
            height: "auto",
            left: "54%",
            transform: "translateX(-50%)",
            maxWidth: "none",
          }}
        />
      ) : (
        <img
          src="/images/EventOrder/dekstop/AsetBawah.webp"
          alt=""
          className="absolute -bottom-[0.7vw] z-[50] opacity-90"
          style={{
            width: "110vw",
            height: "auto",
            left: "45%",
            transform: "translateX(-50%)",
            maxWidth: "none",
          }}
        />
      )}

      {/* Konten */}
      <div className="relative z-60 flex flex-col items-center text-center pt-[16.92vw] lg:pt-0 px-[8.5vw] lg:px-[6.55vw]">
        <div
          className="absolute inset-0 bg-white inset-x-[8.5vw] lg:inset-x-[6.55vw]"
          style={{ boxShadow: "0px 4px 14.5px 0px rgba(0,0,0,0.62)" }}
        />

        <div className="relative z-[90]  w-full px-[4.4vw] pt-[29.74vw] pb-[52vw] lg:pt-[22.5vw] lg:pb-[27vw] lg:px-[1.32vw] flex flex-col items-center leading-none">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="font-bigCaslon text-[24px] lg:text-[2.116vw] text-[#937E5B] uppercase"
          >
            EVENT ORDER
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className=""
          >
            <Image
              src="/images/EventOrder/Row.webp"
              alt="ornament"
              width={556}
              height={21}
              className="pt-[10px] lg:pt-[1.5vw] w-[156px] lg:w-[12.302vw]"
            />
          </motion.div>

          {/* FRIDAY 7 AGUSTUS */}
          <div className="flex flex-col items-center justify-center leading-none">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="font-bigCaslon text-[16px] lg:text-[1.587vw] text-[#937E5B] pt-[39px] lg:pt-[4vw]"
            >
              FRIDAY, 7 AUGUST 2026
            </motion.h3>

            {/* TEA PAI */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut" }}
            >
              <p className="uppercase font-ovo text-[14px] lg:text-[1.323vw]  text-[#937E5B] pt-[32px] lg:pt-[3.2vw]">
                TEA PAI
              </p>
              <p className="uppercase font-ovo text-[14px] lg:text-[1.323vw]  text-[#937E5B] pt-[25px] lg:pt-[3vw]">
                16.30 WITA
              </p>
              <p className="font-ovo text-[14px] lg:text-[1.190vw] text-[#937E5B] leading-[20px] lg:leading-[1.852vw] pt-[18px] lg:pt-[2.3vw]">
                at Legong Room <br />
                Sofitel Bali Nusa Dua Beach Resort
              </p>
              <p className="font-ovo text-[14px] lg:text-[1.190vw] text-[#937E5B] leading-[20px] lg:leading-[1.852vw] pt-[15px] lg:pt-[2vw]">
                ITDC Tourism Complex <br />
                Jl. Nusa Dua Lot N5, Benoa, South Kuta, Bali
              </p>
              <a
                href="https://www.google.com/maps/dir//Sofitel+Bali+Nusa+Dua+Beach+Resort,+Itdc+Tourism+Complex,+Jl.+Nusa+Dua+Lot+N5,+Benoa,+South+Kuta,+Badung+Regency,+Bali+80363/@-8.794992,115.2156879,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd24322042a2c9f:0x9c15915f406531c3!2m2!1d115.2299236!2d-8.7916892?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="block underline font-ovo text-[13px] lg:text-[1.323vw] text-[#937E5B] mt-[18px] lg:mt-[3.5vw]"
              >
                Google Maps
              </a>
            </motion.div>

            {/* WELCOME DINNER */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut" }}
            >
              <p className="uppercase font-ovo text-[14px] lg:text-[1.323vw] text-[#937E5B] pt-[57px] lg:pt-[3.7vw]">
                WELCOME DINNER
              </p>
              <p className="uppercase font-ovo text-[14px] lg:text-[1.323vw] text-[#937E5B] pt-[25px] lg:pt-[3vw]">
                18.00 WITA
              </p>
              <p className="font-ovo text-[14px] lg:text-[1.190vw] text-[#937E5B] leading-[20px] lg:leading-[1.9vw] pt-[18px] lg:pt-[2.3vw]">
                at Kecak Ballroom <br />
                Sofitel Bali Nusa Dua Beach Resort
              </p>
              <p className="font-ovo text-[14px] lg:text-[1.190vw] text-[#937E5B] leading-[20px] lg:leading-[1.9vw] pt-[15px] lg:pt-[2vw]">
                ITDC Tourism Complex <br />
                Jl. Nusa Dua Lot N5, Benoa, South Kuta, Bali
              </p>

              <a
                href="https://www.google.com/maps/dir//Sofitel+Bali+Nusa+Dua+Beach+Resort,+Itdc+Tourism+Complex,+Jl.+Nusa+Dua+Lot+N5,+Benoa,+South+Kuta,+Badung+Regency,+Bali+80363/@-8.794992,115.2156879,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd24322042a2c9f:0x9c15915f406531c3!2m2!1d115.2299236!2d-8.7916892?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="block underline font-ovo text-[14px] lg:text-[1.323vw] text-[#937E5B] mt-[18px] lg:mt-[3.5vw]"
              >
                Google Maps
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="w-full flex justify-center"
          >
            <div className="w-3 h-3 lg:w-[1.058vw] lg:h-[1.058vw] rounded-full bg-[#937E5B] mt-[36px] mb-[32px] lg:mt-[4.762vw] lg:mb-[5.026vw]  mx-auto" />
          </motion.div>

          {/* SATURDAY 8 AGUSTUS */}
          <div className="flex flex-col items-center justify-center leading-none">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="font-bigCaslon text-[16px] lg:text-[1.587vw] text-[#937E5B]"
            >
              SATURDAY, 8 AUGUST 2026
            </motion.h3>

            {/* HOLY */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className=" flex flex-col items-center justify-center leading-none"
            >
              <p className="uppercase font-ovo text-[14px] lg:text-[1.323vw]  text-[#937E5B] pt-[32px] lg:pt-[3vw]">
                HOLY MATRIMONY
              </p>
              <p className="uppercase font-ovo text-[14px] lg:text-[1.323vw]  text-[#937E5B] pt-[30px] lg:pt-[3vw]">
                15.00 WITA
              </p>
              <p className="font-ovo text-[14px] lg:text-[1.190vw] text-[#937E5B] leading-[20px] lg:leading-[1.9vw] pt-[18px] lg:pt-[2.3vw]">
                at Jewel Chapel <br />
                Sofitel Bali Nusa Dua Beach Resort
              </p>
              <p className="font-ovo text-[14px] lg:text-[1.190vw] text-[#937E5B] leading-[20px] lg:leading-[1.9vw] pt-[15px] lg:pt-[2vw]">
                ITDC Tourism Complex <br />
                Jl. Nusa Dua Lot N5, Benoa, South Kuta, Bali
              </p>
            </motion.div>

            {/* COCKTAIL HOUR */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className=" flex flex-col items-center justify-center leading-none"
            >
              <p className="uppercase font-ovo text-[14px] lg:text-[1.323vw]  text-[#937E5B] pt-[44px] lg:pt-[5.159vw] leading-[20px]">
                COCKTAIL HOUR <br />
                FOLLOWED DINNER RECEPTION
              </p>
              <p className="uppercase font-ovo text-[14px] lg:text-[1.323vw]  text-[#937E5B] pt-[28px] lg:pt-[3vw]">
                17.00 WITA
              </p>
              <p className="font-ovo text-[14px] lg:text-[1.190vw] text-[#937E5B] leading-[20px] lg:leading-[1.852vw] pt-[18px] lg:pt-[2.3vw]">
                at Retreat Garden <br />
                Sofitel Bali Nusa Dua Beach Resort
              </p>
              <p className="font-ovo text-[14px] lg:text-[1.190vw] text-[#937E5B] leading-[20px] lg:leading-[1.852vw] pt-[15px] lg:pt-[2vw]">
                ITDC Tourism Complex <br />
                Jl. Nusa Dua Lot N5, Benoa, South Kuta, Bali
              </p>
              <a
                href="https://www.google.com/maps/dir//Sofitel+Bali+Nusa+Dua+Beach+Resort,+Itdc+Tourism+Complex,+Jl.+Nusa+Dua+Lot+N5,+Benoa,+South+Kuta,+Badung+Regency,+Bali+80363/@-8.794992,115.2156879,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd24322042a2c9f:0x9c15915f406531c3!2m2!1d115.2299236!2d-8.7916892?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="block underline font-ovo text-[14px] lg:text-[1.323vw]  text-[#937E5B] mt-[45px] lg:mt-[3.5vw]"
              >
                Google Maps
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="w-full flex justify-center"
          >
            <div className="w-3 h-3 lg:w-[1.058vw] lg:h-[1.058vw] rounded-full bg-[#937E5B] mt-[39px] mb-[35px] lg:mt-[4.762vw] lg:mb-[5.026vw] mx-auto" />
          </motion.div>

          {/* SUNDAY  9 AGUSTUS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="flex flex-col items-center justify-center leading-none"
          >
            <h3 className="font-bigCaslon text-[16px] lg:text-[1.587vw] text-[#937E5B]">
              SUNDAY, 9 AUGUST 2026
            </h3>
            <p className="uppercase font-ovo text-[14px] lg:text-[1.323vw]  text-[#937E5B] pt-[40px] lg:pt-[3.241vw]">
              THANKSGIVING SERVICE
            </p>
            <p className="uppercase font-ovo text-[14px] lg:text-[1.323vw]  text-[#937E5B] pt-[30px] lg:pt-[3vw]">
              15.00 WITA
            </p>
            <p className="font-ovo text-[14px] lg:text-[1.190vw] text-[#937E5B] leading-[20px] lg:leading-[1.852vw] pt-[18px] lg:pt-[2.3vw]">
              at Apurva Chapel <br />
              The Apurva Kempinski Bali
              <span className="block pt-[12px] lg:pt-[1.8vw]">
                Jl. Raya Nusa Dua Selatan No.4, Bali
              </span>
            </p>

            <a
              href="google.com/maps/place/Jl.+Raya+Nusa+Dua+Selatan+No.4,+Benoa,+Kec.+Kuta+Sel.,+Kabupaten+Badung,+Bali+80361/data=!4m2!3m1!1s0x2dd25cc10e95aa23:0x7067fe56d86c5b9b?sa=X&ved=1t:242&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-ovo text-[14px] lg:text-[1.323vw]  text-[#937E5B] mt-[20px] lg:mt-[3.5vw]"
            >
              Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventOrder;
