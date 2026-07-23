"use client";

import { useState } from "react";
import QRScanner from "@/components/QRScanner";
import { supabase } from "@/lib/supabase";

export default function CheckInPage() {
  const [guest, setGuest] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function checkInGuest(inviteCode: string) {
    setLoading(true);

    // Find guest using invite code
    const { data, error } = await supabase
      .from("guests")
      .select("*")
      .eq("invite_code", inviteCode)
      .single();

    if (error || !data) {
      alert("Guest not found.");
      setLoading(false);
      return;
    }

    // Already checked in?
    if (data.checked_in) {
      alert(`${data.full_name} has already checked in.`);
      setGuest(data);
      setLoading(false);
      return;
    }

    // Update database
    const { error: updateError } = await supabase
      .from("guests")
      .update({
        checked_in: true,
        checked_in_at: new Date().toISOString(),
      })
      .eq("id", data.id);

    if (updateError) {
      alert(updateError.message);
      setLoading(false);
      return;
    }

    setGuest({
      ...data,
      checked_in: true,
    });

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#FAF8F2] flex items-center justify-center p-8">

      <div className="bg-white rounded-[36px] shadow-2xl p-10 max-w-xl w-full">

        <p className="uppercase tracking-[0.45em] text-xs text-[#C9A96A] text-center">
          Wedding Admin
        </p>

        <h1 className="mt-5 text-5xl font-light text-center text-[#2F2A27]">
          Guest Check-In
        </h1>

        <p className="mt-5 text-center text-gray-500">
          Scan a guest QR code.
        </p>

        <QRScanner onScan={checkInGuest} />

        {loading && (
          <p className="text-center mt-8">
            Checking in...
          </p>
        )}

        {guest && (
          <div className="mt-10 rounded-3xl bg-[#FAF8F2] border border-[#E8D8B8] p-8 text-center">

            <div className="text-6xl">
              ✅
            </div>

            <h2 className="mt-5 text-3xl font-light">
              {guest.full_name}
            </h2>

            <p className="mt-3 text-gray-500">
              Successfully Checked In
            </p>

            <div className="mt-8">

              <p className="uppercase tracking-[0.3em] text-xs text-[#C9A96A]">
                Invite Code
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                {guest.invite_code}
              </h3>

            </div>

          </div>
        )}

      </div>

    </main>
  );
}