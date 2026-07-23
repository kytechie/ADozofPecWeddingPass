"use client";

import { motion } from "framer-motion";

const chapters = [
  {
    number: "I",
    title: "One Unexpected Hello",
    text: "Some conversations are ordinary. Ours quietly changed everything.",
  },
  {
    number: "II",
    title: "A Beautiful Friendship",
    text: "Before forever came friendship. Before promises came trust.",
  },
  {
    number: "III",
    title: "Growing Together",
    text: "Through seasons of joy, distance, laughter and prayer, our hearts chose each other again and again.",
  },
  {
    number: "IV",
    title: "The Proposal",
    text: "One question. One joyful yes. One lifetime waiting to begin.",
  },
];

export default function Journey() {
  return (
    <section className="bg-[#F7F3EB] py-40 px-8">

      <div className="max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center uppercase tracking-[0.6em] text-xs text-[#C9A96A]"
        >
          OUR JOURNEY
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-5xl md:text-7xl font-light text-[#2F2A27]"
        >
          Every Chapter
          <br />
          Led Us Here
        </motion.h2>

        <div className="mt-32 space-y-32">

          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-20 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >

              <div>

                <p className="text-[#C9A96A] uppercase tracking-[0.6em] text-xs">
                  Chapter {chapter.number}
                </p>

                <h3 className="mt-6 text-4xl md:text-5xl font-light leading-tight text-[#2F2A27]">
                  {chapter.title}
                </h3>

              </div>

              <div>

                <p className="text-lg leading-9 text-[#6B635C]">
                  {chapter.text}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}