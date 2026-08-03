"use client";

import {
  Card,
  CardContent,
} from "@/shared/ui/card";

export default function DoctorStats({
  doctor,
}) {
  const stats = [
    {
      title: "Patients",
      value:
        doctor.totalPatients,
    },
    {
      title: "Appointments",
      value:
        doctor.totalAppointments,
    },
    {
      title: "Reviews",
      value:
        doctor.totalReviews,
    },
    {
      title: "Rating",
      value:
        doctor.averageRating,
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <Card key={item.title}>
          <CardContent className="p-6 text-center">
            <p className="text-sm text-muted-foreground">
              {item.title}
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {item.value}
            </h2>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}