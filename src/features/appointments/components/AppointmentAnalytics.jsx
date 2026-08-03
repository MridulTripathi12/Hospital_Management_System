"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/shared/ui/card";

export default function AppointmentAnalytics({
  appointments,
}) {
  const total =
    appointments.length;

  const completionRate =
    total === 0
      ? 0
      : Math.round(
          (appointments.filter(
            (a) =>
              a.status ===
              "COMPLETED"
          ).length /
            total) *
            100
        );

  return (
    <Card>

      <CardHeader>

        <CardTitle>
          Analytics
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-4">

        <div className="flex justify-between">
          <span>Total</span>

          <strong>{total}</strong>
        </div>

        <div className="flex justify-between">
          <span>
            Completion Rate
          </span>

          <strong>
            {completionRate}%
          </strong>
        </div>

      </CardContent>

    </Card>
  );
}