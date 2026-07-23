"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SettingsPage() {
  const [id, setId] = useState<number | null>(null);

  const [brideName, setBrideName] = useState("");
  const [groomName, setGroomName] = useState("");
  const [weddingDate, setWeddingDate] = useState("");
  const [weddingTime, setWeddingTime] = useState("");
  const [venue, setVenue] = useState("");

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    const { data } = await supabase
      .from("wedding_settings")
      .select("*")
      .limit(1)
      .single();

    if (!data) return;

    setId(data.id);
    setBrideName(data.bride_name ?? "");
    setGroomName(data.groom_name ?? "");
    setWeddingDate(data.wedding_date ?? "");
    setWeddingTime(data.wedding_time ?? "");
    setVenue(data.venue ?? "");
  }

  async function saveSettings() {
    const { error } = await supabase
      .from("wedding_settings")
      .update({
        bride_name: brideName,
        groom_name: groomName,
        wedding_date: weddingDate,
        wedding_time: weddingTime,
        venue,
      })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Settings updated successfully.");
  }

  return (
    <div>
      <h1 className="text-5xl font-light">
        Wedding Settings
      </h1>

      <p className="mt-3 text-gray-500">
        Update your wedding information.
      </p>

      <div className="mt-10 bg-white rounded-3xl shadow-lg p-10 max-w-3xl space-y-6">

        <input
          value={brideName}
          onChange={(e) => setBrideName(e.target.value)}
          placeholder="Bride Name"
          className="w-full rounded-xl border p-4"
        />

        <input
          value={groomName}
          onChange={(e) => setGroomName(e.target.value)}
          placeholder="Groom Name"
          className="w-full rounded-xl border p-4"
        />

        <input
          type="date"
          value={weddingDate}
          onChange={(e) => setWeddingDate(e.target.value)}
          className="w-full rounded-xl border p-4"
        />

        <input
          value={weddingTime}
          onChange={(e) => setWeddingTime(e.target.value)}
          placeholder="Wedding Time"
          className="w-full rounded-xl border p-4"
        />

        <input
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          placeholder="Wedding Venue"
          className="w-full rounded-xl border p-4"
        />

        <button
          onClick={saveSettings}
          className="rounded-full bg-[#C9A96A] px-8 py-4 text-white hover:opacity-90"
        >
          Save Settings
        </button>

      </div>
    </div>
  );
}