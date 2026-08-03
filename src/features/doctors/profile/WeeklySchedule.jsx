"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function WeeklySchedule({
  doctor,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Weekly Schedule
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {days.map((day) => (
          <div
            key={day}
            className="flex items-center justify-between rounded-lg border p-3"
          >
            <span>{day}</span>

            <span className="font-medium">
              {doctor.startTime} -{" "}
              {doctor.endTime}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}