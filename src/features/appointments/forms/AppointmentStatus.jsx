"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/shared/ui/card";

export default function AppointmentStatus({
  register,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Status</CardTitle>
      </CardHeader>

      <CardContent>
        <select
          {...register("status")}
          className="w-full rounded-md border p-2"
        >
          <option value="SCHEDULED">
            Scheduled
          </option>

          <option value="CONFIRMED">
            Confirmed
          </option>

          <option value="CHECKED_IN">
            Checked In
          </option>

          <option value="IN_PROGRESS">
            In Progress
          </option>

          <option value="COMPLETED">
            Completed
          </option>

          <option value="CANCELLED">
            Cancelled
          </option>

          <option value="NO_SHOW">
            No Show
          </option>
        </select>
      </CardContent>
    </Card>
  );
}