"use client";

import { Input } from "@/shared/ui/input";

export default function PersonalInfo({ register, errors }) {
  return (
    <div className="rounded-xl border p-6 space-y-5">
      <h2 className="text-lg font-semibold">
        Personal Information
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            First Name
          </label>

          <Input
            placeholder="First Name"
            {...register("firstName")}
          />

          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Last Name
          </label>

          <Input
            placeholder="Last Name"
            {...register("lastName")}
          />

          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Age
          </label>

          <Input
            type="number"
            placeholder="Age"
            {...register("age")}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Gender
          </label>

          <select
            {...register("gender")}
            className="w-full rounded-md border px-3 py-2"
          >
            <option value="">Select Gender</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </select>
        </div>
      </div>
    </div>
  );
}