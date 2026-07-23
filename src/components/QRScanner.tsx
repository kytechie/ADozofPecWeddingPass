"use client";

import { Scanner } from "@yudiel/react-qr-scanner";

interface QRScannerProps {
  onScan: (code: string) => void;
}

export default function QRScanner({ onScan }: QRScannerProps) {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl">
      <Scanner
        onScan={(results) => {
          if (results.length > 0) {
            onScan(results[0].rawValue);
          }
        }}
        onError={(error) => {
          console.error(error);
        }}
      />
    </div>
  );
}