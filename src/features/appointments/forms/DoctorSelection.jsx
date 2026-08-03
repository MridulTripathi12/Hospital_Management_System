"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/shared/ui/card";

import { Input } from "@/shared/ui/input";

export default function DoctorSelection({
  register,
  errors,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Doctor</CardTitle>
      </CardHeader>

      <CardContent>
        <label className="mb-2 block text-sm font-medium">
          Doctor ID
        </label>

        <Input {...register("doctorId")} />

        {errors.doctorId && (
          <p className="mt-1 text-sm text-red-500">
            {errors.doctorId.message}
          </p>
        )}
      </CardContent>
    </Card>
  );
}