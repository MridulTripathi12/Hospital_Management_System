"use client";

import { Input } from "@/shared/ui/input";

export default function ContactInfo({ register, errors }) {
  return (
    <div className="rounded-xl border p-6 space-y-5">
      <h2 className="text-lg font-semibold">
        Contact Information
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Phone Number
          </label>

          <Input
            placeholder="9876543210"
            {...register("phone")}
          />

          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <Input
            placeholder="patient@email.com"
            {...register("email")}
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Address
          </label>

          <Input
            placeholder="Complete Address"
            {...register("address")}
          />
        </div>
      </div>
    </div>
  );
}