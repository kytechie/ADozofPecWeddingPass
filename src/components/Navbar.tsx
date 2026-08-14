"use client";

import Link from "next/link";

const links = [
  { name: "Story", href: "#story" },
  { name: "Gallery", href: "#gallery" },
  { name: "Details", href: "#details" },
  { name: "RSVP", href: "#rsvp" },
];

export default function Navbar() {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] flex justify-center pointer-events-none">

      <nav
        className="
          pointer-events-auto

          rounded-full

          border
          border-[#E8DDBF]

          bg-white/70
          backdrop-blur-2xl

          shadow-[0_18px_40px_rgba(0,0,0,.08)]

          px-5
          md:px-7

          py-3

          transition-all
          duration-500
        "
      >
        <div className="flex items-center gap-5 md:gap-7">

          {/* Wedding Mark */}

          <div className="text-[#C9A96A] text-lg select-none">
            ❦
          </div>

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                group
                relative

                uppercase

                tracking-[0.28em]

                text-[10px]
                md:text-[11px]

                text-[#6B635C]

                transition-all
                duration-500

                hover:text-[#C9A96A]
                hover:-translate-y-[2px]
              "
            >
              {link.name}

              <span
                className="
                  absolute
                  left-0
                  -bottom-2

                  h-px
                  w-0

                  bg-[#C9A96A]

                  transition-all
                  duration-500

                  group-hover:w-full
                "
              />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}