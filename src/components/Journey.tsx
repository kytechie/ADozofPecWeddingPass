"use client";

import { motion } from "framer-motion";

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-[#FAF8F2] pt-24 pb-20 px-8"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-[#C9A96A]/5 blur-3xl" />
        <div className="absolute right-10 bottom-20 h-72 w-72 rounded-full bg-[#DCCDA7]/10 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="uppercase tracking-[0.6em] text-xs text-[#C9A96A]"
  >
    OUR JOURNEY
  </motion.p>

  <motion.h2
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: .15 }}
    viewport={{ once: true }}
    className="mt-8 text-5xl md:text-7xl font-light text-[#2F2A27] leading-[1.15]"
  >
    From Hello
    <br />
    To Forever
  </motion.h2>

  <div className="w-20 h-px bg-[#C9A96A] mx-auto mt-14" />

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: .25 }}
    viewport={{ once: true }}
    className="mt-14 max-w-2xl mx-auto text-xl leading-10 text-[#5F5952]"
  >
    Ours began with an unexpected hello...
    became a beautiful friendship...
    and, by God's perfect timing,
    grew into a love we now choose forever.
  </motion.p>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: .35 }}
    viewport={{ once: true }}
    className="mt-10 max-w-xl mx-auto text-lg italic leading-9 text-[#8A817A]"
  >
    But every beautiful story deserves
    its perfect audience.
  </motion.p>

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: .55 }}
    viewport={{ once: true }}
    className="mt-16"
  >

    <div className="flex justify-center items-center gap-4">

      <div className="w-14 h-px bg-[#C9A96A]" />

      <span className="text-[#C9A96A] text-xl">
        ❦
      </span>

      <div className="w-14 h-px bg-[#C9A96A]" />

    </div>

    <p className="mt-8 uppercase tracking-[0.45em] text-[11px] text-[#C9A96A]">
      TO BE CONTINUED
    </p>

    <p className="mt-6 text-3xl italic text-[#2F2A27]">
      ...at the wedding.
    </p>

  </motion.div>

</div>
    </section>
  );
}