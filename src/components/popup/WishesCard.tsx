"use client";
import { motion } from "framer-motion";

type PesanItem = {
  id: number;
  nama: string;
  pesan: string;
};

type WishesCardProps = {
  data: PesanItem | null;
  onClose: () => void;
};

const WishesCard = ({ data, onClose }: WishesCardProps) => {
  if (!data) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm z-50 px-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white/95 rounded-2xl w-full max-w-[320px] lg:max-w-[480px] text-center mb-4"
        style={{ boxShadow: "0px 4px 24px 0px rgba(147,126,91,0.25)" }}
      >
        {/* Garis atas */}
        <div className="w-full h-[5px] rounded-t-2xl bg-gradient-to-r from-[#937E5B] via-[#C4A97D] to-[#937E5B]" />

        <div className="px-8 pt-7 pb-8">
          <h3 className="font-bigCaslon text-[22px] lg:text-[26px] text-[#937E5B] leading-snug">
            {data.nama}
          </h3>
          <div className="w-[60px] h-[1px] bg-[#937E5B]/40 mx-auto my-4" />
          <p className="font-ovo text-[13px] lg:text-[15px] text-[#937E5B]/90 leading-[22px] lg:leading-[26px]">
            {data.pesan}
          </p>
        </div>

        {/* Garis bawah */}
        <div className="w-full h-[5px] rounded-b-2xl bg-gradient-to-r from-[#937E5B] via-[#C4A97D] to-[#937E5B]" />
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        onClick={onClose}
        className="w-full max-w-[320px] lg:max-w-[480px] bg-[#937E5B] text-white font-ovo uppercase tracking-widest text-[12px] lg:text-[14px] h-[40px] rounded-xl transition-all duration-200 active:scale-95"
      >
        BACK
      </motion.button>
    </div>
  );
};

export default WishesCard;