"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Papa from "papaparse";
import Link from "next/link";

export default function RSVPDashboard() {
  const [guests, setGuests] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchGuests();
  }, []);

  async function checkInGuest(id: string) {
    const { error } = await supabase
      .from("guests")
      .update({
        checked_in: true,
        checked_in_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    fetchGuests();
  }

  async function fetchGuests() {
    const { data, error } = await supabase
      .from("guests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setGuests(data || []);
  }

  const totalRSVPs = guests.length;

  const attending = guests.filter((guest) => guest.attending);

  const declined = guests.filter((guest) => !guest.attending);

  const totalGuestsComing = attending.reduce(
    (total, guest) => total + (guest.seats || 0),
    0
  );

  const filteredGuests = guests.filter((guest) => {
    const term = search.toLowerCase();

    return (
      guest.full_name?.toLowerCase().includes(term) ||
      guest.email?.toLowerCase().includes(term) ||
      guest.phone?.toLowerCase().includes(term)
    );
  });

  function exportCSV() {
    const csv = Papa.unparse(filteredGuests);

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "Wedding-RSVPs.csv";

    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-[#FAF8F2] p-10">
      <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

  <div>
    <p className="uppercase tracking-[0.35em] text-xs text-[#C9A96A]">
      Forever Wedding
    </p>

    <h1 className="mt-3 text-5xl font-light text-[#2F2A27]">
      RSVP Manager
    </h1>

    <p className="mt-4 text-gray-500">
      View guest responses, attendance status and check-in progress.
    </p>
  </div>

  <div className="flex gap-3">

    <Link
      href="/admin"
      className="rounded-full border border-[#E7D6B8] px-6 py-3 hover:bg-white"
    >
      Dashboard
    </Link>

    <button
      onClick={exportCSV}
      className="rounded-full bg-[#C9A96A] px-6 py-3 text-white hover:opacity-90"
    >
      Export CSV
    </button>

  </div>

</div>
      <div className="mt-8">
        <input
          type="text"
          placeholder="Search by name, email or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#C9A96A]"
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Total RSVPs
          </p>

          <h2 className="mt-3 text-4xl font-light">
            {totalRSVPs}
          </h2>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Attending
          </p>

          <h2 className="mt-3 text-4xl font-light text-green-600">
            {attending.length}
          </h2>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Declined
          </p>

          <h2 className="mt-3 text-4xl font-light text-red-600">
            {declined.length}
          </h2>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Guests Coming
          </p>

          <h2 className="mt-3 text-4xl font-light text-[#C9A96A]">
            {totalGuestsComing}
          </h2>
        </div>

      </div>

      {/* Attending */}

      <section className="mt-16">

        <h2 className="mb-6 text-3xl font-light text-green-700">
          ✅ Attending ({attending.length})
        </h2>

        <div className="space-y-4">

          {filteredGuests.filter((g) => g.attending).length === 0 ? (
            <p>No attending guests.</p>
          ) : (
            filteredGuests
              .filter((g) => g.attending)
              .map((guest) => (

                <div
                  key={guest.id}
                  className="rounded-xl border bg-white p-6 shadow-sm"
                >

                  <h3 className="text-xl font-semibold">
                    {guest.full_name}
                  </h3>

                  <p>{guest.email}</p>

                  <p>{guest.phone}</p>

                  <p className="mt-2">
                    Guests Coming: <strong>{guest.seats}</strong>
                  </p>

                  <button
                    onClick={() => checkInGuest(guest.id)}
                    disabled={guest.checked_in}
                    className={`mt-4 rounded-xl px-5 py-3 text-white transition ${
                      guest.checked_in
                        ? "cursor-not-allowed bg-green-600"
                        : "bg-[#C9A96A] hover:opacity-90"
                    }`}
                  >
                    {guest.checked_in ? "✔ Checked In" : "Check In"}
                  </button>

                  {guest.message && (
                    <p className="mt-3 italic">
                      "{guest.message}"
                    </p>
                  )}

                </div>

              ))
          )}

        </div>

      </section>

      {/* Declined */}

      <section className="mt-16">

        <h2 className="mb-6 text-3xl font-light text-red-700">
          ❌ Declined ({declined.length})
        </h2>

        <div className="space-y-4">

          {filteredGuests.filter((g) => !g.attending).length === 0 ? (
            <p>No declined RSVPs.</p>
          ) : (
            filteredGuests
              .filter((g) => !g.attending)
              .map((guest) => (

                <div
                  key={guest.id}
                  className="rounded-xl border bg-white p-6 shadow-sm"
                >

                  <h3 className="text-xl font-semibold">
                    {guest.full_name}
                  </h3>

                  <p>{guest.email}</p>

                  <p>{guest.phone}</p>

                  {guest.message && (
                    <p className="mt-3 italic">
                      "{guest.message}"
                    </p>
                  )}

                </div>

              ))
          )}

        </div>

      </section>

    </div>
  );
}