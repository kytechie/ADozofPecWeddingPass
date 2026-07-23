"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  Upload,
  ClipboardList,
  QrCode,
  Settings,
  Menu,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
const [mobileOpen, setMobileOpen] = useState(false);

  const menu = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Guests",
    href: "/admin/guests",
    icon: Users,
  },
  {
    name: "Add Guest",
    href: "/admin/add-guest",
    icon: UserPlus,
  },
  {
    name: "Import Guests",
    href: "/admin/import",
    icon: Upload,
  },
  {
    name: "RSVP",
    href: "/admin/rsvp",
    icon: ClipboardList,
  },
  {
    name: "Check-In",
    href: "/admin/check-in",
    icon: QrCode,
  },
  {
  name: "Tables",
  href: "/admin/tables",
  icon: Users,
},
  {
  name: "Settings",
  href: "/admin/settings",
  icon: Settings,
},
];

  return (
    <div className="min-h-screen flex bg-[#FAF8F2]">

    <aside
  className={`
    fixed lg:static
    top-0 left-0
    h-screen
    z-50
    ${
      mobileOpen ? "translate-x-0" : "-translate-x-full"
    }
    lg:translate-x-0
    ${collapsed ? "w-24" : "w-72"}
    bg-white border-r p-8 transition-all duration-300
  `}
>
    <div className="flex items-center justify-between mb-10">

  {!collapsed && (
    <h1 className="text-3xl font-light">
      ADozofPec27∞ Admin
    </h1>
  )}

  <button
   onClick={() => {
  if (window.innerWidth < 1024) {
    setMobileOpen(false);
  } else {
    setCollapsed(!collapsed);
  }
}}
    className="rounded-lg p-2 hover:bg-gray-100"
  >
    <Menu size={22} />
  </button>

</div>

        <nav className="space-y-2">

          {menu.map((item) => {

            const active =
              pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center ${
  collapsed ? "justify-center" : "gap-3"
} rounded-xl px-4 py-3 transition ${
                  active
                    ? "bg-[#C9A96A] text-white"
                    : "hover:bg-[#F7F2E7]"
                }`}
              >
                <item.icon size={20} />

{!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}

        </nav>

      </aside>

      <main className="flex-1">

  <header className="h-20 bg-white border-b flex items-center justify-between px-10">

    <div className="flex items-center gap-4">

  <button
    onClick={() => setMobileOpen(!mobileOpen)}
    className="lg:hidden"
  >
    <Menu size={28} />
  </button>

  <h2 className="text-2xl font-light">
    AdozofPec's Wedding Administration
  </h2>

</div>

    <div className="flex items-center gap-4">

      <div className="text-right">
        <p className="font-medium">
          Peculiar
        </p>

        <p className="text-sm text-gray-500">
          Administrator
        </p>
      </div>

      <div className="w-12 h-12 rounded-full bg-[#C9A96A] text-white flex items-center justify-center text-xl">
        P
      </div>

    </div>

  </header>

  <div className="p-10">
    {children}
  </div>

</main>

    </div>
  );
}