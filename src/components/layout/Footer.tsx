import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#805A2D] flex items-center justify-center overflow-hidden">
      <div className="h-[50px] lg:h-[75px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/Footer/Logo-Provite.webp"
          alt="Provite Logo"
          width={149}
          height={149}
          className="w-[89px] lg:w-[149px] h-auto -mt-[27px] lg:-mt-[50px]"
        />
      </div>
    </footer>
  );
};

export default Footer;