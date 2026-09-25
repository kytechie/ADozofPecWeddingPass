"use client";

import { createContext, useContext, useEffect, useState } from "react";

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

export function GuestProvider({ children }: { children: React.ReactNode }) {
  const [guest, setGuestState] = useState<Guest | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("guest");
    if (saved) {
      try {
        setGuestState(JSON.parse(saved));
      } catch {
        localStorage.removeItem("guest");
      }
    }
  }, []);

  function setGuest(guest: Guest | null) {
    if (guest) {
      localStorage.setItem("guest", JSON.stringify(guest));
    } else {
      localStorage.removeItem("guest");
    }

    setGuestState(guest);
  }

  return (
    <GuestContext.Provider value={{ guest, setGuest }}>
      {children}
    </GuestContext.Provider>
  );
}

export function useGuest() {
  return useContext(GuestContext);
}