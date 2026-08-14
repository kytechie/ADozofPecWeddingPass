"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import QRCode from "react-qr-code";

export default function EditGuestPage() {
  const { id } = useParams();
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [seats, setSeats] = useState(1);
  const [inviteCode, setInviteCode] = useState("");
const [inviteToken, setInviteToken] = useState("");
const [checkedIn, setCheckedIn] = useState(false);
const [attending, setAttending] = useState(false);

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

setInviteCode(data.invite_code || "");
setInviteToken(data.invite_token || "");

console.log("Guest Data:", data);
console.log("Invite Token:", data.invite_token);

setCheckedIn(data.checked_in || false);
setAttending(data.attendance_status === "Attending");
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

  function copyInvitationLink() {
    const link = `https://adozofpec27.com/invite/${inviteToken}`;

    navigator.clipboard.writeText(link);

    alert("Invitation link copied!");
  }

  function openInvitation() {
    window.open(
      `https://adozofpec27.com/invite/${inviteToken}`,
      "_blank"
    );
  }

  function sendWhatsAppReminder() {
    const phoneNumber = phone.replace(/^0/, "234");

    const message = encodeURIComponent(
      `Hi ${fullName},

You're warmly invited to celebrate our wedding.

Please RSVP using your invitation below:

https://adozofpec27.com/invite/${inviteToken}

Love,
Peculiar & Chiedozie ❤️`
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank"
    );
  }

  async function markCheckedIn() {
    const { error } = await supabase
      .from("guests")
      .update({
        checked_in: true,
        checked_in_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    setCheckedIn(true);

    alert("Guest successfully checked in!");
  }

  return (
    <main className="min-h-screen bg-[#FAF8F2] flex items-center justify-center p-10">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-2xl">

        <div className="mt-10 space-y-6">

         <div className="rounded-3xl border border-[#E7D8B2] bg-[#FFFDFC] p-8">

  <h2 className="text-2xl font-light">
    Guest Information
  </h2>

  <div className="mt-6 space-y-5">

    <InfoRow label="Status">
      {attending ? "✅ Attending" : "❌ Declined"}
    </InfoRow>

    <InfoRow label="Checked In">
      {checkedIn ? "🟢 Yes" : "⚪ No"}
    </InfoRow>

    <InfoRow label="Invitation Code">
      {inviteCode}
    </InfoRow>

    <InfoRow label="Seats">
      {seats}
    </InfoRow>

  </div>

</div>
 <label className="text-sm font-medium text-gray-600">
  Full Name
</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className="w-full rounded-xl border p-4"
          />
<label className="text-sm font-medium text-gray-600">
  Email Address
</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-xl border p-4"
          />
<label className="text-sm font-medium text-gray-600">
  Phone Number
</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className="w-full rounded-xl border p-4"
          />
<label className="text-sm font-medium text-gray-600">
  Number of Seats
</label>
          <input
            type="number"
            min={1}
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value))}
            className="w-full rounded-xl border p-4"
          />

          {/* Invitation Tools */}

<div className="rounded-3xl border border-[#E7D8B2] bg-[#FFFDFC] p-8 space-y-6">

  <h2 className="text-2xl font-light">
    Invitation
  </h2>

  <div className="flex flex-col items-center gap-4">

  <p className="text-red-600 break-all text-sm">
    Invite Token: {inviteToken}
  </p>

  <QRCode
    value={`https://adozofpec27.com/invite/${inviteToken}`}
    size={180}
  />

</div>

  <div className="grid gap-4">

    <button
      onClick={copyInvitationLink}
      className="rounded-full border border-[#C9A96A] py-3 hover:bg-[#FAF8F2]"
    >
      Copy Invitation Link
    </button>

    <button
      onClick={openInvitation}
      className="rounded-full border border-[#C9A96A] py-3 hover:bg-[#FAF8F2]"
    >
      Open Invitation
    </button>

    <button
      onClick={sendWhatsAppReminder}
      className="rounded-full bg-green-600 text-white py-3 hover:bg-green-700"
    >
      Send WhatsApp Reminder
    </button>

    {!checkedIn && (
      <button
        onClick={markCheckedIn}
        className="rounded-full bg-[#C9A96A] text-white py-3"
      >
        Mark Checked In
      </button>
    )}

  </div>

</div>

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
function InfoRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-between border-b border-[#EEE3C7] pb-3">
      <span className="text-gray-500">
        {label}
      </span>

      <span className="font-medium text-[#2F2A27]">
        {children}
      </span>
    </div>
  );
}