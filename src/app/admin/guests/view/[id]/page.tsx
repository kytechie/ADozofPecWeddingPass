"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import GuestQRCode from "@/components/GuestQRCode";

export default function GuestDetailsPage() {
  const { id } = useParams();

  const [guest, setGuest] = useState<any>(null);

  useEffect(() => {
    loadGuest();
  }, []);

  async function loadGuest() {
    const { data } = await supabase
      .from("guests")
      .select("*")
      .eq("id", id)
      .single();

    setGuest(data);
  }

  if (!guest) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <div>

      <div className="flex justify-between items-center mb-10">

        <div>
          <h1 className="text-5xl font-light">
            Guest Details
          </h1>

          <p className="mt-3 text-gray-500">
            View guest information.
          </p>
        </div>

        <div className="flex gap-3">

          <Link
            href={`/admin/guests/${guest.id}`}
            className="rounded-full bg-[#C9A96A] px-6 py-3 text-white"
          >
            Edit
          </Link>

          <Link
            href="/admin/guests"
            className="rounded-full border px-6 py-3"
          >
            Back
          </Link>

        </div>

      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        <div className="bg-white rounded-3xl shadow-lg p-10 space-y-8">

          <Info title="Full Name" value={guest.full_name} />

          <Info title="Email" value={guest.email || "-"} />

          <Info title="Phone" value={guest.phone} />

          <Info title="Seats Reserved" value={guest.seats} />

          <Info
            title="RSVP"
            value={
              guest.attending
                ? "✅ Attending"
                : "❌ Declined"
            }
          />

          <Info
            title="Checked In"
            value={
              guest.checked_in
                ? "🟢 Yes"
                : "⚪ No"
            }
          />

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-10 flex flex-col items-center justify-center">

          <h2 className="text-3xl font-light mb-8">
            Invitation QR
          </h2>

          <GuestQRCode guestId={guest.id} />

        </div>

      </div>

    </div>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: any;
}) {
  return (
    <div>
      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="text-2xl font-light mt-2">
        {value}
      </h2>
    </div>
  );
}