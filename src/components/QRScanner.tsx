"use client";

import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

interface QRScannerProps {
  onScan: (code: string) => Promise<void> | void;
}

export default function QRScanner({ onScan }: QRScannerProps) {
  const [paused, setPaused] = useState(false);

  async function handleScan(results: any[]) {
    if (paused) return;

    if (!results.length) return;

    setPaused(true);

    await onScan(results[0].rawValue);

    setTimeout(() => {
      setPaused(false);
    }, 3000);
  }

  return (
    <div className="mt-8 overflow-hidden rounded-2xl">
      <Scanner
        paused={paused}
        onScan={handleScan}
        onError={(error) => console.error(error)}
      />
    </div>
  );
}