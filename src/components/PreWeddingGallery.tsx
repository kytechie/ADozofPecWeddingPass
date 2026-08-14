"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const photos = [
  "/images/prewedding/1.jpg",
  "/images/prewedding/2.jpg",
  "/images/prewedding/3.jpg",
];

export default function PreWeddingGallery() {
 const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section
  id="gallery"
 className="bg-[#FAF8F2] py-24 md:py-40"
>
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.55em] text-xs text-[#C9A96A] text-center"
        >
          OUR PRELUDE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-5xl md:text-7xl font-light text-[#2F2A27]"
        >
          Before We Said
          <br />
          "I Do"
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 max-w-3xl mx-auto text-center text-lg leading-9 text-[#6B635C]"
        >
          A glimpse into the moments before forever...
        </motion.p>

        <div className="mt-16 md:mt-24 space-y-8 md:space-y-10">

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
           className="
overflow-hidden
rounded-[24px]
md:rounded-[36px]
bg-white
p-2
md:p-3
shadow-xl
"
          >
            <img
  src={photos[0]}
  alt="Pre-wedding"
  onClick={() => setSelectedImage(photos[0])}
  className="w-full h-[360px] sm:h-[450px] md:h-[80vh] object-cover object-center rounded-[28px] transition duration-700 hover:scale-105 cursor-zoom-in"
/>
          </motion.div>

         <div className="grid md:grid-cols-2 gap-8">

  {/* LEFT COLUMN */}

  <div className="space-y-8">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-[30px]"
    >
      <img
        src={photos[1]}
        alt=""
        onClick={() => setSelectedImage(photos[1])}
        className="w-full h-[260px] sm:h-[360px] md:h-[600px] object-cover rounded-[28px] hover:scale-105 transition duration-700 cursor-zoom-in"
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 }}
      className="overflow-hidden rounded-[30px]"
    >
     <img
  src={photos[2]}
  alt=""
  onClick={() => setSelectedImage(photos[2])}
  className="w-full h-[340px] object-cover rounded-[28px] hover:scale-105 transition duration-700 cursor-zoom-in"
/>
    </motion.div>

  </div>

  {/* RIGHT COLUMN */}

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
    className="flex items-center justify-center rounded-[30px] border border-[#E8DDBF] bg-white px-12 shadow-xl"
  >
    <div className="text-center">

      <p className="uppercase tracking-[0.45em] text-xs text-[#C9A96A]">
        OUR STORY
      </p>

      <div className="mx-auto mt-6 h-px w-14 bg-[#C9A96A]" />

      <p className="mt-10 text-3xl italic font-light leading-relaxed text-[#2F2A27]">
        "Before the vows...
        <br />
        Before the aisle...
        <br />
        Before forever...
        <br />
        There was simply us."
      </p>

      <div className="mx-auto mt-10 h-px w-14 bg-[#C9A96A]" />

    </div>
  </motion.div>

</div>

        </div>

            </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt=""
              className="max-w-full max-h-[90vh] rounded-3xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}