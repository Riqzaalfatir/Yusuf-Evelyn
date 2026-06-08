"use client";

import React, { useState } from "react";
import Image from "next/image";

const gifts = [
  {
    bank: "BCA",
    number: "1234567891011",
    name: "PROVITE",
  },
];

const WeddingGift = () => {
  const [copied, setCopied] = useState<number | null>(null);

  const handleCopy = (number: string, index: number) => {
    navigator.clipboard.writeText(number);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="relative w-full flex items-start justify-center overflow-hidden">
      <img
        src="/images/WeddingGift/Pengantin-Gift.webp"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#46392270",
          backdropFilter: "blur(3.3px)",
          WebkitBackdropFilter: "blur(3.3px)",
        }}
      />

      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 text-white pt-[146px] pb-[130px]">
        <h2 className="text-[24px] font-bigCaslon tracking-wide text-white uppercase">
          Wedding Gift
        </h2>

         <Image
                        src="/images/WeddingGift/Row.svg"
                        alt="ornament"
                        width={156}
                        height={21}
                        className="pt-[5px]"
                      />

        <p className="text-[14px] font-ovo text-white mt-[30px] tracking-wide">
          Your presence and prayers
          <br />
          are the greatest blessing to us.
        </p>

        <p className="text-[14px] font-ovo text-white tracking-wide mt-[12px]">
          Should you wish to honor us with a gift,
          <br />
          please find the details below
          <br />
          for your convenience.
        </p>

        {/* List rekening */}
        <div className="w-full max-w-[224px] flex flex-col gap-6 mt-[33px]">
          {gifts.map((gift, index) => (
            <div key={index} className="w-full">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="text-[14px] font-ovo text-white">
                    {gift.bank}
                  </p>
                  <p className="text-[14px] font-ovo text-white">
                    {gift.number}
                  </p>
                  <p className="text-[14px] font-ovo text-white">
                    {gift.name}
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(gift.number, index)}
                  className="text-[14px] font-ovo tracking-widest pb-[0.5px] border-b border-white transition-opacity hover:opacity-70"
                >
                  {copied === index ? "COPIED!" : "COPY"}
                </button>
              </div>
              <div className="mt-3 border-b border-white" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingGift;
