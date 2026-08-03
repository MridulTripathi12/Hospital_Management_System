"use client";

import { Input } from "@/shared/ui/input";

export default function EmergencyContact({
  register,
}) {
  return (
    <div className="rounded-xl border p-6 space-y-5">
      <h2 className="text-lg font-semibold">
        Emergency Contact
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Emergency Contact
          </label>

          <Input
            placeholder="9876543210"
            {...register("emergencyContact")}
          />
        </div>
      </div>
    </div>
  );
}