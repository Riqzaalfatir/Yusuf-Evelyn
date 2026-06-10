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
      <section
        id="dresscode"
        className="relative w-full overflow-y-hidden overflow-x-hidden"
      >
        <Image
          alt="Bg Marmer"
          src="/images/About/Bg-Marmer.svg"
          fill
          className="object-cover object-bottom lg:hidden"
        />

        <Image
          alt="Bg Marmer"
          src="/images/About/dekstop/Bg-Marmer.svg"
          fill
          className="object-cover object-bottom hidden lg:block"
        />

        {/* Gradient Top */}
        <div className="absolute top-0 left-0 w-full h-[80vw] lg:hidden z-20 bg-gradient-to-b from-white from-55% to-transparent" />
        {/* Gradient Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[110vw] lg:h-[40vw] z-20 bg-gradient-to-t from-white via-white to-transparent" />

        {/* ORNAMENT */}
        {/* Layer Atas */}
        {/* <div className="absolute top-0 -right-[4vw] w-[112vw] h-[10vw] z-40 opacity-90">
          <Image
            src="/images/Dresscode/Layer-Atas.webp"
            alt=""
            width={577}
            height={157}
            className="object-cover"
          />
        </div> */}

        {/* KERANG KIRI ATAS */}
        <Image
          src="/images/EventOrder/Kerang.webp"
          alt=""
          width={147}
          height={108}
          className="absolute top-[2%]  w-[18vw] left-[4vw] z-40 lg:hidden"
        />

        {/* KERANG KANAN TENGAH */}
        <Image
          src="/images/Dresscode/Kerang.webp"
          alt=""
          width={147}
          height={108}
          className="absolute top-[31%]  w-[19vw] right-[5vw] lg:top-[33%]  lg:w-[10vw] lg:right-[1.5vw] z-40 "
        />

        {/* Layer Bawah */}
        {/* <div className="absolute -bottom-[0vw] -left-[23vw] w-[150vw] h-[70vw] z-40 opacity-90">
          <Image
            src="/images/Dresscode/Layer-Bawah.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div> */}

        {/* RUMPUT BAWAH KANAN  */}
        {/* <Image
          src="/images/Dresscode/Rumput-Mutiara.webp"
          alt=""
          width={396}
          height={396}
          className="absolute -bottom-[0vw] -right-[63vw] z-50"
        /> */}

        {/* ASET ATAS */}
        <img
          src="/images/Dresscode/Aset-Atass.webp"
          alt="Pohon Kanan Bawah"
          className="absolute top-[0vw] z-[50] lg:hidden pointer-events-none"
          style={{
            width: "112vw",
            height: "auto",
            left: "47%",
            transform: "translateX(-50%)",
            maxWidth: "none",
          }}
        />

        {/* ASET BAWAH */}
        <img
          src="/images/Dresscode/Aset-Bawah.webp"
          alt="Pohon Kanan Bawah"
          className="absolute -bottom-[0vw] z-[50] lg:hidden pointer-events-none"
          style={{
            width: "188vw",
            height: "auto",
            left: "72%",
            transform: "translateX(-50%)",
            maxWidth: "none",
          }}
        />

        {/* ASET BAWAH DEKSTOP */}
        <img
          src="/images/Dresscode/dekstop/Aset-Bawah.webp"
          alt="Pohon Kanan Bawah"
          className="absolute -bottom-[0.1vw] z-[50] hidden lg:block opacity-90"
          style={{
            width: "143vw",
            height: "auto",
            left: "58%",
            transform: "translateX(-50%)",
            maxWidth: "none",
          }}
        />

        <div className="relative z-60 flex flex-col items-center text-center pt-[20.26vw] lg:pt-0 px-[8.5vw] lg:px-[6.55vw]">
          {/* KOTAK — absolute, z rendah → ketutup gradient ✅ */}
          <div
            className="absolute inset-0 bg-white inset-x-[8.5vw] lg:inset-x-[6.55vw]"
            style={{ boxShadow: "0px 4px 14.5px 0px rgba(0,0,0,0.62)" }}
          />

          <div className="relative z-[90] w-full px-[4.4vw] pt-[14.62vw] pb-[54.87vw] lg:pt-[15.212vw]  lg:pb-[17.196vw] lg:px-[1.32vw] flex flex-col items-center">
            {/* DRESSCODE */}
            <div className="flex flex-col items-center justify-center leading-none">
              <h2 className="font-bigCaslon text-[24px] lg:text-[2.116vw] text-[#937E5B] uppercase">
                DRESS CODE
              </h2>
              <Image
                src="/images/EventOrder/Row.webp"
                alt="ornament"
                width={556}
                height={21}
                className="pt-[10px] lg:pt-[1.5vw] w-[156px] lg:w-[12.302vw]"
              />
              <p className="font-ovo text-[14px] lg:text-[1.323vw] text-[#937E5B] pt-[34px] lg:pt-[62px] tracking-wide leading-[18px] lg:leading-[1.9vw]">
                Attire in colors from the suggested <br />
                palette is greatly appreciated.
              </p>
              <Image
                src="/images/Dresscode/Warna.svg"
                alt="ornament"
                width={368}
                height={40}
                className="mt-[39px] lg:mt-[50px] w-[180px] lg:w-[24.339vw]"
              />
            </div>

            {/* RSVP */}
            <div
              id="rsvp"
              className="flex flex-col items-center justify-center mt-[115px] lg:mt-[11vw]"
            >
              <h2 className="font-bigCaslon text-[24px] lg:text-[2.116vw] text-[#937E5B] uppercase">
                RSVP
              </h2>
              <Image
                src="/images/EventOrder/Row.webp"
                alt="ornament"
                width={556}
                height={21}
                className="pt-[3px] lg:pt-[1vw] w-[156px] lg:w-[12.302vw]"
              />
              <p className="font-ovo text-[14px] lg:text-[1.323vw] text-[#937E5B] pt-[38px] lg:pt-[4vw]">
                Dear Mr. /Mrs. /Ms.
              </p>
              <p className="font-ovo text-[14px] lg:text-[1.323vw] text-[#937E5B] pt-[26px] lg:pt-[2vw]">
                Sela
              </p>
              <p className="font-ovo text-[14px] lg:text-[1.323vw] text-[#937E5B] pt-[24px] lg:pt-[3.175vw] lg:leading-[1.9vw] ">
                Kindly confirm your attendance before <br />
                27 June 2026
              </p>

              {/* BUTTON ATTEND */}
              <div className="flex items-center justify-center gap-[16px] mt-[39px] lg:mt-[2.3vw]">
                <button
                  onClick={() =>
                    setPilihan(pilihan === "hadir" ? null : "hadir")
                  }
                  className={`w-[103px] h-[33px] lg:w-[11.375vw] lg:h-[2.646vw] font-ovo text-[14px] lg:text-[1.323vw] uppercase rounded-[71px] transition-all duration-200 ${pilihan === "hadir" ? "bg-[#937E5B] text-white" : "bg-transparent border border-[#937E5B] text-[#937E5B]"}`}
                >
                  ATTEND
                </button>
                <button
                  onClick={() =>
                    setPilihan(pilihan === "tidak_hadir" ? null : "tidak_hadir")
                  }
                  className={`w-[161px] h-[33px] lg:w-[16.667vw] lg:h-[2.646vw] font-ovo text-[14px] lg:text-[1.323vw] uppercase rounded-[71px] transition-all duration-200 ${pilihan === "tidak_hadir" ? "bg-[#937E5B] text-white" : "bg-transparent border border-[#937E5B] text-[#937E5B]"}`}
                >
                  UNABLE TO ATTEND
                </button>
              </div>

              <p className="font-ovo text-[14px] lg:text-[1.323vw] text-[#937E5B] mt-[37px] lg:mt-[2.844vw]">
                {pilihan === "tidak_hadir"
                  ? "ARE YOU SURE?"
                  : "Confirm your selection?"}
              </p>

              <button
                onClick={handleConfirm}
                className="w-[222px] h-[33px] lg:h-[2.646vw] lg:w-[24.339vw] bg-[#937E5B] font-ovo text-[14px] lg:text-[1.323vw] text-white uppercase rounded-[71px] mt-[28px] lg:mt-[2.5vw]"
              >
                {pilihan === "hadir"
                  ? "CONFIRM ATTEND"
                  : pilihan === "tidak_hadir"
                    ? "CONFIRM NOT ATTEND"
                    : "CONFIRM"}
              </button>

              <p className="font-ovo text-[12px] lg:text-[1.323vw] text-[#937E5B] mt-[54px] lg:mt-[5.357vw] leading-[15px] lg:leading-[1.9vw] ">
                If you need assistance with your RSVP, <br />
                please contact our support team.
              </p>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[33px] w-[160px] lg:h-[2.646vw] lg:w-[14.021vw] bg-[#12877B] text-white flex items-center justify-center font-ovo text-[14px] lg:text-[1.323vw] rounded-full gap-[6px] mt-[24px] lg:mt-[2.910vw]"
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

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import NotifModal from "@/components/popup/NotifModal";

// type Pilihan = "hadir" | "tidak_hadir" | null;
// type ModalType = string | null;

// const Dresscode = () => {
//   const [pilihan, setPilihan] = useState<Pilihan>(null);
//   const [modalType, setModalType] = useState<ModalType>(null);

//   const handleConfirm = (): void => {
//     if (!pilihan) {
//       setModalType("incomplete_rsvp");
//       return;
//     }
//     setModalType("confirm_rsvp");
//   };

//   const handleFinalConfirm = (): void => {
//     setModalType(null);
//     if (pilihan === "hadir") {
//       setModalType("rsvp_confirmed_hadir");
//     } else {
//       setModalType("rsvp_confirmed_tidak_hadir");
//     }
//   };

//   return (
//     <>
//       <section className="relative w-full overflow-y-hidden overflow-x-hidden">
//         <Image
//           src="/images/About/Bg-Marmer.svg"
//           alt="Marmer Bg"
//           fill
//           className="object-cover object-bottom"
//         />

//         {/* Gradient Top */}
//         <div className="absolute top-0 left-0 w-full h-[40vw] z-30  bg-gradient-to-b from-white via-white to-transparent" />
//         {/* Gradient Bottom */}
//         <div className="absolute bottom-0 left-0 w-full h-[65vw] z-30 bg-gradient-to-t from-white via-white to-transparent" />

//         {/* ORNAMENT */}
//         {/* Layer Atas */}
//         <div className="absolute top-0 -right-[4vw] w-[110vw] h-[10vw] z-40 ">
//           <Image
//             src="/images/Dresscode/Layer-Atas.webp"
//             alt=""
//             width={577}
//             height={157}
//             className="object-cover"
//           />
//         </div>

//         {/* KERANG KIRI ATAS */}
//         <Image
//           src="/images/EventOrder/Kerang.webp"
//           alt=""
//           width={147}
//           height={108}
//           className="absolute top-[2%]  w-[15vw] left-[5vw] z-40"
//         />

//         {/* KERANG KANAN TENGAH */}
//         <Image
//           src="/images/Dresscode/Kerang.webp"
//           alt=""
//           width={147}
//           height={108}
//           className="absolute top-[30%]  w-[17vw] right-[5vw] z-40"
//         />

//         {/* Layer Bawah */}
//         <div className="absolute -bottom-[0vw] -left-[20vw] w-[130vw] h-[60vw] z-40">
//           <Image
//             src="/images/Dresscode/Layer-Bawah.webp"
//             alt=""
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* RUMPUT BAWAH KANAN  */}
//         <Image
//           src="/images/Dresscode/Rumput-Mutiara.webp"
//           alt=""
//           width={356}
//           height={356}
//           className="absolute -bottom-[3vw] -right-[55vw] z-50"
//         />

