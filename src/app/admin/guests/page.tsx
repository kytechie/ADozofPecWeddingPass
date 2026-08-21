"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function GuestManager() {
  const [guests, setGuests] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [guestToDelete, setGuestToDelete] = useState<any>(null);
  const [copied, setCopied] = useState(false);
  const [copiedLink, setCopiedLink] = useState("");
  const [openMenu, setOpenMenu] = useState<string | null>(null);

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

      <div className="hidden lg:block">
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

                    <button
  onClick={() => {
  const link = `https://adozofpecwedding-pass-kytechies-projects.vercel.app/invite/${guest.invite_token}`;

  navigator.clipboard.writeText(link);

  setCopiedLink(link);

  setCopied(true);

  window.setTimeout(() => {
    setCopied(false);
  }, 3000);
}}
  className="rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
>
  Copy Link
</button>

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

https://adozofpecwedding-pass-kytechies-projects.vercel.app/invite/${guest.invite_token}

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
</div>
{/* MOBILE GUEST CARDS */}
<div className="lg:hidden space-y-5">
  {filtered.map((guest) => (
    <div
      key={guest.id}
      className="rounded-3xl bg-white shadow-lg p-5"
    >
      {/* Guest Name */}
      <div className="flex items-start justify-between relative">

  <div>
    <h2 className="text-xl font-semibold text-[#2F2A27]">
      {guest.full_name}
    </h2>

    <p className="mt-1 text-sm text-gray-500">
      {guest.phone}
    </p>
  </div>

  <button
    onClick={() =>
      setOpenMenu(
        openMenu === guest.id ? null : guest.id
      )
    }
    className="h-10 w-10 rounded-full hover:bg-[#F6F2E9] flex items-center justify-center text-2xl"
  >
    ⋮
  </button>

  {openMenu === guest.id && (
    <div className="absolute right-0 top-12 w-56 rounded-2xl bg-white shadow-2xl border z-40 overflow-hidden">

      <Link
        href={`/admin/guests/${guest.id}`}
        className="block px-5 py-4 hover:bg-[#F9F6EF]"
      >
        ✏️ Edit Guest
      </Link>

      <button
        onClick={() => {
          const link = `/invite/${guest.invite_token}`;
https://adozofpecwedding-pass-kytechies-projects.vercel.app
          navigator.clipboard.writeText(link);

          setCopiedLink(link);

          setCopied(true);

          setOpenMenu(null);

          setTimeout(() => {
            setCopied(false);
          }, 3000);
        }}
        className="block w-full text-left px-5 py-4 hover:bg-[#F9F6EF]"
      >
        🔗 Copy Invitation Link
      </button>

      <a
        href={`https://wa.me/234${guest.phone?.replace(
          /^0/,
          ""
        )}?text=${encodeURIComponent(
`Hi ${guest.full_name},

You're warmly invited to celebrate our wedding!

https://adozofpecwedding-pass-kytechies-projects.vercel.app/invite/${guest.invite_token}

Love,
Peculiar & Chiedozie ❤️`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-5 py-4 hover:bg-[#F9F6EF]"
      >
        💬 Send via WhatsApp
      </a>

      <button
        onClick={() => {
          setGuestToDelete(guest);
          setOpenMenu(null);
        }}
        className="block w-full text-left px-5 py-4 text-red-600 hover:bg-red-50"
      >
        🗑 Delete Guest
      </button>

    </div>
  )}

</div>
      {/* Status */}
      <div className="mt-5 flex flex-wrap gap-3">

        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            guest.attending
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {guest.attending ? "✅ Attending" : "❌ Declined"}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            guest.checked_in
              ? "bg-blue-100 text-blue-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {guest.checked_in
            ? "🟢 Checked In"
            : "⚪ Not Checked In"}
        </span>

      </div>

      {/* Buttons */}
      <div className="mt-6 grid grid-cols-2 gap-3">

        <Link
          href={`/admin/guests/${guest.id}`}
          className="rounded-full bg-[#C9A96A] py-3 text-center text-white font-medium"
        >
          Edit
        </Link>

        <button
          onClick={() => {
            const link = `https://adozofpecwedding-pass-kytechies-projects.vercel.app/invite/${guest.invite_token}`;

            navigator.clipboard.writeText(link);

            setCopiedLink(link);

            setCopied(true);

            setTimeout(() => {
              setCopied(false);
            }, 3000);
          }}
          className="rounded-full bg-blue-600 py-3 text-white font-medium"
        >
          Copy Link
        </button>
        
        <a
          href={`https://wa.me/234${guest.phone?.replace(
            /^0/,
            ""
          )}?text=${encodeURIComponent(
`Hi ${guest.full_name},

You're warmly invited to celebrate our wedding! 💍✨

Please RSVP using the link below:

https://adozofpecwedding-pass-kytechies-projects.vercel.app/invite/${guest.invite_token}

Love,
Peculiar & Chiedozie ❤️`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-green-600 py-3 text-center text-white font-medium"
        >
          WhatsApp
        </a>

        <button
          onClick={() => setGuestToDelete(guest)}
          className="rounded-full bg-red-600 py-3 text-white font-medium"
        >
          Delete
        </button>

      </div>
    </div>
  ))}
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
{copied && (
  <div
    className="
      fixed
      bottom-6
      left-1/2
      -translate-x-1/2
      md:left-auto
      md:right-8
      md:translate-x-0
      z-50
      w-[92%]
      max-w-md
      rounded-3xl
      bg-[#2F2A27]
      p-5
      text-white
      shadow-2xl
    "
  >
    <p className="font-medium">
      ✨ Invitation link copied!
    </p>

    <div className="mt-4 flex gap-3">
      <button
        onClick={() => window.open(copiedLink, "_blank")}
        className="rounded-full bg-[#C9A96A] px-5 py-2 text-sm text-white hover:opacity-90"
      >
        Open Invitation
      </button>

      <button
        onClick={() => setCopied(false)}
        className="rounded-full border border-white/30 px-5 py-2 text-sm hover:bg-white/10"
      >
        Close
      </button>
    </div>
  </div>
)}
    </div>
  );
}