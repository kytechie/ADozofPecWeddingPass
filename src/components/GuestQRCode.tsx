"use client";

import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
import { useRef } from "react";

export default function GuestQRCode({
  guestId,
}: {
  guestId: string;
}) {
  const qrRef = useRef<HTMLDivElement>(null);

  async function downloadQRCode() {
    if (!qrRef.current) return;

    const dataUrl = await toPng(qrRef.current);

    const link = document.createElement("a");

    link.download = `guest-${guestId}.png`;

    link.href = dataUrl;

    link.click();
  }

  return (
    <div className="flex flex-col items-center gap-6">

      <div
        ref={qrRef}
        className="rounded-2xl bg-white p-5 shadow-lg"
      >
        <QRCode
          value={guestId}
          size={220}
        />
      </div>

      <button
        onClick={downloadQRCode}
        className="rounded-full bg-[#C9A96A] px-6 py-3 text-white hover:opacity-90"
      >
        Download QR Code
      </button>

      <p className="text-sm text-gray-500 text-center">
        Scan this code at the wedding entrance.
      </p>

    </div>
  );
}