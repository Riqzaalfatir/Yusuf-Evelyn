"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type OpeningProps = {
  setStart: (v: boolean) => void;
  namaTamu?: string;
};

const overlayVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.9, ease: "easeOut" as const, delay: 0.9 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1.0, ease: "easeInOut" as const, delay: 0 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 40 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.93,
    y: 30,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const, delay: 0.1 },
  },
};

const Opening = ({ setStart, namaTamu = "Sela" }: OpeningProps) => {
  const [open, setOpen] = useState<boolean>(true);

  // Kunci scroll saat Opening muncul
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOpen = (): void => {
    setOpen(false);
    document.body.style.overflow = "auto";
    setTimeout(() => {
      setStart(true);
    }, 600);
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="fixed inset-0 z-[100] flex justify-center items-center px-4"
        >
          <div className="absolute inset-0 z-[10] bg-black/30 lg:bg-black/60 backdrop-blur-sm lg:backdrop-blur-md" />

          {/* CONTENT CARD */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="relative bg-white rounded-xl md:rounded-2xl overflow-hidden w-[290px] md:w-[416px] shadow-xl flex flex-col z-[100] [box-shadow:0px_8px_11.6px_0px_rgba(0,0,0,0.54)]"
          >
            {/* FOTO */}
            <div className="relative w-full h-[180px] md:h-[220px] overflow-hidden z-10 lg:hidden">
              <Image
                src="/images/Opening/Pantai-Mobile.webp"
                alt="prewed"
                fill
                className="object-cover object-[50%_50%] md:object-[50%_70%]"
              />
            </div>

            <div className="relative w-full h-[180px] md:h-[220px] overflow-hidden z-10 hidden lg:block">
              <Image
                src="/images/Opening/Pantai-Dekstop.webp"
                alt="prewed"
                fill
                className="object-cover object-[50%_50%] md:object-[50%_70%]"
              />
            </div>

            {/* KONTEN TEXT */}
            <div className="relative flex flex-col items-center text-center px-4 pt-[29px] mb-[40px] lg:pt-[26px] lg:mb-[83px] flex-1 leading-none">


              <Image
                src="/images/Opening/Aset-Bawah.webp"
                alt="Pohon Golden"
                width={761}
                height={163}
                className="absolute -bottom-[50px] -left-[2vw] w-[250px] lg:-bottom-[86px]   lg:right-0 lg:w-[205px] z-[1]"
              />

              <Image
                src="/images/Opening/Aset-Atas.webp"
                alt="Pohon Golden"
                width={761}
                height={163}
                className="absolute top-[0px] right-[0vw] w-[280px] lg:-bottom-[86px]   lg:right-0 lg:w-[205px] z-[1]"
              />


              <p className="relative z-[2] text-[10px] lg:text-[14px] text-[#937E5B] font-ovo tracking-wide">
                THE WEDDING OF
              </p>
              <h1 className="relative z-[2] text-[20px] lg:text-[56px] text-[#937E5B] pt-[10px] lg:pt-[8px] font-bigCaslon">
                JUSUF & EVELYN
              </h1>
              <p className="relative z-[2] text-[12px] lg:text-[12px] text-[#937E5B] font-ovo pt-[16px] md:pt-[19px]">
                Dear Mr. /Mrs. / Ms.
              </p>
              <p className="relative z-[2] text-[14px] lg:text-[14px] text-[#937E5B] font-ovo pt-[14px] md:pt-[17px] break-words max-w-full">
                {namaTamu}
              </p>
              <p className="relative z-[2] text-[8px] lg:text-[12px] text-[#937E5B] font-ovo leading-[1.6] pt-[20px] md:pt-[23px] tracking-wide">
                We sincerely apologize
                <br />
                for any misspelling of names or titles.
              </p>
              <button
                onClick={handleOpen}
                className="relative z-[2] bg-[#937E5B] flex items-center justify-center text-[#FEF8EF] w-[184px] h-[33px] md:w-[220px] md:h-[40px] rounded-full uppercase font-ovo text-[14px] lg:text-[18px] mt-[17px] md:mt-[15px]"
              >
                <span>VIEW Invitation</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Opening;
