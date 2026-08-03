"use client";

import Link from "next/link";

import {
  CalendarDays,
  ArrowRight,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";

const appointments = [
  {
    id: 1,
    date: "01 Aug 2026",
    doctor: "Dr. Amit Sharma",
    department: "Cardiology",
    status: "Completed",
  },
  {
    id: 2,
    date: "28 Jul 2026",
    doctor: "Dr. Raj Mehta",
    department: "Neurology",
    status: "Completed",
  },
  {
    id: 3,
    date: "15 Jul 2026",
    doctor: "Dr. Priya Singh",
    department: "Orthopedics",
    status: "Cancelled",
  },
];

function StatusBadge({ status }) {
  switch (status) {
    case "Completed":
      return (
        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
          Completed
        </Badge>
      );

    case "Pending":
      return (
        <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
          Pending
        </Badge>
      );

    case "Cancelled":
      return (
        <Badge variant="destructive">
          Cancelled
        </Badge>
      );

    default:
      return <Badge>{status}</Badge>;
  }
}

export default function RecentAppointments() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>
          Recent Appointments
        </CardTitle>

        <CalendarDays className="h-5 w-5 text-muted-foreground" />
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left font-medium">
                  Date
                </th>

                <th className="px-4 py-3 text-left font-medium">
                  Doctor
                </th>

                <th className="px-4 py-3 text-left font-medium">
                  Department
                </th>

                <th className="px-4 py-3 text-left font-medium">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((appointment) => (
                <tr
                  key={appointment.id}
                  className="border-b hover:bg-muted/30"
                >
                  <td className="px-4 py-4">
                    {appointment.date}
                  </td>

                  <td className="px-4 py-4">
                    {appointment.doctor}
                  </td>

                  <td className="px-4 py-4">
                    {appointment.department}
                  </td>

                  <td className="px-4 py-4">
                    <StatusBadge
                      status={appointment.status}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 flex justify-end">
          <Link href="/appointments">
            <Button variant="outline">
              View All

              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}