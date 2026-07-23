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
    <section className="bg-[#FAF8F2] py-40 px-8">
      <div className="max-w-6xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.6em] text-xs text-[#C9A96A]"
        >
          THE COUNTDOWN
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 text-5xl md:text-7xl font-light text-[#2F2A27]"
        >
          Until Forever Begins
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-24">

          {items.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-6xl md:text-8xl font-light text-[#2F2A27]">
                {String(item.value).padStart(2, "0")}
              </h3>

              <p className="mt-4 uppercase tracking-[0.45em] text-xs text-[#C9A96A]">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}