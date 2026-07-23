"use client";

import Link from "next/link";

const links = [
  { name: "Story", href: "#story" },
  { name: "Journey", href: "#journey" },
  { name: "Details", href: "#details" },
  { name: "RSVP", href: "#rsvp" },
];

export default function Navbar() {
  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="backdrop-blur-xl bg-white/50 border border-[#E8DDBF] rounded-full px-8 py-4 shadow-sm">
        <div className="flex items-center gap-10">

          <Link
            href="/"
            className="tracking-[0.4em] uppercase text-[#C9A96A] text-xs"
          >
            Forever
          </Link>

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="uppercase tracking-[0.3em] text-[11px] text-[#6B635C] hover:text-[#C9A96A] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

        </div>
      </nav>
    </header>
  );
}