"use client";

import QRCode from "react-qr-code";
import AddToCalendar from "./AddToCalendar";

type InvitationCardProps = {
  name: string;
  inviteCode: string;
  inviteToken: string;
  seats: number;
  onClose?: () => void;
};

export default function InvitationCard({
  name,
  inviteCode,
  inviteToken,
  seats,
  onClose,
}: InvitationCardProps) {
  return (
    <div className="relative w-full max-w-xl rounded-[40px] bg-white shadow-2xl overflow-hidden">

      {/* Gold Top */}
      <div className="h-3 bg-[#C9A96A]" />

<div className="p-6 md:p-12">

  <div className="text-center mb-14">

  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C9A96A] text-white text-3xl">
    ✓
  </div>

  <h2 className="mt-8 text-4xl font-light text-[#2F2A27]">
    RSVP Confirmed
  </h2>

  <p className="mt-5 text-[#756C65] leading-8 max-w-md mx-auto">
    Thank you for celebrating this beautiful beginning with us.
    Your invitation has been reserved.
  </p>

</div>

        <p className="uppercase tracking-[0.45em] text-xs text-[#C9A96A] text-center">
          Wedding Invitation
        </p>

        <h1 className="mt-6 text-center text-3xl md:text-5xl font-light text-[#2F2A27]">
          Peculiar
        </h1>

        <p className="text-center text-2xl text-[#C9A96A] mt-2">&</p>

        <h1 className="text-center text-5xl font-light text-[#2F2A27]">
          Chiedozie
        </h1>

        <div className="mt-10 text-center">

          <p className="uppercase tracking-[0.35em] text-xs text-gray-500">
            Invited Guest
          </p>

         <h2 className="mt-3 text-2xl md:text-4xl font-light break-words">
            {name}
          </h2>

        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="rounded-2xl bg-[#FAF8F2] p-6">

            <p className="uppercase tracking-[0.25em] text-xs text-[#C9A96A]">
              Invitation Code
            </p>

            <h3 className="mt-3 text-lg md:text-xl font-semibold break-words">
              {inviteCode}
            </h3>

          </div>

          <div className="rounded-2xl bg-[#FAF8F2] p-6">

            <p className="uppercase tracking-[0.25em] text-xs text-[#C9A96A]">
              Reserved Seats
            </p>

            <h3 className="mt-3 text-3xl md:text-4xl font-light">
              {seats}
            </h3>

          </div>

        </div>

        <div className="mt-12 flex justify-center">

          <div className="rounded-3xl bg-white p-5 shadow-lg">

           <QRCode
  value={`https://adozofpec27.com/invite/${inviteToken}`}
  size={180}
/>

          </div>

        </div>

        <div className="mt-12 text-center space-y-2">

          <p className="text-lg font-medium text-[#2F2A27]">
            Saturday, 9 January 2027
          </p>

          <p className="text-gray-500">
            3:00 PM
          </p>

          <p className="text-gray-500">
            Acropolis Park, Apo District, Abuja
          </p>

        </div>

  
        <AddToCalendar />

        {onClose && (
          <button
            onClick={onClose}
            className="mt-6 w-full rounded-full bg-[#C9A96A] py-4 text-white hover:opacity-90 transition"
          >
            Close
          </button>
        )}

      </div>

      <div className="h-3 bg-[#C9A96A]" />

    </div>
  );
}