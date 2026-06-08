// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// type OpeningProps = {
//   setStart: (v: boolean) => void;
//   namaTamu?: string;
// };

// const overlayVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { duration: 1.9, ease: "easeOut" as const, delay: 0.9 },
//   },
//   exit: {
//     opacity: 0,
//     transition: { duration: 1.0, ease: "easeInOut" as const, delay: 0 },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, scale: 0.88, y: 40 },
//   show: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: {
//       duration: 1.0,
//       ease: [0.22, 1, 0.36, 1] as const,
//       delay: 0.5,
//     },
//   },
//   exit: {
//     opacity: 0,
//     scale: 0.93,
//     y: 30,
//     transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const, delay: 0.1 },
//   },
// };

// const Opening = ({ setStart, namaTamu = "Sela" }: OpeningProps) => {
//   const [open, setOpen] = useState<boolean>(true);

//    // Kunci scroll saat Opening muncul
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   const handleOpen = (): void => {
//     setOpen(false);
//     document.body.style.overflow = "auto";
//     setTimeout(() => {
//       setStart(true);
//     }, 600);
//   };

//   return (
//     <AnimatePresence mode="wait">
//       {open && (
//         <motion.div
//           variants={overlayVariants}
//           initial="hidden"
//           animate="show"
//           exit="exit"
//           className="fixed inset-0 z-[100] flex justify-center items-center px-4"
//         >
          
//           <div className="absolute inset-0 z-[10] bg-black/30 lg:bg-black/60 backdrop-blur-sm lg:backdrop-blur-md" />

//           {/* CONTENT CARD */}
//           <motion.div
//             variants={cardVariants}
//             initial="hidden"
//             animate="show"
//             exit="exit"
//             className="relative bg-[#EADCC8] rounded-xl md:rounded-2xl overflow-hidden w-[290px] md:w-[416px] shadow-xl flex flex-col z-[100] [box-shadow:0px_8px_11.6px_0px_rgba(0,0,0,0.54)]"
//           >
//             {/* FOTO */}
//             <div className="relative w-full h-[180px] md:h-[220px] overflow-hidden z-10">
//               <Image
//                 src="/images/Opening/Pengantin..png"
//                 alt="prewed"
//                 fill
//                 className="object-cover object-[50%_46%] md:object-[50%_70%]"
//               />
//             </div>

//             {/* KONTEN TEXT */}
//             <div className="relative flex flex-col items-center text-center px-4 pt-[30px] mb-[60px] lg:pt-[26px] lg:mb-[83px] flex-1 leading-none">
//               <Image
//                 src="/images/Opening/Ranting-KiriAtas.png"
//                 alt="RantingKiriAtas"
//                 width={503}
//                 height={74}
//                 className="absolute top-0 left-0 w-[103px] lg:w-[133px] z-[1]"
//               />
//               <Image
//                 src="/images/Opening/Ranting-KananAtas.png"
//                 alt="RantingKiriAtas"
//                 width={503}
//                 height={74}
//                 className="absolute top-0 right-0 w-[103px] lg:w-[123px] z-[1]"
//               />


//               <Image
//                 src="/images/Opening/Pohon-Golden.png"
//                 alt="Pohon Golden"
//                 width={761}
//                 height={163}
//                 className="absolute -bottom-[65px] lg:-bottom-[78px]  -left-[5px] lg:-left-[0px] w-[61px] lg:w-[75px] z-[1]"
//               />
//               <Image
//                 src="/images/Opening/Pohon-GoldenKanan.png"
//                 alt="Pohon Golden"
//                 width={761}
//                 height={163}
//                 className="absolute top-[110px] right-[0px] w-[61px] lg:top-[155px] lg:right-[0px] lg:w-[85px] z-[1]"
//               />

//               <Image
//                 src="/images/Opening/Aset-KiriBawah..png"
//                 alt="Pohon Golden"
//                 width={761}
//                 height={163}
//                 className="absolute -bottom-16 left-0 w-[151px] lg:-bottom-[86px] lg:-left-1 lg:w-[211px] z-[1]"
//               />
//               <Image
//                 src="/images/Opening/Daun-Akar.png"
//                 alt="Pohon Golden"
//                 width={761}
//                 height={163}
//                 className="absolute -bottom-16 left-8 w-[80px] lg:-bottom-[86px]  lg:left-6 lg:w-[100px]  z-[0]"
//               />
//               <Image
//                 src="/images/Opening/Daun-Akar.png"
//                 alt="Pohon Golden"
//                 width={761}
//                 height={163}
//                 className="absolute -bottom-16 lg:-bottom-[86px] left-20 w-[70px] lg:left-[110px] lg:w-[90px] z-[0]"
//               />
//               <Image
//                 src="/images/Opening/Daun-Akar.png"
//                 alt="Pohon Golden"
//                 width={761}
//                 height={163}
//                 className="absolute -bottom-16 lg:-bottom-[86px] left-32 w-[70px] lg:left-[150px] lg:w-[90px] z-[0]"
//               />
//               <Image
//                 src="/images/Opening/Daun-Akar.png"
//                 alt="Pohon Golden"
//                 width={761}
//                 height={163}
//                 className="absolute -bottom-16 lg:-bottom-[86px] left-36 w-[70px] lg:left-[220px] lg:w-[90px] z-[0]"
//               />
//               <Image
//                 src="/images/Opening/Aset-tambahan.png"
//                 alt="Pohon Golden"
//                 width={761}
//                 height={163}
//                 className="absolute -bottom-16 left-4 w-[171px] lg:-bottom-[84px] lg:left-[48px] lg:w-[220px] z-[1]"
//               />
//               <Image
//                 src="/images/Opening/Aset-KananBawah.png"
//                 alt="Pohon Golden"
//                 width={761}
//                 height={163}
//                 className="absolute -bottom-16 right-0 w-[151px] lg:-bottom-[86px]   lg:right-0 lg:w-[205px] z-[1]"
//               />

//               <p className="relative z-[2] text-[10px] lg:text-[14px] text-[#713324] font-creators tracking-wide">
//                 THE WEDDING OF
//               </p>
//               <h1 className="relative z-[2] text-[36px] lg:text-[56px] text-[#713324] pt-[12px] lg:pt-[8px] font-cylburn">
//                 Jacky & Jessie
//               </h1>
//               <p className="relative z-[2] text-[10px] lg:text-[14px] text-[#713324] font-creators pt-[14px] md:pt-[19px]">
//                 Dear Mr. /Mrs. / Ms.
//               </p>
//               <p className="relative z-[2] text-[14px] lg:text-[18px] text-[#713324] font-creators pt-[14px] md:pt-[17px]">
//                 {namaTamu}
//               </p>
//               <p className="relative z-[2] text-[8px] lg:text-[12px] text-[#713324] font-creators leading-[1.6] pt-[17px] md:pt-[23px] tracking-wide">
//                 We sincerely apologize
//                 <br />
//                 for any misspelling of names or titles.
//               </p>
//               <button
//                 onClick={handleOpen}
//                 className="relative z-[2] bg-[#E2C6AA] flex items-center justify-center text-[#713324] w-[184px] h-[33px] md:w-[220px] md:h-[40px] rounded-full uppercase font-creators text-[12px] lg:text-[18px] mt-[16px] md:mt-[15px]"
//               >
//                 <span>VIEW Invitation</span>
//               </button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Opening;