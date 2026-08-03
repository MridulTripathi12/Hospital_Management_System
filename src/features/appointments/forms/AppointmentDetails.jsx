"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/shared/ui/card";

import { Input } from "@/shared/ui/input";

export default function AppointmentDetails({
  register,
  errors,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Appointment Details
        </CardTitle>
      </CardHeader>

      <CardContent className="grid gap-5 md:grid-cols-2">
        <div>
          <label>Date</label>

          <Input
            type="date"
            {...register("appointmentDate")}
          />

          {errors.appointmentDate && (
            <p className="text-red-500 text-sm">
              {errors.appointmentDate.message}
            </p>
          )}
        </div>

        <div>
          <label>Time</label>

          <Input
            type="time"
            {...register("appointmentTime")}
          />

          {errors.appointmentTime && (
            <p className="text-red-500 text-sm">
              {errors.appointmentTime.message}
            </p>
          )}
        </div>

        <div>
          <label>Duration (Minutes)</label>

          <Input
            type="number"
            {...register("duration")}
          />
        </div>

        <div>
          <label>Appointment Type</label>

          <select
            {...register("appointmentType")}
            className="w-full rounded-md border p-2"
          >
            <option value="OPD">
              OPD
            </option>

            <option value="FOLLOW_UP">
              Follow Up
            </option>

            <option value="EMERGENCY">
              Emergency
            </option>

            <option value="TELECONSULTATION">
              Tele Consultation
            </option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label>Reason</label>

          <Input
            {...register("reason")}
          />
        </div>
      </CardContent>
    </Card>
  );
}