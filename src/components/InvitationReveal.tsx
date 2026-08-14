"use client";

import { motion } from "framer-motion";

interface Props {
  onOpen: () => void;
}

export default function InvitationReveal({ onOpen }: Props) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-[#FAF8F2]"
    >
      <div className="h-full w-full flex items-center justify-center px-6">

        <div className="relative w-full max-w-5xl border border-[#E8DDBF] bg-[#FAF8F2] py-20 px-10 md:px-20">

          {/* Corner Lines */}
          <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#D8C59C]" />
          <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#D8C59C]" />
          <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#D8C59C]" />
          <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#D8C59C]" />

          <div className="text-center">

            <p className="uppercase tracking-[0.55em] text-[10px] text-[#C9A96A]">
              Together with our families
            </p>

            <h1 className="mt-10 text-5xl md:text-7xl font-light text-[#2F2A27] leading-none">
              AAAAAAAAA
            </h1>

            <div className="my-6 text-[#C9A96A] text-3xl">
              &
            </div>

            <h1 className="text-5xl md:text-7xl font-light text-[#2F2A27] leading-none">
              Chiedozie
            </h1>

            <div className="w-24 h-px bg-[#C9A96A] mx-auto mt-10" />

            <p className="mt-10 max-w-2xl mx-auto text-lg md:text-xl italic leading-10 text-[#6B635C]">
              request the pleasure of your company
              <br />
              as we celebrate the beginning of our forever.
            </p>

            <p className="mt-12 uppercase tracking-[0.45em] text-[11px] text-[#C9A96A]">
              09 January 2027
            </p>

            <p className="mt-3 uppercase tracking-[0.35em] text-[10px] text-[#8A817A]">
              Abuja, Nigeria
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpen}
              className="
                mt-16
                rounded-full
                border
                border-[#C9A96A]
                px-12
                py-4
                uppercase
                tracking-[0.35em]
                text-xs
                text-[#2F2A27]
                transition-all
                duration-300
                hover:bg-[#C9A96A]
                hover:text-white
              "
            >
              Open Invitation
            </motion.button>

          </div>

        </div>

      </div>
    </motion.div>
  );
}