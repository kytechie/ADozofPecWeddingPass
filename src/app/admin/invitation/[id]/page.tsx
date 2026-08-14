"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import InvitationCard from "@/components/InvitationCard";

export default function InvitationPage() {
  const params = useParams();
  const id = params.id as string;

  const [guest, setGuest] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGuest();
  }, []);

  async function loadGuest() {
   const { data, error } = await supabase
  .from("guests")
  .select("*")
  .eq("invite_token", id)
  .single();

    if (error) {
      console.error(error);
    } else {
      setGuest(data);
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-light">Loading Invitation...</h2>
      </main>
    );
  }

  if (!guest) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-light text-red-600">
          Guest not found.
        </h2>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF8F2] flex items-center justify-center p-10">
      <InvitationCard
  name={guest.full_name}
  inviteCode={guest.invite_code}
  inviteToken={guest.invite_token}
  seats={guest.seats}
  onClose={() => window.history.back()}
/>
    </main>
  );
}