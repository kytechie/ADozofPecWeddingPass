"use client";

import { Suspense } from "react";
import RSVPContent from "./RSVPContent";

export default function RSVPPage() {
  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <RSVPContent />
    </Suspense>
  );
}