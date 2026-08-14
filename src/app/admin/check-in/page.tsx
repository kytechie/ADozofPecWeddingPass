"use client";

import { useState } from "react";
import QRScanner from "@/components/QRScanner";
import { supabase } from "@/lib/supabase";

export default function CheckInPage() {
  const [guest, setGuest] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function checkInGuest(scannedValue: string) {
  setLoading(true);
  setError("");

  console.log("Scanned:", scannedValue);

  // Extract the token if a full URL was scanned
  const inviteToken = scannedValue.includes("/invite/")
    ? scannedValue.split("/invite/")[1]
    : scannedValue;

  console.log("Extracted Token:", inviteToken);

  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("invite_token", inviteToken)
    .single();

  if (error || !data) {
    setError("❌ Guest not found.");
    setGuest(null);
    setLoading(false);
    return;
  }

  if (data.checked_in) {
    setError("");
    setGuest(data);
    setLoading(false);
    return;
  }

  const { error: updateError } = await supabase
    .from("guests")
    .update({
      checked_in: true,
      checked_in_at: new Date().toISOString(),
    })
    .eq("id", data.id);

  if (updateError) {
    setError(updateError.message);
    setLoading(false);
    return;
  }

  setGuest({
    ...data,
    checked_in: true,
  });

  setError("");
  setLoading(false);
}

  return (
    <main className="min-h-screen bg-[#FAF8F2] flex items-center justify-center px-4 py-8 md:p-8">

      <div className="bg-white rounded-[28px] md:rounded-[36px] shadow-2xl p-6 md:p-10 max-w-xl w-full">

        <p className="uppercase tracking-[0.45em] text-xs text-[#C9A96A] text-center">
          Wedding Admin
        </p>

        <h1 className="mt-5 text-3xl md:text-5xl font-light text-center text-[#2F2A27]">
          Guest Check-In
        </h1>

        <p className="mt-5 text-center text-gray-500">
          Scan a guest QR code.
        </p>

        <QRScanner onScan={checkInGuest} />

        {error && (
  <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-center text-red-700">
    {error}
  </div>
)}

        {loading && (
          <p className="text-center mt-8">
            Checking in...
          </p>
        )}

        {guest && (
          <div className="mt-10 rounded-3xl bg-[#FAF8F2] border border-[#E8D8B8] p-5 md:p-8 text-center">

            <div className="text-5xl md:text-6xl">
              ✅
            </div>

            <h2 className="mt-5 text-2xl md:text-3xl font-light break-words">
              {guest.full_name}
            </h2>

            <div
  className={`mt-3 font-medium ${
    error ? "text-orange-600" : "text-green-600"
  }`}
>
  {error
    ? "Already Checked In"
    : "Successfully Checked In"}
</div>

            <div className="mt-8">

              <p className="uppercase tracking-[0.3em] text-xs text-[#C9A96A]">
                Invite Code
              </p>

              <h3 className="mt-2 text-base md:text-xl font-semibold break-all">
                {guest.invite_code}
              </h3>

            </div>

          </div>
        )}

      </div>

    </main>
  );
}