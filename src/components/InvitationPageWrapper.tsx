"use client";

import { useEffect, useState } from "react";
import InvitationLoader from "./InvitationLoader";
import { AnimatePresence } from "framer-motion";

export default function InvitationPageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <InvitationLoader />}
      </AnimatePresence>

      {!loading && children}
    </>
  );
}