"use client";
import { useEffect } from "react";

type Props = {
  progress: number;
  onDone?: () => void;
};

export default function LoadingScreen({ progress, onDone }: Props) {
  const fading = progress === 100;

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => onDone?.(), 600);
      return () => clearTimeout(timer);
    }
  }, [progress, onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 500ms ease",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #554A38, #7a6a56)",
        }}
      />

      {/* Gradient overlay bawah */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black/30 to-transparent" />

      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">
        <p className="font-ovo text-[12px] text-white/80 tracking-widest">
          The Wedding of
        </p>
        <h1 className="font-bigCaslon text-[30px] text-white mt-2 leading-none">
          JUSUF & EVELYN
        </h1>
        <p className="font-ovo text-[13px] text-white/80 mt-5">
          27 JUNE 2026
        </p>

        {/* Progress bar */}
        <div
          className="mt-10 rounded-full overflow-hidden"
          style={{
            width: 180,
            height: 1,
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        >
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${progress}%`,
              backgroundColor: "rgba(255,255,255,0.8)",
            }}
          />
        </div>

        <p className="font-ovo text-[10px] text-white/40 mt-2">
          {progress}%
        </p>
      </div>
    </div>
  );
}