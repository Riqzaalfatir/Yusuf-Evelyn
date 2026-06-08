"use client";

import React, { useState } from "react";
import Image from "next/image";
import WishesCard from "@/components/popup/WishesCard";
import { dummyPesan } from "@/components/data/wishes";

type PesanItem = {
  id: number;
  nama: string;
  pesan: string;
};

const Wishes = () => {
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
    <section className="relative w-full overflow-y-hidden overflow-x-hidden">
      <Image
        src="/images/About/Bg-Marmer.svg"
        alt=""
        fill
        className="object-cover object-bottom"
      />

      {/* Gradient Top */}
      <div className="absolute top-0 left-0 w-full h-[37vw] z-30 bg-gradient-to-b from-white from-65% to-transparent" />
      {/* Gradient Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[50vw] z-30 bg-gradient-to-t from-white via-white to-transparent" />

      {/* ORNAMENT */}
      {/* Layer Atas */}
      <div className="absolute top-0 -right-[4vw] w-[120vw] h-[10vw] z-40 ">
        <Image
          src="/images/Wishes/atas.svg"
          alt=""
          width={1077}
          height={157}
          className="object-cover"
        />
      </div>

      {/* KERANG KIRI ATAS */}
      <Image
        src="/images/Wishes/Kerang.webp"
        alt=""
        width={147}
        height={108}
        className="absolute top-[3%]  w-[20vw] left-[5vw] z-40"
      />

      {/* Layer Bawah */}
<div className="absolute -bottom-[1vw] -left-[5vw] w-[110vw] h-[60vw] z-40 overflow-hidden">
  <Image
    src="/images/Wishes/Layer-Bawah.webp"
    alt=""
    fill
    className="object-cover"
  />
</div>

 {/* RUMPUT BAWAH Kiri  */}
                                <Image
                                  src="/images/Wishes/Rumput.webp"
                                  alt=""
                                  width={356}
                                  height={356}
                                  className="absolute -bottom-[7vw] w-[39vw] left-[0vw] z-50"
                                />

 {/* BINTANG KERANG BAWAH KANAN  */}
                                <Image
                                  src="/images/Wishes/Bintang-Kerang.webp"
                                  alt=""
                                  width={356}
                                  height={356}
                                  className="absolute -bottom-[7vw] w-[39vw] right-[0vw] z-50"
                                />

      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center text-center px-[8.5vw]">
        <div
          className="bg-white w-full px-[4.4vw] pt-[30vw] pb-[50.26vw] flex flex-col items-center"
          style={{ boxShadow: "0px 4px 14.5px 0px rgba(0,0,0,0.62)" }}
        >
          <h2 className="font-bigCaslon text-[24px] text-[#937E5B] uppercase">
            Share Your Wishes
          </h2>

          <Image
            src="/images/EventOrder/Row.svg"
            alt="ornament"
            width={156}
            height={21}
            className="pt-[5px]"
          />

          <div className="w-full max-w-[284px] flex flex-col gap-[20px] mt-[47px]">
            <input
              type="text"
              value={nama}
              placeholder="Desy (Tester)"
              onChange={(e) => setNama(e.target.value)}
              className="w-full text-[#937E5B] font-creators border text-[12px] bg-transparent border-[#937E5B]/80 px-[13px] h-[33px] rounded-full outline-none placeholder:text-[#937E5B]/50"
            />

            <textarea
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              className="w-full text-[#937E5B] font-creators border text-[12px] bg-transparent border-[#937E5B]/80 px-[13px] h-[60px] rounded-xl outline-none placeholder:text-[#937E5B]/50 resize-none"
            />

            <button
              onClick={handleSubmit}
              className="bg-[#937E5B] w-full rounded-full h-[33px] text-[12px] font-ovo uppercase flex items-center justify-center gap-1.5 text-white"
            >
              <Image
                src="/images/Wishes/Panah.svg"
                alt="Kirim"
                width={17}
                height={21}
                className="object-contain"
              />
              Send
            </button>

            {/* List pesan */}
            <div className="w-full rounded-2xl h-[320px] overflow-y-auto scrollbar-hide bg-[#937E5B]">
              <div className="sticky top-0 w-full h-[18px] bg-[#937E5B] z-10" />
              <div className="px-[13px] py-[2px] text-left">
                {pesanList.slice(0, 8).map((item, index, array) => (
                  <div key={item.id}>
                    <p className="text-white font-ovo text-[14px] mb-[2px]">
                      {item.nama}
                    </p>
                    <p className="text-white font-ovo text-[12px] tracking-[0.5px] mb-[10px]">
                      {item.pesan}
                    </p>
                    {index !== array.length - 1 && (
                      <div className="border-t border-white mt-[8px] mb-[15px]" />
                    )}
                  </div>
                ))}
              </div>
              <div className="sticky bottom-0 w-full h-[18px] bg-[#937E5B] z-10" />
            </div>

            <WishesCard
              data={selectedMessage}
              onClose={() => setSelectedMessage(null)}
            />

            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-[#937E5B] w-full rounded-full h-[33px] text-[12px] font-ovo uppercase flex items-center justify-center gap-1.5 text-white"
            >
              <Image
                src="/images/Wishes/Pesan.svg"
                alt="Pesan"
                width={15}
                height={19}
                className="object-cover"
              />
              {showAll ? "BACK" : "VIEW ALL MESSAGES"}
            </button>
          </div>
        </div>
      </div>

      {/* Popup sukses kirim */}
      {showPopup && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#2E1D14]/40 backdrop-blur-[4px] px-6">
          <div className="relative overflow-hidden rounded-[28px] border border-[#713324]/20 bg-[#F6EBDD]/95 w-full max-w-[330px]">
            <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#C58B63] via-[#E2C6AA] to-[#C58B63]" />
            <div className="px-7 pt-9 pb-7 flex flex-col items-center text-center">
              <div className="w-[72px] h-[72px] rounded-full bg-[#E2C6AA]/60 border border-[#713324]/10 flex items-center justify-center mb-5">
                <Image
                  src="/images/Wishes/Pesan.svg"
                  alt="Success"
                  width={34}
                  height={34}
                  className="object-contain opacity-90"
                />
              </div>
              <h3 className="font-cylburn text-[30px] leading-none text-[#713324]">
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
