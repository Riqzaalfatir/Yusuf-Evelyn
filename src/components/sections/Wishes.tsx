"use client";

import React, { useState } from "react";
import Image from "next/image";
import WishesCard from "@/components/popup/WishesCard";
import { dummyPesan } from "@/components/data/wishes";
import useIsMobile from "@/hooks/useIsMobile";
import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "@/lib/animation";

type PesanItem = {
  id: number;
  nama: string;
  pesan: string;
};

const Wishes = () => {
  const isMobile = useIsMobile();
  const [nama, setNama] = useState<string>("");
  const [pesan, setPesan] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [selectedMessage, setSelectedMessage] = useState<PesanItem | null>(
    null,
  );
  const [pesanList, setPesanList] = useState<PesanItem[]>(() => {
    if (typeof window === "undefined") return dummyPesan;
    const saved = localStorage.getItem("pesan");
    return saved ? JSON.parse(saved) : dummyPesan;
  });

  const handleSubmit = (): void => {
    if (!nama || !pesan) return;
    const newPesan: PesanItem = { id: Date.now(), nama, pesan };
    setPesanList((prev) => [newPesan, ...prev]);
    setShowPopup(true);
    setNama("");
    setPesan("");
  };

  return (
    <section
      id="wishes"
      className="relative w-full overflow-y-hidden overflow-x-hidden"
    >
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
      <div className="absolute top-0 left-0 w-full h-[60vw] lg:h-[35vw] z-20 bg-gradient-to-b from-white from-55% to-transparent" />
      {/* Gradient Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[110vw] lg:h-[30vw] z-20 bg-gradient-to-t from-white via-white to-transparent" />

      {/* KERANG KIRI ATAS */}
      <Image
        src="/images/Wishes/Kerang.webp"
        alt=""
        width={147}
        height={108}
        className="absolute top-[1.5%]  w-[20vw] left-[2.5vw]  z-[55] lg:top-[1%]  lg:w-[11vw] lg:left-[5vw]"
      />

    

      {/* ASET ATAS */}
      {isMobile === null ? null : isMobile ? (
        <img
          src="/images/Wishes/Aset-Atass.webp"
          alt="Pohon Kanan Bawah"
          className="absolute top-[0vw] z-[50]  pointer-events-none"
          style={{
            width: "125vw",
            height: "auto",
            left: "42%",
            transform: "translateX(-50%)",
            maxWidth: "none",
          }}
        />
      ) : (
        <img
          src="/images/Wishes/dekstop/Aset-Atas.webp"
          alt="Pohon Kanan Bawah"
          className="absolute -top-[0vw] z-[50]"
          style={{
            width: "120vw",
            height: "auto",
            left: "40%",
            transform: "translateX(-50%)",
            maxWidth: "none",
          }}
        />
      )}

  

      {/* ASET BAWAH */}
      {isMobile === null ? null : isMobile ? (
        <img
          src="/images/Wishes/AsetBawah.webp"
          alt="Pohon Kanan Bawah"
          className="absolute -bottom-[10.5vw] z-[50] pointer-events-none"
          style={{
            width: "138vw",
            height: "auto",
            left: "50.3%",
            transform: "translateX(-50%)",
            maxWidth: "none",
          }}
        />
      ) : (
        <img
          src="/images/Wishes/dekstop/AsetBawah.webp"
          alt="Pohon Kanan Bawah"
          className="absolute -bottom-[5.7vw] z-[50]   opacity-90"
          style={{
            width: "117vw",
            height: "auto",
            left: "50.5%",
            transform: "translateX(-50%)",
            maxWidth: "none",
          }}
        />
      )}

      {/* Konten */}
      <div className="relative z-60 flex flex-col items-center text-center px-[8.5vw] lg:px-[6.55vw]">
        <div
          className="absolute inset-0 bg-white inset-x-[8.5vw] lg:inset-x-[6.55vw]"
          style={{ boxShadow: "0px 4px 14.5px 0px rgba(0,0,0,0.62)" }}
        />

        <div className="relative z-[90] w-full px-[4.4vw] pt-[30vw] pb-[50.26vw] lg:pt-[9.986vw]  lg:pb-[23.5vw] lg:px-[1.32vw] flex flex-col items-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="font-bigCaslon text-[24px] lg:text-[2.116vw] text-[#937E5B] uppercase"
          >
            Share Your Wishes
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            <Image
              src="/images/EventOrder/Row.webp"
              alt="ornament"
              width={556}
              height={21}
              className="pt-[5px] lg:pt-[1vw] w-[156px] lg:w-[12.3vw]"
            />
          </motion.div>

          <div className="w-full max-w-[284px] lg:max-w-[37.302vw] flex flex-col gap-[20px] lg:gap-[0px] mt-[47px] lg:mt-[66px]">
            <motion.input
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut" }}
              type="text"
              value={nama}
              placeholder="Desy (Tester)"
              onChange={(e) => setNama(e.target.value)}
              className="w-full text-[#937E5B] font-creators lg:font-ovo border text-[12px] lg:text-[1.323vw] bg-transparent border-[#937E5B]/80 px-[13px] h-[33px] lg:h-[2.646vw] rounded-full outline-none placeholder:text-[#937E5B]/50"
            />

            <motion.textarea
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut" }}
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              className="w-full text-[#937E5B] font-creators lg:font-ovo border text-[12px] lg:text-[1.323vw] lg:mt-[1.323vw] bg-transparent border-[#937E5B]/80 px-[13px] h-[60px] lg:h-[17.262vw] rounded-xl outline-none placeholder:text-[#937E5B]/50 resize-none"
            />

            <motion.button
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut" }}
              onClick={handleSubmit}
              className="bg-[#937E5B] w-full rounded-full h-[33px] lg:h-[2.646vw] text-[12px] lg:text-[1.323vw] lg:mt-[1.323vw] font-ovo uppercase flex items-center justify-center gap-1.5 lg:gap-2 text-white"
            >
              <Image
                src="/images/Wishes/Panah.webp"
                alt="Kirim"
                width={50}
                height={50}
                className="object-contain w-[17px] lg:w-[1.4vw]"
              />
              Send
            </motion.button>

            {/* List pesan */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className={`w-full lg:h-[34.788vw] overflow-y-auto scrollbar-hide lg:mt-[2.579vw] ${
                showAll
                  ? "h-[320px] bg-transparent"
                  : "h-[320px] bg-[#937E5B] rounded-2xl"
              }`}
            >
              {!showAll ? (
                <div>
                  <div className="sticky top-0 w-full h-[18px] bg-[#937E5B] z-10" />
                  <div className="px-[13px] lg:px-[1.521vw] py-[2px] text-left">
                    {pesanList.slice(0, 8).map((item, index, array) => (
                      <div key={item.id}>
                        <p className="text-white font-ovo text-[14px] lg:text-[1.323vw] mb-[2px]">
                          {item.nama}
                        </p>
                        <p className="text-white font-ovo text-[12px] lg:text-[1.323vw] tracking-[0.5px] mb-[0.661vw]">
                          {item.pesan}
                        </p>
                        {index !== array.length - 1 && (
                          <div className="border-t border-white/40 mt-[8px] mb-[15px]" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="sticky bottom-0 w-full h-[18px] bg-[#937E5B] z-10" />
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-[2.5vw] lg:gap-[1vw] items-stretch">
                  {pesanList.map((item, index) => (
                    <motion.div
                      key={item.id}
                      variants={fadeIn}
                      initial="hidden"
                      animate="show"
                      transition={{
                        duration: 2.5,
                        ease: "easeOut",
                        delay: index * 0.1,
                      }}
                      onClick={() => setSelectedMessage(item)}
                      className="rounded-xl overflow-hidden shadow-md bg-[#937E5B] flex flex-col cursor-pointer active:scale-95 transition-transform duration-150 h-full"
                    >
                      <div className="p-[10px] lg:p-[15px] relative flex-1 flex flex-col justify-center">
                        <p className="absolute top-[6px] left-[8px] text-[28px] font-bold font-bigCaslon text-white/30 leading-none">
                          "
                        </p>
                        <p className="font-ovo text-[10px] lg:text-[1.2vw] text-white/90 text-center mt-5 mb-2 line-clamp-4 leading-[14px] lg:leading-[1.2vw]">
                          {item.pesan}
                        </p>
                      </div>
                      <div className="bg-[#7A6240] py-[8px] flex items-center justify-center px-4">
                        <p className="text-white/90 text-center line-clamp-1 text-[10px] lg:text-[1vw] font-ovo">
                          — {item.nama}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            <WishesCard
              data={selectedMessage}
              onClose={() => setSelectedMessage(null)}
            />

            <motion.button
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut" }}
              onClick={() => setShowAll(!showAll)}
              className="bg-[#937E5B] w-full rounded-full h-[33px] lg:h-[2.646vw] text-[12px] lg:text-[1.323vw] lg:mt-[1.323vw] font-ovo uppercase flex items-center justify-center gap-1.5 lg:gap-2.5 text-white"
            >
              <img
                src="/images/Wishes/Pesan.webp"
                alt="Pesan"
                className="w-[15px] lg:w-[1.4vw]"
              />
              {showAll ? "BACK" : "VIEW ALL MESSAGES"}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Popup sukses kirim */}
      {showPopup && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#2E1D14]/40 backdrop-blur-[4px] px-6">
          <div className="relative overflow-hidden rounded-[28px] border border-[#713324]/20 bg-[#F6EBDD]/95 w-full max-w-[330px]">
            <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#C58B63] via-[#E2C6AA] to-[#C58B63]" />
            <div className="px-7 pt-9 pb-7 flex flex-col items-center text-center">
              <div className="w-[72px] h-[72px] rounded-full bg-[#713324]/80 border border-[#713324]/10 flex items-center justify-center mb-5">
                <Image
                  src="/images/Wishes/Pesan.svg"
                  alt="Success"
                  width={34}
                  height={34}
                  className="object-contain opacity-90"
                />
              </div>
              <h3 className="font-creators text-[30px] leading-none text-[#713324]">
                Thank You
              </h3>
              <div className="w-[70px] h-[1px] bg-[#713324]/30 my-4" />
              <p className="font-creators text-[12px] leading-[22px] text-[#713324]/85 max-w-[240px]">
                Your wishes and prayers mean so much to us. Thank you for
                sharing your kind words on our special day.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-7 bg-[#713324] text-[#FEF8EF] font-trajanRegular uppercase tracking-[1.5px] text-[11px] px-8 h-[38px] rounded-full"
              >
                Close
              </button>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#C58B63] via-[#E2C6AA] to-[#C58B63]" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Wishes;
