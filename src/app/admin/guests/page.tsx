"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function GuestManager() {
  const [guests, setGuests] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [guestToDelete, setGuestToDelete] = useState<any>(null);

  useEffect(() => {
    fetchGuests();
  }, []);

  async function fetchGuests() {
    const { data } = await supabase
      .from("guests")
      .select("*")
      .order("created_at", { ascending: false });

    setGuests(data || []);
  }

  async function deleteGuest() {
    if (!guestToDelete) return;

    const { error } = await supabase
      .from("guests")
      .delete()
      .eq("id", guestToDelete.id);

    if (error) {
      alert(error.message);
      return;
    }

    setGuestToDelete(null);
    fetchGuests();
  }

  const filtered = guests.filter((guest) =>
    guest.full_name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-5xl font-light">
            Guest Manager
          </h1>

          <p className="mt-3 text-gray-500">
            Manage your wedding guest list.
          </p>

        </div>

        <div className="flex gap-3">

          <Link
            href="/admin/import"
            className="rounded-full bg-[#C9A96A] px-6 py-3 text-white hover:opacity-90"
          >
            Import CSV
          </Link>

          <Link
            href="/admin/add-guest"
            className="rounded-full bg-[#2F2A27] px-6 py-3 text-white hover:opacity-90"
          >
            Add Guest
          </Link>

        </div>

      </div>

      <input
        placeholder="Search guest..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border p-4 mb-8"
      />

      <div className="rounded-3xl bg-white shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#F6F2E9]">

            <tr>

              <th className="p-5 text-left">Guest</th>
              <th className="p-5 text-left">Phone</th>
              <th className="p-5 text-left">Seats</th>
              <th className="p-5 text-left">RSVP</th>
              <th className="p-5 text-left">Checked In</th>
              <th className="p-5 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>
                        {filtered.map((guest) => (
              <tr key={guest.id} className="border-t">

                <td className="p-5">
                  <Link
                    href={`/admin/guests/${guest.id}`}
                    className="font-medium hover:text-[#C9A96A]"
                  >
                    {guest.full_name}
                  </Link>
                </td>

                <td className="p-5">{guest.phone}</td>

                <td className="p-5">{guest.seats}</td>

                <td className="p-5">
                  {guest.attending ? "✅ Attending" : "❌ Declined"}
                </td>

                <td className="p-5">
                  {guest.checked_in ? "🟢 Yes" : "⚪ No"}
                </td>

                <td className="p-5">
                  <div className="flex flex-wrap gap-2 justify-center">

                    <Link
                      href={`/admin/guests/${guest.id}`}
                      className="rounded-full bg-[#C9A96A] px-4 py-2 text-white hover:opacity-90"
                    >
                      Edit
                    </Link>

                    <Link
                      href={`/admin/invitation/${guest.id}`}
                      className="rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                      Invitation
                    </Link>

                    <button
                      onClick={() => setGuestToDelete(guest)}
                      className="rounded-full bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>

                    <a
                      href={`https://wa.me/234${guest.phone?.replace(
                        /^0/,
                        ""
                      )}?text=${encodeURIComponent(
`Hi ${guest.full_name},

You're warmly invited to celebrate our wedding! 💍✨

Please RSVP using the link below:

https://your-wedding-link.com

We can't wait to celebrate with you.

Love,
Peculiar & Chiedozie ❤️`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                    >
                      WhatsApp
                    </a>

                  </div>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {guestToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

            <h2 className="text-3xl font-light">
              Delete Guest?
            </h2>

            <p className="mt-4 text-gray-500">
              Are you sure you want to permanently remove
              <span className="font-semibold">
                {" "}
                {guestToDelete.full_name}
              </span>
              ?
            </p>

            <div className="mt-8 flex justify-end gap-3">

              <button
                onClick={() => setGuestToDelete(null)}
                className="rounded-full border px-6 py-3"
              >
                Cancel
              </button>

              <button
                onClick={deleteGuest}
                className="rounded-full bg-red-600 px-6 py-3 text-white hover:bg-red-700"
              >
                Delete
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}