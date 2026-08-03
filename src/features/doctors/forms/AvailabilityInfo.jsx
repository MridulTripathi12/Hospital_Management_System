"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

import { Input } from "@/shared/ui/input";

export default function AvailabilityInfo({
  register,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Profile & Availability
        </CardTitle>
      </CardHeader>

      <CardContent className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Status
          </label>

          <select
            {...register("status")}
            className="w-full rounded-md border p-2"
          >
            <option value="AVAILABLE">
              Available
            </option>

            <option value="BUSY">
              Busy
            </option>

            <option value="ON_LEAVE">
              On Leave
            </option>

            <option value="IN_SURGERY">
              In Surgery
            </option>

            <option value="OFF_DUTY">
              Off Duty
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Languages
          </label>

          <Input
            placeholder="Hindi, English"
            {...register("languages")}
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Bio
          </label>

          <textarea
            rows={4}
            {...register("bio")}
            className="w-full rounded-md border p-3"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Email Signature
          </label>

          <Input
            {...register("emailSignature")}
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Profile Image URL
          </label>

          <Input
            {...register("profileImage")}
          />
        </div>
      </CardContent>
    </Card>
  );
}