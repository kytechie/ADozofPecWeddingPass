"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <button
      onClick={logout}
      className="rounded-full bg-red-500 px-5 py-3 text-white hover:opacity-90"
    >
      Logout
    </button>
  );
}