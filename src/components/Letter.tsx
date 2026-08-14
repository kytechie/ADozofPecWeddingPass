"use client";

import { motion } from "framer-motion";

export default function Letter() {
  return (
    <section className="bg-[#FAF8F2] py-44 px-8">

      <div className="max-w-4xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.6em] text-xs text-[#C9A96A] text-center"
        >
          TO EVERYONE WE LOVE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-8 text-center text-5xl md:text-7xl font-light text-[#2F2A27] leading-tight"
        >
          <br />
          TO EVERYONE WE LOVE

 Few Words Before Forever
        </motion.h2>

        <div className="flex items-center justify-center gap-4 mt-12">

          <div className="w-14 h-px bg-[#C9A96A]" />

          <span className="text-[#C9A96A] text-xl">
            ❦
          </span>

          <div className="w-14 h-px bg-[#C9A96A]" />

        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-20 rounded-[42px] border border-[#EFE7D4] bg-[#FFFDFC] shadow-xl p-10 md:p-20"
        >

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .25 }}
            className="text-3xl italic text-[#2F2A27]"
          >
            To Our Dearest Family & Friends,
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .35 }}
            className="space-y-10 mt-14 text-lg leading-10 text-[#5F5952]"
          >

            <p>
              Every beautiful journey becomes even more meaningful because of
              the people who walk beside us.
            </p>

            <p>
              Thank you for every prayer, every word of encouragement,
              every laugh shared, every lesson learned,
              and every moment you've been part of our lives.
            </p>

            <p>
              As we prepare to stand before God and begin this beautiful
              covenant of marriage, nothing would bring us greater joy than
              celebrating this unforgettable day with the people we love most.
            </p>

            <p>
              We hope you'll join us as we exchange our vows,
              celebrate God's faithfulness,
              dance until our feet ache,
              laugh until our cheeks hurt,
              and create memories we'll treasure forever.
            </p>

            <p>
              Until then...
              know that we're already counting down the days until we get to
              celebrate with you.
            </p>

          </motion.div>

          <div className="flex items-center gap-4 mt-20">

            <div className="w-12 h-px bg-[#C9A96A]" />

            <span className="text-[#C9A96A]">
              ❦
            </span>

            <div className="flex-1 h-px bg-[#EFE7D4]" />

          </div>

          <div className="mt-14">

            <p className="italic text-xl text-[#8A817A]">
              With all our love,
            </p>

            <h3 className="mt-10 text-5xl md:text-6xl font-light text-[#2F2A27]">
              Peculiar
            </h3>

            <p className="my-4 text-[#C9A96A] text-2xl">
              &
            </p>

            <h3 className="text-5xl md:text-6xl font-light text-[#2F2A27]">
              Chiedozie
            </h3>

            <p className="mt-10 uppercase tracking-[0.45em] text-xs text-[#C9A96A]">
              #ADozofPec27∞
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}