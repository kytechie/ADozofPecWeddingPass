import Link from "next/link";
import { supabase } from "@/lib/supabase";
import {
  Users,
  UserCheck,
  QrCode,
  Clock,
  XCircle,
} from "lucide-react";

export default async function AdminDashboard() {
  const { count: totalGuests } = await supabase
    .from("guests")
    .select("*", { count: "exact", head: true });

  const { count: checkedIn } = await supabase
    .from("guests")
    .select("*", { count: "exact", head: true })
    .eq("checked_in", true);

  const { count: attending } = await supabase
    .from("guests")
    .select("*", { count: "exact", head: true })
    .eq("attending", true)

    const { count: declined } = await supabase
  .from("guests")
  .select("*", { count: "exact", head: true })
  .eq("attending", false);

  const pending = Math.max(
  0,
  (attending ?? 0) - (checkedIn ?? 0)
);
  const { data: recentGuests } = await supabase
  .from("guests")
  .select("*")
  .eq("checked_in", true)
.order("checked_in_at", { ascending: false })
  .limit(5);
  return (

  
    <div>
      <h1 className="text-3xl md:text-5xl font-light">
        Dashboard
      </h1>

      <p className="mt-3 text-gray-500">
        Welcome back. Here's your wedding overview.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">
        <Card
  title="Guests"
  value={totalGuests ?? 0}
  icon={<Users size={30} />}
  color="#C9A96A"
/>

<Card
  title="Attending"
  value={attending ?? 0}
  icon={<UserCheck size={30} />}
  color="#16A34A"
/>

<Card
  title="Checked In"
  value={checkedIn ?? 0}
  icon={<QrCode size={30} />}
  color="#2563EB"
/>

<Card
  title="Awaiting Check-in"
  value={pending}
  icon={<Clock size={30} />}
  color="#DC2626"
/>

<Card
    title="Declined"
    value={declined ?? 0}
    icon={<XCircle size={30} />}
    color="#6B7280"
/>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-10">
        <div className="rounded-3xl bg-white shadow-lg p-8">
          <h2 className="text-2xl font-light mb-6">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/admin/add-guest"
              className="rounded-2xl bg-[#2F2A27] text-white p-6 text-center hover:opacity-90"
            >
              <div className="text-3xl">➕</div>
              <p className="mt-3">Add Guest</p>
            </Link>

            <Link
              href="/admin/import"
              className="rounded-2xl bg-[#C9A96A] text-white p-6 text-center hover:opacity-90"
            >
              <div className="text-3xl">📄</div>
              <p className="mt-3">Import Guests</p>
            </Link>

            <Link
              href="/admin/rsvp"
              className="rounded-2xl border border-gray-200 p-6 text-center hover:bg-gray-50"
            >
              <div className="text-3xl">📝</div>
              <p className="mt-3">RSVP Manager</p>
            </Link>

            <Link
              href="/admin/check-in"
              className="rounded-2xl border border-gray-200 p-6 text-center hover:bg-gray-50"
            >
              <div className="text-3xl">📷</div>
              <p className="mt-3">Check-In</p>
            </Link>
          </div>
        </div>

        <div className="rounded-3xl bg-white shadow-lg p-8">
          <h2 className="text-2xl font-light mb-6">
            Wedding Progress
          </h2>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <span>Guests Checked In</span>
                <span>{checkedIn ?? 0}</span>
              </div>

              <div className="h-3 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{
                    width: `${
                      totalGuests
                        ? ((checkedIn ?? 0) / totalGuests) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* RECENT ACTIVITY */}

<div className="mt-10 rounded-3xl bg-white shadow-lg p-8">

  <div className="flex items-center justify-between">

    <h2 className="text-2xl font-light">
      Recently Check-ins
    </h2>

    <Link
      href="/admin/guests"
      className="text-[#C9A96A] hover:underline"
    >
      View All
    </Link>

  </div>

  <div className="mt-8 space-y-4">

    {recentGuests?.length === 0 ? (

      <p className="text-gray-500">
        No guests yet.
      </p>

    ) : (

      recentGuests?.map((guest) => (

        <div
          key={guest.id}
          className="flex items-center justify-between rounded-2xl border p-5"
        >

          <div>

            <h3 className="font-medium">
              {guest.full_name}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {guest.phone}
            </p>

          </div>

          <div className="text-right">

            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                guest.checked_in
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {guest.checked_in ? "Checked In" : "Pending"}
            </span>

          </div>

        </div>

      ))

    )}

  </div>

</div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Guests Attending</span>
                <span>{attending ?? 0}</span>
              </div>

              <div className="h-3 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full bg-[#C9A96A]"
                  style={{
                    width: `${
                      totalGuests
                        ? ((attending ?? 0) / totalGuests) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Awaiting Check-In</span>
                <span>{pending}</span>
              </div>

              <div className="h-3 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full bg-yellow-500"
                  style={{
                    width: `${
                      totalGuests
                        ? (pending / totalGuests) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({
  title,
  value,
  icon,
  color,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <div className="rounded-3xl bg-white shadow-lg p-8 transition hover:shadow-2xl">

      <div className="flex items-center justify-between">

        <div>

          <p className="uppercase tracking-[0.3em] text-xs text-gray-500">
            {title}
          </p>

          <h2 className="mt-4 text-5xl font-light">
            {value}
          </h2>

        </div>

        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl text-white"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}