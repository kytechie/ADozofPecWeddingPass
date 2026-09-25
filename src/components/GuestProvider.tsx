"use client";

import { createContext, useContext, useState } from "react";

type Guest = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  seats: number;
  invite_code: string | null;
  invite_token: string | null;
  qr_code: string | null;
  attending: boolean | null;
  message: string | null;
};

type GuestContextType = {
  guest: Guest | null;
  setGuest: (guest: Guest | null) => void;
};

const GuestContext = createContext<GuestContextType>({
  guest: null,
  setGuest: () => {},
});

export function GuestProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [guest, setGuestState] = useState<Guest | null>(null);

  function setGuest(guest: Guest | null) {
    setGuestState(guest);
  }

  return (
    <GuestContext.Provider
      value={{
        guest,
        setGuest,
      }}
    >
      {children}
    </GuestContext.Provider>
  );
}

export function useGuest() {
  return useContext(GuestContext);
}