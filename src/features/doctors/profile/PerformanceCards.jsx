"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

const appointments = [
  {
    id: 1,
    patient: "Rahul Sharma",
    time: "09:00 AM",
  },
  {
    id: 2,
    patient: "Neha Gupta",
    time: "11:00 AM",
  },
  {
    id: 3,
    patient: "Rohit Kumar",
    time: "03:30 PM",
  },
];

export default function RecentAppointments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Recent Appointments
        </CardTitle>
      </CardHeader>

      <CardContent>
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex items-center justify-between border-b py-3 last:border-none"
          >
            <div>
              <h4 className="font-semibold">
                {appointment.patient}
              </h4>

              <p className="text-sm text-muted-foreground">
                Appointment
              </p>
            </div>

            <span>{appointment.time}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}