//         <div className="relative z-10 flex flex-col items-center text-center pt-[20.26vw] px-[8.5vw]">
//           <div
//             className="bg-white w-full px-[4.4vw] pt-[14.62vw] pb-[54.87vw] flex flex-col items-center"
//             style={{ boxShadow: "0px 4px 14.5px 0px rgba(0,0,0,0.62)" }}
//           >
//             {/* DRESSCODE */}
//             <div className="flex flex-col items-center justify-center leading-none">
//               <h2 className="font-bigCaslon text-[24px] text-[#937E5B] uppercase">
//                 DRESS CODE
//               </h2>
//               <Image
//                 src="/images/EventOrder/Row.svg"
//                 alt="ornament"
//                 width={156}
//                 height={21}
//                 className="pt-[5px]"
//               />
//               <p className="font-ovo text-[14px] text-[#937E5B] pt-[34px]">
//                 Attire in colors from the suggested <br />
//                 palette is greatly appreciated.
//               </p>
//               <Image
//                 src="/images/Dresscode/Warna.svg"
//                 alt="ornament"
//                 width={180}
//                 height={40}
//                 className="mt-[19px]"
//               />
//             </div>

//             {/* RSVP */}
//             <div className="flex flex-col items-center justify-center mt-[115px]">
//               <h2 className="font-bigCaslon text-[24px] text-[#937E5B] uppercase">
//                 RSVP
//               </h2>
//               <Image
//                 src="/images/EventOrder/Row.svg"
//                 alt="ornament"
//                 width={156}
//                 height={21}
//                 className="pt-[5px]"
//               />
//               <p className="font-ovo text-[14px] text-[#937E5B] pt-[38px]">
//                 Dear,
//               </p>
//               <p className="font-ovo text-[14px] text-[#937E5B] pt-[26px]">
//                 Sela
//               </p>
//               <p className="font-ovo text-[14px] text-[#937E5B] pt-[24px]">
//                 Kindly confirm your attendance <br />
//                 before 27 June 2026
//               </p>

