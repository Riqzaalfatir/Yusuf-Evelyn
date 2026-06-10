import React from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animation";

const ThankYou: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative w-full overflow-hidden aspect aspect-[390/801] lg:aspect-[1512/918]">
      {/* BG PENGANTIN */}

      {isMobile === null ? null : isMobile ? (
        <img
          src="/images/Thankyou/Pengantin.webp"
          alt="background"
          className="absolute inset-0 w-full object-cover lg:hidden"
          style={{
            height: "100%", // lebih tinggi dari container
            top: "0",
            objectPosition: "top", // anchor dari atas
          }}
        />
      ) : (
        <img
          src="/images/Thankyou/Bg-Thankyou.webp"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover object-[50%_10%] hidden lg:block"
        />
      )}

      <div
        className="absolute top-0 left-0 w-full z-10"
        style={{
          height: "520px",
          background: "linear-gradient(to bottom, #554A38, transparent)",
        }}
      />

      {/* Teks */}
      <div className="absolute top-[27vw] lg:top-[10.5vw] left-0 right-0 z-10 flex flex-col items-center text-center px-8 leading-none">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="font-bigCaslon text-[40px] lg:text-[3.439vw] text-white"
        >
          Thank You
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="font-ovo text-[14px] lg:text-[1.323vw] text-white mt-[8.5vw] lg:mt-[2.7vw] leading-[22px] lg:leading-[1.9vw]"
        >
          For being part of our journey.
          <br />
          We look forward to
          <br className="lg:hidden" />
          celebrating love, laughter, and
          <br />
          happily ever after with you!
        </motion.p>
      </div>
    </div>
  );
};

export default ThankYou;

// // SEBELUM DI ANIMASIKAN DAN USEISMOBILE KAN
// import React from "react";
// import Image from "next/image";

// const ThankYou: React.FC = () => {
//   return (
//     <div className="relative w-full overflow-hidden aspect aspect-[390/801] lg:aspect-[1512/918]">
//       <img
//         src="/images/Thankyou/Pengantin.webp"
//         alt="background"
//         className="absolute inset-0 w-full object-cover lg:hidden"
//         style={{
//           height: "100%", // lebih tinggi dari container
//           top: "0",
//           objectPosition: "top", // anchor dari atas
//         }}
//       />

//       <img
//         src="/images/Thankyou/Bg-Thankyou.webp"
//         alt="background"
//         className="absolute inset-0 w-full h-full object-cover object-[50%_10%] hidden lg:block"
//       />

//       <div
//         className="absolute top-0 left-0 w-full z-10"
//         style={{
//           height: "520px",
//           background: "linear-gradient(to bottom, #554A38, transparent)",
//         }}
//       />

//       {/* Teks */}
//       <div className="absolute top-[27vw] lg:top-[10.5vw] left-0 right-0 z-10 flex flex-col items-center text-center px-8 leading-none">
//         <h1 className="font-bigCaslon text-[40px] lg:text-[3.439vw] text-white">
//           Thank You
//         </h1>
//         <p className="font-ovo text-[14px] lg:text-[1.323vw] text-white mt-[8.5vw] lg:mt-[2.7vw] leading-[22px] lg:leading-[1.9vw]">
//           For being part of our journey.
//           <br />
//           We look forward to
//           <br className="lg:hidden" />
//           celebrating love, laughter, and
//           <br />
//           happily ever after with you!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ThankYou;
