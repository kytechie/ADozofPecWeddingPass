"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

const WEBSITE_URL = "https://a-doz-of-pec27.vercel.app";

function formatPhoneForWhatsApp(phone?: string) {
  if (!phone) return "";

  const cleaned = phone.replace(/[\s()+-]/g, "");

  if (cleaned.startsWith("0")) {
    return `234${cleaned.slice(1)}`;
  }

  return cleaned.startsWith("+") ? cleaned.slice(1) : cleaned;
}

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
    <div className="min-h-screen bg-[#FAF8F2]">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-5xl font-light text-[#2F2A27]">Guest Manager</h1>
          <p className="mt-3 text-gray-500">
            Manage your wedding guests, invitations and RSVPs.
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
        className="w-full rounded-xl border border-[#D8D0C2] bg-white p-4 mb-8 outline-none focus:border-[#C9A96A]"
      />

      <div className="overflow-x-auto rounded-3xl border border-[#2F2A27] bg-[#FAF8F2]">
        <table className="w-full min-w-[1400px] border-collapse">
          <thead className="bg-[#F4EDE0]">
            <tr className="border-b border-[#2F2A27]">
              <th className="w-[18%] p-3 text-left text-sm font-semibold text-[#2F2A27] whitespace-nowrap">
                Guest
              </th>
              <th className="w-[18%] p-3 text-left text-sm font-semibold text-[#2F2A27] whitespace-nowrap">
                Email
              </th>
              <th className="w-[14%] p-3 text-left text-sm font-semibold text-[#2F2A27] whitespace-nowrap">
                Phone
              </th>
              <th className="w-[12%] p-3 text-left text-sm font-semibold text-[#2F2A27] whitespace-nowrap">
                RSVP Status
              </th>
              <th className="w-[10%] p-3 text-left text-sm font-semibold text-[#2F2A27] whitespace-nowrap">
                Check-In
              </th>
              <th className="w-[6%] p-3 text-left text-sm font-semibold text-[#2F2A27] whitespace-nowrap">
                Seats
              </th>
              <th className="w-[12%] p-3 text-left text-sm font-semibold text-[#2F2A27] whitespace-nowrap">
                Invite Code
              </th>
              <th className="w-[20%] p-3 text-center text-sm font-semibold text-[#2F2A27] whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((guest) => (
              <tr key={guest.id} className="border-b border-[#2F2A27]">
                <td className="p-4 text-sm text-[#2F2A27] whitespace-nowrap">
                  {guest.full_name}
                </td>

                <td className="p-4 text-sm text-[#2F2A27] whitespace-nowrap">
                  {guest.email}
                </td>

                <td className="p-4 text-sm text-[#2F2A27] whitespace-nowrap">
                  {guest.phone}
                </td>

                <td className="p-4 text-sm text-[#2F2A27] whitespace-nowrap">
                  {guest.checked_in
                    ? guest.attending
                      ? "✅ Attending"
                      : "❌ Declined"
                    : "Pending"}
                </td>

                <td className="p-4 text-sm text-[#2F2A27] whitespace-nowrap">
                  {guest.checked_in ? "🟢 Yes" : "⚪ No"}
                </td>

                <td className="p-4 text-sm text-[#2F2A27] whitespace-nowrap">
                  {guest.seats ?? "-"}
                </td>

                <td className="p-4 text-sm text-[#2F2A27] whitespace-nowrap">
                  {guest.invite_code ?? "-"}
                </td>

                <td className="p-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Link
                      href={`/admin/guests/${guest.id}`}
                      className="rounded-full bg-[#C9A96A] px-4 py-2 text-white hover:opacity-90"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => {
                        const link = `${WEBSITE_URL}/invite/${guest.invite_token}`;
                        navigator.clipboard.writeText(link);
                        setCopiedLink(link);
                        setCopied(true);

                        setTimeout(() => {
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
                      href={`https://wa.me/${formatPhoneForWhatsApp(
                        guest.phone
                      )}?text=${encodeURIComponent(
                        `Hi ${guest.full_name},

You're warmly invited to celebrate our wedding.

Please RSVP using the link below:

${WEBSITE_URL}/invite/${guest.invite_token}

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
            <h2 className="text-3xl font-light">Delete Guest?</h2>

            <p className="mt-4 text-gray-500">
              Are you sure you want to permanently remove{" "}
              <span className="font-semibold">{guestToDelete.full_name}</span>?
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
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md rounded-3xl bg-[#2F2A27] p-5 text-white shadow-2xl">
          <p className="font-medium">✨ Invitation link copied!</p>

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