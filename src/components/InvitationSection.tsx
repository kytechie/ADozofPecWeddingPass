"use client";

import { motion } from "framer-motion";
import { CalendarHeart, Gift } from "lucide-react";

type Props = {
  onRSVP: () => void;
  onGift: () => void;
};

export default function InvitationSection({
  onRSVP,
  onGift,
}: Props) {
  return (
    <section
      id="invitation"
      className="bg-[#FAF8F2] py-44 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.55em] text-xs text-[#C9A96A]">
            KINDLY BEGIN HERE
          </p>

          <h2 className="mt-8 text-5xl md:text-7xl font-light text-[#2F2A27]">
            Everything Begins Here
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-lg italic text-[#6E655D]">
             Whether you're confirming your attendance or blessing our union,
  everything you need is just below.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-10 mt-24">

          {/* RSVP */}

          <motion.button
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={onRSVP}
            className="
            group
            rounded-[36px]
            bg-white
            border
            border-[#E8DDBF]
            p-14
            shadow-[0_25px_70px_rgba(0,0,0,.08)]
            transition-all
            duration-500
            text-left
            "
          >

            <CalendarHeart
              size={34}
              className="text-[#C9A96A]"
            />

            <h3 className="mt-10 text-5xl font-light text-[#2F2A27]">
              RSVP
            </h3>

            <p className="mt-6 text-lg leading-8 text-[#6D655D]">
              Reserve your seat and let us know
              you'll be celebrating with us.
            </p>

            <div className="mt-12 flex items-center gap-3 text-[#C9A96A] uppercase tracking-[0.35em] text-xs">

              Continue

              <motion.span
                whileHover={{ x: 6 }}
              >
                →
              </motion.span>

            </div>

          </motion.button>

          {/* Registry */}

          <motion.button
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={onGift}
            className="
            group
            rounded-[36px]
            bg-[#C9A96A]
            p-14
            shadow-[0_25px_70px_rgba(201,169,106,.35)]
            transition-all
            duration-500
            text-left
            text-white
            "
          >

            <Gift
              size={34}
              className="text-white"
            />

            <h3 className="mt-10 text-5xl font-light">
              Gift of Love
            </h3>

            <p className="mt-6 text-lg leading-8 text-white/90">
              
              Should you wish to bless our new
              home, you may do so here.
            </p>

            <div className="mt-12 flex items-center gap-3 uppercase tracking-[0.35em] text-xs">

              Send your Love

              <motion.span
                whileHover={{ x: 6 }}
              >
                →
              </motion.span>

            </div>

          </motion.button>

        </div>

      </div>
    </section>
  );
}