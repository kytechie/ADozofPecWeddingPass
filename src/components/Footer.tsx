"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2F2A27] text-white py-20 px-8">

      <div className="max-w-6xl mx-auto">

        <div className="text-center">

          <p className="uppercase tracking-[0.5em] text-xs text-[#C9A96A]">
            PECULIAR
          </p>

          <h2 className="mt-4 text-5xl font-light">
            &
          </h2>

          <p className="mt-4 uppercase tracking-[0.5em] text-xs text-[#C9A96A]">
            CHIEDOZIE
          </p>

          <div className="mt-10 h-px bg-[#C9A96A]/30 w-24 mx-auto" />

          <p className="mt-10 text-gray-300">
            09 January 2027
          </p>

          <p className="mt-2 text-gray-500">
            Abuja, Nigeria
          </p>

          <div className="mt-12 flex justify-center gap-8">

            <Link
              href="/rsvp"
              className="text-[#C9A96A] hover:text-white transition"
            >
              RSVP
            </Link>

            <Link
              href="/gallery"
              className="text-[#C9A96A] hover:text-white transition"
            >
              Gallery
            </Link>

            <Link
              href="/gift"
              className="text-[#C9A96A] hover:text-white transition"
            >
              Registry
            </Link>

          </div>

          <p className="mt-14 text-sm text-gray-500">
            #ADozOfPec27 ∞
          </p>

        </div>

      </div>

    </footer>
  );
}