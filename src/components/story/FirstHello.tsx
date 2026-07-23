"use client";

import { motion } from "framer-motion";

export default function FirstHello() {
  return (
    <section className="min-h-screen bg-[#FAF8F2] flex items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <p className="uppercase tracking-[0.5em] text-[#C9A96A] text-xs">
          THE FIRST HELLO
        </p>

        <h2 className="mt-10 text-5xl md:text-7xl font-light leading-tight text-[#2B2927]">
          One unexpected hello.
          <br />
          A lifetime of certainty.
        </h2>

        <p className="mt-16 text-xl italic leading-9 text-[#6B635C]">
          It started with a simple reply to a WhatsApp status.
          <br />
          Neither of us knew we were answering
          <br />
          the beginning of forever.
        </p>
      </motion.div>
    </section>
  );
}