"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";
import InvitationCard from "./InvitationCard";

export default function RSVP() {
  const [open, setOpen] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [seats, setSeats] = useState(1);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [inviteCode, setInviteCode] = useState("");
  const [guestName, setGuestName] = useState("");
  const [guestSeats, setGuestSeats] = useState(1);

  const [errorMessage, setErrorMessage] = useState("");
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

const { error } = await supabase.from("guests").insert([
  {
        full_name: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        attending,
        seats: attending ? seats : 0,
        message: message.trim(),
invite_code: inviteCode,
qr_code: qrCode,
      },
    ]);

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
setGuestName(fullName);
setGuestSeats(seats);
setInviteCode(inviteCode);

setSuccess(true);

setFullName("");
setEmail("");
setPhone("");
setAttending(null);
setSeats(1);
setMessage("");

  };

  return (
    <>
      {/* RSVP SECTION */}

      <section className="bg-[#FAF8F2] py-40 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.6em] text-xs text-[#C9A96A]"
          >
            RSVP
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-5xl md:text-7xl font-light text-[#2F2A27]"
          >
            We Would Be Honoured
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-20 h-px bg-[#C9A96A] mx-auto mt-10"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 max-w-2xl mx-auto text-xl leading-9 text-[#5E5650]"
          >
            We would be delighted to celebrate our special day with you.
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.03,
              backgroundColor: "#C9A96A",
              color: "#fff",
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => {
  setOpen(true);
  setErrorMessage("");
  setSuccess(false);
}}
            className="mt-16 border border-[#C9A96A] px-12 py-5 uppercase tracking-[0.45em] text-xs text-[#5F5952] transition-all duration-500"
          >
            RSVP NOW
          </motion.button>
        </div>
      </section>

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
              className="bg-[#FAF8F2] rounded-[40px] p-10 md:p-14 w-full max-w-2xl relative shadow-2xl mx-auto my-12"
            >
              {/* Close */}

              <button
                onClick={() => {
  setOpen(false);

  setErrorMessage("");
  setSuccess(false);

  setInviteCode("");

  setFullName("");
  setEmail("");
  setPhone("");
  setAttending(null);
  setSeats(1);
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

              <h2 className="mt-6 text-center text-4xl md:text-5xl font-light text-[#2F2A27]">
                Confirm Your Attendance
              </h2>

              <div className="w-16 h-px bg-[#C9A96A] mx-auto mt-8 mb-12"></div>

              {/* FORM */}

              {!success ? (
  <form onSubmit={handleSubmit} className="space-y-8">

    <div>
      <label className="uppercase tracking-[0.3em] text-xs text-[#8A817A]">
        Full Name
      </label>

      <input
        type="text"
        required
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="w-full mt-3 bg-transparent border-b border-[#DCCDA7] pb-4 outline-none text-lg"
      />
    </div>

    <div>
      <label className="uppercase tracking-[0.3em] text-xs text-[#8A817A]">
        Email Address
      </label>

      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mt-3 bg-transparent border-b border-[#DCCDA7] pb-4 outline-none text-lg"
      />
    </div>

    <div>
      <label className="uppercase tracking-[0.3em] text-xs text-[#8A817A]">
        Phone Number
      </label>

      <input
        type="tel"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full mt-3 bg-transparent border-b border-[#DCCDA7] pb-4 outline-none text-lg"
      />
    </div>

    <div>
      <label className="uppercase tracking-[0.3em] text-xs text-[#8A817A]">
        Will You Attend?
      </label>

      <div className="mt-5 space-y-4">
        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="attendance"
            checked={attending === true}
            onChange={() => setAttending(true)}
          />
          Joyfully Accept
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="attendance"
            checked={attending === false}
            onChange={() => setAttending(false)}
          />
          Regretfully Decline
        </label>
      </div>
    </div>

    {attending === true && (
      <div>
        <label className="uppercase tracking-[0.3em] text-xs text-[#8A817A]">
          Number of Seats
        </label>

        <select
          value={seats}
          onChange={(e) => setSeats(Number(e.target.value))}
          className="w-full mt-3 bg-transparent border-b border-[#DCCDA7] pb-4 outline-none"
        >
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
    )}

    {attending === true && (
      <div>
        <label className="uppercase tracking-[0.3em] text-xs text-[#8A817A]">
          Message For The Couple
        </label>

        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mt-3 border border-[#E7D8B2] rounded-xl p-5 bg-transparent outline-none resize-none"
        />
      </div>
    )}

    <button
      type="submit"
      disabled={loading}
      className="w-full mt-6 bg-[#C9A96A] text-white py-5 uppercase tracking-[0.45em] text-xs rounded-full transition hover:opacity-90 disabled:opacity-50"
    >
      {loading ? "Submitting..." : "Submit RSVP"}
    </button>

    {errorMessage && (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-center text-red-700">
        {errorMessage}
      </div>
    )}

  </form>
) : (
  <InvitationCard
    name={guestName}
    inviteCode={inviteCode}
    seats={guestSeats}
    onClose={() => {
  setOpen(false);

  setSuccess(false);
  setErrorMessage("");

  setInviteCode("");
  setGuestName("");
  setGuestSeats(1);

  setFullName("");
  setEmail("");
  setPhone("");
  setAttending(null);
  setSeats(1);
  setMessage("");
}}
  />
)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
