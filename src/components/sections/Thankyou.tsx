import React from "react";
import Image from "next/image";

const ThankYou: React.FC = () => {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "390/801" }}
    >
      <img
        src="/images/Thankyou/Pengantin.webp"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover object-bottom scale-y-[1.2]"
      />

      <div
        className="absolute top-0 left-0 w-full z-10"
        style={{
          height: "520px",
          background: "linear-gradient(to bottom, #554A38, transparent)",
        }}
      />

      {/* Teks */}
      <div className="absolute top-[27vw] left-0 right-0 z-10 flex flex-col items-center text-center px-8 leading-none">
        <h1 className="font-bigCaslon text-[40px] text-white">Thank You</h1>
        <p className="font-ovo text-[14px] text-white mt-[8.5vw] leading-[22px]">
          For being part of our journey.
          <br />
          We look forward to
          <br />
          celebrating love, laughter, and
          <br />
          happily ever after with you!
        </p>
      </div>
    </div>
  );
};

export default ThankYou;