"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useGuest } from "@/components/GuestProvider";

export default function InvitationPage()  {
    const params = useParams();
    const token = params.token as string;

    const router = useRouter();
    const { setGuest } = useGuest();

const [guest, setLocalGuest] = useState<any>(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  if (!token) return;

  loadGuest();
}, [token]);

async function loadGuest() {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("invite_token", token)
    .single();

  if (!error) {
    setLocalGuest(data);
  }

  setLoading(false);
}

// 👇 ADD THIS RIGHT HERE
function continueToWebsite() {
  localStorage.removeItem("guest");

  setGuest(guest);

  router.push("/");
}

if (loading) {
  
  return (
    <main className="min-h-screen flex items-center justify-center">
      Loading invitation...
    </main>
  );
}

if (!guest) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      Invalid invitation.
    </main>
  );
}
  return (
    <main className="min-h-screen bg-[#FAF8F2] flex items-center justify-center px-4 py-10 md:px-6 md:py-20">

      <div className="w-full max-w-3xl rounded-[40px] bg-white shadow-xl p-8 md:p-12 text-center">

        <p className="uppercase tracking-[0.45em] text-xs text-[#C9A96A]">
          Wedding Invitation
        </p>

        <h1 className="mt-8 text-3xl sm:text-4xl md:text-6xl font-light text-[#2F2A27] leading-tight">
          Dear {guest.full_name},
        </h1>

        <p className="mt-8 max-w-xl mx-auto text-base md:text-lg leading-8 text-[#5A514B]">
          You have been specially invited to celebrate the wedding of
        </p>

        <h2 className="mt-8 text-4xl sm:text-5xl font-light text-[#C9A96A]">
          Peculiar
        </h2>

        <p className="mt-3 text-xl">&</p>

        <h2 className="mt-3 text-4xl sm:text-5xl font-light text-[#C9A96A]">
          Chiedozie
        </h2>

        <p className="mt-10 text-lg leading-9 text-[#5A514B]">
          We would be honoured to have you share in our joy as we begin
          this new chapter together.
        </p>

        <button
  onClick={continueToWebsite}
  className="mt-14 rounded-full bg-[#C9A96A] px-10 py-4 text-white hover:opacity-90 transition"
>
  Continue
</button>

      </div>

    </main>
  );
}