"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="min-h-screen bg-[#F7F3EB] flex items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <div className="w-24 h-px bg-[#C9A96A] mx-auto mb-10" />

        <p className="uppercase tracking-[0.6em] text-[#C9A96A] text-xs">
          OUR STORY
        </p>

        <h2 className="mt-10 text-5xl md:text-7xl font-light leading-tight text-[#2B2927]">
          Every forever
          <br />
          has a beginning.
        </h2>

        <div className="w-24 h-px bg-[#C9A96A] mx-auto mt-10" />
      </motion.div>
    </section>
  );
}