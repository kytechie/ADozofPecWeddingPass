"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type WeddingTable = {
  id: string;
  table_name: string;
};

export default function AddGuestPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [seats, setSeats] = useState(1);

  const [tables, setTables] = useState<WeddingTable[]>([]);
  const [tableId, setTableId] = useState("");

  useEffect(() => {
    loadTables();
  }, []);

  async function loadTables() {
  const { data, error } = await supabase
    .from("wedding_tables")
    .select("*")
    .order("table_name");

  console.log("TABLE DATA:", data);
  console.log("TABLE ERROR:", error);

  if (data) {
    setTables(data);
  }
}

  async function saveGuest() {
    if (!fullName.trim()) {
      alert("Please enter the guest's full name.");
      return;
    }

    const inviteCode = crypto.randomUUID().slice(0, 8).toUpperCase();

    const { error } = await supabase.from("guests").insert({
      full_name: fullName,
      email,
      phone,
      seats,
      table_id: tableId || null,
      invite_code: inviteCode,
      attending: false,
      checked_in: false,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Guest added successfully!");

    router.push("/admin/guests");
  }

  return (
    <main className="min-h-screen bg-[#FAF8F2] flex items-center justify-center p-10">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-2xl">

        <p className="uppercase tracking-[0.35em] text-xs text-[#C9A96A]">
          Forever Wedding
        </p>

        <h1 className="mt-3 text-5xl font-light">
          Add Guest
        </h1>

        <p className="mt-4 text-gray-500">
          Add a new wedding guest.
        </p>

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
            placeholder="Phone Number"
            className="w-full rounded-xl border p-4"
          />

          <input
            type="number"
            min="1"
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value))}
            className="w-full rounded-xl border p-4"
          />

          <select
            value={tableId}
            onChange={(e) => setTableId(e.target.value)}
            className="w-full rounded-xl border p-4"
          >
            <option value="">Assign Table (Optional)</option>

            {tables.map((table) => (
              <option
                key={table.id}
                value={table.id}
              >
                {table.table_name}
              </option>
            ))}
          </select>

          <button
            onClick={saveGuest}
            className="w-full rounded-full bg-[#C9A96A] py-4 text-white hover:opacity-90 transition"
          >
            Save Guest
          </button>

        </div>

      </div>
    </main>
  );
}