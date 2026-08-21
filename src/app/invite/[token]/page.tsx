"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useGuest } from "@/components/GuestProvider";

export default function InvitationPage() {
  const params = useParams();
  const router = useRouter();
  const { setGuest } = useGuest();

  const token = params.token as string;

  const [guest, setLocalGuest] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      loadGuest();
    }
  }, [token]);


  async function loadGuest() {

    console.log("Searching token:", token);

    const { data, error } = await supabase
      .from("guests")
      .select("*")
      .eq("invite_token", token)
      .maybeSingle();


    console.log("Supabase returned data:", data);
    console.log("Supabase returned error:", error);


    if (error) {
      console.error("Invite lookup failed:", error);
    }


    if (data) {
      setLocalGuest(data);
    }

    setLoading(false);
  }


  function continueToWebsite() {

    if (!guest) return;

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
      <main className="min-h-screen flex flex-col gap-5 items-center justify-center">

        <h1 className="text-3xl">
          Invalid invitation.
        </h1>

        <p className="text-gray-500">
          Token: {token}
        </p>

      </main>
    );

  }



  return (

    <main className="min-h-screen bg-[#FAF8F2] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-3xl rounded-[40px] bg-white shadow-xl p-8 md:p-12 text-center">


        <p className="uppercase tracking-[0.45em] text-xs text-[#C9A96A]">
          Wedding Invitation
        </p>


        <h1 className="mt-8 text-4xl md:text-6xl font-light text-[#2F2A27]">
          Dear {guest.full_name},
        </h1>


        <p className="mt-8 text-gray-600">
          You have been specially invited to celebrate the wedding of
        </p>


        <h2 className="mt-8 text-5xl font-light text-[#C9A96A]">
          Peculiar
        </h2>

        <p className="text-xl">
          &
        </p>

        <h2 className="text-5xl font-light text-[#C9A96A]">
          Chiedozie
        </h2>


        <p className="mt-10 text-gray-600 leading-8">
          We would be honoured to have you share in our joy as we begin
          this new chapter together.
        </p>


        <button
          onClick={continueToWebsite}
          className="mt-14 rounded-full bg-[#C9A96A] px-10 py-4 text-white"
        >
          Continue
        </button>


      </div>


    </main>

  );

}