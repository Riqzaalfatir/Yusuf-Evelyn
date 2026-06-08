import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative w-full overflow-y-hidden overflow-x-hidden">
      <Image
        src="/images/About/Bg-Marmer.svg"
        fill
        className="object-cover object-bottom"
      />

{/* Gradient Top */}
<div className="absolute top-0 left-0 w-full h-[31vw] z-30 bg-gradient-to-b from-white from-65% to-transparent" />
{/* Gradient Bottom */}
<div className="absolute bottom-0 left-0 w-full h-[55vw] z-30 bg-gradient-to-t from-white via-white to-transparent" />

      <Image
        src="/images/About/Ornament-KiriAtas.webp"
        alt=""
        width={129}
        height={104}
        className="absolute top-0 w-[33.08vw] left-0 z-50"
      />

      <Image
        src="/images/About/Glitter.webp"
        alt=""
        width={142}
        height={305}
        className="absolute top-0  w-[36.41vw] right-0 z-50"
      />

      <Image
        src="/images/About/Ranting.webp"
        alt=""
        width={147}
        height={108}
        className="absolute top-[53%]  w-[30vw] right-0 z-20"
      />

      <Image
        src="/images/About/Rumput-Kerang.webp"
        alt=""
        width={220}
        height={80}
        className="absolute -bottom-[1.3vw] w-[60vw] -left-[32vw] z-50"
      />

      <Image
        src="/images/About/Bintang-Kerang.webp"
        alt=""
        width={177}
        height={177}
        className="absolute -bottom-[3vw] -right-[1vw] z-50"
      />


       {/* Layer Atas */}
      <div className="absolute top-0 left-0 w-[100vw] h-[1vw] z-40 ">
        <Image
          src="/images/About/Layer-Atas.webp"
          alt=""
           width={577}
        height={457}
          className="object-cover"
        />
      </div>

      {/* Layer Bawah */}
      <div className="absolute bottom-0 left-0 w-[100vw] h-[47vw] z-40 ">
        <Image
          src="/images/About/layer.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>



      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center text-center pt-[9.2vw] px-[8.5vw]">
        <div 
        className="bg-white w-full px-[4.4vw] pt-[21.8vw] pb-[45.9vw] flex flex-col items-center"
          style={{ boxShadow: "0px 4px 14.5px 0px rgba(0,0,0,0.62)" }}>
          <p className="font-ovo text-[14px] text-[#937E5B]">
            "From His fullness we have all received,
            <br />
            grace upon grace."
            <span className="block pt-[3.5vw]">John 1:16</span>
          </p>

          <Image
            src="/images/About/Kerang.webp"
            alt="ornament"
            width={75}
            height={75}
            className="pt-[6.4vw]"
          />

          <p className="font-century text-[14px] text-[#937E5B] pt-[32px]">
            We request the honour of your presence <br />
            at the wedding of <br />
            our beloved son and daughter
          </p>

          {/* Foto + data cowok */}
          <div className="flex flex-col items-center leading-none mt-[26px]">
            <div className="rounded-full overflow-hidden w-[200px] h-[261px]">
              <Image
                src="/images/About/Pengantin-Lakilaki.svg"
                alt="Jusuf Aurum Merukh"
                width={200}
                height={261}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="font-bigCaslontext-[20px] text-[#937E5B] pt-[41px]">
              JUSUF AURUM MERUKH
            </h2>
            <p className="font-ovo text-[13px] text-[#937E5B] pt-[15px]">
              The Son of
            </p>
            <p className="font-ovo text-[14px] text-[#937E5B] pt-[9px] leading-[25px]">
              Mr. RUDOLF JOHANES MERUKH and
              <span className="block">Mrs. ALLENDINE ZUSANE LUNTUNGAN</span>
            </p>
          </div>

          {/* Foto + data cewek */}
          <div className="flex flex-col items-center leading-none mt-[55px]">
            <div className="rounded-full overflow-hidden w-[200px] h-[261px]">
              <Image
                src="/images/About/Pengantin-Perempuan.svg"
                alt="Evelyn Nathania Ovani"
                width={200}
                height={261}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="font-bigCaslon text-[20px] text-[#937E5B] pt-[39px]">
              EVELYN NATHANIA OVANI
            </h2>
            <p className="font-ovo text-[13px] text-[#937E5B] pt-[15px]">
              The Daughter of
            </p>
            <p className="font-ovo text-[14px] text-[#937E5B] pt-[13px] leading-[25px]">
              Mr. WIBOWO SANTOSO and
              <span className="block">Mrs. IMELDA SIEN</span>
            </p>
          </div>

          <p className="font-ovo text-[14px] text-[#937E5B] mt-[46px]">
            We would be honoured <br />
            by your presence and blessing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
