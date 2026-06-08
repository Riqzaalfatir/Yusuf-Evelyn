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
      className="fixed flex-col inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 px-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#7A4D2F]/60 rounded-2xl p-6 w-[320px] md:w-[350px] h-[280px] md:h-[350px] text-center shadow-2xl border border-[#FEF8EF]/20 mb-5"
      >
        <h3 className="text-[25px] md:text-[28px] text-[#FEF8EF] font-semibold tracking-wide leading-snug font-cylburn">
          {data.nama}
        </h3>
        <div className="w-18 h-[1px] bg-[#FEF8EF] mx-auto my-4 opacity-40 mb-5" />
        <p className="text-[13px] md:text-[15px] font-creators leading-relaxed mb-6 text-[#FEF8EF]/90 line-clamp-6">
          {data.pesan}
        </p>
      </motion.div>

      <button
        onClick={onClose}
        className="w-[320px] md:w-[350px] bg-[#FEF8EF] hover:bg-[#e8ddd0] active:bg-[#d4c4b0] active:scale-95 transition-all duration-200 text-[#713324] px-6 py-2 rounded-xl text-[12px] font-creators tracking-widest uppercase"
      >
        BACK
      </button>
    </div>
  );
};

export default WishesCard;