//               {/* BUTTON ATTEND */}
//               <div className="flex items-center justify-center gap-[16px] mt-[34px]">
//                 <button
//                   onClick={() =>
//                     setPilihan(pilihan === "hadir" ? null : "hadir")
//                   }
//                   className={`w-[103px] h-[33px] font-ovo text-[14px] uppercase rounded-[71px] transition-all duration-200 ${pilihan === "hadir" ? "bg-[#937E5B] text-white" : "bg-transparent border border-[#937E5B] text-[#937E5B]"}`}
//                 >
//                   ATTEND
//                 </button>
//                 <button
//                   onClick={() =>
//                     setPilihan(pilihan === "tidak_hadir" ? null : "tidak_hadir")
//                   }
//                   className={`w-[161px] h-[33px] font-ovo text-[14px] uppercase rounded-[71px] transition-all duration-200 ${pilihan === "tidak_hadir" ? "bg-[#937E5B] text-white" : "bg-transparent border border-[#937E5B] text-[#937E5B]"}`}
//                 >
//                   UNABLE TO ATTEND
//                 </button>
//               </div>

//               <p className="font-ovo text-[12px] text-[#937E5B] mt-[37px]">
//                 {pilihan === "tidak_hadir"
//                   ? "ARE YOU SURE?"
//                   : "Confirm your selection?"}
//               </p>

