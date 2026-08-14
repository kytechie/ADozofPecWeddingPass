"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";
import InvitationCard from "./InvitationCard";
import InvitationSection from "./InvitationSection";
import { useGuest } from "@/components/GuestProvider";

export default function RSVP() {
  const { guest } = useGuest();
  console.log(guest);

const [open, setOpen] = useState(false);
const [giftOpen, setGiftOpen] = useState(false);

const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [attending, setAttending] = useState<boolean | null>(null);
const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);
const [inviteCode, setInviteCode] = useState("");
const [inviteToken, setInviteToken] = useState("");
const [guestName, setGuestName] = useState("");
const [guestSeats, setGuestSeats] = useState(1);
const [errorMessage, setErrorMessage] = useState("");

useEffect(() => {
  if (guest) {
    setFullName(guest.full_name);
    setEmail(guest.email);
    setPhone(guest.phone);
    setAttending(guest.attending);
    setMessage(guest.message ?? "");
  } else {
    setFullName("");
    setEmail("");
    setPhone("");
    setAttending(null);
    setMessage("");
  }
}, [guest]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (attending === null) {
      setErrorMessage("Please select whether you will attend.");
      return;
    }

    setLoading(true);
    setSuccess(false);
    setErrorMessage("");

    const inviteCode =
  "PC-" +
  uuidv4()
    .replace(/-/g, "")
    .substring(0, 6)
    .toUpperCase();

const qrCode = uuidv4();

let error;

if (guest) {
  ({ error } = await supabase
    .from("guests")
    .update({
  attending,
  seats: attending ? 1 : 0,
  message: message.trim(),
})
    .eq("id", guest.id));
} else {
  ({ error } = await supabase
    .from("guests")
    .insert([
      {
  full_name: fullName.trim(),
  email: email.trim(),
  phone: phone.trim(),
  attending,
  seats: attending ? 1 : 0,
  message: message.trim(),
  invite_code: inviteCode,
  qr_code: qrCode,
}
    ]));
}

    setLoading(false);

    if (error) {
  console.error(error);

  if (error.code === "23505") {
    setErrorMessage(
      "💌 It looks like you've already RSVP'd with this email. Thank you for your response!"
    );
  } else {
    setErrorMessage(error.message);
  }

  return;
}
setGuestName(guest ? guest.full_name : fullName);
setGuestSeats(attending ? 1 : 0);
setInviteCode(guest ? guest.invite_code : inviteCode);
setInviteToken(guest ? guest.invite_token : qrCode);

setSuccess(true);

if (!guest) {
    setFullName("");
    setEmail("");
    setPhone("");
}
setAttending(null);
setMessage("");

  };

  return (
    <>
      {/* RSVP SECTION */}

     <InvitationSection
  onRSVP={() => {
    // If there is NO invitation link,
    // start with a completely fresh form.
    if (!guest) {
      setFullName("");
      setEmail("");
      setPhone("");
      setAttending(null);
      setMessage("");
    } else {
      // Invitation link opened
      setFullName(guest.full_name);
      setEmail(guest.email);
      setPhone(guest.phone);
      setAttending(guest.attending);
      setMessage(guest.message ?? "");
    }

    setErrorMessage("");
    setSuccess(false);
    setOpen(true);
  }}
/>

      {/* MODAL */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-md p-6"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              transition={{
                duration: 0.35,
              }}
              className="bg-[#FAF8F2] rounded-[44px] p-10 md:p-16 w-full max-w-3xl relative shadow-[0_35px_120px_rgba(0,0,0,.12)] mx-auto my-12"
            >
              {/* Close */}

              <button
                onClick={() => {
  setOpen(false);

  setErrorMessage("");
  setSuccess(false);

  setInviteCode("");

  if (!guest) {
  setFullName("");
  setEmail("");
  setPhone("");
}
  setAttending(null);
  setMessage("");

  setGuestName("");
  setGuestSeats(1);
}}
                className="absolute right-8 top-8 text-3xl text-[#A39B93] hover:text-black transition"
              >
                ×
              </button>

              <p className="uppercase tracking-[0.55em] text-xs text-[#C9A96A] text-center">
                RSVP
              </p>

              <h2 className="mt-6 text-center text-5xl md:text-6xl font-light tracking-[-0.03em] text-[#2F2A27] leading-tight">
  We Can't Wait
  <br />
  To Celebrate With You
