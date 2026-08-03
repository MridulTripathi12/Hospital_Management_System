"use client";

import { Search } from "lucide-react";

import { Input } from "@/shared/ui/input";

export default function AppointmentSearch({
  value,
  onChange,
}) {
  return (
    <div className="relative w-full md:max-w-sm">
      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

      <Input
        className="pl-10"
        placeholder="Search patient, doctor..."
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
      />
    </div>
  );
}