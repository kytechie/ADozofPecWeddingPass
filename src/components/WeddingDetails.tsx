"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock3,
  Shirt,
  ArrowUpRight,
} from "lucide-react";

export default function WeddingDetails() {
  return (
    <section
      id="details"
      className="bg-[#FAF8F2] py-36 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.55em] text-xs text-[#C9A96A]">
            Wedding Details
          </p>

          <h2 className="mt-8 text-6xl md:text-8xl font-light tracking-[-0.03em] text-[#2F2A27] leading-none">
  Join Us
</h2>

          <div className="w-20 h-px bg-[#C9A96A] mx-auto mt-10" />

          <p className="mt-10 max-w-2xl mx-auto text-[19px] italic text-[#756C65] leading-10">
  We would be honoured to celebrate our wedding day
  with our favorite people.
</p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10 mt-24">

          {/* LOCATION */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
           whileHover={{
  y: -10,
  scale: 1.015,
}}
            transition={{ duration: .5 }}
            className="rounded-[40px] bg-white/80 backdrop-blur-sm border border-[#E9DFC8] p-14 shadow-[0_30px_90px_rgba(0,0,0,.09)]"
          >
            <div className="flex items-center gap-3 text-[#C9A96A]">

              <MapPin size={17} strokeWidth={1.6} />

              <p className="uppercase tracking-[0.45em] text-xs">
                Wedding Venue
              </p>

            </div>

            <h3 className="mt-8 text-5xl md:text-6xl tracking-[-0.03em] leading-none font-light text-[#2F2A27]">
              Acropolis Park
            </h3>

            <p className="mt-3 text-xl text-[#6E655D]">
              Apo, Abuja, Nigeria
            </p>

            <div className="w-14 h-px bg-[#C9A96A] mt-10" />

            <div className="mt-10 flex items-center gap-3 text-[#6E655D]">

              <Clock3
                size={18}
                className="text-[#C9A96A]"
              />

              <span className="text-lg">
                3:00 PM
              </span>

            </div>

            <p className="mt-8 leading-8 text-[#7D756D]">
              Our wedding ceremony will be officiated by a
              Pastor, followed immediately by the reception
              at the same venue.
            </p>

            <a
              href="https://maps.google.com/?q=Acropolis+Park+Apo+Abuja"
              target="_blank"
             className="inline-flex items-center gap-3 mt-12 rounded-full border border-[#E7D2A4] px-6 py-3 text-[#C9A96A] hover:bg-[#C9A96A] hover:text-white transition-all duration-500"
            >
              View on Google Maps

             <ArrowUpRight size={16} />

            </a>

          </motion.div>

          {/* DRESS CODE */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
  y: -10,
  scale: 1.015,
}}
            transition={{ duration: .5 }}
            className="rounded-[36px] bg-white border border-[#E8DDBF] p-12 shadow-[0_30px_90px_rgba(0,0,0,.09)]"
          >
            <div className="flex items-center gap-3 text-[#C9A96A]">
  <Shirt size={17} strokeWidth={1.6} />

  <p className="uppercase tracking-[0.45em] text-xs">
    COLOR CODE
  </p>
</div>

<h3 className="mt-8 text-5xl font-light leading-none text-[#2F2A27]">
  Our Wedding Colours
</h3>

<p className="mt-6 text-lg text-[#756C65] leading-8">
  We'd love our guests to celebrate with us by wearing one of our chosen wedding colours.
</p>

<div className="grid grid-cols-2 gap-8 mt-14">

  {/* Dusty Blue */}
  <div className="flex items-center gap-4">
    <span
      className="w-8 h-8 rounded-full border border-[#ddd]"
      style={{ background: "#8FA8C7" }}
    />
    <div>
      <p className="font-medium text-[#2F2A27]">
        Dusty Blue
      </p>
      <p className="text-sm text-[#8A817A]">
        Bridesmaids
      </p>
    </div>
  </div>

  {/* Champagne Gold */}
  <div className="flex items-center gap-4">
    <span
      className="w-8 h-8 rounded-full"
      style={{ background: "#C9A96A" }}
    />
    <div>
      <p className="font-medium text-[#2F2A27]">
        Champagne Gold
      </p>
      <p className="text-sm text-[#8A817A]">
        Wedding Accent
      </p>
    </div>
  </div>

  {/* Navy */}
  <div className="flex items-center gap-4">
    <span
      className="w-8 h-8 rounded-full"
      style={{ background: "#243A63" }}
    />
    <div>
      <p className="font-medium text-[#2F2A27]">
        Navy Blue
      </p>
      <p className="text-sm text-[#8A817A]">
        Preferred Suit
      </p>
    </div>
  </div>

  {/* Champagne */}
  <div className="flex items-center gap-4">
    <span
      className="w-8 h-8 rounded-full border border-[#ddd]"
      style={{ background: "#EFE4C8" }}
    />
    <div>
      <p className="font-medium text-[#2F2A27]">
        Champagne
      </p>
      <p className="text-sm text-[#8A817A]">
        Elegant Option
      </p>
    </div>
  </div>

</div>

<div className="mt-14 rounded-3xl border border-[#E8DDBF] bg-[#FBF8F1] p-6">
  <p className="italic leading-8 text-[#756C65]">
    Our only request is to kindly avoid wearing white, ivory, or cream,
    as those colours are reserved for the bride.
  </p>
</div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}