</h2>
              <div className="flex items-center justify-center gap-4 mt-10 mb-14">

  <div className="w-12 h-px bg-[#C9A96A]" />

  <span className="text-[#C9A96A] text-lg">
    ❦
  </span>

  <div className="w-12 h-px bg-[#C9A96A]" />

</div>

              {/* FORM */}

              {!success ? (
  <form onSubmit={handleSubmit} className="space-y-8">

    <div>
      <label className="uppercase tracking-[0.45em] text-[11px] text-[#B29D77]">
        Full Name
      </label>

      <input
  type="text"
  required
  value={fullName}
  readOnly={!!guest}
  onChange={(e) => setFullName(e.target.value)}
  className="w-full mt-3 rounded-2xl border border-[#E7D8B2] bg-white px-6 py-5 outline-none text-lg transition-all duration-300 focus:border-[#C9A96A] focus:shadow-[0_0_0_4px_rgba(201,169,106,.10)]"
/>
</div>

<div>
  <label className="uppercase tracking-[0.45em] text-[11px] text-[#B29D77]">
    Email Address
  </label>

  <input
    type="email"
    required
    value={email}
    readOnly={!!guest}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full mt-3 rounded-2xl border border-[#E7D8B2] bg-white px-6 py-5 outline-none text-lg transition-all duration-300 focus:border-[#C9A96A] focus:shadow-[0_0_0_4px_rgba(201,169,106,.10)]"
  />
</div>

<div>
  <label className="uppercase tracking-[0.45em] text-[11px] text-[#B29D77]">
    Phone Number
  </label>

  <input
    type="tel"
    required
    value={phone}
    readOnly={!!guest}
    onChange={(e) => setPhone(e.target.value)}
    className="w-full mt-3 rounded-2xl border border-[#E7D8B2] bg-white px-6 py-5 outline-none text-lg transition-all duration-300 focus:border-[#C9A96A] focus:shadow-[0_0_0_4px_rgba(201,169,106,.10)]"
  />
</div>

    <div>
      <label className="uppercase tracking-[0.45em] text-[11px] text-[#B29D77]">
        Will You Attend?
      </label>

      <div className="grid grid-cols-2 gap-5 mt-6">

  <button
    type="button"
    onClick={() => setAttending(true)}
    className={`
      rounded-3xl border px-6 py-5 text-left transition-all duration-300
      ${
        attending === true
          ? "border-[#C9A96A] bg-[#FFF9EF] shadow-[0_12px_30px_rgba(201,169,106,.15)]"
          : "border-[#E8DDBF] bg-white hover:border-[#C9A96A]"
      }
    `}
  >
    <p className="uppercase tracking-[0.45em] text-[11px] text-[#B29D77]">
      Accept
    </p>

    <h4 className="mt-2 text-xl font-light text-[#2F2A27]">
      Joyfully
    </h4>

    <p className="mt-1 text-[15px] text-[#756C65]">
      We can't wait to celebrate with you.
    </p>
  </button>

  <button
    type="button"
    onClick={() => setAttending(false)}
    className={`
      rounded-3xl border px-6 py-5 text-left transition-all duration-300
      ${
        attending === false
          ? "border-[#C9A96A] bg-[#FFF9EF] shadow-[0_12px_30px_rgba(201,169,106,.15)]"
          : "border-[#E8DDBF] bg-white hover:border-[#C9A96A]"
      }
    `}
  >
    <p className="uppercase tracking-[0.45em] text-[11px] text-[#B29D77]">
      Decline
    </p>

    <h4 className="mt-2 text-xl font-light text-[#2F2A27]">
      Regretfully
    </h4>

    <p className="mt-1 text-[15px] text-[#756C65]">
      We'll miss celebrating with you.
    </p>
  </button>

</div>
    </div>

    {attending === true && (
  <div>
    <label className="uppercase tracking-[0.45em] text-[11px] text-[#B29D77]">
      Number of Seats
    </label>

    <input
      type="text"
      value="1"
      disabled
      className="w-full mt-3 rounded-2xl bg-[#FBF8F2] border border-[#E7D8B2] px-6 py-5 text-lg text-[#5F5952] cursor-not-allowed"
    />

    <p className="mt-3 text-[15px] italic text-[#9A938C]">
      This invitation admits one guest.
    </p>
  </div>
)}
    {attending === true && (
      <div>
        <label className="uppercase tracking-[0.45em] text-[11px] text-[#B29D77]">
          Message For The Couple
        </label>

        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mt-3 rounded-2xl border border-[#E7D8B2] bg-white p-6 outline-none resize-none transition-all duration-300 focus:border-[#C9A96A] focus:shadow-[0_0_0_4px_rgba(201,169,106,.10)]"
        />
      </div>
    )}

    <button
      type="submit"
      disabled={loading}
      className="w-full mt-8 rounded-full bg-[#C9A96A] py-5 text-white uppercase tracking-[0.45em] text-xs transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(201,169,106,.35)] disabled:opacity-50"
    >
      {loading ? "Submitting..." : "Submit RSVP"}
    </button> 

    <p className="text-center text-sm italic text-[#9A938C] mt-6 leading-7">
  Kindly respond before
  <span className="text-[#C9A96A] font-medium">
    {" "}15th December 2026
  </span>
  .
</p>

    {errorMessage && (
      <div className="rounded-3xl border border-red-200 bg-[#FFF7F7] p-6 text-center text-red-700 shadow-sm">
        {errorMessage}
      </div>
    )}

  </form>
) : (
 <InvitationCard
  name={guestName}
  inviteCode={inviteCode}
  inviteToken={inviteToken}
  seats={guestSeats}
  onClose={() => {

  setOpen(false);

  setSuccess(false);
  setErrorMessage("");

  setInviteCode("");
  setGuestName("");
  setGuestSeats(1);

  setAttending(null);
  setMessage("");
}}
  />
)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
  {giftOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md overflow-y-auto p-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.96 }}
        transition={{ duration: 0.35 }}
        className="bg-[#FAF8F2] rounded-[42px] shadow-2xl max-w-2xl mx-auto my-12 p-8 md:p-14 relative"
      >
        <button
          onClick={() => setGiftOpen(false)}
          className="absolute right-8 top-8 text-3xl text-[#A39B93] hover:text-black transition"
        >
          ×
        </button>

        <p className="uppercase tracking-[0.55em] text-xs text-[#C9A96A] text-center">
          With Love
        </p>

        <h2 className="mt-6 text-center text-4xl md:text-6xl font-light text-[#2F2A27] leading-tight">
          Your Presence
          <br />
          Is Our Greatest Gift
        </h2>

        <div className="w-24 h-px bg-[#D9C7A3] mx-auto my-10" />

        <p className="text-center text-lg leading-9 text-[#6B635C] max-w-2xl mx-auto">
  Your love, prayers and presence mean the world to us.
  <br />
  Should you wish to bless us further,
  the account details are below.
</p>
        <div className="flex justify-center mt-14">

          {/* Nigerian Account */}

          <div className="w-full max-w-lg rounded-3xl border border-[#E8D8B6] bg-[#FFFDFC] p-8 shadow-sm">

            <p className="uppercase tracking-[0.35em] text-xs text-[#B29D77]">
              ✦ Nigerian Account
            </p>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-sm text-[#9A938C]">
                  Bank
                </p>

                <p className="mt-1 text-xl font-light text-[#2F2A27]">
                  Union Bank
                </p>
              </div>

              <div>
                <p className="text-sm text-[#9A938C]">
                  Account Name
                </p>

                <p className="mt-1 text-xl font-light text-[#2F2A27]">
  Chiedozie Okoli
</p>

<div className="h-px bg-[#EEE3C7] my-6" />
              </div>

              <div>
                <p className="text-sm text-[#9A938C]">
                  Account Number
                </p>

                <p className="mt-1 text-4xl md:text-5xl tracking-[0.12m] text-[#2F2A27] font-medium">
                  0076369723
                </p>
              </div>

              <button
                onClick={() => {
                  navigator.clipboard.writeText("0076369723");
                }}
                className="w-full rounded-full bg-[#C9A96A] py-4 text-white uppercase tracking-[0.28em] text-[11px] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Copy Bank Details
              </button>

            </div>

          </div>

        </div>

        <p className="mt-12 text-center italic text-[#8A817A] leading-8 max-w-xl mx-auto">
         With grateful hearts, thank you for celebrating this special moment with us. May God bless you abundantly.
        </p>

      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}
