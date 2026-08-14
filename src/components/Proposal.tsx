"use client";

import { motion } from "framer-motion";

export default function Proposal() {
  return (
    <section
  id="proposal"
  className="bg-[#FAF8F2] min-h-screen flex items-center justify-center px-8"
>

      <div className="max-w-4xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.6em] text-xs text-[#C9A96A]"
        >
          THE PROPOSAL
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-16 text-5xl md:text-8xl font-light leading-tight text-[#2F2A27]"
        >
          "Will you
          <br />
          marry me?"
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .6, duration: .8 }}
          className="w-24 h-px bg-[#C9A96A] mx-auto my-16 origin-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .8 }}
          className="text-4xl md:text-6xl italic text-[#5F5952]"
        >
          "Yes."
        </motion.p>

      </div>

    </section>
  );
}