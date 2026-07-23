"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function EditGuestPage() {
  const { id } = useParams();
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [seats, setSeats] = useState(1);

  useEffect(() => {
    loadGuest();
  }, []);

  async function loadGuest() {
    const { data, error } = await supabase
      .from("guests")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      alert("Guest not found.");
      router.push("/admin/guests");
      return;
    }

    setFullName(data.full_name || "");
    setEmail(data.email || "");
    setPhone(data.phone || "");
    setSeats(data.seats || 1);
  }

  async function updateGuest() {
    const { error } = await supabase
      .from("guests")
      .update({
        full_name: fullName,
        email,
        phone,
        seats,
      })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Guest updated successfully!");

    router.push("/admin/guests");
  }

  async function deleteGuest() {
    const confirmed = confirm(
      "Are you sure you want to delete this guest?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("guests")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Guest deleted successfully!");

    router.push("/admin/guests");
  }

  return (
    <main className="min-h-screen bg-[#FAF8F2] flex items-center justify-center p-10">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-2xl">

        <p className="uppercase tracking-[0.35em] text-xs text-[#C9A96A]">
          Forever Wedding
        </p>

        <h1 className="mt-3 text-5xl font-light">
          Edit Guest
        </h1>

        <div className="mt-10 space-y-6">

          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className="w-full rounded-xl border p-4"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-xl border p-4"
          />

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className="w-full rounded-xl border p-4"
          />

          <input
            type="number"
            min={1}
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value))}
            className="w-full rounded-xl border p-4"
          />

          <div className="flex gap-4">

            <button
              onClick={updateGuest}
              className="flex-1 rounded-full bg-[#C9A96A] py-4 text-white hover:opacity-90 transition"
            >
              Save Changes
            </button>

            <button
              onClick={deleteGuest}
              className="flex-1 rounded-full bg-red-600 py-4 text-white hover:bg-red-700 transition"
            >
              Delete Guest
            </button>

          </div>

        </div>

      </div>
    </main>
  );
}