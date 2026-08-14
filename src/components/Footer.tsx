"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-40">

  {/* Background Image */}

<div
  className="absolute inset-0 bg-cover bg-center"
  style={{
   backgroundImage:
  "linear-gradient(rgba(45,38,34,0.89), rgba(45,38,34,0.92)), url('/images/footer.jpg')",
  }}
/>
<div
  className="
    absolute
    inset-0
    flex
    items-center
    justify-center
    pointer-events-none
    select-none
  "
>
  <span
  className="
    text-[13rem]
    md:text-[22rem]
    font-light
    tracking-[-0.08em]
    text-[#F9F6F1]/[0.02]
    blur-[1px]
  "
>
  PC
</span>
</div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl mx-auto px-8 text-center"
      >

        {/* Decorative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#C9A96A] text-3xl"
        >
          ❦
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-14 text-5xl md:text-8xl leading-tight font-light text-[#F9F6F1]"
        >
          See you
          <br />
          where forever
          <br />
          begins.
        </motion.h2>

        <p
  className="
    mt-8
    text-lg
    md:text-xl
    leading-9
    text-[#D8CFC5]
    max-w-2xl
    mx-auto
  "
>
  Thank you for celebrating our beginning.
  We cannot wait to share this unforgettable day with you.
</p>

        {/* Divider */}
        <div className="w-20 h-px bg-[#C9A96A] mx-auto mt-16" />

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-12 uppercase tracking-[0.55em] text-xs text-[#C9A96A]"
        >
          09 January 2027
        </motion.p>

        <p className="mt-4 text-lg text-[#BFB5AA]">
  Abuja • Nigeria
</p>


        {/* Divider */}
        <div className="w-20 h-px bg-[#C9A96A] mx-auto mt-20" />

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-20"
        >
      

          <h3 className="mt-10 text-4xl md:text-6xl font-light text-[#F9F6F1]">
            Peculiar
          </h3>

<p className="text-[#C9A96A] text-3xl leading-none">
  &
</p>

          <h3 className="text-4xl md:text-6xl font-light text-[#F9F6F1]">
            Chiedozie
          </h3>
        </motion.div>

        {/* Divider */}
        <div className="w-20 h-px bg-[#C9A96A] mx-auto mt-20" />

        {/* Hashtag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.85 }}
          className="mt-16"
        >
          <p className="uppercase tracking-[0.35em] text-[11px] text-[#8E857D]">
            Celebrate with us using
          </p>

          <h3
  className="
    mt-8
    text-3xl
    md:text-4xl
    font-light
    tracking-[-0.02em]
    text-[#E6D2A4]
  "
>
  #ADozofPec27∞
</h3>
        </motion.div>

        {/* Closing */}
        <motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 1 }}
  className="mt-20 text-[11px] tracking-[0.3em] text-[#7D756E] uppercase"
>
  © 2027 Peculiar & Chiedozie
</motion.p>

      </motion.div>
    </footer>
  );
}