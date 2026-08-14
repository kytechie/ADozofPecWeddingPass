"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const weddingDate = new Date("2027-01-09T00:00:00");

  const calculateTimeLeft = () => {
    const difference = weddingDate.getTime() - new Date().getTime();

    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(
        0,
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ),
      minutes: Math.max(
        0,
        Math.floor((difference / (1000 * 60)) % 60)
      ),
      seconds: Math.max(
        0,
        Math.floor((difference / 1000) % 60)
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAF8F2] py-36 px-8">

      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-16 left-16 h-72 w-72 rounded-full bg-[#C9A96A]/5 blur-3xl" />

        <div className="absolute bottom-16 right-16 h-72 w-72 rounded-full bg-[#DCCDA7]/10 blur-3xl" />

      </div>

      <div className="relative max-w-6xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.7em] text-[11px] text-[#C9A96A]"
        >
          EVERY SUNRISE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .15 }}
          className="mt-6 text-5xl md:text-7xl font-light leading-tight text-[#2F2A27]"
        >
          Brings Us
          <br />
          Closer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .25 }}
          viewport={{ once: true }}
          className="mt-8 max-w-xl mx-auto text-lg italic leading-8 text-[#6B635C]"
        >
          Every passing moment draws us nearer
          to the beginning of our forever.
        </motion.p>

        <div className="mx-auto mt-10 h-px w-20 bg-[#C9A96A]" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

          {items.map((item) => (

            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
              rounded-[28px]
              border
              border-[#E8DDBF]

              bg-white/80
              backdrop-blur-xl

              px-8
              py-8

              shadow-[0_20px_45px_rgba(0,0,0,0.08)]

              transition-all
              duration-500
              "
            >

              <motion.h3
                key={item.value}
                initial={{ opacity: .5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .25 }}
                className="
                text-5xl
                md:text-6xl

                font-light

                tracking-[0.04em]

                text-[#2F2A27]
                "
              >
                {String(item.value).padStart(2, "0")}
              </motion.h3>

              <div className="mx-auto mt-5 h-px w-10 bg-[#C9A96A]" />

              <p
                className="
                mt-4

                uppercase

                tracking-[0.65em]

                text-[10px]

                text-[#C9A96A]
                "
              >
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
          className="mt-20"
        >

          <div className="flex items-center justify-center gap-5">

            <div className="w-16 h-px bg-[#C9A96A]" />

            <span className="text-[#C9A96A] text-lg">
              ❦
            </span>

            <div className="w-16 h-px bg-[#C9A96A]" />

          </div>

          <p
            className="
            mt-7

            uppercase

            tracking-[0.45em]

            text-xs

            text-[#8A817A]
            "
          >
            09 January 2027 • Abuja, Nigeria
          </p>

        </motion.div>

      </div>

    </section>
  );
}