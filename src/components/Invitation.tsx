"use client";

import { motion } from "framer-motion";

export default function Invitation() {
  return (
    <section className="relative bg-[#FAF8F2] py-28 md:py-36 px-8 overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[18rem] md:text-[26rem] font-serif">
          I
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[18rem] md:text-[26rem] font-serif">
          V
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.65em] text-xs text-[#C9A96A]"
        >
          YOUR INVITATION
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-6 text-5xl md:text-7xl font-light text-[#2F2A27]"
        >
          We Would Be Honoured.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .4 }}
          className="mt-8 w-20 h-px bg-[#C9A96A] mx-auto"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .5 }}
          className="mt-10 max-w-2xl mx-auto text-xl leading-[2.3rem] text-[#5E5650]"
        >
          Together with our families,
          <br />
          we warmly invite you to witness the beginning of our forever.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .7 }}
          className="mt-8 max-w-xl mx-auto text-lg italic leading-9 text-[#7C746D]"
        >
          Kindly let us know if we should reserve
          <br />
          a seat in your honour.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .8 }}
          className="mt-12"
        >
          <button
            className="
              rounded-full
              border
              border-[#C9A96A]
              bg-white/70
              backdrop-blur-sm

              px-12
              py-5

              uppercase
              tracking-[0.45em]
              text-xs

              text-[#5F5952]

              transition-all
              duration-500

              hover:bg-[#C9A96A]
              hover:text-white
              hover:shadow-xl
              hover:scale-[1.02]
            "
          >
            Accept Invitation
          </button>
        </motion.div>

      </div>
    </section>
  );
}