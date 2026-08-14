"use client";

import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function GiftRegistry() {
  const [copied, setCopied] = useState("");

  async function copy(text: string, id: string) {
    await navigator.clipboard.writeText(text);
    setCopied(id);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  }

  return (
    <section className="bg-[#FAF8F2] py-32 px-8">

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[0.45em] text-xs text-[#C9A96A]">
            WITH LOVE
          </p>

          <h2 className="mt-6 text-6xl font-light text-[#2F2A27]">
            Gift Registry
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-600 leading-9">
            Your love, prayers and presence are the greatest gifts we could ever ask for.
            Should you wish to bless us further as we begin this new chapter together,
            we've provided the options below with grateful hearts.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {/* NAIRA */}

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-[32px] bg-white shadow-xl p-10"
          >

            <p className="uppercase tracking-[0.35em] text-xs text-[#C9A96A]">
              🇳🇬 Nigerian Account
            </p>

            <h3 className="mt-8 text-3xl font-light">
              UBA
            </h3>

            <p className="mt-3 text-gray-500">
              Peculiar Ugbo
            </p>

            <h1 className="mt-8 text-4xl font-semibold tracking-widest">
              2236340615
            </h1>

            <button
              onClick={() => copy("2236340615", "naira")}
              className="mt-10 w-full rounded-full bg-[#C9A96A] text-white py-4 flex items-center justify-center gap-3 hover:opacity-90 transition"
            >

              {copied === "naira"
                ? <Check size={20}/>
                : <Copy size={20}/>}

              {copied === "naira"
                ? "Copied!"
                : "Copy Account Number"}

            </button>

          </motion.div>

        </div>

        {/* GIFTS */}

        <div className="flex justify-center mt-20">
          <div className="rounded-3xl bg-white shadow-lg p-8 text-center">

            <div className="text-5xl">🏡</div>

            <h3 className="mt-5 text-2xl font-light">
              Our Home
            </h3>

            <p className="mt-3 text-gray-500">
              Help us furnish our first home together.
            </p>

          </div>

          <div className="rounded-3xl bg-white shadow-lg p-8 text-center">

            <div className="text-5xl">✈️</div>

            <h3 className="mt-5 text-2xl font-light">
              Honeymoon
            </h3>

            <p className="mt-3 text-gray-500">
              Help us create unforgettable memories.
            </p>

          </div>

          <div className="rounded-3xl bg-white shadow-lg p-8 text-center">

            <div className="text-5xl">❤️</div>

            <h3 className="mt-5 text-2xl font-light">
              Love Gift
            </h3>

            <p className="mt-3 text-gray-500">
              Bless us in whatever way you desire.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}