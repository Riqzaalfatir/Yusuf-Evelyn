import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animation";
import useIsMobile from "@/hooks/useIsMobile";

const About = () => {
  const isMobile = useIsMobile();

  return (
    <section
      id="tentang"
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
      <div className="absolute top-0 left-0 w-full h-[65vw] lg:h-[43vw]  z-20 bg-gradient-to-b from-white from-55% to-transparent" />
      {/* Gradient Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[75vw] lg:h-[45vw]  z-20 bg-gradient-to-t from-white via-white to-transparent" />

      {/* RANTING */}
      {isMobile === null ? null : isMobile ? (
        <Image
          src="/images/About/Ranting.webp"
          alt=""
          width={147}
          height={108}
          className="absolute top-[53.5%] w-[30vw] right-0 z-20"
        />
      ) : (
        <Image
          src="/images/About/dekstop/Ranting.webp"
          alt=""
          width={147}
          height={108}
          className="absolute top-[40.5%] w-[15vw] right-0 z-20"
        />
      )}

      {/* ASET ATAS */}
      {isMobile === null ? null : isMobile ? (
        <img
          src="/images/About/Aset-Atas.webp"
          alt=""
          className="absolute -top-[1vw] z-[50] pointer-events-none"
          style={{
            width: "140vw",
            height: "auto",
            left: "67%",
            transform: "translateX(-50%)",
            maxWidth: "none",
          }}
        />
      ) : (
        <img
          src="/images/About/dekstop/Aset-Atas.webp"
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

      {/* GIF SEWED - bottom left */}
<img
  src="/images/About/seawed.gif"
  alt=""
  className="absolute -bottom-[2.5vw] -left-[20vw] lg:-bottom-[3.5vw] lg:-left-[10vw] z-[60] w-[52vw] lg:w-[31vw] pointer-events-none"
/>

      {/* ASET BAWAH */}
      {isMobile === null ? null : isMobile ? (
        <img
          src="/images/About/AsetBawahh.webp"
          alt=""
          className="absolute -bottom-[2vw] z-[50] pointer-events-none"
          style={{
            width: "140vw",
            height: "auto",
            left: "36%",
            transform: "translateX(-50%)",
            maxWidth: "none",
          }}
        />
      ) : (
        <img
          src="/images/About/dekstop/AsetBawah.webp"
          alt=""
          className="absolute -bottom-[1vw] z-[50] opacity-90"
          style={{
            width: "102vw",
            height: "auto",
            left: "51%",
            transform: "translateX(-50%)",
            maxWidth: "none",
          }}
        />
      )}

      {/* Konten KOTAK */}
      <div className="relative z-60 flex flex-col items-center text-center pt-[8vw] px-[8.5vw] lg:pt-0 lg:px-[6.55vw]">
        <div
          className="absolute inset-0 bg-white inset-x-[8.5vw] lg:inset-x-[6.55vw]"
          style={{ boxShadow: "0px 4px 14.5px 0px rgba(0,0,0,0.62)" }}
        />

        <div className="relative z-[90] w-full px-[4.4vw] pt-[21.8vw] pb-[45.9vw] lg:pt-[15vw] lg:pb-[25.13vw] lg:px-[1.32vw] flex flex-col items-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="font-ovo text-[14px] lg:text-[1.32vw] text-[#937E5B]"
          >
            "From His fullness we have all received,
            <br />
            grace upon grace."
            <span className="block pt-[6vw] lg:pt-[1.5vw]">John 1:16</span>
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              src="/images/About/Kerang.webp"
              alt="ornament"
              width={175}
              height={175}
              className="pt-[6.4vw] lg:pt-[3.7vw] w-[75px] lg:w-[6.61vw]"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.3 }}
            className="font-century text-[14px] lg:text-[1.32vw] text-[#937E5B] pt-[32px] lg:pt-[3.2vw]"
          >
            We request the honour of your presence <br className="lg:hidden" />
            at the wedding of <br />
            our beloved son and daughter
          </motion.p>

          <div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:mt-[4.04vw] lg:gap-[12.7vw]">
            {/* FOTO COWO */}
            <div className="flex flex-col items-center leading-none mt-[26px] lg:mt-0">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="rounded-full overflow-hidden w-[200px] h-[261px] lg:w-[17.13vw] lg:h-[22.42vw]"
              >
                <Image
                  src="/images/About/Pengantin-LakiLaki.webp"
                  alt="Jusuf Aurum Merukh"
                  width={400}
                  height={461}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="font-bigCaslon text-[20px] lg:text-[2.12vw] text-[#937E5B] pt-[41px]"
              >
                JUSUF AURUM MERUKH
              </motion.h2>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="font-ovo text-[13px] lg:text-[1.19vw] text-[#937E5B] pt-[20px] lg:pt-[3.5vw]"
              >
                The Son of
              </motion.p>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="font-ovo text-[14px] lg:text-[1.19vw] text-[#937E5B] pt-[14px] lg:pt-[1.5vw] leading-[25px] lg:leading-[1.8vw]"
              >
                Mr. RUDOLF JOHANES MERUKH and
                <span className="block">Mrs. ALLENDINE ZUSANE LUNTUNGAN</span>
              </motion.p>
            </div>

            {/* FOTO CEWE */}
            <div className="flex flex-col items-center leading-none mt-[55px] lg:mt-0">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="rounded-full overflow-hidden w-[200px] h-[261px] lg:w-[17.13vw] lg:h-[22.42vw]"
              >
                <Image
                  src="/images/About/Pengantin-Perempuan.webp"
                  alt="Evelyn Nathania Ovani"
                  width={500}
                  height={561}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="font-bigCaslon text-[20px] lg:text-[2.12vw] text-[#937E5B] pt-[39px]"
              >
                EVELYN NATHANIA OVANI
              </motion.h2>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="font-ovo text-[13px] lg:text-[1.19vw] text-[#937E5B] pt-[20px] lg:pt-[3.5vw]"
              >
                The Daughter of
              </motion.p>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="font-ovo text-[14px] lg:text-[1.19vw] text-[#937E5B] pt-[14px] lg:pt-[1.5vw] leading-[25px] lg:leading-[1.8vw]"
              >
                Mr. SUTANDI OVANI and
                <span className="block">Mrs. LINA OSA</span>
              </motion.p>
            </div>
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.4 }}
            className="font-ovo text-[14px] lg:text-[1.19vw] text-[#937E5B] mt-[46px] lg:mt-[6.2vw]"
          >
            We would be honoured <br />
            by your presence and blessing.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;

// BELUM DI USEISMOBILE KAN
// 1.19vw = 18px
// 2.12vw = 32px
// 1.32   = 20px

// import React from "react";
// import Image from "next/image";

// const About = () => {
//   return (
//     <section
//       id="tentang"
//       className="relative w-full overflow-y-hidden overflow-x-hidden"
//     >
//       <Image
//         alt="Bg Marmer"
//         src="/images/About/Bg-Marmer.svg"
//         fill
//         className="object-cover object-bottom lg:hidden"
//       />

//       <Image
//         alt="Bg Marmer"
//         src="/images/About/dekstop/Bg-Marmer.svg"
//         fill
//         className="object-cover object-bottom hidden lg:block"
//       />

//       {/* Gradient Top */}
//       <div className="absolute top-0 left-0 w-full h-[65vw] lg:h-[43vw]  z-20 bg-gradient-to-b from-white from-55% to-transparent" />
//       {/* Gradient Bottom */}
//       <div className="absolute bottom-0 left-0 w-full h-[75vw] lg:h-[45vw]  z-20 bg-gradient-to-t from-white via-white to-transparent" />

//       <Image
//         src="/images/About/Ranting.webp"
//         alt=""
//         width={147}
//         height={108}
//         className="absolute top-[53%]  w-[30vw] right-0 z-20 lg:hidden"
//       />

//       <Image
//         src="/images/About/dekstop/Ranting.webp"
//         alt=""
//         width={147}
//         height={108}
//         className="absolute top-[40.5%] w-[15vw] right-0 z-20 hidden lg:block"
//       />

//       {/* ASET ATAS MOBILE */}
//       <img
//         src="/images/About/Aset-Atas.webp"
//         alt="Pohon Kanan Bawah"
//         className="absolute -top-[1vw] z-[50] lg:hidden pointer-events-none"
//         style={{
//           width: "140vw",
//           height: "auto",
//           left: "67%",
//           transform: "translateX(-50%)",
//           maxWidth: "none",
//         }}
//       />

//       {/* ASET BAWAH MOBILE */}
//       <img
//         src="/images/About/Aset-Bawah.webp"
//         alt="Pohon Kanan Bawah"
//         className="absolute -bottom-[2vw] z-[50] lg:hidden pointer-events-none"
//         style={{
//           width: "140vw",
//           height: "auto",
//           left: "36%",
//           transform: "translateX(-50%)",
//           maxWidth: "none",
//         }}
//       />

//       {/* ASET ATAS DEKSTOP */}
//       <img
//         src="/images/About/dekstop/Aset-Atas.webp"
//         alt="Pohon Kanan Bawah"
//         className="absolute -top-[1vw] z-[50] hidden lg:block"
//         style={{
//           width: "102vw",
//           height: "auto",
//           left: "49.5%",
//           transform: "translateX(-50%)",
//           maxWidth: "none",
//         }}
//       />

//       {/* ASET BAWAH DEKSTOP */}
//       <img
//         src="/images/About/dekstop/Aset-Bawahh.webp"
//         alt="Pohon Kanan Bawah"
//         className="absolute -bottom-[0vw] z-[50] hidden lg:block opacity-90"
//         style={{
//           width: "120vw",
//           height: "auto",
//           left: "41%",
//           transform: "translateX(-50%)",
//           maxWidth: "none",
//         }}
//       />

//       {/* Konten KOTAK */}
//       <div className="relative z-60 flex flex-col items-center text-center pt-[8vw] px-[8.5vw] lg:pt-0 lg:px-[6.55vw]">
//         {/* KOTAK — absolute, z rendah → ketutup gradient ✅ */}
//         <div
//           className="absolute inset-0 bg-white inset-x-[8.5vw] lg:inset-x-[6.55vw]"
//           style={{ boxShadow: "0px 4px 14.5px 0px rgba(0,0,0,0.62)" }}
//         />

//         {/* ISI KONTEN — sibling kotak, z tinggi → di atas gradient ✅ */}
//         <div className="relative z-[90] w-full px-[4.4vw] pt-[21.8vw] pb-[45.9vw] lg:pt-[15vw] lg:pb-[25.13vw] lg:px-[1.32vw] flex flex-col items-center">
//           <p className="font-ovo text-[14px] lg:text-[1.32vw] text-[#937E5B]">
//             "From His fullness we have all received,
//             <br />
//             grace upon grace."
//             <span className="block pt-[6vw] lg:pt-[1.5vw]">John 1:16</span>
//           </p>

//           <Image
//             src="/images/About/Kerang.webp"
//             alt="ornament"
//             width={175}
//             height={175}
//             className="pt-[6.4vw] lg:pt-[3.7vw] w-[75px] lg:w-[6.61vw]"
//           />

//           <p className="font-century text-[14px] lg:text-[1.32vw] text-[#937E5B] pt-[32px] lg:pt-[3.2vw]">
//             We request the honour of your presence <br className="lg:hidden" />
//             at the wedding of <br />
//             our beloved son and daughter
//           </p>

//           <div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:mt-[4.04vw] lg:gap-[12.7vw]">
//             {/* FOTO COWO */}
//             <div className="flex flex-col items-center leading-none mt-[26px] lg:mt-0">
//               <div className="rounded-full overflow-hidden w-[200px] h-[261px] lg:w-[17.13vw] lg:h-[22.42vw]">
//                 <Image
//                   src="/images/About/Pengantin-Lakilaki.svg"
//                   alt="Jusuf Aurum Merukh"
//                   width={400}
//                   height={461}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//               <h2 className="font-bigCaslon text-[20px] lg:text-[2.12vw] text-[#937E5B] pt-[41px]">
//                 JUSUF AURUM MERUKH
//               </h2>
//               <p className="font-ovo text-[13px] lg:text-[1.19vw] text-[#937E5B] pt-[20px] lg:pt-[3.5vw]">
//                 The Son of
//               </p>
//               <p className="font-ovo text-[14px] lg:text-[1.19vw] text-[#937E5B] pt-[14px] lg:pt-[1.5vw] leading-[25px] lg:leading-[1.8vw]">
//                 Mr. RUDOLF JOHANES MERUKH and
//                 <span className="block">Mrs. ALLENDINE ZUSANE LUNTUNGAN</span>
//               </p>
//             </div>

//             {/* FOTO CEWE */}
//             <div className="flex flex-col items-center leading-none mt-[55px] lg:mt-0">
//               <div className="rounded-full overflow-hidden w-[200px] h-[261px] lg:w-[17.13vw] lg:h-[22.42vw]">
//                 <Image
//                   src="/images/About/Pengantin-Perempuan.svg"
//                   alt="Evelyn Nathania Ovani"
//                   width={500}
//                   height={561}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//               <h2 className="font-bigCaslon text-[20px] lg:text-[2.12vw] text-[#937E5B] pt-[39px]">
//                 EVELYN NATHANIA OVANI
//               </h2>
//               <p className="font-ovo text-[13px] lg:text-[1.19vw] text-[#937E5B] pt-[20px] lg:pt-[3.5vw]">
//                 The Daughter of
//               </p>
//               <p className="font-ovo text-[14px] lg:text-[1.19vw] text-[#937E5B] pt-[14px] lg:pt-[1.5vw] leading-[25px] lg:leading-[1.8vw]">
//                 Mr. WIBOWO SANTOSO and
//                 <span className="block">Mrs. IMELDA SIEN</span>
//               </p>
//             </div>
//           </div>

//           <p className="font-ovo text-[14px] lg:text-[1.19vw] text-[#937E5B] mt-[46px] lg:mt-[6.2vw]">
//             We would be honoured <br />
//             by your presence and blessing.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// BELUM DI DEKSTOPKAN
// import React from "react";
// import Image from "next/image";

// const About = () => {
//   return (
//     <section
//       id="tentang"
//       className="relative w-full overflow-y-hidden overflow-x-hidden"
//     >
//       <Image
//         alt="Bg Marmer"
//         src="/images/About/Bg-Marmer.svg"
//         fill
//         className="object-cover object-bottom"
//       />

//       {/* Gradient Top */}
//       <div className="absolute top-0 left-0 w-full h-[65vw] z-20 bg-gradient-to-b from-white from-55% to-transparent" />
//       {/* Gradient Bottom */}
//       <div className="absolute bottom-0 left-0 w-full h-[75vw] z-20 bg-gradient-to-t from-white via-white to-transparent" />

//       {/* <Image
//         src="/images/About/Ornament-KiriAtas.webp"
//         alt=""
//         width={129}
//         height={104}
//         className="absolute top-0 w-[33.08vw] left-0 z-50"
//       />

//       <Image
//         src="/images/About/Glitter.webp"
//         alt=""
//         width={142}
//         height={305}
//         className="absolute top-0  w-[36.41vw] right-0 z-50"
//       /> */}

//       <Image
//         src="/images/About/Ranting.webp"
//         alt=""
//         width={147}
//         height={108}
//         className="absolute top-[53%]  w-[30vw] right-0 z-20"
//       />

//       {/* <Image
//         src="/images/About/Rumput-Kerang.webp"
//         alt=""
//         width={220}
//         height={80}
//         className="absolute -bottom-[1.3vw] w-[60vw] -left-[32vw] z-50"
//       />

//       <Image
//         src="/images/About/Bintang-Kerang.webp"
//         alt=""
//         width={177}
//         height={177}
//         className="absolute -bottom-[3vw] -right-[1vw] z-50"
//       /> */}

//       {/* Layer Atas */}
//       {/* <div className="absolute top-0 left-0 w-[100vw] z-40">
//         <Image
//           src="/images/About/tes2.png"
//           alt=""
//           width={577}
//           height={457}
//           className="w-full h-auto"
//         />
//       </div> */}

//       {/* Layer Bawah */}
//       {/* <div className="absolute bottom-0 left-0 w-[100vw] h-[47vw] z-40 ">
//         <Image
//           src="/images/About/Layer-Bawah.webp"
//           alt=""
//           fill
//           className="object-cover"
//         />
//       </div> */}

//       {/* ASET ATAS */}
//       <img
//         src="/images/About/Aset-Atas.webp"
//         alt="Pohon Kanan Bawah"
//         className="absolute -top-[1vw] z-[50]"
//         style={{
//           width: "140vw",
//           height: "auto",
//           left: "67%",
//           transform: "translateX(-50%)",
//           maxWidth: "none",
//         }}
//       />

//       {/* ASET BAWAH */}
//       <img
//         src="/images/About/Aset-Bawah.webp"
//         alt="Pohon Kanan Bawah"
//         className="absolute -bottom-[2vw] z-[50]"
//         style={{
//           width: "140vw",
//           height: "auto",
//           left: "36%",
//           transform: "translateX(-50%)",
//           maxWidth: "none",
//         }}
//       />

//       {/* Konten KOTAK */}
//       <div className="relative z-60 flex flex-col items-center text-center pt-[8vw] px-[8.5vw]">
//         {/* KOTAK — absolute, z rendah → ketutup gradient ✅ */}
//         <div
//           className="absolute inset-0 bg-white inset-x-[8.5vw]"
//           style={{ boxShadow: "0px 4px 14.5px 0px rgba(0,0,0,0.62)" }}
//         />

//         {/* ISI KONTEN — sibling kotak, z tinggi → di atas gradient ✅ */}
//         <div className="relative z-[90] w-full px-[4.4vw] pt-[21.8vw] pb-[45.9vw] flex flex-col items-center">
//           <p className="font-ovo text-[14px] text-[#937E5B]">
//             "From His fullness we have all received,
//             <br />
//             grace upon grace."
//             <span className="block pt-[6vw]">John 1:16</span>
//           </p>

//           <Image
//             src="/images/About/Kerang.webp"
//             alt="ornament"
//             width={75}
//             height={75}
//             className="pt-[6.4vw]"
//           />

//           <p className="font-century text-[14px] text-[#937E5B] pt-[32px]">
//             We request the honour of your presence <br />
//             at the wedding of <br />
//             our beloved son and daughter
//           </p>

//           <div className="flex flex-col items-center leading-none mt-[26px]">
//             <div className="rounded-full overflow-hidden w-[200px] h-[261px]">
//               <Image
//                 src="/images/About/Pengantin-Lakilaki.svg"
//                 alt="Jusuf Aurum Merukh"
//                 width={200}
//                 height={261}
//                 className="object-cover w-full h-full"
//               />
//             </div>
//             <h2 className="font-bigCaslon text-[20px] text-[#937E5B] pt-[41px]">
//               JUSUF AURUM MERUKH
//             </h2>
//             <p className="font-ovo text-[13px] text-[#937E5B] pt-[20px]">
//               The Son of
//             </p>
//             <p className="font-ovo text-[14px] text-[#937E5B] pt-[14px] leading-[25px]">
//               Mr. RUDOLF JOHANES MERUKH and
//               <span className="block">Mrs. ALLENDINE ZUSANE LUNTUNGAN</span>
//             </p>
//           </div>

//           <div className="flex flex-col items-center leading-none mt-[55px]">
//             <div className="rounded-full overflow-hidden w-[200px] h-[261px]">
//               <Image
//                 src="/images/About/Pengantin-Perempuan.svg"
//                 alt="Evelyn Nathania Ovani"
//                 width={200}
//                 height={261}
//                 className="object-cover w-full h-full"
//               />
//             </div>
//             <h2 className="font-bigCaslon text-[20px] text-[#937E5B] pt-[39px]">
//               EVELYN NATHANIA OVANI
//             </h2>
//             <p className="font-ovo text-[13px] text-[#937E5B] pt-[20px]">
//               The Daughter of
//             </p>
//             <p className="font-ovo text-[14px] text-[#937E5B] pt-[14px] leading-[25px]">
//               Mr. WIBOWO SANTOSO and
//               <span className="block">Mrs. IMELDA SIEN</span>
//             </p>
//           </div>

//           <p className="font-ovo text-[14px] text-[#937E5B] mt-[46px]">
//             We would be honoured <br />
//             by your presence and blessing.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
