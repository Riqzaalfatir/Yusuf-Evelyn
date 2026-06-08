import React from "react";
import Image from "next/image";

const ThankYou: React.FC = () => {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "390/844" }}
    >
      <img
        src="/images/Thankyou/Bg-Thankyou.svg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="absolute top-0 left-0 w-full z-10"
        style={{
          height: "520px",
          background: "linear-gradient(to bottom, #554A38, transparent)",
        }}
      />

      {/* Teks */}
      <div className="absolute top-[22.5vw] left-0 right-0 z-10 flex flex-col items-center text-center px-8 leading-none">
        <h1 className="font-bigCaslon text-[40px] text-white">Thank You</h1>
        <p className="font-ovo text-[14px] text-white mt-[10vw] leading-[22px]">
          For being part of our journey.
          <br />
          We look forward to
          <br />
          celebrating love, laughter, and
          <br />
          happily ever after with you!
        </p>
      </div>

      {/* Logo */}
      <div className="absolute bottom-[6.92vw] left-0 right-0 z-10 flex justify-center">
        <Image
          src="/images/Thankyou/Logo-Provite.svg"
          alt="Provite Logo"
          width={89}
          height={65}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ThankYou;