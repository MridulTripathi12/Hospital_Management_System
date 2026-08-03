"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/shared/ui/card";

export default function AppointmentQueue({
  appointments = [],
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Today's Queue
        </CardTitle>
      </CardHeader>

      <CardContent>
        {appointments.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-b py-2"
          >
            <span>
              {item.queueNumber}
            </span>

            <span>
              {
                item.patient.user
                  .firstName
              }
            </span>

            <span>
              {item.status}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}