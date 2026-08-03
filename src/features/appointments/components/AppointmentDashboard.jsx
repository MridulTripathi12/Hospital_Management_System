"use client";

import {
  Card,
  CardContent,
} from "@/shared/ui/card";

export default function AppointmentDashboard({
  appointments,
}) {
  const scheduled =
    appointments.filter(
      (a) =>
        a.status === "SCHEDULED"
    ).length;

  const confirmed =
    appointments.filter(
      (a) =>
        a.status === "CONFIRMED"
    ).length;

  const completed =
    appointments.filter(
      (a) =>
        a.status === "COMPLETED"
    ).length;

  const cancelled =
    appointments.filter(
      (a) =>
        a.status === "CANCELLED"
    ).length;

  const cards = [
    {
      title: "Scheduled",
      value: scheduled,
    },
    {
      title: "Confirmed",
      value: confirmed,
    },
    {
      title: "Completed",
      value: completed,
    },
    {
      title: "Cancelled",
      value: cancelled,
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-4">

      {cards.map((card) => (
        <Card key={card.title}>

          <CardContent className="p-6 text-center">

            <p className="text-muted-foreground">
              {card.title}
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {card.value}
            </h2>

          </CardContent>

        </Card>
      ))}

    </div>
  );
}