"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-06-27T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const boxes = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section
      id="countdown"
      className="relative w-full pt-[55px] pb-[51px] lg:pt-[80px] lg:pb-[60px] bg-[#805A2D]"
    >
      
      <div className="relative z-10">
        <h1 className="font-bigCaslon text-[20px] lg:text-[32px] text-white text-center uppercase">
          Saturday, 8 August 2026
        </h1>

        <div className="flex justify-center items-center gap-[10px] lg:gap-[24.41px] mt-[16px] lg:mt-[33px]">
          {boxes.map((box, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-[49px] h-[49px] lg:w-[81.59px] lg:h-[79.93px] bg-white rounded-[10px] lg:rounded-[16px] flex flex-col items-center justify-center leading-none"
                style={{
    boxShadow: "0.47px 1.89px 4.27px 0.94px rgba(0,0,0,0.15)",
  }}>
                <span className="font-ovo text-[28px] lg:text-[46px] text-[#805A2D]">
                  {String(box.value).padStart(2, "0")}
                </span>
                <span className="font-ovo text-[5.66px] lg:text-[10px] text-[#805A2D]">
                  {box.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountDown;