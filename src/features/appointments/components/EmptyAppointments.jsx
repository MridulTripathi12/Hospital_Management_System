"use client";

import Link from "next/link";

import { CalendarPlus } from "lucide-react";

import { Button } from "@/shared/ui/button";

export default function EmptyAppointments() {
  return (
    <div className="rounded-xl border border-dashed py-20 text-center">
      <h2 className="text-2xl font-bold">
        No Appointments
      </h2>

      <p className="mt-2 text-muted-foreground">
        Start by booking your first
        appointment.
      </p>

      <Link href="/appointments/add">
        <Button className="mt-6">
          <CalendarPlus className="mr-2 h-4 w-4" />
          Book Appointment
        </Button>
      </Link>
    </div>
  );
}