//               <button
//                 onClick={handleConfirm}
//                 className="w-[222px] h-[33px] bg-[#937E5B] font-ovo text-[14px] text-white uppercase rounded-[71px] mt-[28px]"
//               >
//                 {pilihan === "hadir"
//                   ? "CONFIRM ATTEND"
//                   : pilihan === "tidak_hadir"
//                     ? "CONFIRM NOT ATTEND"
//                     : "CONFIRM"}
//               </button>

//               <p className="font-ovo text-[10px] text-[#937E5B] mt-[54px] leading-[15px]">
//                 If you need assistance with your RSVP, <br />
//                 please contact our support team.
//               </p>

//               <a
//                 href="https://wa.me/6281234567890"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="h-[33px] w-[160px] bg-[#12877B] text-white flex items-center justify-center font-ovo text-[14px] rounded-full gap-[6px] mt-[24px]"
//               >
//                 <Image
//                   src="/images/Dresscode/Logo-Wa.svg"
//                   alt="Logo Wa"
//                   width={18}
//                   height={18}
//                   className="object-contain"
//                 />
//                 CHAT SUPPORT
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {modalType && (
//         <NotifModal
//           type={modalType}
//           onClose={() => setModalType(null)}
//           onConfirm={handleFinalConfirm}
//           waNumber="6281234567890"
//         />
//       )}
//     </>
//   );
// };

// export default Dresscode;
