"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";


export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signIn() {
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin");
  }

  return (
    <main className="min-h-screen bg-[#FAF8F2] flex items-center justify-center p-8">

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">

        <p className="uppercase tracking-[0.35em] text-xs text-[#C9A96A]">
          Forever Wedding
        </p>

        <h1 className="mt-3 text-5xl font-light">
          Admin Login
        </h1>

        <p className="mt-4 text-gray-500">
          Sign in to access the wedding dashboard.
        </p>

        <div className="mt-10 space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border p-4"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border p-4"
          />

          <button
            onClick={signIn}
            disabled={loading}
            className="w-full rounded-full bg-[#C9A96A] py-4 text-white hover:opacity-90"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </div>

      </div>

    </main>
  );
}