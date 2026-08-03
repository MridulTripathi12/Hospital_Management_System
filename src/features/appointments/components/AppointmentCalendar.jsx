"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/shared/ui/card";

export default function AppointmentCalendar({
  appointments,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Appointment Calendar
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="text-center py-20 text-muted-foreground">
          Calendar Integration
          (FullCalendar) Coming
          Next
        </div>
      </CardContent>
    </Card>
  );
}