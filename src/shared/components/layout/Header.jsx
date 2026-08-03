"use client";

import { Bell, Menu, Search } from "lucide-react";

export default function Header({ onMenuClick }) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <button
        className="lg:hidden"
        onClick={onMenuClick}
      >
        <Menu />
      </button>

      <div className="hidden md:flex items-center gap-2 border rounded-lg px-3 py-2 w-96">
        <Search size={18} />
        <input
          className="w-full bg-transparent outline-none"
          placeholder="Search..."
        />
      </div>

      <div className="flex items-center gap-5">
        <Bell />

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
            A
          </div>

          <div className="hidden md:block">
            <p className="font-semibold">
              Admin
            </p>
            <p className="text-xs text-gray-500">
              Super Admin
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}