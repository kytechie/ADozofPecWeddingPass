import { supabase } from "@/lib/supabase";
import QRCode from "react-qr-code";
import DownloadInvitation from "@/components/DownloadInvitation";

type PageProps = {
  params: Promise<{
    inviteCode: string;
  }>;
};

export default async function InvitePage({ params }: PageProps) {
  const { inviteCode } = await params;

  const { data: guest, error } = await supabase
    .from("guests")
    .select("*")
    .eq("invite_code", inviteCode)
    .single();

  if (error || !guest) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#FAF8F2]">
        <h1 className="text-3xl">Invitation not found.</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF8F2] flex items-center justify-center py-20 px-6">
      <div className="bg-white rounded-[36px] shadow-2xl p-5 max-w-2xl w-full">

        <div
  id="invitation-card"
  className="relative overflow-hidden rounded-[28px] border border-[#E8D8B8] p-12 text-center"
>

          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[14rem] font-serif text-[#C9A96A] opacity-[0.03] tracking-[-0.08em]">
              PC
            </span>
          </div>

          {/* Content */}
          <div className="relative z-10">

            <p className="uppercase tracking-[0.45em] text-xs text-[#C9A96A]">
              Peculiar & Chiedozie
            </p>

            <h1 className="mt-6 text-5xl font-light text-[#2F2A27]">
              Dear {guest.full_name},
            </h1>

            <p className="mt-6 max-w-lg mx-auto text-lg leading-8 text-[#6D655F]">
              You are cordially invited to witness and celebrate the beginning
              of our forever. Your presence will make our day even more special.
            </p>

            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="h-px w-20 bg-[#C9A96A]" />
              <span className="text-[#C9A96A]">✦</span>
              <div className="h-px w-20 bg-[#C9A96A]" />
            </div>

            <div className="mt-12 space-y-8">

              <div>
                <p className="uppercase tracking-[0.35em] text-xs text-[#C9A96A]">
                  Date
                </p>

                <p className="mt-2 text-2xl font-light text-[#2F2A27]">
                  Saturday, 9 January 2027
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.35em] text-xs text-[#C9A96A]">
                  Ceremony
                </p>

                <p className="mt-2 text-xl text-[#5E5650]">
                  3:30 PM
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.35em] text-xs text-[#C9A96A]">
                  Venue
                </p>

                <p className="mt-2 text-xl text-[#5E5650]">
                  Acropolis Park
                  <br />
                  Abuja, Nigeria
                </p>
              </div>

            </div>

            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="h-px w-20 bg-[#C9A96A]" />
              <span className="text-[#C9A96A]">✦</span>
              <div className="h-px w-20 bg-[#C9A96A]" />
            </div>

            <p className="mt-10 text-sm uppercase tracking-[0.35em] text-[#8D847C]">
              Invitation Code
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-[0.25em] text-[#C9A96A]">
              {guest.invite_code}
            </h3>

            <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#8D847C]">
              Reserved Seats
            </p>

            <h3 className="mt-3 text-2xl text-[#2F2A27]">
              {guest.seats}
            </h3>

            <div className="mt-12 flex flex-col items-center">

              <div className="rounded-2xl border border-[#E8D8B8] bg-white p-4 shadow-sm">
                <QRCode
                  value={guest.invite_code}
                  size={170}
                  bgColor="#FFFFFF"
                  fgColor="#2F2A27"
                />
              </div>

              <p className="mt-5 text-xs uppercase tracking-[0.35em] text-[#8D847C]">
                Scan Upon Arrival
              </p>

            </div>

            <p className="mt-12 text-sm leading-7 text-gray-500">
              Kindly present this invitation at the wedding entrance for verification.
            </p>

          </div>

        </div>
<DownloadInvitation
  targetId="invitation-card"
  guestName={guest.full_name}
/>
      </div>
    </main>
  );
}
