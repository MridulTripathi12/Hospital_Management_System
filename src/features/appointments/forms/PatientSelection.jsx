"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/shared/ui/card";

import { Input } from "@/shared/ui/input";

export default function PatientSelection({
  register,
  errors,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Information</CardTitle>
      </CardHeader>

      <CardContent className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Patient ID
          </label>

          <Input {...register("patientId")} />

          {errors.patientId && (
            <p className="mt-1 text-sm text-red-500">
              {errors.patientId.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Hospital ID
          </label>

          <Input {...register("hospitalId")} />

          {errors.hospitalId && (
            <p className="mt-1 text-sm text-red-500">
              {errors.hospitalId.message}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}