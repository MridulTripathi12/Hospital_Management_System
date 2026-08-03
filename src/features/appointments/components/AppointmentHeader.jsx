"use client";

import Link from "next/link";

import { CalendarPlus } from "lucide-react";

import { Button } from "@/shared/ui/button";

export default function AppointmentHeader({
  totalAppointments = 0,
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold">
          Appointments
        </h1>

        <p className="text-muted-foreground">
          Manage all hospital appointments.
        </p>

        <p className="mt-2 text-sm font-medium text-blue-600">
          Total Appointments : {totalAppointments}
        </p>
      </div>

      <Link href="/appointments/add">
        <Button>
          <CalendarPlus className="mr-2 h-4 w-4" />
          Book Appointment
        </Button>
      </Link>
    </div>
  );
}