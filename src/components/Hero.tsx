"use client";

import { motion } from "framer-motion";
import Monogram from "@/components/Monogram";
import { useGuest } from "@/components/GuestProvider";

export default function Hero() {
  const { guest } = useGuest();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#FAF8F2]">

      {/* Editorial Border */}

      <div className="absolute inset-4 md:inset-8 border border-[#E8DDBF]" />

      {/* Decorative Corners */}

      <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-[#D5BA83]" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-[#D5BA83]" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-[#D5BA83]" />

      {/* Huge Initials */}

      <h1
        className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        pointer-events-none
        select-none
        text-[#C9A96A]
        opacity-[0.03]
        font-light
        tracking-[0.15em]
        text-[7rem]
        sm:text-[10rem]
        md:text-[15rem]
        lg:text-[20rem]
        "
      >
        P&C
      </h1>

     <div
  className="
  relative
  z-10
  flex
  min-h-[100svh]
  items-center
  justify-center
  px-6
  py-20
  md:py-0
  "
>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl text-center"
        >
          <Monogram />

          {guest && (
  <p className="mt-4 text-[#C9A96A] text-sm">
    Welcome, {guest.full_name}
  </p>
)}

          <p className="mt-12 uppercase tracking-[0.5em] text-[10px] text-[#C9A96A]">
            Together with our families
          </p>

          <p className="mt-5 italic text-[#756C65] text-lg leading-8">
            joyfully invite you to celebrate
            <br />
            our wedding.
          </p>

          <div className="mt-20 space-y-5">

            <h1
              className="
              font-light
              tracking-[0.12em]
              text-[#2F2A27]
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              "
            >
              PECULIAR
            </h1>

            <p className="text-[#C9A96A] text-3xl">&</p>

            <h1
              className="
              font-light
              tracking-[0.12em]
              text-[#2F2A27]
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              "
            >
              CHIEDOZIE
            </h1>

          </div>

          <div className="flex items-center justify-center gap-5 mt-20">

            <div className="w-16 h-px bg-[#C9A96A]" />

            <div className="w-10 h-10 rounded-full border border-[#D5BA83] flex items-center justify-center text-[#C9A96A]">
              ❦
            </div>

            <div className="w-16 h-px bg-[#C9A96A]" />

          </div>

          <p className="mt-14 uppercase tracking-[0.45em] text-[11px] text-[#C9A96A]">
            Saturday
          </p>

          <h2 className="mt-5 text-[#2F2A27] font-light text-4xl md:text-6xl">
            09 • January • 2027
          </h2>

          <p className="mt-5 uppercase tracking-[0.45em] text-[11px] text-[#8A817A]">
            Abuja • Nigeria
          </p>

          <p className="mt-16 italic text-[#5F5952] text-2xl md:text-4xl leading-relaxed">
            By God's grace,
            <br />
            Our forever begins.
          </p>

          <p className="mt-16 uppercase tracking-[0.4em] text-[11px] text-[#C9A96A]">
            #ADozofPec27∞
          </p>

        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2
        text-center
        text-[#C9A96A]
        "
      >
        ❦

        <p className="mt-3 uppercase tracking-[0.45em] text-[10px] text-[#8A817A]">
          Scroll
        </p>

      </motion.div>

    </section>
  );
}