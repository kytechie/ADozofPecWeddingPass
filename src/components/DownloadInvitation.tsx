"use client";

import { saveAs } from "file-saver";
import { toPng } from "html-to-image";

interface Props {
  targetId: string;
  guestName: string;
}

export default function DownloadInvitation({
  targetId,
  guestName,
}: Props) {
  const handleDownload = async () => {
    const node = document.getElementById(targetId);

    if (!node) return;

    const dataUrl = await toPng(node, {
      cacheBust: true,
      pixelRatio: 3,
    });

    saveAs(dataUrl, `${guestName}-Invitation.png`);
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-8 w-full rounded-full border border-[#C9A96A] py-4 uppercase tracking-[0.3em] text-[#C9A96A] transition hover:bg-[#C9A96A] hover:text-white"
    >
      Download Invitation
    </button>
  );
}