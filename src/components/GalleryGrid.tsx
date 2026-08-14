"use client";

import { motion } from "framer-motion";

type Props = {
  photos: string[];
  onSelect: (image: string) => void;
};

export default function GalleryGrid({
  photos,
  onSelect,
}: Props) {
  return (
    <div className="mt-40 md:mt-48">

      {/* ---------- PHOTO ONE ---------- */}

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="max-w-6xl mx-auto px-6"
      >
        <div className="flex justify-center">
  <div
    className="group cursor-zoom-in max-w-[720px] w-full rotate-[-1deg] transition-all duration-700 hover:rotate-0"
    onClick={() => onSelect(photos[0])}
  >
    <img
      src={photos[0]}
      alt=""
      className="
  w-full
  h-auto
  rounded-[36px]
border
border-[#F4EEE3]
object-contain
  transition-all
  duration-1000
  ease-out
  group-hover:scale-[1.015]
  group-hover:brightness-105
group-hover:shadow-[0_40px_100px_rgba(0,0,0,.18)]
  shadow-[0_25px_70px_rgba(0,0,0,.12)]
"
    />
    <div className="max-w-6xl mx-auto mt-12 mb-14">

  <p className="uppercase tracking-[0.55em] text-[10px] text-[#C9A96A]/70">
OUR STORY
</p>

<h3 className="mt-3 text-3xl md:text-4xl font-light text-[#2F2A27]">
The Beginning
</h3>

<p className="mt-4 max-w-md text-[#756C65] leading-8">
Some stories begin with one quiet hello.
</p>

</div>
  </div>
</div>
      </motion.section>

      {/* ---------- PHOTO TWO ---------- */}

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="max-w-6xl mx-auto px-6"
      >
        <div className="flex justify-end">
  <div
    className="group cursor-zoom-in max-w-[620px] w-full rotate-[1deg] transition-all duration-700 hover:rotate-0"
    onClick={() => onSelect(photos[1])}
  >
    <img
      src={photos[1]}
      alt=""
      className="
  w-full
  h-auto
  rounded-[36px]
  object-contain
  transition-all
  duration-1000
  ease-out
  group-hover:scale-[1.015]
  group-hover:brightness-105
group-hover:shadow-[0_40px_100px_rgba(0,0,0,.18)]
  shadow-[0_25px_70px_rgba(0,0,0,.12)]
"
    />
    <div className="max-w-6xl mx-auto mt-12 mb-14 text-right">

  <p className="uppercase tracking-[0.55em] text-[10px] text-[#C9A96A]/70">
CHAPTER TWO
</p>

<h3 className="mt-3 text-3xl md:text-4xl font-light text-[#2F2A27]">
Grace Found Us
</h3>

<p className="mt-4 ml-auto max-w-md text-[#756C65] leading-8">
Every step led us here.
Even the ones we never understood.
</p>

</div>
  </div>
</div>
      </motion.section>

            {/* ---------- PHOTO THREE ---------- */}

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="max-w-6xl mx-auto px-6"
      >
        <div className="flex justify-center">
  <div
    className="group cursor-zoom-in max-w-[760px] w-full"
    onClick={() => onSelect(photos[2])}
  >
    <img
      src={photos[2]}
      alt=""
      className="
  w-full
  h-auto
  rounded-[36px]
  object-contain
  transition-all
  duration-1000
  ease-out
  group-hover:scale-[1.015]
  group-hover:brightness-105
group-hover:shadow-[0_40px_100px_rgba(0,0,0,.18)]
  shadow-[0_35px_90px_rgba(0,0,0,.10)]
"
    />
    <div className="text-center pt-8 pb-16">

  <p className="uppercase tracking-[0.55em] text-[10px] text-[#C9A96A]/70">
FOREVER
</p>

<h2 className="mt-6 text-4xl md:text-5xl font-light text-[#2F2A27]">
Our Next Chapter
</h2>

<p className="mt-5 text-[#756C65] italic leading-8">
See you at the altar.
</p>

<p className="mt-8 uppercase tracking-[0.35em] text-[11px] text-[#8A817A]">
09 January 2027
</p>
</div>
  </div>
</div>
      </motion.section>


    </div>
  );
}