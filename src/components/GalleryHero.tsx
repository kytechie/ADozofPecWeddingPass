"use client";

import { motion } from "framer-motion";

export default function GalleryHero() {
  return (
    <section className="max-w-5xl mx-auto px-6 text-center mb-16">

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="uppercase tracking-[0.55em] text-xs text-[#C9A96A]"
      >
        A FEW FRAMES
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: .15 }}
        className="mt-8 text-5xl md:text-7xl font-light text-[#2F2A27] leading-tight"
      >
        Before Forever
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 90 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="h-px bg-[#C9A96A] mx-auto mt-10"
      />

      <motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: .25 }}
  className="mt-10 max-w-3xl mx-auto text-lg md:text-xl leading-10 text-[#6C655E]"
>
  Every photograph holds a chapter of our story—
  the laughter, the quiet moments, the answered prayers,
  and the love that has led us gently toward forever.
</motion.p>

    </section>
  );
}