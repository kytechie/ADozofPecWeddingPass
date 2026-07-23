"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, ArrowUpRight } from "lucide-react";

export default function WeddingDetails() {
  return (
    <section className="bg-[#F7F3EB] py-32 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.6em] text-xs text-[#C9A96A]">
            WEDDING DETAILS
          </p>

          <h2 className="mt-6 text-5xl md:text-7xl font-light text-[#2F2A27]">
            Save The Date
          </h2>

          <div className="w-20 h-px bg-[#C9A96A] mx-auto mt-10" />
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 grid gap-8 lg:grid-cols-3"
        >
          {/* DATE */}
          <div className="rounded-[32px] bg-white p-10 shadow-sm border border-[#EFE7D4]">
            <CalendarDays
              size={34}
              className="text-[#C9A96A]"
            />

            <p className="mt-8 uppercase tracking-[0.35em] text-xs text-[#C9A96A]">
              Date
            </p>

            <h3 className="mt-4 text-3xl font-light text-[#2F2A27]">
              09 January 2027
            </h3>

            <p className="mt-3 text-[#6F6962]">
              Saturday
            </p>
          </div>

          {/* TIME */}
          <div className="rounded-[32px] bg-white p-10 shadow-sm border border-[#EFE7D4]">
            <Clock
              size={34}
              className="text-[#C9A96A]"
            />

            <p className="mt-8 uppercase tracking-[0.35em] text-xs text-[#C9A96A]">
              Time
            </p>

            <h3 className="mt-4 text-3xl font-light text-[#2F2A27]">
              3:30 PM
            </h3>

            <p className="mt-3 text-[#6F6962]">
              Guests seated by 3:00 PM
            </p>
          </div>

          {/* VENUE */}
          <div className="rounded-[32px] bg-white p-10 shadow-sm border border-[#EFE7D4]">
            <MapPin
              size={34}
              className="text-[#C9A96A]"
            />

            <p className="mt-8 uppercase tracking-[0.35em] text-xs text-[#C9A96A]">
              Venue
            </p>

            <h3 className="mt-4 text-3xl font-light text-[#2F2A27]">
              Acropolis Park
            </h3>

            <p className="mt-2 text-[#6F6962]">
              Apo, Abuja
            </p>

            <a
              href="https://maps.app.goo.gl/aRApnQj3K9hAr9JY7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-[#C9A96A] hover:gap-3 transition-all"
            >
              View on Google Maps
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}