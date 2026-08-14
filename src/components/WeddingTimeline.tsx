"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    time: "3:30 PM",
    title: "Guests Arrival",
    description: "Guests are welcomed and ushered into the ceremony venue.",
  },
  {
    time: "3:50 PM",
    title: "Wedding Ceremony",
    description: "Our covenant before God officiated by a CCI Pastor.",
  },
  {
    time: "4:30 PM",
    title: "Photo Session",
    description: "Family portraits and photographs with loved ones.",
  },
  {
    time: "6:00 PM",
    title: "Reception Begins",
    description: "Grand entrance, welcome remarks and celebration.",
  },
  
  {
    time: "6:40 PM",
    title: "Cake Cutting",
    description: "One of our favourite moments together.",
  },
  {
    time: "7:00 PM",
    title: "First Dance",
    description: "Our first dance as husband and wife.",
  },
  {
    time: "Till Late",
    title: "Celebration Continues",
    description: "Music, laughter, dancing and unforgettable memories.",
  },
];

export default function WeddingTimeline() {
  return (
    <section
      id="timeline"
      className="relative bg-[#FDFBF7] py-36 px-6 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-[#C9A96A]/5 blur-3xl" />
        <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-[#DCCDA7]/10 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.55em] text-xs text-[#C9A96A] text-center"
        >
          Wedding Day
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-5xl md:text-7xl font-light text-[#2F2A27]"
        >
          Celebration Timeline
        </motion.h2>

        <div className="w-20 h-px bg-[#C9A96A] mx-auto mt-10" />

        <div className="mt-24 relative">

          {/* vertical line */}
          <div className="absolute left-[26px] top-0 bottom-0 w-px bg-[#E8DDBF]" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="relative flex gap-10 mb-16"
            >
              {/* Gold Circle */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-[#C9A96A] border-4 border-[#FAF8F2] shadow-lg" />
              </div>

              {/* Card */}
              <div
                className="
flex-1
rounded-[28px]
bg-white
border
border-[#E8DDBF]
p-8
shadow-[0_20px_45px_rgba(0,0,0,0.06)]
transition-all
duration-500
hover:-translate-y-1
hover:shadow-[0_28px_60px_rgba(0,0,0,0.09)]
"
              >
                <p className="uppercase tracking-[0.35em] text-[11px] text-[#C9A96A]">
                  {item.time}
                </p>

                <h3 className="mt-3 text-3xl font-light text-[#2F2A27]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[#6A635C] leading-8">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center italic text-[#8A817A]"
        >
          Timings may be adjusted slightly as the day unfolds beautifully.
        </motion.p>

      </div>
    </section>
  );
}