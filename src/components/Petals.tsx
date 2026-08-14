"use client";

import { motion } from "framer-motion";

const petals = Array.from({ length: 14 });

export default function Petals() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-[9997]">

      {petals.map((_, index) => {

        const left = Math.random() * 100;
        const duration = 10 + Math.random() * 6;
        const delay = Math.random() * 6;
        const size = 10 + Math.random() * 12;
        const rotate = Math.random() * 360;

        return (
          <motion.div
            key={index}
            initial={{
              y: -120,
              x: `${left}vw`,
              rotate,
              opacity: 0,
            }}
            animate={{
              y: "110vh",
              x: [
                `${left}vw`,
                `${left + 2}vw`,
                `${left - 2}vw`,
                `${left + 1}vw`,
              ],
              rotate: rotate + 540,
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatDelay: 8,
              ease: "linear",
            }}
            className="absolute"
          >
            <div
              style={{
                width: size,
                height: size * 1.4,
              }}
              className="rounded-full bg-[#F8F2E8] border border-[#E9D9B8] shadow-sm"
            />
          </motion.div>
        );
      })}
    </div>
  );
}