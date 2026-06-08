import React from "react";
import Image from "next/image";

const EventOrder = () => {
  return (
    <section className="relative w-full overflow-y-hidden overflow-x-hidden">
      <Image
      alt="Bg Marmer"
        src="/images/About/Bg-Marmer.svg"
        fill
        className="object-cover object-bottom"
      />

      {/* Gradient Top */}
      <div className="absolute top-0 left-0 w-full h-[55vw] z-30  bg-gradient-to-b from-white via-white to-transparent" />
      {/* Gradient Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[65vw] z-30 bg-gradient-to-t from-white via-white to-transparent" />

      {/* ORNAMENT */}

      {/* Layer Atas */}
      <div className="absolute top-0 -left-[4vw] w-[105vw] h-[10vw] z-40 ">
        <Image
          src="/images/EventOrder/Layer-Atas.webp"
          alt=""
          width={577}
          height={157}
          className="object-cover"
        />
      </div>

      {/* BINTANG */}
      <Image
        src="/images/EventOrder/Bintang-Laut.webp"
        alt=""
        width={129}
        height={104}
        className="absolute top-[7vw] w-[30.08vw] right-0 z-50"
      />

      {/* KERANG KIRI */}
      <Image
        src="/images/EventOrder/Kerang.webp"
        alt=""
        width={147}
        height={108}
        className="absolute top-[43%]  w-[25.38vw] left-0 z-20"
      />

      {/* Layer Bawah */}
      <div className="absolute -bottom-[1vw] -left-[8vw] w-[120vw] h-[50vw] z-40">
        <Image
          src="/images/EventOrder/LayerBawah.webp"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* KERANG BAWAH KIRI */}
      <Image
        src="/images/EventOrder/Kerang-Bintang.webp"
        alt=""
        width={220}
        height={80}
        className="absolute -bottom-[2vw] w-[45vw] -left-[2vw] z-50"
      />

      {/* RUMPUT BAWAH KANAN  */}
      <Image
        src="/images/EventOrder/Rumput-Laut.webp"
        alt=""
        width={577}
        height={577}
        className="absolute -bottom-[3vw] -right-[69vw] z-50"
      />

      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center text-center pt-[16.92vw] px-[8.5vw]">
        <div
          className="bg-white w-full px-[4.4vw] pt-[29.74vw] pb-[57.44vw] flex flex-col items-center leading-none"
          style={{ boxShadow: "0px 4px 14.5px 0px rgba(0,0,0,0.62)" }}
        >
          <h2 className="font-bigCaslon text-[24px] text-[#937E5B] uppercase">
            EVENT ORDER
          </h2>

          <Image
            src="/images/EventOrder/Row.svg"
            alt="ornament"
            width={156}
            height={21}
            className="pt-[5px]"
          />

          {/* FRIDAY 7 AGUSTUS */}
          <div className="flex flex-col items-center justify-center leading-none">
            <h3 className="font-bigCaslon text-[16px] text-[#937E5B] pt-[39px]">
              FRIDAY, 7 AUGUST 2026
            </h3>
            <p className="uppercase font-ovo text-[14px] text-[#937E5B] pt-[24px]">
              WELCOME DINNER
            </p>
            <p className="uppercase font-ovo text-[14px] text-[#937E5B] pt-[17px]">
              18.00 WITA
            </p>
            <p className="font-ovo text-[14px] text-[#937E5B] leading-[20px] pt-[15px]">
              at Kecak Ballroom <br />
              Sofitel Bali Nusa Dua Beach resort
            </p>
            <p className="font-ovo text-[14px] text-[#937E5B] leading-[20px] pt-[10px]">
              ITDC Tourism Complex <br />
              Jl. Nusa Dua Lot N5, Benoa, South Kuta, Bali
            </p>

            <a
              href=""
              className="underline font-ovo text-[14px] text-[#937E5B] mt-[15px]"
            >
              Google Maps
            </a>
          </div>

          <div className="w-3 h-3 lg:w-[13px] lg:h-[12px] rounded-full bg-[#937E5B] mt-[36px] mb-[25px] mx-auto" />

          {/* SATURDAY 8 AGUSTUS */}
          <div className="flex flex-col items-center justify-center leading-none">
            <h3 className="font-bigCaslon text-[16px] text-[#937E5B]">
              SATURDAY, 8 AUGUST 2026
            </h3>

            {/* HOLY */}
            <div className=" flex flex-col items-center justify-center leading-none">
              <p className="uppercase font-ovo text-[14px] text-[#937E5B] pt-[25px]">
                HOLY MATRIMONY
              </p>
              <p className="uppercase font-ovo text-[14px] text-[#937E5B] pt-[23px]">
                15.00 WITA
              </p>
              <p className="font-ovo text-[14px] text-[#937E5B] leading-[20px] pt-[15px]">
                at Jewel Chapel <br />
                Sofitel Bali Nusa Dua Beach Resort
              </p>
              <p className="font-ovo text-[14px] text-[#937E5B] leading-[20px] pt-[10px]">
                ITDC Tourism Complex <br />
                Jl. Nusa Dua Lot N5, Benoa, South Kuta, Bali
              </p>
            </div>

            {/* TEA PAI */}
            <div className=" flex flex-col items-center justify-center leading-none">
              <p className="uppercase font-ovo text-[14px] text-[#937E5B] pt-[30px]">
                TEA PAI
              </p>
              <p className="uppercase font-ovo text-[14px] text-[#937E5B] pt-[23px]">
                16.30 WITA
              </p>
              <p className="font-ovo text-[14px] text-[#937E5B] leading-[20px] pt-[15px]">
                at Legong Room <br />
                Sofitel Bali Nusa Dua Beach Resort
              </p>
              <p className="font-ovo text-[14px] text-[#937E5B] leading-[20px] pt-[10px]">
                ITDC Tourism Complex <br />
                Jl. Nusa Dua Lot N5, Benoa, South Kuta, Bali
              </p>
            </div>

            <a
              href=""
              className="underline font-ovo text-[14px] text-[#937E5B] mt-[15px]"
            >
              Google Maps
            </a>
          </div>

          <div className="w-3 h-3 lg:w-[13px] lg:h-[12px] rounded-full bg-[#937E5B] mt-[38px] mb-[23px] mx-auto" />

          {/* SUNDAY  9 AGUSTUS */}
          <div className="flex flex-col items-center justify-center leading-none">
            <h3 className="font-bigCaslon text-[16px] text-[#937E5B]">
              SUNDAY, 9 AUGUST 2026
            </h3>
            <p className="uppercase font-ovo text-[14px] text-[#937E5B] pt-[32px]">
              THANKSGIVING SERVICE
            </p>
            <p className="uppercase font-ovo text-[14px] text-[#937E5B] pt-[17px]">
              15.00 WITA
            </p>
            <p className="font-ovo text-[14px] text-[#937E5B] leading-[20px] pt-[15px]">
              at Apurva Chapel <br />
              The Apurva Kempinski Bali
              <span className="block pt-[10px]">
                Jl. Raya Nusa Dua Selatan No.4, Bali
              </span>
            </p>

            <a
              href=""
              className="underline font-ovo text-[14px] text-[#937E5B] mt-[15px]"
            >
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOrder;
