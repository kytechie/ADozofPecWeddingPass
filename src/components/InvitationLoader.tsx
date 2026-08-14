"use client";

import { motion } from "framer-motion";

export default function InvitationLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-[#FAF8F2] flex items-center justify-center"
    >
      {/* Background Monogram */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 2 }}
        className="absolute"
      >
        <h1 className="text-[14rem] md:text-[22rem] font-light tracking-[-0.08em] text-[#C9A96A]">
          PC
        </h1>
      </motion.div>

      <div className="relative z-10 text-center">

        {/* Ring */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
            ease: "linear",
          }}
          className="mx-auto w-16 h-16 rounded-full border border-[#C9A96A]/40 border-t-[#C9A96A]"
        />

        {/* Text */}

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .25 }}
          className="mt-10 uppercase tracking-[0.55em] text-xs text-[#C9A96A]"
        >
          Preparing your invitation
        </motion.p>

      </div>
    </motion.div>
  );
}