"use client";

import React, { useState } from "react";
import Image from "next/image";
import NotifModal from "@/components/popup/NotifModal";

type Pilihan = "hadir" | "tidak_hadir" | null;
type ModalType = string | null;

const Dresscode = () => {
  const [pilihan, setPilihan] = useState<Pilihan>(null);
  const [modalType, setModalType] = useState<ModalType>(null);

  const handleConfirm = (): void => {
    if (!pilihan) {
      setModalType("incomplete_rsvp");
      return;
    }
    setModalType("confirm_rsvp");
  };

  const handleFinalConfirm = (): void => {
    setModalType(null);
    if (pilihan === "hadir") {
      setModalType("rsvp_confirmed_hadir");
    } else {
      setModalType("rsvp_confirmed_tidak_hadir");
    }
  };

  return (
    <>
      <section className="relative w-full overflow-y-hidden overflow-x-hidden">
        <Image
          src="/images/About/Bg-Marmer.svg"
          alt="Marmer Bg"
          fill
          className="object-cover object-bottom"
        />

         {/* Gradient Top */}
              <div className="absolute top-0 left-0 w-full h-[40vw] z-30  bg-gradient-to-b from-white via-white to-transparent" />
              {/* Gradient Bottom */}
              <div className="absolute bottom-0 left-0 w-full h-[65vw] z-30 bg-gradient-to-t from-white via-white to-transparent" />
        
              {/* ORNAMENT */}
              {/* Layer Atas */}
              <div className="absolute top-0 -right-[4vw] w-[110vw] h-[10vw] z-40 ">
                <Image
                  src="/images/Dresscode/Layer-Atas.webp"
                  alt=""
                  width={577}
                  height={157}
                  className="object-cover"
                />
              </div>

              {/* KERANG KIRI ATAS */}
                    <Image
                      src="/images/EventOrder/Kerang.webp"
                      alt=""
                      width={147}
                      height={108}
                      className="absolute top-[2%]  w-[15vw] left-[5vw] z-40"
                    />

              {/* KERANG KANAN TENGAH */}
                    <Image
                      src="/images/Dresscode/Kerang.webp"
                      alt=""
                      width={147}
                      height={108}
                      className="absolute top-[30%]  w-[17vw] right-[5vw] z-40"
                    />

                    {/* Layer Bawah */}
                          <div className="absolute -bottom-[0vw] -left-[20vw] w-[130vw] h-[60vw] z-40">
                            <Image
                              src="/images/Dresscode/Layer-Bawah.webp"
                              alt=""
                              fill
                              className="object-cover"
                            />
                          </div>

                          {/* RUMPUT BAWAH KANAN  */}
                                <Image
                                  src="/images/Dresscode/Rumput-Mutiara.webp"
                                  alt=""
                                  width={356}
                                  height={356}
                                  className="absolute -bottom-[3vw] -right-[55vw] z-50"
                                />
              

        <div className="relative z-10 flex flex-col items-center text-center pt-[20.26vw] px-[8.5vw]">
          <div
            className="bg-white w-full px-[4.4vw] pt-[14.62vw] pb-[54.87vw] flex flex-col items-center"
            style={{ boxShadow: "0px 4px 14.5px 0px rgba(0,0,0,0.62)" }}
          >
            {/* DRESSCODE */}
            <div className="flex flex-col items-center justify-center leading-none">
              <h2 className="font-bigCaslon text-[24px] text-[#937E5B] uppercase">
                DRESS CODE
              </h2>
              <Image
                src="/images/EventOrder/Row.svg"
                alt="ornament"
                width={156}
                height={21}
                className="pt-[5px]"
              />
              <p className="font-ovo text-[14px] text-[#937E5B] pt-[34px]">
                Attire in colors from the suggested <br />
                palette is greatly appreciated.
              </p>
              <Image
                src="/images/Dresscode/Warna.svg"
                alt="ornament"
                width={180}
                height={40}
                className="mt-[19px]"
              />
            </div>

            {/* RSVP */}
            <div className="flex flex-col items-center justify-center mt-[115px]">
              <h2 className="font-bigCaslon text-[24px] text-[#937E5B] uppercase">
                RSVP
              </h2>
              <Image
                src="/images/EventOrder/Row.svg"
                alt="ornament"
                width={156}
                height={21}
                className="pt-[5px]"
              />
              <p className="font-ovo text-[14px] text-[#937E5B] pt-[38px]">
                Dear,
              </p>
              <p className="font-ovo text-[14px] text-[#937E5B] pt-[26px]">
                Sela
              </p>
              <p className="font-ovo text-[14px] text-[#937E5B] pt-[24px]">
                Kindly confirm your attendance <br />
                before 27 June 2026
              </p>

              {/* BUTTON ATTEND */}
              <div className="flex items-center justify-center gap-[16px] mt-[34px]">
                <button
                  onClick={() =>
                    setPilihan(pilihan === "hadir" ? null : "hadir")
                  }
                  className={`w-[103px] h-[33px] font-ovo text-[14px] uppercase rounded-[71px] transition-all duration-200 ${pilihan === "hadir" ? "bg-[#937E5B] text-white" : "bg-transparent border border-[#937E5B] text-[#937E5B]"}`}
                >
                  ATTEND
                </button>
                <button
                  onClick={() =>
                    setPilihan(pilihan === "tidak_hadir" ? null : "tidak_hadir")
                  }
                  className={`w-[161px] h-[33px] font-ovo text-[14px] uppercase rounded-[71px] transition-all duration-200 ${pilihan === "tidak_hadir" ? "bg-[#937E5B] text-white" : "bg-transparent border border-[#937E5B] text-[#937E5B]"}`}
                >
                  UNABLE TO ATTEND
                </button>
              </div>

              <p className="font-ovo text-[12px] text-[#937E5B] mt-[37px]">
                {pilihan === "tidak_hadir"
                  ? "ARE YOU SURE?"
                  : "Confirm your selection?"}
              </p>

              <button
                onClick={handleConfirm}
                className="w-[222px] h-[33px] bg-[#937E5B] font-ovo text-[14px] text-white uppercase rounded-[71px] mt-[28px]"
              >
                {pilihan === "hadir"
                  ? "CONFIRM ATTEND"
                  : pilihan === "tidak_hadir"
                    ? "CONFIRM NOT ATTEND"
                    : "CONFIRM"}
              </button>

              <p className="font-ovo text-[10px] text-[#937E5B] mt-[54px] leading-[15px]">
                If you need assistance with your RSVP, <br />
                please contact our support team.
              </p>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[33px] w-[160px] bg-[#12877B] text-white flex items-center justify-center font-ovo text-[14px] rounded-full gap-[6px] mt-[24px]"
              >
                <Image
                  src="/images/Dresscode/Logo-Wa.svg"
                  alt="Logo Wa"
                  width={18}
                  height={18}
                  className="object-contain"
                />
                CHAT SUPPORT
              </a>
            </div>
          </div>
        </div>
      </section>

      {modalType && (
        <NotifModal
          type={modalType}
          onClose={() => setModalType(null)}
          onConfirm={handleFinalConfirm}
          waNumber="6281234567890"
        />
      )}
    </>
  );
};

export default Dresscode;
