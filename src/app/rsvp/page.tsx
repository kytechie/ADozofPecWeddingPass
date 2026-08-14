"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Guest = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  invite_token: string;
  invite_code: string;
};

export default function RSVPPage() {
  const searchParams = useSearchParams();

  const codeFromURL = searchParams.get("code");

  const [inviteCode, setInviteCode] = useState(codeFromURL ?? "");
  const [guest, setGuest] = useState<Guest | null>(null);

  const [attending, setAttending] = useState(true);
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (codeFromURL) {
      lookupGuest(codeFromURL);
    }
  }, [codeFromURL]);

  async function lookupGuest(code: string) {
    setLoading(true);

    const { data, error } = await supabase
      .from("guests")
      .select("*")
      .eq("invite_code", code.toUpperCase())
      .single();

    setLoading(false);

    if (error || !data) {
      alert("Invitation not found.");
      return;
    }

    setGuest(data);
  }

  async function findGuest() {
    if (!inviteCode.trim()) {
      alert("Enter your invitation code.");
      return;
    }

    lookupGuest(inviteCode);
  }

  async function submitRSVP() {
    if (!guest) return;

    setLoading(true);

    const { error } = await supabase
      .from("guests")
      .update({
        attending,
        message,
      })
      .eq("id", guest.id);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#FAF8F2]">
        <div className="bg-white rounded-3xl shadow-xl p-12 max-w-lg text-center">
          <h1 className="text-5xl font-light">
            Thank You ❤️
          </h1>

          <p className="mt-6 text-gray-500">
            Your RSVP has been received.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF8F2] flex items-center justify-center p-8">

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-xl">

        <p className="uppercase tracking-[0.35em] text-xs text-[#C9A96A]">
          Peculiar & Chiedozie
        </p>

        <h1 className="mt-3 text-5xl font-light">
          RSVP
        </h1>

        {!guest && (
          <>
            <p className="mt-6 text-gray-500">
              Enter your invitation code
            </p>

            <input
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
              className="mt-8 w-full rounded-xl border p-4"
              placeholder="Invitation Code"
            />

            <button
              onClick={findGuest}
              disabled={loading}
              className="mt-6 w-full rounded-full bg-[#C9A96A] py-4 text-white"
            >
              {loading ? "Searching..." : "Continue"}
            </button>
          </>
        )}

        {guest && (
          <div className="mt-8">

            <h2 className="text-3xl font-light">
              Hello {guest.full_name}
            </h2>

            <p className="mt-4 text-gray-500">
              Will you be attending?
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">

              <button
                onClick={() => setAttending(true)}
                className={`rounded-xl p-4 border ${
                  attending
                    ? "bg-green-600 text-white"
                    : ""
                }`}
              >
                YES
              </button>

              <button
                onClick={() => setAttending(false)}
                className={`rounded-xl p-4 border ${
                  !attending
                    ? "bg-red-600 text-white"
                    : ""
                }`}
              >
                NO
              </button>

            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Leave us a message..."
              className="mt-6 h-36 w-full rounded-xl border p-4"
            />

            <button
              onClick={submitRSVP}
              disabled={loading}
              className="mt-6 w-full rounded-full bg-[#C9A96A] py-4 text-white"
            >
              {loading ? "Submitting..." : "Submit RSVP"}
            </button>

          </div>
        )}

      </div>

    </main>
  );
}