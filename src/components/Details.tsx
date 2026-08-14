"use client";

import {
  CalendarDays,
  MapPin,
  Palette,
  ArrowUpRight,
} from "lucide-react";

import AddToCalendar from "./AddToCalendar";

export default function Details() {
  return (
   <section
  id="details"
  className="bg-[#FAF8F2] py-24 px-6"
>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.45em] text-[11px] text-[#C9A96A]">
            THE CELEBRATION
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl font-light text-[#2F2A27]">
            Everything You Need
          </h2>

          <p className="mt-6 max-w-xl mx-auto text-[#756C65] leading-8">
            A few details to help you prepare for our special day.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-6 lg:grid-cols-3 items-stretch">

          {/* ================= DAY ================= */}

          <div className="rounded-[36px] border border-[#E8DDBF] bg-[#FFFDFC] px-10 py-8 shadow-sm">

            <CalendarDays
              size={22}
              className="text-[#C9A96A]"
            />

            <p className="mt-5 uppercase tracking-[0.35em] text-[11px] text-[#C9A96A]">
              THE DAY
            </p>

            <h3 className="mt-8 text-4xl font-light text-[#2F2A27]">
              Saturday
            </h3>

            <p className="mt-3 text-lg text-[#756C65]">
              09 January 2027
            </p>

           <div className="mt-6 h-px bg-[#E8DDBF]" />

            <p className="mt-8 text-[#756C65] leading-8">
              Ceremony begins at
              <br />
              <strong className="text-[#2F2A27]">
                3:00 PM
              </strong>
            </p>

            <div className="mt-8">
              <AddToCalendar />
            </div>

          </div>
                    {/* ================= VENUE ================= */}

          <div className="rounded-[36px] border border-[#C9A96A] bg-[#C9A96A] px-10 py-8 text-white shadow-sm">

            <MapPin
              size={22}
              className="text-white"
            />

            <p className="mt-5 uppercase tracking-[0.35em] text-[11px] opacity-90">
              VENUE
            </p>

            <h3 className="mt-8 text-4xl font-light">
              Acropolis Park
            </h3>

            <p className="mt-3 text-lg opacity-90">
              Apo, Abuja
            </p>

            <div className="mt-8 h-px bg-white/30" />

            <p className="mt-8 leading-8 opacity-95">
              Join us as we exchange our vows and celebrate
              the beginning of forever.
            </p>

            <a
              href="https://maps.google.com/?q=Acropolis+Park+Apo+Abuja"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[#C9A96A] hover:opacity-90 transition"
            >
              View on Google Maps

              <ArrowUpRight size={18} />
            </a>

          </div>

                    {/* ================= COLOR CODE ================= */}

          <div className="rounded-[36px] border border-[#E8DDBF] bg-[#FCF8EF] px-10 py-8 shadow-sm">

            <Palette
              size={22}
              className="text-[#C9A96A]"
            />

            <p className="mt-5 uppercase tracking-[0.35em] text-[11px] text-[#C9A96A]">
              COLOR CODE
            </p>

            <h3 className="mt-8 text-4xl font-light text-[#2F2A27]">
              Our Wedding Palette
            </h3>

            <p className="mt-5 text-[#756C65]">
Celebrate with us in any of these elegant tones.
</p>

            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5">

  {[
  ["Champagne Gold", "#C9A96A"],
  ["Sage Green", "#AEBFA4"],

  ["Blush Pink", "#E6C6C7"],
  ["Muted Peach", "#EBC5A4"],

  ["Stone Beige", "#D8C8B5"],
  ["Warm Dove Grey", "#D8CEC3"],
].map(([name, colour]) => (

    <div
      key={name}
      className="flex items-center gap-4"
    >

     <div
  className="h-10 w-10 rounded-full border-2 border-white shadow-lg"
  style={{
    backgroundColor: colour,
  }}
/>

      <span className="text-[15px] text-[#5F5952]">
        {name}
      </span>

    </div>

  ))}

</div>

          </div>
                  </div>

      </div>
    </section>
  );
}