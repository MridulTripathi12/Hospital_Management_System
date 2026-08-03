"use client";

import Link from "next/link";

const menus = [
  "Dashboard",
  "Patients",
  "Doctors",
  "Appointments",
  "Billing",
  "Pharmacy",
  "Laboratory",
  "Inventory",
  "Reports",
  "Settings"
];

export default function MobileSidebar({
  open,
  setOpen,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 lg:hidden">

      <div className="h-full w-64 bg-white p-5">

        <button
          onClick={() => setOpen(false)}
          className="mb-5"
        >
          ✕
        </button>

        <div className="space-y-2">

          {menus.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block rounded p-3 hover:bg-slate-100"
            >
              {item}
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
}